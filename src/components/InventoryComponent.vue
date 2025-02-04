<template>
    <div class="inventory">
      <img src="../../src/assets/images/Img.png" alt="" class="inventory__image">
      <div class="item">
        <div class="item__title"></div>
        <div class="item__descr"></div>
        <div class="item__descr"></div>
        <div class="item__descr"></div>
        <div class="item__descr"></div>
        <div class="item__descr"></div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

.inventory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 236px;
  background-color: #262626;
  padding: 18px 14px 0 14px;
  border: 1px solid #4D4D4D;
  border-radius: 12px;

  &__image {
    margin-bottom: 20px;
  }
}
</style>
