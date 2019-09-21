<template>
    <div class="banner">
        <div class="box" @click="showSwiper">
            <div class="banner-img">
                <img src="//img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg" alt="">
            </div>
            <div class="banner-title">
                <p>奥林匹克塔</p>
            </div>
        </div>

        <div class="img-swiper" v-show="observe" @click="showSwiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in imgList" :key="item.id">
                    <img :src="item.imgUrl">
                </swiper-slide>
            </swiper>            
            <div class="swiper-pagination"  slot="pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{            
            observe:false,
            imgList:[
                {
                    "id":"01",
                    "imgUrl":"http://img1.qunarzz.com/sight/p0/1610/5d/5dd6ca9581081181a3.img.jpg_350x240_ac2473ed.jpg",
                },
                {
                    "id":"02",
                    "imgUrl":"http://img1.qunarzz.com/sight/p0/1505/2d/2dab46d4f912d66e.water.jpg_350x240_103dedc3.jpg",
                },
                {
                    "id":"03",
                    "imgUrl":"http://img1.qunarzz.com/sight/p0/1610/5d/5dd6ca9581081181a3.img.jpg_350x240_ac2473ed.jpg",
                },
            ],
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination',   
                    type: 'fraction',                 
                }
            },
        }
    },
    methods:{
        showSwiper(){
            this.observe=!this.observe;
        },
        // hideswiper(){
        //     this.observe=false;
        // }
    }
}
</script>

<style scoped>
    .banner{
        position: relative;
    }
    .banner-img{
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom:55%;
    }
    .banner-img img{
        width: 100%;
    }
    .banner-title{
        position: absolute;
        left: .3rem;
        bottom: .3rem;
        color: #fff;
        font-size: .36rem;    
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    }
    .img-swiper{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
    }
    .img-swiper img{
        width: 100%;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        color: #fff;
        bottom: .7rem;
        font-size: .28rem;
    }
</style>