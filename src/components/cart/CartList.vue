<template>
  <div>
    <div class="catalog__link">
      <router-link class="catalog__link-to-cart" :to="{
        name: 'catalog-list',
      }">
        <div>Back to catalog</div>
      </router-link>
    </div>
    <h1>Cart({{ cartData.length }})</h1>

    <div class="cart-wrapper">
      <cart-item
        v-for="(item, index) in cartData"
        :key="item.article"
        :cartItemData="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      ></cart-item>
      <h1 v-if="!cartData.length">Пусто</h1>
    </div>
    <div class="cart__total">
      <p>Total:</p>
      <p>{{ cartToTotal }}</p>
    </div>
  </div>
</template>
<script>
import CartItem from "@/components/cart/CartItem.vue"
import { mapActions } from "vuex"
export default {
  name: 'cart-list',
  components: {
    CartItem,
},
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),

    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
  computed: {
    cartToTotal() {
      let result = [];
      if (this.cartData.length) {

        for (let item of this.cartData) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        })
      return result;
      } else {
        return 0
      }
    },
  },
}
</script>
<style scoped>
.cart-wrapper {
  display: flex;
  /* justify-content: center; */
  width: 85%;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cart__total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: teal;
  color: white;
  padding: 20px;
  margin-top: 20px;
  font-size: 20px;
}

.cart__total-name {
  margin-right: 10px;
}
</style>