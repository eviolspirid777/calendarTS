<template>
    <label class="switch">
      <input type="checkbox" @click="changeTheme()">
      <span class="slider"></span>
    </label>
</template>
<script lang="ts" setup>
const emits = defineEmits(["chngcolor"]);

const changeTheme = () => {
    emits("chngcolor");
}
</script>