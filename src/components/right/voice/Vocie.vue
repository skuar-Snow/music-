<script setup lang="ts">
import { ref,defineProps,defineEmits } from "vue";
import { useDataStore } from "@/stores/counter";
const emits =defineEmits()
const useStore = useDataStore();
//接收参数
const handlePower = () => {
  useStore.changeVoice();
};
</script>

<template>
  <p>Power</p>
  <span class="power"  ref="power"
  ><em
      :class="{active2:useStore.isVoice}"
      @click="handlePower"
  ></em></span>
</template>

<style lang="scss">
p{
  font-size: 30px;
  text-align: center;
  font-weight: 900;
}
span{
  width: 100px;
  height: 40px;
  text-align: center;
  background: #000000;
  em{
    width: 45px;
    height: 30px;
    display: block;
    background: #f2a514;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 5px;
  }
}
</style>