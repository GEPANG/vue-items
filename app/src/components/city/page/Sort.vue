<template>
    <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
            <li class="sort-item" v-for='(item,index) in cities' :key="index">{{index}}</li>
            <!-- <li class="sort-item">B</li>
            <li class="sort-item">C</li>
            <li class="sort-item">D</li>
            <li class="sort-item">E</li>
            <li class="sort-item">F</li>
            <li class="sort-item">G</li>
            <li class="sort-item">H</li>
            <li class="sort-item">J</li>
            <li class="sort-item">K</li>
            <li class="sort-item">L</li>
            <li class="sort-item">M</li>
            <li class="sort-item">N</li>
            <li class="sort-item">P</li>
            <li class="sort-item">Q</li>
            <li class="sort-item">R</li>
            <li class="sort-item">S</li>
            <li class="sort-item">T</li>
            <li class="sort-item">W</li>
            <li class="sort-item">X</li>
            <li class="sort-item">Y</li>
            <li class="sort-item">Z</li> -->            
        </ul>
    </div>
</template>

<script>
export default {
    props:['cities'],
}
</script>

<style scoped>
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
</style>