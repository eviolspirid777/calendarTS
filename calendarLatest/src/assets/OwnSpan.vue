<template>
    <span @click="selectedTag(0)">Март</span>
    <span @click="selectedTag(1)">Апрель</span>
    <span @click="selectedTag(2)">Май</span>
</template>
<script setup lang="ts">
import {ref} from "vue"
import { useDaysStore } from "../stores/daysStore"

let store = useDaysStore()

const selectedTag = (tag: number) => {
  console.log("было:")
  console.log(store.currentMonth)
  store.currentMonth = store.MONTHS_LABELS[tag]
  console.log("сейчас:")
  console.log(store.currentMonth)
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