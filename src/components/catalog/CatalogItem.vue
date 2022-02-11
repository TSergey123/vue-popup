<template>
  <div class="v-catalog-item">
    <item-popup :popupTitle="productData.name" v-if="isPopupVisible" @closePopup="closePopup">
      <img
        :src="require(`@/assets/images/${productData.image}`)"
        class="v-catalog-item__image"
        alt="img"
      />
      <p>{{ productData.name }}</p>
      <p>{{ productData.price }}</p>
      <p>{{ productData.category }}</p>
    </item-popup>
    <img
      :src="require(`@/assets/images/${productData.image}`)"
      class="v-catalog-item__image"
      alt="img"
    />
    <p>{{ productData.name }}</p>
    <p>{{ toFix(productData.price) }}</p>
    <button @click="addToCart(); this.count += 1">Add to cart :{{ count }}</button>
    <button class="v-catalog-item__show-popup" @click="showPopup">show popup</button>
  </div>
</template>
<script>
import ItemPopup from "@/components/popup/ItemPopup.vue"


export default {
  name: 'catalog-item',
  components: {
    ItemPopup
  },
  props: {
    productData: {
      type: Object,
      default() {
        return {
        }
      }
    },
  },
  data() {
    return {
      count: 0,
      isPopupVisible: false,
    }
  },
  mounted() {
    this.productData.quantity === 1;

  },
  computed: {
    
  },
  methods: {
    toFix(value) {
      value = parseFloat(value);
      return value.toFixed(2) + ' ₽';
    },
    addToCart() {
      this.$emit('addToCart', this.productData)
    },
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    }
  },
};
</script>
<style>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 10px;
  margin: 10px;
}
.v-catalog-item__image {
  width: 100px;
}
</style>