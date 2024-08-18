<script setup lang="ts">
import { ref } from "vue";
import MyLeft from "@/components/left/MyLeft.vue";
import MyRight from "@/components/right/MyRight.vue";
import { useDataStore } from "./stores/counter";
const useStore = useDataStore();
useStore.getData()
const  id = ref<string>("")
const isBank = ref<boolean>(false);
const handlePlayItem = (item: string) => {
  id.value = item
}
const handleChangeBank = (item: boolean) => {
  isBank.value = item
}

</script>

<template>
  <div class="box">
    <div class="con">
      <MyLeft
      @sendId="handlePlayItem"
      :isBank="isBank"
      />
      <MyRight
      :id="id"
      @changeBank="handleChangeBank"
      />
    </div>
  </div>
</template>

<style lang="scss">
.box{
  width: 1000px;
  height: 600px;
  margin: 95px auto;
  background: #b3b3b3;
  border: 8px solid #f2a514;
  .con{
    display: flex;
  }
}
</style>
