<template>
    <div class="location border-top">
        <div class="left">
            <span class="iconfont">&#xe63f;</span>
                北京大兴
        </div>
        <div class="right border-left">
            <span class="iconfont">&#xe67d;</span>
                玩水季
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .location{
        position: relative;
        display: flex;
        font-size: .28rem;
        background: #fff;
    }
    .left{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height:1rem;
    }
    .right{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;   
    }
    .left span,.right span{
        margin-right: .1rem;
    }
</style>