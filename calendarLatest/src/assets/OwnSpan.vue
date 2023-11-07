<template>
    <span @click="selectedTag(`март`)">Март</span>
    <span @click="selectedTag(`апрель`)">Апрель</span>
    <span @click="selectedTag(`май`)">Май</span>
</template>
<script setup lang="ts">
import {ref} from "vue"
import { useDaysStore } from "../stores/daysStore"

let store = useDaysStore()

const emits = defineEmits(["sendMonth"]);

const newdays = ref([{}]);

const selectedTag = (tag: String) => {
  if(tag === "март")
  {
    newdays.value = store.dictionary["март"];
  }
  else if(tag === "апрель")
  {
    newdays.value = store.dictionary["апрель"]
  }
  else if(tag === "май")
  {
    newdays.value = store.dictionary["май"]
  }
  emits("sendMonth", tag);
}
</script>
<style lang="scss" scoped>
span{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: underline;
  margin-right: 15px;
  &:hover{
    transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
    color: rgb(103, 78, 216);
    text-shadow: 1px 1px 1px rgb(103, 78, 216);
    cursor: pointer;
  }
}
</style>