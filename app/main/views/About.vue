<template>
  <v-container fluid class="about-container">
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
        </v-layout>

        <v-layout column class="my-4"> 

          <v-card>
            <v-card-title primary-title>
              <v-list three-line style="width:100%">
                <template v-for="(item, index) in items">
                  <v-subheader v-if="item.header" :key="item.header">
                    {{ item.header }}
                  </v-subheader>

                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>

                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>

            </v-card-title>
          </v-card>

        </v-layout>

      </div>
    </v-slide-y-transition>
  </v-container>
</template> 

<script>
var _app = require('electron').remote.app
const electronVersion = process.versions.electron
const chromeVersion = process.versions.chrome
const v8Version = process.versions.v8
const nodeVersion = process.versions.node
const os = require('os');
const appPath = _app.getPath('exe')
const appVersion = _app.getVersion()
export default {
  data() {
    var appTitle=this.$i18n.t('main.app.Title')
    return {
      items: [
        { header: 'Installed Versions' },
        {
          avatar: require("@/assets/img/logo/256x256.png"),
          title: appTitle,
          subtitle: appVersion
        },
        { divider: true, inset: true },
        {
          avatar: require("@/assets/img/electron-icon.png"),
          title: 'Electron',
          subtitle: electronVersion
        },
        { divider: true, inset: true },
        {
          avatar: require("@/assets/img/chrome-icon.png"),
          title: 'Chrome',
          subtitle: chromeVersion
        },
        { divider: true, inset: true },
        {
          avatar: require("@/assets/img/v8-icon.png"),
          title: 'Google V8 engine',
          subtitle: v8Version
        },
        { divider: true, inset: true },
        {
          avatar:require("@/assets/img/nodejs-icon.png"),
          title: 'Node.js®',
          subtitle: nodeVersion
        },
        { divider: true, inset: true },
        {
          avatar:require("@/assets/img/os-icon.png"),
          title: 'Operating System',
          subtitle: `${os.platform()}, ${os.type()}  (${os.arch()})` + `, <b>version:</b>  ${os.release()}`
        },
        { divider: true, inset: true },
        {
          avatar:require("@/assets/img/data_floppy_disk-icon.png"),
          title: 'Application path',
          subtitle: appPath
        }
      ]
    }
  },
  computed: {
    appTitle() { return this.$i18n.t('main.app.Title') },

  },
  mounted() {
 
  },
}
</script>
<style>
.about-container *{
  direction: ltr !important;
}
</style>

