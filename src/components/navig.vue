<template>
    <nav>
        <div class="text-logo">
            <img src="./icons/logoVue.png">
            <img src="./icons/iconVue.png">
        </div>
    </nav>
</template>


<script setup>

</script>


<style scoped>
    nav{
        background-color: rgba(8, 10, 12, 0.401);
        height: 60px;
        border-bottom: 1px solid rgb(126, 121, 121);
    }
    .text-logo{
        display: flex;
        align-items: center;
        margin-left: 47%;
        height: 100%;
        width: 10%;
    }
    img:nth-child(1){
        width: 150px;
    }
    img:nth-child(2){
        margin-left: 350%;
    }
    img{
        width: 120px;
        height: 35px;
    }
</style>