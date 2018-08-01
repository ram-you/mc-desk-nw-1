<template>
  <v-app id="app"  >
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text">
          <v-list-tile-action>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar>
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3">
          <v-list-tile-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="red" dark dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">mdi-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field @click:append="() => {}" placeholder="Search..." single-line append-icon="mdi-magnify" color="white"
          hide-details></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
              <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { icon: 'trending-up', text: 'Most Popular' },
      { icon: 'animation-play', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'format-list-numbers', text: 'Playlists' },
      { icon: 'clock-outline', text: 'Watch Later' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
 mounted(){

 }
}
</script>



<style>
.application {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

.application:not(.application--is-rtl) {
  font-family: "Ubuntu" !important;
}

/* .application:not(.application--is-rtl)  [class*="-fontFamily"]   {
  font-family: "Ubuntu" !important;
} */

.application.application--is-rtl {
  font-family: "Tajawal" !important;
  direction: rtl;
}

.application.application--is-rtl .v-navigation-drawer *,
.application.application--is-rtl .v-menu__content * {
  text-align: right;
}

.application.application--is-rtl .v-input__prepend-outer {
  margin-left: 9px;
  margin-right: 0px;
}
.ar-fontFamily {
  font-family: "Tajawal" !important;
}
.en-fontFamily,
.fr-fontFamily {
  font-family: "Ubuntu" !important;
}
.v-card {
  text-align: initial;
}
.hidden-div {
    display: none !important;
    height: 0px !important;
    width: 0px !important;
    visibility: hidden !important;
    opacity: 0 !important;
    position: absolute !important;
    top: -10000px !important;
    overflow: hidden !important;
}
</style>