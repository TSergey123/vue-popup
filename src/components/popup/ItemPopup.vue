<template>
  <div class="v-popup__block">
    <div class="v-popup">
      <div class="v-popup__wrapper">
        <div class="v-popup__header">
          <h3>{{ popupTitle }}</h3>
          <span>
            <i @click="closePopup()" class="material-icons icons__close">close</i>
          </span>
        </div>
        <div class="v-popup__content">
          <slot></slot>
        </div>
        <div class="v-popup__footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'item-popup',
  props: {
    popupTitle: {
      type: String,
      default: 'PopUp name'
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
};
</script>
<style>
.v-popup__block {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
.v-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid red;
  min-height: 500px;
}
.v-popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
}

.v-popup__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.v-popup__footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.v-popup__wrapper {
  border: 1px solid teal;
  width: 50%;
  height: 20%;
  background-color: white;
  box-shadow: 0 0 17px 0 #e7e7e7;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  min-height: 200px;
}

.icons__close {
  cursor: pointer;
}

.icons__close:hover {
  border: 1px solid lightGray;
}
</style>