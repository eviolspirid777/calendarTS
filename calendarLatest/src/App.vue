<template>
  <header></header>
  <main></main>
  <footer></footer>   <!--Распихай по блокам хедеры, main и футеры-->
  <div :class="['top--class', isDarkTheme ? 'light' : 'dark']">
    <h1 class="myowntext">Тестовое задание</h1>
    
    <div class="calendarbox">
      <ownswitcher @chngcolor="changeTheme()"/>
      <owncalendar :stl="sendColor()" :class="['calend', isDarkTheme ? 'light':'dark']" :calendardays="owndays" :month="month"/>
      <owncalendar :stl="sendColor()" :class="['calend', isDarkTheme ? 'light':'dark']" :calendardays="owndays" :month="month"/>
      <owncalendar :stl="sendColor()" :class="['calend', isDarkTheme ? 'light':'dark']" :calendardays="owndays" :month="month"/>
    </div>
    <div class="container">
      <ownspan @send-month="defineCalendar" />
    </div>
  </div>
  <div>
    <img src="../public/calendar_photo.png"/>
    <div class="header--class">
      <div class="black"></div>
      <h1>ЗАГОЛОВОК</h1>
      <div class="pink"></div>
    </div>
      <label class="text-form">Платформа управления геопространственными данными «Геопаспорт» - это иновационный продукт, представляющий собой набор программных решений и позволяющий создавать современное прикладное программное обеспечение в области управления данными территории или регион. <br/>Программа включена в единый реестр Российских программ для ЭВМ и баз данных</label>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import owncalendar from '@/components/OwnCalendar.vue'
import ownspan from '@/assets/OwnSpan.vue';
import ownswitcher from './assets/OwnSwitcher.vue';
import { type Day } from "../src/types/OwnDays"

const isDarkTheme = ref(false);
const currentTheme = ref("black");
const owndays = ref([
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
  ])


const month = ref("");

const defineCalendar = (days_array:Day[], mnth:string) => {
  month.value = mnth;
  owndays.value = days_array;
}

const changeTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  currentTheme.value =  currentTheme.value == "black" ? "light" : "black"; 
};
const sendColor = () => {
  return currentTheme.value === "black" ? "black" : "light";
}
</script>
<style lang="scss">
.container{
  position: relative;
  top: 40px;
  left: 65px;
  width: 220px;
  font-size: 25px;
}
img[src*="calendar_photo"]{
  width: 600px;
  float: left;
  margin-top: 0px;
}
@media(max-width:1220px){
  img[src*="calendar_photo"]{
    display: none;
  }
}
.myowntext{
  padding-left: 60px;
  padding-top: 90px;
  font-size: 40px;
  width: 600px;
  height: 20px;
}
button{
  width: 100px;
  height: 50px;
  margin-left: 1200px;
}
.top--class{
  position: inherit;
  margin-top: -60px;
  align-items: baseline;
  vertical-align: baseline;
  width: 110%;
  height: 550px;
  &.dark{
    color: rgb(207,215,225);
    background-color: rgb(46, 54, 71);
  }
  &.light{
    background-color: rgba(255, 255, 255, 0.952);
    color: rgb(64,64,64);
  }
}
.header--class {
  position: relative;
  display: flex;
  top: 35px;
  left: 30px;
  color: white;
  align-items: center;
  background-color: rgb(103, 78, 216);
  max-height: 60px;
  width: 400px;
  font-size: 40px;
  @media (max-width:1220px) {
    top: 740px;
    margin-bottom: 700px;
  }
  & .black {
    background-color: black;
    width: 120px;
    height: 60px;
    margin-left: 10px;
  }

  & h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-left: 20px;
    padding-bottom: 10px;
    font-size: 47px;
  }

  & .pink {
    background-color: rgb(228, 72, 116);
    width: 150px;
    height: 60px;
    margin-left: 40px;
  }
}
.text--block{
  position: relative;
  bottom: 420px;
  left: 628px;
  height: 200px;
  width: 600px;
}
.text-form{
  position: relative;
  display: table;
  width: 600px;
  top: 80px;
  left: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 100;
  color: white;
  font-size: 23px;
}
h1{
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 30px;
  margin-left: 25px;
  margin-top: 40px;
}
.switch{ 
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  width: 3.5em;
  height: 2em;
  & input{
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider{
  position: absolute;
  cursor: pointer;
  margin-top: -70px;
  margin-left: 1700px;
  height: 30px;
  width:50px;
  background-color: rgba(255, 255, 255, 0.644);
  transition: .2s;
  border-radius: 30px;
  @media (max-width: 1220px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
    margin-top: -10px;
  }
  &::before{
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
    transition: .4s;
  }
}
input:checked + .slider{
  background: #303136;
}
input:checked + .slider::before{
  transform: translateX(1.5em);
  background: #303136;
  box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
}
.calendarbox{
  display: flex;
  padding-left: 65px;
  padding-top: 60px;
  @media (max-width:1220px) {
    flex-direction: column;
    align-items: flex-start;
  }
  & .calend{
    @media (max-width:1220px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    overflow: hidden;
    height: 290px;
    width: 300px;
    margin-right: 130px;
    box-shadow: 0px 0px 10px rgba(235, 233, 245, 0.733);
    &.light{
        transition: box-shadow 0.2s ease-in-out;
        box-shadow: 0px 0px 10px rgba(55, 52, 68, 0.733);
    }
  }
}
</style>