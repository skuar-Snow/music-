<script setup lang="ts">
import {ref,defineEmits} from "vue";
import Voice from "@/components/right/voice/Vocie.vue";
import Volume from "@/components/right/voice/Volume.vue";
import {useDataStore} from "@/stores/counter";
const useStore = useDataStore();
const isBank = ref<boolean>(false);
const emits = defineEmits()
//接收from父组件的props
const props = defineProps({
  id: String
});
const changeBank = () => {
  isBank.value =!isBank.value;
  emits("changeBank",isBank.value);
}
</script>

<template>
  <div class="right">
    <div class="power_btn">
      <Voice/>
    </div>
    <div class="name">{{id}}</div>
    <Volume />
    <div class="bank_btn">
      <p>Bank</p>
      <span class="bank"
      ><em
          :class="{active2: isBank}"
          @click="changeBank"
      ></em></span>
    </div>
  </div>
</template>

<style lang="scss">
.right{
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .power_btn{
    width: 240px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
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
  }
  .name{
    font-size: 40px;
    font-weight: 900;
    width: 300px;
    height: 100px;
    background: #6b6b6b;
    line-height: 100px;
    text-align: center;
    margin-bottom: 60px;
  }
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
  .bank_btn{
    width: 240px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }
}
.active2{
  transform: translate(95%);
}
</style>