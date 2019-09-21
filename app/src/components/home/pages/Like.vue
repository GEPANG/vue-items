<template>
    <div class="like">
        <div class="like-img">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            猜你喜欢
        </div>
        <ul>
            <li class="like-item border-bottom" v-for="item in likeList" :key="item.id"
                @click="toDetail(item)"
            >
                <div class="item-img">
                    <img :src="item.urlImg" alt="">
                </div>
                <div class="item-text">
                    <h3>{{item.title}}</h3>
                    <div class="text-assess">{{item.assess}}</div>
                    <div class="text-floor">
                        <span>￥<b>{{item.price}}</b></span>起
                        <span>{{item.area}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="production">
            <a href="#">查看所有产品</a>
        </div>
    </div>
</template>

<script>
export default {
    props:['likeList'],
    data(){
        return{
            // likeList:[
            //     {
            //         id:0,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
            //         title:'奥林匹克塔',
            //         assess:'471条评论',
            //         price:121.9,
            //         area:'朝阳区'
            //     },
            //     {
            //         id:1,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            //         title:'故宫',
            //         assess:'486945条评论',
            //         price:60,
            //         area:'东城区'
            //     },               
            //     {
            //         id:2,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
            //         title:'八达岭长城',
            //         assess:'471条评论',
            //         price:40,
            //         area:'延庆县'
            //     },
            //     {
            //         id:3,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            //         title:'北京欢乐谷',
            //         assess:'76615条评论',
            //         price:198,
            //         area:'朝阳区'
            //     },
            //     {
            //         id:4,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
            //         title:'北京野生动物园',
            //         assess:'25381条评论',
            //         price:198,
            //         area:'大兴区'
            //     },
            //     {
            //         id:5,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
            //         title:'北京动物园"',
            //         assess:'9814条评论',
            //         price:25,
            //         area:'西城区'
            //     },
            //     {
            //         id:6,
            //         urlImg:'http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
            //         title:'古北水镇',
            //         assess:'11948条评论',
            //         price:140,
            //         area:'密云县'
            //     },
            // ]
        }
    },
    methods:{
        toDetail(item){
            this.$router.push({
                path:'/detail',                
            })
        }
    }
}
</script>

<style scoped>
    .like{
        margin-top: .2rem;
        font-size: .28rem;
        background: #fff;
        padding: 0 .2rem;
    }
    .like-img{
        font-size: .32rem;
        padding: .2rem 0;
    }
    .like-img img{
        width: .3rem;
        height: .3rem;
    }
    .like-item{
        position: relative;        
        overflow: hidden;
        padding:.25rem 0;
    }
    .item-img{
        width: 2rem;
        height: 2rem;
        float: left;
    }
    .item-img img{
        width: 100%;
        height: 100%;
    }
    .item-text{
        position:relative;
        overflow: hidden;        
        padding-left: .22rem;        
        color: #616161;
    }
    .item-text h3{
         margin-top: .4rem;
         font-size: .36rem;
         color: #212121;
     }
     .item-text .text-assess,.item-text .text-floor{
         margin-top: .3rem;
     }
     .item-text .text-assess{
         font-size: .24rem;
     }
     .item-text .text-floor span:first-child{
         color: #ff8300;
     }
     .item-text .text-floor span:first-child b{
         font-size: .4rem;
     }
      .item-text .text-floor span:last-child{
        position: absolute;
        right: 0;   
      }
      .production a{
          display: block;
          width: 100%;
          font-size: .28rem;          
          line-height: .4rem;
          padding:.2rem 0;
          color: #00afc7;
          text-align: center;
      }
</style>