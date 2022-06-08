<template>
  <div>
    <v-toolbar elevation="4" flat rounded shaped>
      <v-toolbar-title>Initkz</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-row d-flex  justify="space-around">
          <v-btn text to='/'> Слайдер </v-btn>
          <v-btn text to='/currency'> Курс валют </v-btn>
          <v-btn text to='/chat'> Чат </v-btn>
        </v-row>
      </div>
      <v-spacer></v-spacer>
      <div></div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
  },
};
</script>