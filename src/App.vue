<template>
  <div class="container">
    <Inventory />
    <Cells />
    <BottomBlock />
  </div>
</template>

<script setup lang="ts">
import Cells from "@/components/CellsComponent.vue";
import Inventory from "@/components/InventoryComponent.vue";
import BottomBlock from "@/components/BottomBlock.vue";
</script>

<style lang="scss">
@import "assets/style/main";

</style>
