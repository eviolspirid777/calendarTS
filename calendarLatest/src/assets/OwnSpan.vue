<template>
  <span :class="{'selected': isCurrentMonth(store.MONTHS.MARCH)}" @click="selectedTag(store.MONTHS.MARCH)">Март</span>
  <span :class="{'selected': isCurrentMonth(store.MONTHS.APRIL)}" @click="selectedTag(store.MONTHS.APRIL)">Апрель</span>
  <span :class="{'selected': isCurrentMonth(store.MONTHS.MAY)}" @click="selectedTag(store.MONTHS.MAY)">Май</span>
</template>

<script setup lang="ts">
import { useDaysStore } from "../stores/daysStore"
import { onMounted } from "vue"

let store = useDaysStore()

const selectedTag = (month: number): void => {
  store.currentMonth = month
  localStorage.monthId = store.currentMonth
}

onMounted(() => {
  if (localStorage.monthId) {
    store.currentMonth = Number(localStorage.monthId)
  }
})

const isCurrentMonth = (month: number): boolean => store.currentMonth === month
</script>

<style lang="scss" scoped>
.selected{
  color: rgba(103, 78, 216, 0.7);
}
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