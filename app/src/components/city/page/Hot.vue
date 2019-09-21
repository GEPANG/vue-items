<template>
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotCities" :key="item.id">
                {{item.name}}
            </li>
            <!-- <li class="hot-item">上海</li>
            <li class="hot-item">三亚</li>

            <li class="hot-item">香港</li>
            <li class="hot-item">杭州</li>
            <li class="hot-item">广州</li>

            <li class="hot-item">成都</li>
            <li class="hot-item">深圳</li>
            <li class="hot-item">苏州</li> -->
        </ul>
    </div>
</template>

<script>
export default {
    props:['hotCities'],
}
</script>

<style scoped>
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
        width: 33.333333333%;
        float: left;
        text-align: center;
        height: .9rem;
        line-height: .9rem;
        border-bottom: 1px solid #ddd;
    }
</style>