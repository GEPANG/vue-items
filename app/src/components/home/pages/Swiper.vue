<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- <swiper-slide><img src="@/static/mock/img/swiper2.jpg" alt=""></swiper-slide>           
            <swiper-slide><img src="@/static/mock/img/swiper3.jpg" alt=""></swiper-slide> -->
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['swiperList'],
    data(){
        return{
            // swiperList:[
            //     {
            //         id:0,
            //         imgUrl:require('@/assets/img/swiper1.jpg'),
            //     },
            //      {
            //         id:1,
            //         imgUrl:require('@/assets/img/swiper2.jpg'),
            //     },
            //      {
            //         id:2,
            //         imgUrl:require('@/assets/img/swiper3.jpg'),
            //     },
            // ],
            swiperOption:{
                loop:true,
                pagination:{
                    el:'.swiper-pagination',
                }
            }
        }
    }
}
</script>
<style scoped>
    .swiper{
        /* width:100%;
        height:2rem; */
        background: #ccc;
        height: 0;
        /*当网速加载中慢时--》解决掉块的问题，也就是当没有设置高时，下面内容会会自动往上到没有加载出来的位置*/
        padding-bottom: 26.67%;
        /*26.67%---》以宽度来计算，若padding-bottom写成100%，则表示375px的高与宽度一样*/

    }
    .swiper img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullets>>>.swiper-pagination-bullet-active{
        background: #ffffff;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 6px;
    }
</style>