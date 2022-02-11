<template>
  <div class="catalog__header">
    <div class="catalog__link">
      <router-link :to="{name: 'cart-list', params: {cartData: CART}}">
        <div>Cart: {{ CART.length }}</div>
      </router-link>
    </div>
    <custom-select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
      :isExpanded="IS_DESKTOP"
    ></custom-select>
    <div class="range-slider">
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        v-model="minPrice"
        @change="setRangeSliders"
      />
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        v-model="maxPrice"
        @change="setRangeSliders"
      />
    </div>
    <div class="range-values">
      <p>Min: {{ minPrice }}</p>
      <p>Max: {{ maxPrice }}</p>
      <p>products found: {{ filteredProducts.length }}</p>
    </div>
  </div>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        v-bind:productData="product"
        @addToCart="addToCart"
      />
      <span v-if="!filteredProducts.length">Потереби ползунок</span>
    </div>
  </div>
</template>
<script>
import CatalogItem from "./CatalogItem.vue"
import { mapActions, mapGetters } from "vuex";
import CustomSelect from "../ui/CustomSelect.vue";

export default {
  name: 'catalog-list',
  components: {
    CatalogItem,
    CustomSelect
  },
  props: {},
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'IS_MOBILE',
      'IS_DESKTOP',
      'SEARCH_VALUE',
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return []
      }
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE)
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    sortProductsBySearchValue(value) {
      this.sortProducts = [...this.PRODUCTS]
      if(value) {
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
      }else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS];
      if (category) {
        this.selected = category.name;
      }
      this.sortedProducts = this.sortedProducts.filter(item => {
        return item.price >= this.minPrice && item.price <= this.maxPrice;

      })
      if (this.selected !== 'Все') {
        this.sortedProducts = this.sortedProducts.filter((product) => {
          return product.category === this.selected;
        })
      }
    },
    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    this.sortByCategories()
  },
  data() {
    return {
      categories: [
        { name: 'Все', value: 'все' },
        { name: 'Мужские', value: 'м' },
        { name: 'Женские', value: 'ж' },
      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
    };
  },
}
</script>
<style>
.catalog__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.catalog__link {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.catalog__link-to-cart {
  border: 1px solid lightGray;
  padding: 20px;
  text-transform: uppercase;
}

.catalog__header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 0 6%;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}

.range-values {
  width: 33%;
}
</style>