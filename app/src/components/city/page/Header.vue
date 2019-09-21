<template>
    <div class="header">
        <div class="top">
            <router-link to="/"><span class="iconfont">&#xe624;</span></router-link>
            <p>城市选择</p>
        </div>
        <div class="option">
            <ul>
                <li class="active">境内</li>
                <li>境外·港澳台</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header{
        position: relative;
        background: #00bcd4;
        z-index: 999;
    }
    .top{
        font-size: .32rem;
        color: #fff;
        text-align: center;
        line-height: .58rem;
        /* border-bottom: 1px solid #e7d1d1; */
    }
    .top span{
        position: absolute;
        left:.24rem;
        top: .1rem;
        color: #fff;
        font-weight: bold;
        vertical-align: top;
    }
    .top p{
        padding-top:.1rem; 
    }
    .option{
        font-size: .28rem;
        color: #fff;
        line-height: .4rem;
        /* text-align: center; */
        padding: .2rem 1rem;
        overflow: hidden;
    }
    .option ul{
        border: 1px solid #fff;
        overflow: hidden;
    }
    .option ul li{
        float: left;
        width: 50%;
        text-align: center;
    }
    .option ul .active{
        background: #fff;
        color: #00bcd4;
    }
</style>