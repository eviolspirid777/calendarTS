<template>
  <span @click="selectedTag(store.MONTHS.MARCH)">Март</span>
  <span @click="selectedTag(store.MONTHS.APRIL)">Апрель</span>
  <span @click="selectedTag(store.MONTHS.MAY)">Май</span>
</template>
<script setup lang="ts">
import { useDaysStore } from "../stores/daysStore"

let store = useDaysStore()

const selectedTag = (month: number) => {
  store.currentMonth = month
  localStorage.month = month
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