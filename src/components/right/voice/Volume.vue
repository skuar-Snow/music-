<script setup lang="ts">
import {useDataStore} from "@/stores/counter";
const useStore = useDataStore();
const changevoice = (e: any) => {
  // console.log(e.target.value);
  const value = e.target.value/100;
  const volume = value.toFixed(1);
  useStore.changeVolume(Number(volume));
}
</script>

<template>
  <input type="range" @input="changevoice" :value="useStore.Volume" >
</template>

<style lang="scss">
input[type=range]{
  margin-bottom: 20px;
  -webkit-appearance: none;
  width: 350px;
  height: 10px;
  background: black;
  outline: none;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 45px;
  width: 10px;
  margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/
  background: blue;
  border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
  box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
}
</style>