<template>
  <component
  :is="layout"
  >
    <router-view />
  </component>
</template>

<script>
import MainLayout from '@/views/layout/main';
export default {
  name: "App",
  components: { MainLayout,},
  data: () => ({
  }),
  computed: {
    layout() {
      console.log(this.$route);
      return (this.$route.meta.layout || 'main' ) + '-layout'
    },
  },
  methods: {},
};
</script>

