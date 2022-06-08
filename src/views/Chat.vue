<template>
  <div>
    <v-row v-if="!joined" justify="center">
      <v-col cols="4">
        <div class="join d-flex flex-column justify-center">
          <v-text-field v-model="user" placeholder="Введите ваше имя" outlined @keyup.enter="join()"></v-text-field>
          <v-btn @click="join()"> Присоедениться </v-btn>
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

            <v-btn color="black" outlined @click="isNotificationPanel">
              Настроить уведомления
            </v-btn>
          </v-app-bar>

          <v-dialog v-model="notificationPanel" max-width="500px">
            <v-row justify="center">
              <v-card class="pa-5">
                <v-subheader class="text--black">Отправить уведомление в</v-subheader>
                <div>
                  <v-btn class="ma-2" outlined @click="timingNotification(1)">Сейчас</v-btn>
                  <v-btn class="ma-2" outlined @click="timingNotification(10000)">Через 10 сек</v-btn>
                  <v-btn class="ma-2" outlined @click="timingNotification(60000)">Через 1 мин</v-btn>
                </div>
              </v-card>
            </v-row>
          </v-dialog>

          <v-card class="pa-6" elevation="1" max-height="700px" min-height="600px">
            <div v-for="message in messages" :key="message.id">
              <div class="d-flex my-3">
                <v-avatar color="c4c4c4" size="48">
                  <v-icon size="48"> mdi-account-circle </v-icon>
                </v-avatar>
                <v-card max-width="40%">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>{{ message.user }}</v-list-item-title>
                      <v-img v-if="message.imageFile" :src="url()" height="250" width="250"></v-img>
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


            <template>
              <v-btn class="ml-2 mb-4" color="c4c4c4" @click="dialogFunc()" large icon>
                <v-icon color="primary">mdi-file</v-icon>
              </v-btn>
            </template>
            <v-textarea v-model="message" label="Введите текст" class="pa-4 pt-6 text-h6" hide-details height="50px"
              auto-grow no-resize autofocus clearable @keyup.enter="sendMessage()">
            </v-textarea>
            <v-btn class="mr-2 mb-4" @click="sendMessage()" large icon>
              <v-icon color="primary">mdi-send</v-icon>
            </v-btn>
          </div>

          <v-dialog v-model="dialog" max-width="500px">
            <v-card class="pa-5">
              <form enctype="multipart/form-data">
                <v-card-text class="mt-2">
                  <div>
                    <v-file-input v-model="imageFile" value="file" label="Выберите файл"></v-file-input>
                  </div>
                </v-card-text>
                <v-img v-if="imageFile" :src="url()" height="250" width="250"></v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="uploadFile()" color="primary">
                    Выбрать
                  </v-btn>
                </v-card-actions>
              </form>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'
import io from "socket.io-client";
export default {
  async created() {

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
      dialog: false,
      notificationPanel: false,
      notificationText: 'new notification',
      imageFile: '',

    };
  },
  methods: {
    // вызывается при вводе имени
    join() {  
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");
      this.socketInstance.on("message:received", (data) => {
        console.log('message: received', data);
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
      this.socketInstance.emit("message", newMessage);
    },
    isNotificationPanel() {
      this.notificationPanel = !this.notificationPanel
    },
    url() {
      if (!this.imageFile) return;
      return URL.createObjectURL(this.imageFile);// предпросмотр файла
    },
    dialogFunc() {
      return this.dialog = !this.dialog
    },

    },
    sendNotification() {
      this.socketInstance = io("http://localhost:3000");
      const newNotification = {
        id: new Date().getTime(),
        txtMessage: this.notificationText,
        user: this.user,
      };
      this.socketInstance.emit("send-notification", newNotification);
      this.socketInstance.on('new-notificaton', data => {
        alert(data.txtMessage)
      })
    },
};
</script>

