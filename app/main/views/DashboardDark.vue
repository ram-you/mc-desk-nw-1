<template>
  <v-container grid-list-md class="dashboard-dark pa-2">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card>
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x yellow--text">fa-file-alt</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Quotations</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card>
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x light-green--text">fa-cubes</v-icon>
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
            <v-card>
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x green--text">fa-file-invoice</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Invoices</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card>
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x red--text">fa-cogs</v-icon>
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
            <v-card>
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x blue--text">fa-user-tie</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Customers</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card>
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x teal--text">fa-address-card</v-icon>
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
            <v-card to="/login">
              <v-card-title class="justify-center pt-4">
                <v-icon class="fa-6x deep-orange--text">fa-sign-out-alt</v-icon>
              </v-card-title>
              <v-card-title class="justify-center subheading label-title">Logout</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card @click.native="quitApplication">
                  <v-card-title class="justify-center pt-4">
                    <v-icon class="fa-6x orange--text">fa-power-off</v-icon>
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

<style>
.dashboard-dark {
  max-width: 1485px;
}
.dashboard-dark .v-card {
  min-height: 200px;
  cursor: pointer;
  transition: all 0.6s ease;
  filter: contrast(90%);
}
.dashboard-dark .v-card:hover {
  filter: contrast(75%);
}
.dashboard-dark .v-card .label-title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.2);
}
</style>
