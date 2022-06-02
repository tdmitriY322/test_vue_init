<template>
    <v-app id="inspire">
        <Toolbar/>
        <v-main style="background: #f5f5f540">
        <v-container class="py-8 px-6" fluid>
            <slot />
        </v-container>
        
        </v-main>
  </v-app>
</template>


<script>
import Toolbar from '@/components/Toolbar' 
export default {
  name: "App",
  components: { Toolbar },
  data: () => ({
  }),
  methods: {},
};
</script>