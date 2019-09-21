<template>
    <div class="city">
        <city-header></city-header>
        <!-- <city-hot :hotCities="hotCities"></city-hot>
        <city-sort :cities="cities"></city-sort> -->
        <city-list 
            :cities="cities"
            :hotCities="hotCities"
        ></city-list>
    </div>
</template>

<script>
import cityHeader from './page/Header'
// import cityHot from './page/Hot'
// import citySort from './page/Sort'
import cityList from './page/List'
export default {
    components:{
        cityHeader,
        // cityHot,
        // citySort,
        cityList
    },
    data(){
        return{
            cities:[],
            hotCities:[],
        }
    },
    mounted(){
        this.$axios.get('/api/city.json').then((res)=>{
            // console.log(res);
            let data = res.data.data;
            // console.log(data);
            this.cities=data.cities;
            this.hotCities=data.hotCities;
        })
    }
}
</script>

<style scoped>
    .city{
        position: relative;
        background: #f5f5f5;
        /* height: 3000px; */
        /* overflow-y: scroll; */
    }
</style>