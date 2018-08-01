<template>
  <v-container grid-list-md class="dashboard-light pa-2">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card color="yellow darken-2" dark>
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x">fa-file-alt</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Quotations</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="light-green lighten-1" dark>
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x">fa-cubes</v-icon>
                  </v-card-title>
                  <v-card-title class="justify-center subheading label-title">Products</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card color="green" dark>
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x">fa-file-invoice</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Invoices</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="red lighten-1" dark>
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x">fa-cogs</v-icon>
                  </v-card-title>
                  <v-card-title class="justify-center subheading label-title">Settings</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card color="blue" dark>
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x">fa-user-tie</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Customers</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="teal lighten-1" dark>
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x">fa-address-card</v-icon>
                  </v-card-title>
                  <v-card-title class="justify-center subheading label-title">Account settings</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card color="deep-orange" dark to="/login">
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x">fa-sign-out-alt</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Logout</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="orange lighten-1" dark @click.native="quitApplication">
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x">fa-power-off</v-icon>
                  </v-card-title>
                  <v-card-title class="justify-center subheading label-title">Quit</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const Store = require('electron-store');
const _store = new Store();

const fs = require('fs')
const os = require('os')
const path = require('path')

const { shell, ipcRenderer, ipcMain } = require('electron')
const remote = require("electron").remote
const app = remote.app;

export default {
  data: () => ({

  }),
  methods: {
    quitApplication() {
      const { dialog } = require('electron').remote
      const options = {
        type: 'info',
        title: 'Confirmation',
        message: "Do you realy want to quit MEDIACEPT Office?",
        buttons: ['Yes', 'No']
      }
      dialog.showMessageBox(options, (index) => {
        if (index === 0) app.quit()
      })
    }
  },
}
</script>

<style  >
.dashboard-light {
  max-width: 1485px;
}
.dashboard-light .v-card {
  min-height: 200px;
  cursor: pointer;
  transition: all 0.6s ease;
  filter: saturate(80%) contrast(80%) grayscale(50%);
}
.dashboard-light .v-card:hover {
  filter: saturate(90%) contrast(90%) grayscale(20%);
}
.dashboard-light .v-card .label-title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.2);
}
</style>
