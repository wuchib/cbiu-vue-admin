<template>
    <div class=" h-vh-screen w-vw-screen flex">
        <!-- sidebar -->
        <div class="sidebar " :style="sidebarStyle"></div>
        <!-- main + nav -->
        <div class="flex-1 main-wrap" :style="mainWrapStyle">
            <!-- nav -->
            <div class="nav flex justify-between items-center mb-2" :style="navStyle">
                <Breadcrumb :home="home" :model="items" />
                <div class="nav-right flex items-center">
                    <IconField iconPosition="left" class="ml-2 mr-2">
                        <InputIcon class="pi pi-search "></InputIcon>
                        <InputText size="small" v-model="searchMsg" placeholder="Search" />
                    </IconField>
                    <i class="pi pi-cog ml-2 mr-2"></i>
                    <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div class="main">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const sidebarWidth = ref(250);
const navHeight = ref(60);

const sidebarStyle = computed(()=>{
    return {
        width:sidebarWidth.value + 'px',
        background:'#FFFFFF',
        boxShadow:'0px 4px 50px #D9DDFC',
    }
})

const navStyle = computed(()=>{
    return {
        height:navHeight.value + 'px',
    }
})

const tabsStyle = computed(()=>{
    return {
        height:tabsHeight.value + 'px'
    }
})

const mainWrapStyle = computed(()=>{
    return {
        background:'#F9FAFB',
    }
})

const home = ref({
    icon: 'pi pi-home'
});

const items = ref([
    { label: '系统管理' }, 
    { label: '用户管理' }, 
]);

const searchMsg = ref('')

</script>

<style scoped lang="scss">
.sidebar{
}

.nav{
}

.tabs{
}

.main-wrap{
    padding: 20px;
    .main{
        background: #ffffff;
        border: 1px solid #dfe7ef;
        height: 800px;
        border-radius: 12px;
    }
}
</style>