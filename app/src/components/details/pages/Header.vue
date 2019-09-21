
<template>
    <div class="header">
        <div class="header-return"  v-show="showTop" @click="toHome">
            <span class="box"></span>
            <span class="iconfont return">&#xe624;</span>
        </div>
        <div class="header-top" v-show="!showTop"
            :style="styleOpacity"
        >            
            <span class="iconfont" @click="toHome">&#xe624;</span>
            <h1>欣港湾休闲综合体</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showTop:true,
            styleOpacity:{
                "opacity":"",
            }
        }
    },
    mounted(){
        var That=this;
        window.addEventListener("scroll",function(){
            // console.log(document.documentElement.scrollTop);
                let numTop=document.documentElement.scrollTop;
                if(numTop>40){
                    // console.log(That.styleOpacity['opacity']);
                    let opacity = numTop/200;
                    // console.log(opacity)
                   var opacity = opacity>1?1:opacity;
                    That.styleOpacity={opacity};
                    That.showTop=false;
                }else{
                    That.showTop=true;
                }
            })
    },
    methods:{
        toHome(){
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>

<style scoped>
    .header-return{
        position: absolute;
        left: .1rem;
        top: .1rem;
        width: .72rem;
        height: .72rem; 
        z-index: 2;
    }
    .box{
        display: block;
        width: .72rem;
        height: .72rem; 
        border-radius: 50%;
        opacity: .5;
        background: #000;
    }
    .return{
        position: absolute;
        top: .15rem;
        left: .12rem;        
        width: .72rem;
        height: .72rem; 
        font-size: .4rem;
        font-weight: bold;
        color: #fff;
    }

    .header-top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;    
        opacity: 1;
        background: #00bcd4;
        display: block;
    }
    .header-top span{
        position: absolute;
        left: .2rem;
        top: -.04rem;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
        font-size: .36rem;
        font-weight:bold;
        color: #fff;
    }
    .header-top h1{
        margin: 0 1rem;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        line-height: .88rem;
    }
</style>