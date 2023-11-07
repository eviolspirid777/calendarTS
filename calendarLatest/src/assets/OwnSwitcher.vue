<template>
    <label class="switch">
      <input type="checkbox" @click="changeColor()">
      <span class="slider"></span>
    </label>
</template>

<script lang="ts" setup>
const emits = defineEmits(["change-color"]);

const changeColor = () => {
    emits("change-color");
}
</script>
<style scoped lang="scss">
.switch{ 
  display: flex;
  justify-content: flex-start;
  margin-left: -525px;
  margin-top: 60px;
  padding-right: 700px;
  font-size: 14px;
  width: 3.5em;
  height: 2em;
  & input{
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }
  @media (max-width: 1240px) {
    margin-left: 0;
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
  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 60px;
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
</style>