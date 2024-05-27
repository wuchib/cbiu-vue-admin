<template>
  <div class="w-full h-vh-screen flex justify-center items-center bg-slate-100">
    <Card style="width: 20rem">
      <template #title>
        <div class="flex justify-center items-center">
          <h1>登录</h1>
        </div>
      </template>
      <template #content>
        <LoginForm />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "./LoginForm.vue";

</script>

<style scoped lang="scss"></style>
