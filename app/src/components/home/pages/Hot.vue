<template>
    <div class="hot">
        <div class="hot-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span class="week">本周热门榜单</span>
            <span>全部榜单 ></span>
        </div>
        <ul class="hot-list">
            <li v-for="item in hotList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
                <p>
                    <span class="mark">￥{{item.mark}}</span>起
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['hotList'],
    data(){
        return{
            // hotList:[
            //     {
            //         id:0,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
            //         title:'故宫',
            //         price:20,
            //     },
            //     {
            //         id:1,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg',
            //         title:'故宫',
            //         price:20,
            //     },
            //     {
            //         id:2,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
            //         title:'八达岭长城',
            //         price:20,
            //     },
            //     {
            //         id:3,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
            //         title:'颐和园',
            //         price:20,
            //     },
            //     {
            //         id:4,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg',
            //         title:'北京世界园艺博览会',
            //         price:20,
            //     },
            //     {
            //         id:5,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_250x250_0565d534.jpg',
            //         title:'恭王府',
            //         price:20,
            //     },
            //     {
            //         id:6,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_250x250_d76e727c.jpg',
            //         title:'京东石林峡',
            //         price:20,
            //     },
            //      {
            //         id:7,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_250x250_6c4c9885.jpg',
            //         title:'北京欢乐谷',
            //         price:20,
            //     },
            //      {
            //         id:8,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
            //         title:'圆明园',
            //         price:20,
            //     },
            //      {
            //         id:9,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_250x250_b256890e.jpg',
            //         title:'慕田峪长城',
            //         price:20,
            //     },
            // ]
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~css/common.styl';
    .hot{
        font-size: .28rem;
        background: #fff;
        margin-top: .2rem;
        position: relative;
    }
    .hot-top{
        padding: .24rem 0 .26rem;
    }
    .hot-top img{
        width: .3rem;
        height: .3rem;
        /* vertical-align: top; */
        margin-left: .2rem;
    }
    .hot-top span:nth-of-type(1){
        color: #212121;
        font-size: .32rem;
        margin-left: .08rem;
    }
    .hot-top span:nth-of-type(2){
        position: absolute;
        color: #616161;
        font-size: .28rem;
        top: .36rem;
        right: .32rem;
    }
    .hot-list{
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        height: 3.1rem;
    }
    .hot-list li{
        width: 2rem;
        height: 2rem;
        padding:0 0 0 .2rem;
        display: inline-block;
    }
    .hot-list li p:nth-of-type(1){
        width: 2rem;
        textOverflow();
        /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
    }
    .hot-list img{
        width: 100%;
        height: 100%;
    }
    .hot-list p{
        font-size: .28rem;
        text-align: center;
        margin-top: .12rem;
    }
    .hot-list p .mark{
        font-size: .32rem;
        color: #ff8300;
    }
</style>