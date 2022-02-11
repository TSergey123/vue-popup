<template lang="">
  <div class="header">
    <router-link 
    :to="{name: 'main-page'}">
    <img src="../../assets/logo.png" alt="logo">
    </router-link>
    <router-link
    v-if="this.$route.name === 'catalog-list'" 
    :to="{name: 'cart-list', params: {cartData: CART}}">
      <h1>Open Cart</h1>
      </router-link>
    <div class="search">
    <input 
    type="text"
    class="search__field"
    v-model="searchValue"
    >
    <button 
    class="search__btn"
    >
      <i 
      class="material-icons"
      @click="search(searchValue)"
      >search</i>
    </button>
    <button class="search__btn">
      <i class="material-icons" @click="clearSearch">cancel</i>
    </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {

  name: 'search-field',
  props: {},
  computed: {
    ...mapGetters([
      'SEARCH_VALUE',
      'CART',
    ]),
  },
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value) {
      this.searchValue = ''
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/catalog-list') {
        this.$router.push('/catalog-list')
      }
    },
    clearSearch(value) {
      this.searchValue = '';
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/catalog-list') {
        this.$router.push('/catalog-list')
      }
    },
  }
}
</script>
<style scopped>
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid teal;
  padding: 16px;
  margin: 0;
  flex-wrap: nowrap;
}

img {
  width: 50px;
}

.search {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.search__field {
  padding: 16px;
  color: white;
  background-color: lightGray;
}

.search__btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>