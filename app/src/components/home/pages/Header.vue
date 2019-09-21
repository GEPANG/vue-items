<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-search">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
      </div>
      <div class="header-right" @click="toCity">
          {{city}}<span class="iconfont">&#xe6aa;</span>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['city'])
    },
    methods:{
        toCity(){
            this.$router.push({
                path:'/city',
            })
        }
    }
}
</script>
<style scoped lang="stylus">
// @import '../../../assets/css/var.styl';
// @import '~@/assets/css/var.styl'

/*
    在bulid下面的webpack.base.conf.js文件下修改初始目录选择
    这里css表示的是（src/assets/css）；
*/
@import '~css/var.styl';



.header{
    width: 100%;
    height: .88rem;/*1rem=50px ,,,,,,,, .88rem=44px*/
    background:$bg;
    color: #fff;
    display: flex;
    font-size: .36rem;
    justify-content: space-between;
    align-items: center;
}
.header-left{
    width: .4rem;
    padding:0 .2rem;
    font-weight:bold;
}
.header-search{    
    flex: 1;
    background: #fff;
    height: .6rem;
    line-height: .6rem;
    color: #e4e7ea;
    border-radius: .1rem;
    padding-left: .2rem;
    font-size: .28rem;
}
.header-right{
    padding:0 .2rem;
    font-size: .28rem;
    letter-spacing:.04rem;
}
</style>