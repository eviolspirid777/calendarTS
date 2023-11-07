<template>
    <div :class="['main--form', currentTheme]">
        <div class="month">      
            <ul>
                <li class="prev">&#171;</li>
                <li class="prev">&#8249;</li>
                <li class="next">&#187;</li>
                <li class="next">&#8250;</li>
                <li class="header">
                {{ Object.keys(mnth).length === 0 ? "март" : mnth}}
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
import { watch, ref, type PropType } from 'vue';
import { useDaysStore } from '@/stores/daysStore';

const props = defineProps({
    theme: {
        type: String,
        required: false,
        default:"light"
    },
    month:{
        type: String,
        required: true,
        default: () => "Март"
    },
})

const store = useDaysStore();

const currentTheme = ref(props.theme);
const mnth = ref(props.month);
const days = ref(store.dictionary['март']);

watch(() => props.theme, (newVal) => {
    currentTheme.value = newVal;
    if(newVal === "black"){
        document.documentElement.style.setProperty("--color","rgb(207,215,225)")
        document.documentElement.style.setProperty("--bg-color","rgb(46, 54, 71)")
    }
    else {
        document.documentElement.style.setProperty("--color","rgb(64,64,64)")
        document.documentElement.style.setProperty("--bg-color","rgba(255, 255, 255, 0.952)")
    }
});

watch(() => props.month, (newVal:any) => {
  mnth.value = newVal;
  days.value = store.dictionary[newVal];
});
</script>

<style scoped lang="scss">
:root{
  --color: rgb(207,215,225);
  --bg-color: rgb(46, 54, 71);
}

* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;}

.main--form{
    @media (max-width: 1240px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    overflow: hidden;
    height: 290px;
    width: 300px;
    margin-right: 130px;
    box-shadow: 0px 0px 10px rgba(235, 233, 245, 0.733);
    &.light{
        color: var(--color);
        background-color: var(--bg-color);
        transition: box-shadow 0.2s ease-in-out;
        box-shadow: 0px 0px 10px rgba(55, 52, 68, 0.733);
    }
    &.dark{
        background-color: var(--bg-color);
        color: var(--color);
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