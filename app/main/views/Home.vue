<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <div>

        <v-layout column align-center>
          <img src="@/assets/img/logo/128x128.png" alt="mediacept.com" class="mb-2">
          <blockquote>
            <span class="display-2 font-weight-bold light-blue--text text--darken-3"> {{ $t('main.app.Title_Long') }}</span>
            <footer>
              <small>
                <em class="subheading grey--text text--lighteen-1 font-weight-regular font-italic">The desktop application</em>
              </small>
            </footer>
          </blockquote>

          <v-layout row align-center class="mt-4 mb-5" style="max-width: 650px; width:100%">
            <v-text-field @click:append="() => {}" :placeholder="$t('main.app.Search')+'...'" single-line append-icon="mdi-magnify"
              color="white" hide-details solo></v-text-field>
          </v-layout>

        </v-layout>
 

        <v-layout column align-center class="mt-4">
          <dashboard-dark v-if="_userTheme=='dark'"  />
          <dashboard-light v-else/>
        </v-layout>

        <v-layout column align-center class="mt-4">
          <v-card class="weatherwidget">
            <a class="weatherwidget-io" data-icons="Climacons Animated" :href="'https://forecast7.com/'+userShortLocale+'/35d8210d63/sousse/'"
              data-label_1="Sousse" data-label_2="Tunisie" data-font="Ubuntu" :data-theme="(userTheme.theme=='dark')?'dark':'pure'">Sousse, Tunisie</a>
          </v-card>
        </v-layout>

      </div>
    </v-slide-y-transition>
  </v-container>
</template>


<script>  
import DashboardDark from './DashboardDark.vue'
import DashboardLight from './DashboardLight.vue'

export default {
  components: { DashboardDark, DashboardLight },
  data() {
    return { 
      localesItems: [{ name: 'العربية', locale: 'ar-tn' }, { name: 'English', locale: 'en-gb' }, { name: 'Français', locale: 'fr-fr' }],
      themesItems: this.$colorThemeItems,
    }
  },
  computed: {
    _userLocale() { return this.$store.state.userLocale; },
    userLocale() { return this.localesItems.filter((item) => { return item.locale == this._userLocale; })[0] },
    userShortLocale() { return (this._userLocale).substring(0, 2); },

    _userTheme() { return this.$store.state.userTheme; },
    userTheme() { return this.themesItems.filter((item) => { return item.theme == this._userTheme; })[0] },
  },
  mounted() {
    var vm = this
    !function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        vm.removejscssfile("weatherwidget-io-js", "js")
        setTimeout(() => {
          js = d.createElement(s);
          js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js';
          fjs.parentNode.insertBefore(js, fjs);
        }, 100);
      } else {
        js = d.createElement(s);
        js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'weatherwidget-io-js');


  },
  methods: {
    removejscssfile(filename, filetype) {
      var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
      var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
      var allsuspects = document.getElementsByTagName(targetelement)
      for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
          allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
      }
    }

  },
}
</script>
<style>
div.weatherwidget {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
}
</style>
