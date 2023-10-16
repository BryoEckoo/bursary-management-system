<template>
    <HeaderPage />
    <div class="info">
        <h4 class="text-center info-text">Welcome To Your Profile</h4>
    </div>
</template>

<script>
import HeaderPage from '../components/headerPage.vue';

export default{
    name:'ProfilePage',
    components:{
        HeaderPage,
    }
}
</script>