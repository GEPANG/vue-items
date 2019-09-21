<template>
    <div class="icons">
        <swiper :options="swiperOption" >
                <swiper-slide  v-for="item in page" :key="item.id">
                    <div class="content">
                         <div class="icons-item" v-for="para in item" :key="para.id">
                        <img :src="para.imgUrl" alt="">
                        <p>{{para.title}}</p>
                    </div>
                    </div>
                </swiper-slide>
            <!-- <swiper-slide  v-for="(item,index) in iconList" :key="index">
                <div class="icons-item">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </div>
            </swiper-slide> -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- <div class="icons-item">
            <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            <p>景点门票</p>
        </div> -->

    </div>
</template>
<script>
export default {
    props:['iconList'],
    data(){
        return{
            // iconList:[
            //      {
            //         id:0,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            //         title:'景点门票',
            //     },
            //     {
            //         id:1,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
            //         title:'故宫',
            //     },
            //      {
            //         id:2,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            //         title:'北京必游',
            //     },
            //      {
            //         id:3,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            //         title:'水上乐园',
            //     },
            //      {
            //         id:4,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            //         title:'一日游',
            //     },
            //     {
            //         id:5,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
            //         title:'古北水镇',
            //     },
            //     {
            //         id:6,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            //         title:'古北水镇',
            //     },
            //     {
            //         id:7,
            //         imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
            //         title:'古北水镇',
            //     },
            //     {
            //         id:8,
            //         imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
            //         title:'古北水镇',
            //     },
            //     {
            //         id:9,
            //         imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',
            //         title:'古北水镇',
            //     },
            // ],
            swiperOption:{
               pagination:{
                   el:'.swiper-pagination',
               }
            },
        }
    },
    computed:{
        page(){
            let pages =[];
            // let pages=[
            //    [
            //         {

            //         }
            //     ],
            //     [
            //         {

            //         }
            //     ]
            // ];
            this.iconList.forEach((item,index) => {
                let idx = Math.floor(index/8);//0,1
                if(!pages[idx]){
                    pages[idx]=[]
                }
                pages[idx].push(item);               
            });
            return pages;
        },
    },    
}
</script>
<style scoped>
    .icons{
        width: 100%;
        overflow: hidden;
        background: #fff;
    }
    .content{
        padding-bottom: 4.1rem;
    }
    .icons-item{
        width:25%;       
        height: 0;
        padding-bottom:25%;
        float: left;
    }
    .icons-item img{
        width: 1.1rem;
        height: 1.1rem;
        margin: 0 auto;
        padding-top: .2rem;
        display:block;
    }
    .icons-item p{
        font-size:.28rem;
        color:#212121;
        text-align:center;
        margin-top: .1rem;
     }
     .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 4px;
    }
</style>