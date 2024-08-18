<script setup lang="ts">
import { ref,onMounted,defineEmits,defineProps } from "vue";
import { useDataStore } from "@/stores/counter";
const props = defineProps({
  isBank: {
    type: Boolean,
    default: false
  },
})
const emits =defineEmits()
const useStore = useDataStore();
const activeIndex = ref<number>(-1);
const audio = ref<any>(null);
//点击和键盘按下的时候把item.id传给父组件
const sendId = (index: number) => {
  emits('sendId',useStore.data[index].id)
}
const play = (index: number) => {
   if(useStore.isVoice){
     activeIndex.value = index;
     audio.value[index].volume = useStore.Volume;
     audio.value[index].play();
     sendId(index)
   }else{
     sendId(index)
     return
   }
}
const resetActive = () => {
  activeIndex.value = -1;
}
const getClass = (index: number) => {
  return {
    active: activeIndex.value === index,
    active1: activeIndex.value === index && useStore.isVoice
  }
}

onMounted(() => {
  document.addEventListener("keydown", (e) => {
      const keyCode = e.keyCode;
      useStore.data.forEach((item, index) => {
        if (keyCode === item.keyCode) {
          if(useStore.isVoice){
            play(index);
          }
          sendId(index)
        }
      })
  })
  document.addEventListener('keyup', () => {
    resetActive();
  })
});
</script>

<template>
  <div class="left">
    <ul class="list">
      <li
        v-for="(item,index) in useStore.data"
        :key="index"
        ref="listItems"
        @mousedown="play(index)"
        @mouseup="resetActive"
        :class="getClass(index)"
      >
        {{item.keyTrigger}}
        <audio
            ref="audio"
            preload="auto"
            :src="isBank?item.bankUrl:item.url"
        ></audio>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.left{
  width: 60%;
  height: 600px;
  ul{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    li{
      margin: 10px;
      width: 150px;
      height: 150px;
      background: #717171;
      font-size: 35px;
      color: black;
      box-shadow:  0 0 10px #717171;
      border-radius: 10px;
      text-align: center;
      line-height: 150px;
      cursor: pointer;
      span{
        pointer-events: none;
      }
    }
    .active{
      background: orange;
      box-shadow: 0 0 0 ;
    }
    .active1{
      box-shadow: 0 0 0 0px #717171;
    }
  }
}
</style>