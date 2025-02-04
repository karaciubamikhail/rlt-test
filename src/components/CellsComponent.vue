<template>
  <div>
    <div class="cells">
      <div class="cells__droppable"
           v-for="cell in cells"
           :key="cell"
           @drop="onDrop($event, cell)"
           @dragover.prevent
           @dragenter.prevent
           @click="openModalToggle($event)"
      >
        <div class="cells__draggable"
             v-for="item in items.filter(x => x.category === cell)"
             @dragstart="onDragStart($event, item)"
             :key="item.id"
             :id="item.id"
             draggable="true"
        >
          <img class="cells__draggable-image" :src="item.src" alt="s">
          <div class="draggable__id">{{ item.count }}</div>
        </div>
      </div>
      <transition name="page-opacity" mode="in-out">
        <ModalCells
            v-model:open-modal="openModal"
            :activeItem="activeItemId"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
  import ModalCells from "@/components/ModalCells.vue";
  import {mainStore} from "@/stores/mainStore";

  const store = mainStore()
  const cells = store.state.cells
  const items = computed(() => {
    return store.state.items
  })

  const openModal = ref(false)
  const activeItemId = ref<number>(0)

  const onDragStart = (event: DragEvent, item) => {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemId', item.id)

  }
  const onDrop = (event: DragEvent, id) => {
    const itemId = parseInt(event.dataTransfer.getData('itemId'))
    const item  = items.value.find(item => item.id === itemId)
    item.category = id
    localStorage.setItem(String(item.id), String(item.category))
  }

  const openModalToggle = (event) => {
    if (event.target.matches('.cells__draggable')) {
      openModal.value = !openModal.value
      activeItemId.value = Number(event.target.id)
    }
    if (!event.target.matches('.cells__draggable')) {
      openModal.value = false
    }
  }

</script>

<style lang="scss">
.cells {
  position: relative;
  display: grid;
  width: 525px;
  height: 100%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  &__droppable {
    background-color: #262626;

    border: 1px solid #4D4D4D;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      border-radius: 12px 0 0 0;
    }
    &:nth-child(5) {
      border-radius: 0 12px 0 0;
    }
    &:nth-child(21) {
      border-radius: 0 0 0 12px;
    }
    &:nth-child(25) {
      border-radius: 0 0 12px 0;
    }
  }
  &__draggable {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 25px;
    width: 100%;
    height: 100%;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.draggable__id {
  position: absolute;
  display: flex;
  bottom: -1px;
  right: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #4D4D4D;
  color: #FFFFFF;
  border-radius: 6px 0 0 0;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: all 0.3s ease-in;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
