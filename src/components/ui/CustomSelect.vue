<template lang="">
  <div class="select">
    <p
    class="title"
    @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
    class="options"
    v-if="areOptionsVisible || isExpanded"
    >
    <p
    class="options__items"
    v-for="option in options"
    :key="option.value"
    @click="selectOption(option)"
    >{{option.name}}</p>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'custom-select',
  props: { 
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: '',
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.hideSelect)
  },
  
}
</script>
<style>
.title {
  background-color: lightGray;
  margin: 0;
}
.select {
  cursor: pointer;
  border: 0px solid lightGray;
  width: 160px;
  position: relative;
}

.options{
  margin: 0;
  padding: 0;
  position: absolute;
  top: 22px;
  left: 0;
  width: 98.8%;
  background: white;
  border: 1px solid lightGray;

}

.options__items:hover {
  background-color: lightGray;
}

.options__items:active {
  background-color: gray;
  color: white;
}
  
</style>