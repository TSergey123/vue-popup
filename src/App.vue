<template>
  <v-header></v-header>
  <div class="wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VHeader from './components/ui/vHeader.vue';

export default {
  name: 'App',
  components: {
    VHeader
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP',
    ]),
  },
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP',
    ]),
  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
        console.log('desktop ' + vm.IS_DESKTOP);
      } else {
        vm.SET_MOBILE();
        console.log('mobile ' + vm.IS_MOBILE);

      }
    })
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100v;
}
</style>
