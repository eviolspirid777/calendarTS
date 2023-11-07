<template>
  <div class="top--class">
    <header>
      <h1 class="myowntext">Тестовое задание</h1>
      <OwnSwitcher @change-color="changeColor()"/>
    </header>
    <main>
      <div class="calendarbox">
        <OwnCalendar :theme="currentTheme" :month="month"/>
        <OwnCalendar :theme="currentTheme" :month="month"/>
        <OwnCalendar :theme="currentTheme" :month="month"/>
      </div>
      <div class="container">
        <OwnSpan @send-month="setMonth" />
      </div>
    </main>
  </div>
  <footer>
    <img src="../public/calendar_photo.png"/>
    <div class="header--class">
      <div class="black"></div>
      <h1>ЗАГОЛОВОК</h1>
      <div class="pink"></div>
    </div>
      <label class="text-form">Платформа управления геопространственными данными «Геопаспорт» - это иновационный продукт, представляющий собой набор программных решений и позволяющий создавать современное прикладное программное обеспечение в области управления данными территории или региона. <br/>Программа включена в единый реестр Российских программ для ЭВМ и баз данных</label>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import OwnCalendar from '@/components/OwnCalendar.vue'
import OwnSpan from '@/assets/OwnSpan.vue';
import OwnSwitcher from './assets/OwnSwitcher.vue';

const currentTheme = ref("black");

const month = ref("");

const setMonth = (currentMonth:string) => {
  month.value = currentMonth;
}

const changeColor = () => {
  currentTheme.value =  currentTheme.value == "black" ? "light" : "black";
  if(currentTheme.value === "black"){
    document.documentElement.style.setProperty("--color","rgb(207,215,225)")
    document.documentElement.style.setProperty("--bg-color","rgb(46, 54, 71)")
  }
  else{
    document.documentElement.style.setProperty("--color","rgb(64,64,64)")
    document.documentElement.style.setProperty("--bg-color","rgba(255, 255, 255, 0.952)")
  }
};
</script>
<style lang="scss">
:root{
  --color: rgb(207,215,225);
  --bg-color: rgb(46, 54, 71);
}
header{
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  width: 1800px;
}
.container{
  position: relative;
  top: 40px;
  left: 65px;
  width: 220px;
  font-size: 25px;
}
img[src*="calendar_photo"]{
  height: 405px;
  width: 600px;
  float: left;
  margin-top: 0px;
  @media (max-width: 1240px) {
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
  height: 590px;
  color: var(--color);
  background-color: var(--bg-color);
  @media (max-width: 1240px) {
    height: 1350px;
    width: 300%;
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
  @media (max-width: 1240px) {
    top: 70px;
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
  line-height: 29px;
  font-weight: 100;
  width: 600px;
  top: 80px;
  left: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 100;
  color: white;
  font-size: 23px;
  @media (max-width: 1240px) {
    top: -600px;
  }
}
h1{
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 30px;
  margin-left: 25px;
  margin-top: 40px;
}
.calendarbox{
  display: flex;
  padding-left: 65px;
  padding-top: 0px;
  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
  }
}
footer{
  height: 375px;
  @media (max-width: 1240px) {
    height: 400px;
  }
}
</style>
