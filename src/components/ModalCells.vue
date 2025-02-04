<template>
  <div
      v-if="openModal"
      class="cells__modal modal"
  >
    <div class="modal__image">
      <img :src="item.src" alt="s">
    </div>
    <div class="modal__divider"></div>
    <div class="modal__info item">
      <div class="item__title"></div>
      <div class="item__descr"></div>
      <div class="item__descr"></div>
      <div class="item__descr"></div>
      <div class="item__descr"></div>
      <div class="item__descr"></div>
    </div>
    <div class="modal__divider"></div>
    <button class="modal__btn"
            @click.prevent="deleteItem(Number(item.id))"
    >Удалить предмет</button>
    <button
        class="close"
        @click.prevent="closeModal"
    ></button>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {mainStore} from "@/stores/mainStore";

const props = defineProps({
  openModal: {
    type: Boolean,
    required: true,
  },
  activeItem: {
    type: Number,
    required: true
  }
})
const emits = defineEmits([
    'update:openModal'
])
const store = mainStore()

const item = computed(() => {
  if (props.activeItem !== 0) {
    return store.state.items.find(x => x.id === props.activeItem)
  }
  return {
    id: 0,
    src: '',
    category: 0
  }
})


const deleteItem = (id) => {
  localStorage.removeItem(id)
  store.deleteItem(id)
  emits('update:openModal', false)
}
const closeModal = () => {
  emits('update:openModal', false)
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  display: flex;
  height: -webkit-fill-available;
  flex-direction: column;
  padding: 42px 15px 15px 18px;
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 0 12px 12px 0;

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    & img {
      width: 130px;
    }
  }
  &__divider {
    height: 1px;
    background-color: #4D4D4D;
    margin-bottom: 18px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }
  &__btn {
    background-color: #FA7272;
    padding: 11px;
    border-radius: 8px;
    color: #FFFFFF;

    width: 100%;
  }
}
</style>
