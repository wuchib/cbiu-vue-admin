<template>
  <div class="w-full h-vh-screen flex justify-center items-center bg-slate-100">
    <Card style="width: 20rem">
      <template #title>
        <div class="flex justify-center items-center">
          <Avatar class="bg-green-300" size="xlarge" shape="circle" />
        </div>
      </template>
      <template #content>
        <DynamicForm ></DynamicForm>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import DynamicForm from "../components/DynamicForm.vue";

</script>

<style scoped lang="scss"></style>
