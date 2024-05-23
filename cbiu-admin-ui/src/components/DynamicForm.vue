<template>
  <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit" :validation-schema="schema"  v-slot="{ values }">
    <Field id="username" name="username" v-slot="{ handleChange, value, errorMessage,meta }" >
      <FloatLabel class="mt-7">
        <InputText id="username" class="w-full" :modelValue="value" @update:modelValue="handleChange" :invalid="handleInvalid(meta)"/>
        <label for="username">用户名</label>
      </FloatLabel>
      <pre class="text-red-400 text-xs pt-1">{{ errorMessage }}</pre>
    </Field>
    <Field id="password" name="password" v-slot="{ handleChange, value, errorMessage,meta }">
        <FloatLabel class="mt-7">
          <InputText id="password" class="w-full" :modelValue="value" @update:modelValue="handleChange" :invalid="handleInvalid(meta)"/>
          <label for="password">密码</label>
        </FloatLabel>
        <pre class="text-red-400 text-xs pt-1">{{ errorMessage }}</pre>
    </Field>
    <Button type="submit" class="mt-7 w-full" label="登录" size="small">登录</Button>
  </Form>
</template>
<script setup lang="ts">
import { Form, Field } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required('请输入用户名'),
    password: yup.string().required('请输入密码'),
});
function onSubmit(values:any) {
  console.log(JSON.stringify(values,null,2));
}

function onInvalidSubmit({ values, errors, results } :any){
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}
function handleInvalid(meta:any):boolean{
    return meta.errors.length || (meta.dirty && (!meta.validated || !meta.valid))
}
</script>
