import { ref,reactive } from 'vue'
import { defineStore } from 'pinia'
import  axios  from 'axios'
import type {
  DataRes,
  DataIner
} from "@/type/type"

export const useDataStore = defineStore('data', () => {
  const data = ref<DataIner[]>([])
  const isVoice = ref<boolean>(true)
  const Volume = ref<number>(50)
  const getData = async () => {
     const res = await axios.get<DataRes>('http://zyxcl.xyz/exam_api/music/list')
     data.value = res.data.value
  }
  const changeVoice = () => {
    isVoice.value =!isVoice.value
  }
  const changeVolume = (num: number) => {
    Volume.value = num
  }
  return {
    data,
    getData,
    isVoice,
    changeVoice,
    Volume,
    changeVolume
  }
})
