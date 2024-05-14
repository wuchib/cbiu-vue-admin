<template>
    <div class="w-full h-vh-screen flex justify-center items-center bg-slate-100">
        <Card style="width: 20rem;">
            <template #title>
                <div class="flex justify-center items-center">
                    <Avatar  class="bg-green-300" size="xlarge" shape="circle"/>
                </div>
            </template>
            <template #content>
                <Form @submit="onLogin"
                      :validation-schema="schema"
                      @invalid-submit="onInvalidSubmit"
                >
                    <FloatLabel class="mt-7">
                        <InputText class="w-full" id="username" v-model="username" :invalid="false" />
                        <label for="username">用户名</label>
                    </FloatLabel>
                    <FloatLabel class="mt-7">
                        <Password 
                            class="w-full" 
                            id="password" 
                            v-model="password" 
                            toggleMask
                            :feedback="false"
                            :invalid="false"
                        />
                        <label for="password">密码</label>
                    </FloatLabel>

                    <div class="flex justify-end w-full">
                        <Button class="mt-7 w-full" label="登录" size="small"></Button>
                    </div>
                </Form>
                
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Form,useField } from 'vee-validate'
import * as Yup from 'yup';



const schema = Yup.object().shape({
    username:Yup.string().required(),
    password:Yup.string().required()
})

const { value:username } = useField('username','',{
    initialValue: ''
})
const { value:password } = useField('password','',{
    initialValue: ''
})


function onLogin(){
    console.log('login');
}

function onInvalidSubmit(){
    
}
</script>

<style scoped lang="scss">

</style>