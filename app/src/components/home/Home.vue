<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-location></home-location>
        <home-activity></home-activity>
        <home-hot :hotList="hotList"></home-hot>
        <home-like :likeList="likeList"></home-like>
        <home-vacation :vacationList="vacationList"></home-vacation>        
    </div>
</template>
<script>
import {mapState} from 'vuex'
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'
export default {
    computed:{
        ...mapState(['city'])
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot,
        HomeLike,
        HomeVacation
    },
    data(){
        return{            
            swiperList:[],            
            iconList:[],
            hotList:[],
            likeList:[],
            vacationList:[],
            nowCity:'',
        }
    },
    methods:{
        http(){
            this.$axios.get('/api/dataHome.json#/').then((res)=>{
                // console.log(res.data.data);
                let datas=res.data.data;
                datas.forEach((item,index) => {
                    // console.log(index);
                    // console.log(item.city);  
                    if(this.city==item.city){
                        // console.log(item);
                        this.swiperList=item.swiperList;
                        this.iconList=item.iconsList;
                        this.hotList=item.hotList;
                        this.likeList=item.likeList;
                        this.vacationList=item.vacationList;
                    }else{
                        let swiper=res.data.data[0].swiperList;
                        let icon=res.data.data[0].iconsList;
                        let hot=res.data.data[0].hotList;
                        let like=res.data.data[0].likeList;
                        let vacation=res.data.data[0].vacationList;

                        this.swiperList=swiper;
                        this.iconList=icon;
                        this.hotList=hot;
                        this.likeList=like;
                        this.vacationList=vacation;
                    }
                });                
            })
        }
    },
    mounted(){       
        // console.log(this.city);
        this.nowCity=this.city;
        this.http();
    },
    activated(){
        // console.log(this.nowCity);
       if(this.nowCity!=this.city){
           this.nowCity=this.city;
           this.http();
        // console.log(this.nowCity,this.city);
       }
    }
}
</script>
<style scoped>
.home{
    width: 100%;
    overflow: hidden;
    background: #f5f5f5;
}
</style>