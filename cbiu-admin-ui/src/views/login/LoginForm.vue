<template>
  <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit" :validation-schema="schema">
    <Field id="username" name="username" v-slot="{ handleChange, value, errorMessage,meta }" >
      <FloatLabel class="mt-7">
        <InputText id="username" class="w-full" :modelValue="value" @update:modelValue="handleChange" :invalid="handleInvalid(meta)"/>
        <label for="username">用户名</label>
      </FloatLabel>
      <pre class="text-red-400 text-xs pt-1">{{ errorMessage }}</pre>
    </Field>
    <Field id="password" name="password" v-slot="{ handleChange, value, errorMessage,meta }">
        <FloatLabel class="mt-7">
          <Password id="password" toggleMask :feedback="false" class="w-full" :modelValue="value" @update:modelValue="handleChange" :invalid="handleInvalid(meta)"/>
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

export interface FormActions {
  setFieldValue: (field: any, value: any) => void;
  setFieldError: (field: string, message: string | undefined) => void;
  setErrors: (fields: Partial<Record<string, string | undefined>>) => void;
  setValues: (fields: Partial<Record<any, any>>) => void;
  setFieldTouched: (field: string, isTouched: boolean) => void;
  setTouched: (fields: Partial<Record<string, boolean>>) => void;
  resetForm: (state?: Partial<any>) => void;
}

const schema = yup.object({
    username: yup.string().required('请输入用户名').min(3,'用户名为3-10位的字母或数字组成').max(10,'用户名为3-10位的字母或数字组成').matches(/^[a-zA-Z0-9]+$/, '只允许字母和数字'),
    password: yup.string().required('请输入密码'),
});
function onSubmit(values:any,actions:FormActions) {

}

function onInvalidSubmit({ values, errors, results } :any){
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}
function handleInvalid(meta:any):any{
    return meta.errors.length > 0 || (meta.dirty && (!meta.validated || !meta.valid))
}
</script>
