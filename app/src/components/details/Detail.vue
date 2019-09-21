<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div style="height:2000px;"></div>
    </div>
</template>

<script>
import detailBanner from './pages/Banner'
import detailHeader from './pages/Header'
export default {
    components:{
        detailBanner,
        detailHeader,
    },
    activated(){
        document.documentElement.scrollTop=0;
    }
}
</script>

<style>
</style>