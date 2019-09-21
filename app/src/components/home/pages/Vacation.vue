<template>
    <div class="vacation">
        <div class="vacation-title">
            周末去哪儿
        </div>
        <ul>
            <li class="vacation-item" v-for="item in vacationList" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="item-message">
                    <p>{{item.message1}}</p>
                    <p>{{item.message2}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['vacationList'],
    data(){
        return{
            // vacationList:[
            //     {
            //         id:0,
            //         urlImg:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            //         message1:'京城周末撒欢',
            //         message2:'在帝都过周末，不仅仅是城中游！'
            //     },
            //     {
            //         id:1,
            //         urlImg:'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
            //         message1:'京城溜娃必去',
            //         message2:'德智体美劳全面发展的亲子日，这些地方该去看看…'
            //     },
            //     {
            //         id:2,
            //         urlImg:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
            //         message1:'帝都必打卡',
            //         message2:'来北京必去的景点非这些地方莫属'
            //     },
            //     {
            //         id:3,
            //         urlImg:'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
            //         message1:'漂流勇进，烧烤露营',
            //         message2:'来北京必去的景点非这些地方莫属'
            //     },
            // ]
        }
    }
}
</script>

<style scoped>
.vacation-title{
    font-size: .28rem;
    padding-left: .26rem;
    height: .8rem;
    line-height: .8rem;
    color: #212121;
}
.vacation-item{
    background: #fff;
    font-size: .28rem;
}
.item-img{
    width: 100%;
    height: 0;    
    padding-bottom:37.4375%;   
    overflow: hidden;
}
.item-img img{
    width: 100%;
}
.item-message{
    padding:.2rem 0 .35rem .2rem;
}
.item-message p+p{
    color: #616161;
    font-size: .24rem;
    margin-top: .2rem;
}
</style>