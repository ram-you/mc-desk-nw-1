<template>
  <div class="container-login100" :style="isConnected?'':' min-height: calc(100vh - 37px) !important;'">
    <v-card class="wrap-login100  " :dark="userTheme.theme=='dark'">
      <div class="login100-form-title" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <span class="login100-form-title-1">
          {{ $t('main.app.Sign_In') }}
        </span>
      </div>

      <v-card v-if="!isConnected" :dark="userTheme.theme=='dark'" class="pa-4" flat style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <v-form>
          <v-text-field prepend-icon="mdi-account-outline" name="Username" v-model="username" :label="$t('main.app.Username')"
            :dark="userTheme.theme=='dark'"></v-text-field>
          <v-text-field prepend-icon="mdi-lock" name="Password" v-model="password" :label="$t('main.app.Password')"
            type="password" :dark="userTheme.theme=='dark'"></v-text-field>
          <div class="pt-2 pb-4">
            <v-checkbox :label="$t('main.app.Remember_me')" v-model="remember" class="font-weight-bold"></v-checkbox>
          </div>
          <div :class="$vuetify.rtl?'text-xs-left':'text-xs-right'">
            <v-btn round large color="success" @click="login()"> {{ $t('main.app.Login') }}</v-btn>
          </div>
        </v-form>

      </v-card>

      <v-divider v-if="!isConnected"></v-divider>
      <v-card-actions v-if="!isConnected">

        <div :class="$vuetify.rtl?'text-xs-right':'text-xs-left'">
          <v-menu offset-y transition="slide-y-transition">
            <v-list-tile slot="activator">
              <v-icon class="mdi-18px mx-2">mdi-earth</v-icon>
              <v-list-tile-title :class="userTheme.theme=='dark'?'white--text':''"> {{ $t('main.app.Application_Locale')}}</v-list-tile-title>
            </v-list-tile>
            <v-list dense subheader>
              <v-subheader> {{ $t('main.app.Application_Locale')}}</v-subheader>
              <v-list-tile v-for="item in localesItems" :key="item.locale" @click="updateUserLocale(item)">
                <v-list-tile-title v-text="item.name" class="mx-1" :class="(item.name==userLocale.name)?  getLocaleFontClass(item)+'font-weight-bold':  getLocaleFontClass(item)"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>

        <div :class="$vuetify.rtl?'text-xs-right':'text-xs-left'">
          <v-menu offset-y transition="slide-y-transition">
            <v-list-tile slot="activator">
              <v-icon class="mdi-18px mx-2">mdi-theme-light-dark</v-icon>
              <v-list-tile-title :class="userTheme.theme=='dark'?'white--text':''"> {{ $t('main.app.Color_theme')}}</v-list-tile-title>
            </v-list-tile>
            <v-list dense subheader>
              <v-subheader> {{ $t('main.app.Color_theme')}}</v-subheader>
              <v-list-tile v-for="item in themesItems" :key="item.theme" @click="updateUserTheme(item)">
                <v-list-tile-title v-text="item.name" class="px-1" :class="(item.name==userTheme.name)?'font-weight-bold':''"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>

        <v-spacer></v-spacer>
      </v-card-actions>

      <v-card v-else :dark="userTheme.theme=='dark'" class="pa-4" flat style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <div class="text-xs-center">
          <v-btn round large color="red" dark @click="logout()"> {{ $t('main.app.Logout') }}</v-btn>
        </div>
      </v-card>

    </v-card>

  </div>

</template>
 

<script>
const Store = require('electron-store');
const _store = new Store();

const { dialog } = require('electron').remote
const remote = require('electron').remote;
const { ipcRenderer } = require('electron')

const options = {
  type: 'warning',
  title: 'Echec connection',
  message: "Echec connection. \n \nVoulez-vous faire un autre essai ?",
  buttons: ['Oui', 'Non']
}

var image = require('@/assets/img/login-background.jpg')

export default {
  data() {
    return {
      image: image,
      username: "",
      password: "",
      remember: true,
      localesItems: [{ name: 'العربية', locale: 'ar-tn' }, { name: 'English', locale: 'en-gb' }, { name: 'Français', locale: 'fr-fr' }],
      themesItems: this.$colorThemeItems
    }
  },
  computed: {
    isConnected() { return this.$store.state.user; },
    connectedUserName() { return this.$store.state.user ? this.$store.state.user.username : null; },
    _userLocale() { return this.$store.state.userLocale; },
    userLocale() { return this.localesItems.filter((item) => { return item.locale == this._userLocale; })[0] },
    _userTheme() { return this.$store.state.userTheme; },
    userTheme() { return this.themesItems.filter((item) => { return item.theme == this._userTheme; })[0] },
  },
  watch: {

  },
  mounted() {
    var vm = this
    ipcRenderer.send('update-menu')
    this.$vuetify.lang.current = (this.$root.$i18n.locale).substring(0, 2);
    this.$vuetify.rtl = this.$vuetify.lang.current == "ar";
    this.themesItems = this.$colorThemeItems.map(function (e) {
      e.name = vm.$i18n.t('main.app.' + e.theme)
      return e;
    });
  },
  methods: {
    getLocaleFontClass(item) {
      return item.locale.substring(0, 2) + '-fontFamily ';
    },
    updateUserLocale(locale) {
      var vm = this
      var connectedUserName = this.connectedUserName
      this.$root.$i18n.locale = locale.locale
      this.$vuetify.lang.current = (this.$root.$i18n.locale).substring(0, 2);
      this.$vuetify.rtl = this.$vuetify.lang.current == "ar"
      this.$store.dispatch('setUserLocale', locale.locale) 
      this.themesItems = this.$colorThemeItems.map(function (e) {
        e.name = vm.$i18n.t('main.app.' + e.theme)
        return e;
      });
    },
    updateUserTheme(theme) {
      var connectedUserName = this.connectedUserName
      this.$store.dispatch('setUserTheme', theme.theme)

    },
    login() {
      var vm = this

      var formData = {
        username: this.username,
        password: this.password,
        remember: this.remember,
      };
      this.$store.dispatch('login', formData).then(function (connectedUser) {


        if (connectedUser) {

          var connectedUserName = connectedUser.username
          _store.set('user.username', connectedUserName)
          if (vm.remember) {
            _store.set('users.' + connectedUserName + '.credential.name', connectedUser.username);
            _store.set('users.' + connectedUserName + '.credential.password', connectedUser.password);
          }
          ipcRenderer.send('update-window-size');
          vm.$router.push({ name: "home" });
        } else {


          dialog.showMessageBox(options, (index) => {
            if (index == 1) {
              var window = remote.getCurrentWindow();
              window.close();
            }
          })
        }

      })

    },

    logout() {
      var connectedUserName = this.connectedUserName
      this.$store.dispatch('logout').then(function (resp) {
        _store.delete('user')
        _store.delete('users.' + connectedUserName + '.credential');
      })
    }

  }
}
</script>


<style scoped>
.container-login100 {
  width: 100%;
  min-height: calc(100vh - 85px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  /* background: #ebeeef; */
}

.wrap-login100 {
  width: 670px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.login100-form-title {
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 70px 15px 74px 15px;
}

.login100-form-title-1 {
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}

.login100-form-title::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(54, 84, 99, 0.7);
}
.align-x {
  vertical-align: middle;
  height: 24px;
  line-height: 24px;
  display: inline-block;
}
</style>
