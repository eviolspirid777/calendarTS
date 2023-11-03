<template>
    <div :class="['main--form', clsStyle()]">
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

        <ul :class="['weekdays', clsStyle()]">
        <li>пн</li>
        <li>вт</li>
        <li>ср</li>
        <li>чт</li>
        <li>пт</li>
        <li>сб</li>
        <li>вс</li>
        </ul>
        <ul :class="['days', clsStyle()]">
            <li v-for="(day,key) in owndays" :key="key">
                <span :class="['active', day.active ? 'act' : 'inact']">{{ day.day }}</span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { watch, ref, type PropType } from 'vue';
import {type Day} from "../types/OwnDays";

const props = defineProps({
    stl: {
        type: String,
        required: false,
        default:"light"
    },
    month:{
        type: String,
        required: true,
        default: () => "Март"
    },
    calendardays:{
        type: Array as PropType<Day[]>,
        required: true,
        default: () => [
            {day:"1",active:true},
            {day:"2",active:true},
            {day:"3",active:true},
            {day:"4",active:true},
            {day:"5",active:true},
            {day:"6",active:true},
            {day:"7",active:true},
            {day:"8",active:true},
            {day:"9",active:true},
            {day:"10",active:true},
            {day:"11",active:true},
            {day:"12",active:true},
            {day:"13",active:true},
            {day:"14",active:true},
            {day:"15",active:true},
            {day:"16",active:true},
            {day:"17",active:true},
            {day:"18",active:true},
            {day:"19",active:true},
            {day:"20",active:true},
            {day:"21",active:true},
            {day:"22",active:true},
            {day:"23",active:true},
            {day:"24",active:true},
            {day:"25",active:true},
            {day:"26",active:true},
            {day:"27",active:true},
            {day:"28",active:true},
            {day:"29",active:true},
            {day:"30",active:true},
            {day:"31",active:true},
            {day:"1",active:false},
            {day:"2",active:false},
            {day:"3",active:false},
            {day:"4",active:false},
        ]
    }
})

const clr = ref(props.stl);
const mnth = ref(props.month);
const owndays = ref(props.calendardays);

const clsStyle = () => {
    return clr.value === "light" ? "light" : "dark";
}

watch(() => props.calendardays, (newVal) => {
  owndays.value = newVal;
})
watch(() => props.stl, (newVal) => {
  clr.value = newVal === "light" ? "light" : "dark";
});

watch(() => props.month, (newVal) => {
  mnth.value = newVal;
});
</script>
<style scoped lang="scss">
* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;}

.main--form{
    &.dark{
        background-color: rgb(46, 54, 71);
        color: white;
    }
    &.light{
        color: black;
        background-color: white;
    }
}

.header{
    padding-top: 5px;
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.rght{
    margin-right: 9px;
}
.lft{
    margin-left: 9px;
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
    &.dark{
        background-color: rgb(46, 54, 71);
        color: white;
    }
    &.light{
        background-color: white;
        color: black;
    }
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
    &.dark{
        background-color: rgb(46, 54, 71);
        color: white;
    }
    &.light{
        background-color: white;
        color: black;
    }
}
.days li {
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:13px;
}

.days li .active {                  //Для обозачения текущего дня (ex: li<span>10</span>/li)
    &.inact{
        color: gray;
    }
    &:hover{
        color: rgb(103, 78, 216);
        cursor: default;
    }
}

@media screen and (max-width:720px) {
    .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
    .weekdays li, .days li {width: 12.5%;}
    .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
    .weekdays li, .days li {width: 12.2%;}
}
</style>