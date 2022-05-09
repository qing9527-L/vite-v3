<template>
    <div class="home">
        <div>
            <span>首页</span>  |  <router-link to="/todo"><span>TODO</span></router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .home{
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 100vh;
        color: white;
        font-size: 35px;
        background-image: url("@/assets/front.jpg");
    }
</style>