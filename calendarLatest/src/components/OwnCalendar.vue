<template>
    <div :class="['main-form', currentTheme]">
        <div class="month">      
            <ul>
                <li class="prev">&#171;</li>
                <li class="prev">&#8249;</li>
                <li class="next">&#187;</li>
                <li class="next">&#8250;</li>
                <li class="header">
                {{ month }}
                <span>2021</span>
                </li>
            </ul>
        </div>
        <ul class="weekdays">
            <li>пн</li>
            <li>вт</li>
            <li>ср</li>
            <li>чт</li>
            <li>пт</li>
            <li>сб</li>
            <li>вс</li>
        </ul>
        <ul class="days">
            <li v-for="(day,key) in days" :key="key">
                <span :class="['active', day.active ? 'active' : 'inactive']">{{ day.day }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import _ from "lodash";
import { watch, ref, onMounted, type Ref } from 'vue';
import { useDaysStore } from '@/stores/daysStore';
import type { Day } from "@/types/OwnDays";

const props = defineProps({
  theme: {
    type: String,
    required: false,
    default:"light"
  },
})

const store = useDaysStore();

const currentTheme: Ref<String> = ref(props.theme);
const month: Ref<String> = ref(store.MONTHS_LABELS[store.currentMonth]);
const days: Ref<Day[]> = ref(store.dictionary[store.currentMonth]);

onMounted(() => {
    if(localStorage.length !== 0){
      month.value = store.MONTHS_LABELS[localStorage.monthId]
      days.value = store.dictionary[localStorage.monthId]
    } 
  }
)

watch(() => props.theme, (newVal) => {
  currentTheme.value = newVal;
});

watch(() => store.currentMonth, (newMonth) => {
  days.value = _.get(store.dictionary, newMonth)
  month.value = store.MONTHS_LABELS[newMonth]
})
</script>

<style scoped lang="scss">
:root{
  --color: rgb(207,215,225);
  --bg-color: rgb(46, 54, 71);
}

* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;}

.main-form{
    @media (max-width: 1240px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    overflow: hidden;
    height: 290px;
    width: 300px;
    margin-right: 130px;
    box-shadow: 0px 0px 10px rgba(235, 233, 245, 0.733);

    color: var(--color);
    background-color: var(--bg-color);

    &.light{
        transition: box-shadow 0.2s ease-in-out;
        box-shadow: 0px 0px 10px rgba(55, 52, 68, 0.733);
    }
}

.header{
    padding-top: 5px;
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.month {
    padding: 10px 12px;
    width: 100%;
    text-align: center;
}

.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.month .prev {
    font-size: 20px;
    margin-right: 9px;
    float: left;
}

.month .next {
    font-size: 20px;
    margin-left: 9px;
    float: right;
}

.weekdays {
    margin: 0;
    padding: 3px 0;
    background-color: white;
    background-color: var(--bg-color);
    color: var(--color);
}

.weekdays li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 500;
    font-size: 15px;
}

.days {
    background: white;
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 400;
    font-size: 32px;
    padding-bottom: 10px;
    background-color: var(--bg-color);
    color: var(--color);
}
.days li {
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:13px;
}

.days li .active {
    &:hover{
        color: rgb(103, 78, 216);
        cursor: pointer;
    }
}
.days li .inactive {
    color: gray;
    &:hover{
        color: gray;
        cursor: not-allowed;
    }
}
</style>