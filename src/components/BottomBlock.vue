<template>
  <div class="bottom-block">
    <div class="bottom-block__item"></div>
    <button class="close"></button>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">


.bottom-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 18px;
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  margin-top: 24px;

  &__item {
    width: 700px;
    height: 36px;
    border-radius: 12px;
    background: linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(68,68,68,1) 50%, rgba(51,51,51,1) 100%);
  }
}
</style>
