<template>
    <div class="activity border-left">
        <div class="activity-left">
            <img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png" alt="">
        </div>
        <div class="activity-right">
            <img src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png" alt="">
        </div>    
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .activity{
        margin-top: .2rem;
        position: relative;
        display: flex;
        background: #fff;
    }
    .activity-left,.activity-right{
        flex: 1;
        font-size: .28rem;
        height: 1.4rem;
    }
    .activity-left img,.activity-right img{
        width: 100%;
        height: 100%;
    }
</style>