<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0);
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-row class="mb-4">
      <el-button type="primary">
        <router-link to="/todo"></router-link>
      </el-button>
    </el-row>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>
