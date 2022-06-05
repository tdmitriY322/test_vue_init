<template>
  <div>
    <v-row v-if="!joined" justify="center">
      <v-col cols="4">
        <div class="join d-flex flex-column justify-center">
          <v-text-field
            v-model="user"
            placeholder="Введите ваше имя"
            outlined
          ></v-text-field>
          <v-btn @click="join()" @keyup.enter="join()"> Присоеденится </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row v-if="joined" justify="center">
      <v-col cols="8">
        <v-card>
          <v-app-bar flat color="c4c4c4">
            <v-avatar color="c4c4c4" size="48">
              <v-icon size="48"> mdi-account-circle </v-icon>
            </v-avatar>
            <v-toolbar-title class="text-h6 black--text pl-0 ml-2">
              Чат- комната
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="black" icon>
              <v-icon>mdi-cogs</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card
            class="pa-6"
            elevation="1"
            max-height="700px"
            min-height="600px"
          >
            <div v-for="message in messages" :key="message.id">
              <div class="d-flex my-3">
                <v-avatar color="c4c4c4" size="48">
                  <v-icon size="48"> mdi-account-circle </v-icon>
                </v-avatar>
                <v-card max-width="40%">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>{{ message.user }}</v-list-item-title>
                      <v-list-item-subtitle class="text-h6">{{
                        message.txtMessage
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </div>
            </div>
          </v-card>

          <div class="d-flex align-center pt-7">
            <v-textarea
              v-model="message"
              label="Введите текст"
              class="pa-4 pt-6 text-h6"
              hide-details
              height="50px"
              auto-grow
              no-resize
              clearable
            >
            </v-textarea>
            <v-btn
              class="mr-2"
              @click="sendMessage()"
              @keyup.enter="sendMessage()"
              large
              icon
            >
              <v-icon color="primary">mdi-send</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import io from "socket.io-client";
import axios from "axios";
export default {
  async created() {
    // await this.getData();
  },
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      joined: false,
      sendData: {
        username: "jhon",
        message: "hi",
      },
    };
  },
  methods: {
    getData() {
      return axios
        .post("http://localhost:8000/api/messages", this.sendData)
        .then((req) => {
          console.log(req);
        });
    },
    join() {
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");
      this.socketInstance.on("message:received", (data) => {
        this.messages = this.messages.concat(data);
      });
    },
    sendMessage() {
      console.log(this.message);
      this.addMessage();
      this.message = "";
    },
    addMessage() {
      const newMessage = {
        id: new Date().getTime(),
        txtMessage: this.message,
        user: this.user,
      };
      this.messages = this.messages.concat(newMessage);
      this.socketInstance.emit('message', newMessage);
    },
  },
};
</script>