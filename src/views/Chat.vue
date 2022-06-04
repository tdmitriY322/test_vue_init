<template>
  <div>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="3" class="border">
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-toolbar-title class="title"> Chat </v-toolbar-title>

              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>fas fa-ellipsis-h</v-icon>
              </v-btn>
            </v-app-bar>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-text-field
                filled
                label="Search Here"
                append-icon="mdi-magnify"
                color="grey"
              ></v-text-field>
            </v-app-bar>

            <v-list two-line color="rgba(0,0,0,0)">
              <v-list-item-group
                v-model="selected"
                active-class="blue lighten-4"
                multiple
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <v-badge
                      bordered
                      bottom
                      color="green"
                      dot
                      offset-x="22"
                      offset-y="26"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>
                    </v-badge>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>

                        <v-list-item-subtitle
                          v-text="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="9" class="border">
            <v-app-bar color="rgba(0,0,0,0)" flat>
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="11"
                offset-y="13"
              >
                <v-avatar class="mt-n7" size="40" elevation="10">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
                </v-avatar>
              </v-badge>
              <v-toolbar-title class="title pl-0 ml-2 mt-n4">
                Fernando Gaucho
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-divider vertical inset class="mt-n1"></v-divider>
              <v-btn color="black" icon class="mt-n5">
                <v-icon>mdi-cog</v-icon>
              </v-btn>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-spacer></v-spacer>
              <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">Good morning. How are you today?</div>
                    <v-list-item-subtitle
                      >16 mins ago
                      <span class="ml-16"
                        >Seen 1:03PM</span
                      ></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-avatar class="mt-n5" size="30" elevation="10">
                  <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
                </v-avatar>
              </v-badge>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="16"
                offset-y="9"
              >
                <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
                </v-avatar>
              </v-badge>
              <v-card class="mt-10" max-width="350px">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      Hey! Very good.I'm taking a photos in the office
                    </div>
                    <v-list-item-subtitle>12 mins ago</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-btn color="black" icon class="mb-n10">
                <v-icon>fas fa-ellipsis-h</v-icon>
              </v-btn>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-avatar class="mt-n5" size="30" elevation="10">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
                </v-avatar>
              </v-badge>
              <v-card class="mt-10 ml-2" max-width="350px">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      Fernando shared 3 photos :<br /><br />
                      <v-avatar size="60" tile class="mr-2">
                        <v-img src="1.jpg"></v-img>
                      </v-avatar>
                      <v-avatar size="60" tile class="mr-2">
                        <v-img src="2.jpg"></v-img>
                      </v-avatar>
                      <v-avatar size="60" tile>
                        <v-img src="3.jpg"></v-img>
                      </v-avatar>
                    </div>

                    <v-list-item-subtitle>12 mins ago</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-8">
              <v-spacer></v-spacer>
              <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      There many variations of passages of Loream
                    </div>
                    <v-list-item-subtitle
                      >2 mins ago
                      <span class="ml-16"
                        >Seen 1:23PM</span
                      ></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-avatar class="mt-n5" size="30" elevation="10">
                  <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
                </v-avatar>
              </v-badge>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-spacer></v-spacer>
              <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">God by !!!!!!!!!!!!!!</div>
                    <v-list-item-subtitle
                      >3 mins ago
                      <span class="ml-16"
                        >Seen 1:24PM</span
                      ></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-avatar class="mt-n5" size="30" elevation="10">
                  <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
                </v-avatar>
              </v-badge>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat>
              <v-text-field
                v-model="message"
                append-icon="mdi-emoticon"
                append-outer-icon="mdi-send"
                filled
                clear-icon="mdi-close-circle"
                clearable
                label="Message"
                type="text"
                @click:append-outer="sendMessage()"
                @click:clear="clearMessage()"
              ></v-text-field>
            </v-app-bar>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
    ],
    panel: [2],

    password: "Password",
    show: false,
    message: "Type a message here",
    marker: true,
    iconIndex: 1,
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 1;
    },
  },
};
</script>
<style>
.border {
  border-right: 1px solid grey;
}
</style>