<template>
  <div class="cart-item">
    <!-- <img
      class="cart-item__image"
      :src="require(`@/assets/images/${cartItemData.image}`)"
      alt="catalog item"
    /> -->
    <div class="cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price }}</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <span class="cart-item__quantity-button" @click="decrementItem">-</span>
      <p>QTY: {{ cartItemData.quantity }}</p>
      <span class="cart-item__quantity-button" @click="incrementItem">+</span>
    </div>
    <div class="cart-item__actions">
      <button @click="deleteFromCart(cartItemData.price)">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  
  name: 'cart-item',
  props: {
    cartItemData: {
      type: Object,
      default() {
      }
    }
  },
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    incrementItem() {
      this.$emit('increment')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    deleteFromCart(index) {
      this.$emit('deleteFromCart')
      console.log(index)
    }
  },
}
</script>
<style>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 0 40px;
  width: 100%;
}

.cart-item__image {
  max-width: 50px;
}

.cart-item__quantity-button {
  cursor: pointer;
  border: 1px solid lightGray;
  padding: 2px;
}

.cart-item__quantity-button:hover {
  border: 1px solid teal;
}
.cart-item__quantity-button:focus {
  border: 2px solid teal;
}
</style>