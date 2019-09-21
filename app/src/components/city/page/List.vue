<template>
    <div ref="wrapper" class="wrapper">
        <div class="bg">
            <!-- hot -->
            <div class="hot">
                <div class="hot-title">热门城市</div>
                <ul class="hot-list">
                    <li class="hot-item" v-for="item in hotCities" :key="item.id"
                        @click="toHome(item.name)"
                    >
                        {{item.name}}
                    </li>
                </ul>
            </div>

            <!-- sort -->
            <div class="sort">
                <div class="sort-title">字母排序</div>
                <ul class="sort-list">
                    <li class="sort-item" v-for='(item,index) in cities' :key="index" 
                        @click="changeSort(index)"
                    >
                        {{index}}
                    </li>             
                </ul>
            </div>
            
            <!-- list -->
            <div class="list">
                <div v-for="(item,index) in cities" :key="index"
                    :ref="index"
                >
                    <div class="list-title">{{index}}</div>
                    <ul class="list-ul">
                        <li class="list-item" v-for="item in item" :key="item.id"
                            @click="toHome(item.name)"
                        >
                            {{item.name}}
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    props:['hotCities','cities'],
    data(){
        return{
            scroll:''
        }
    },
    mounted(){
        // console.log(this.$refs['wrapper']);
        let dom = this.$refs['wrapper'];
        this.scroll = new BScroll(dom,{
            pullUpLoad: true
        });
    },
    methods:{
        changeSort(sortName){
            // console.log(key);//获取sort里的某个字母
            // console.log(this.$refs[sortName][0]);//得到list页面的对应字母的城市
            this.scroll.scrollToElement(this.$refs[sortName][0],1000);
        },
        toHome(cityName){
            // alert(cityName);
            this.changeCity(cityName);
            this.$router.push({
                path:'/'
            })
        },
        ...mapMutations(['changeCity'])
    }    
}

</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 90vh;
        position: absolute;
        /* overflow: hidden; */
        left: 0;
        right: 0;
        bottom: 0;
        top: 1.48rem;
    }
    .bg{
        background: #f5f5f5;
    }
    /* hot */    
    .hot-title{    
        color: #212121;
        font-size: .24rem;
        padding:.24rem .3rem;
    }
    .hot-list{
        background: #fff;
        position: relative;
        font-size: .28rem;
        color: #212121;
        overflow: hidden;
        z-index: 98;
    }
    .hot-list:before{
        position: absolute;
        content: '';
        width:33.3333333333%;
        height: 100%;
        left: 33.3333333333%;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }
    .hot-item{
        position: relative;
        width: 33.333333333%;
        float: left;
        text-align: center;
        height: .9rem;
        line-height: .9rem;
        border-bottom: 1px solid #ddd;
        z-index: 99;
    }

    /* sort */
    .sort-title{    
        color: #212121;
        font-size: .24rem;
        padding: .24rem .3rem;
    }
    .sort-list{
        background: #fff;
        color: #212121;
        overflow: hidden;
    }
    .sort-item{
        font-size: .28rem;
        float:left;
        width: 16.66666666%;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
    }

    /* list */
    .list-title{
        padding: .24rem .3rem;
        font-size: .24rem;        
    }
    .list-ul{
        position: relative;
        color: #212121;
        background: #fff;
        overflow: hidden;
    }
    .list-ul:before{
         position: absolute;
         content: '';
         width: 25%;
         height: 100%;
         left: 25%;
         border-left: .02rem solid #ddd;
         border-right: .02rem solid #ddd;
    }
    .list-ul:after{
         position: absolute;
         content: '';
         width: 25%;
         height: 100%;
         left: 50%;
         border-right: .02rem solid #ddd;
    }
    /*.list-item+.list-item{
        border-left: 1px solid #ddd;
     } */
    .list-item{
        position: relative;
        float: left;
        font-size: .28rem;
        width: 25%;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ddd;
    }
</style>