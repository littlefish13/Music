<template>
  <div>
<!-- banner轮播图 -->


<template>
  <swiper v-if="banners.length>0" class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="banner of banners" :key="banner.bannerId" @click="toCommon(banners.song.id)">
        <img :src="banner.pic" alt=""  >
    </swiper-slide>
  
    <!-- Optional controls -->
    <!-- 分页器 -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- 左按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <!-- 右按钮 -->
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>







<!-- 推荐歌单 -->
      <h1 class="h1">推荐歌单</h1>
      <div class="box">
          <div class="item" v-for='item of arr' :key='item.id' @click="toList(item.id)">
              <img :src="item.picUrl">
              <p class="title">{{item.name}}</p>
          </div>
      </div>



<!-- 最新歌单 -->
<div class="new_list">
  <h1 class="h1">最新歌单</h1>
<v-list :arr='songs'></v-list> 
      </div>


      </div>
</template>

<script>
//引入swiper
import {swiper,swiperSlide} from 'vue-awesome-swiper'


import { log } from 'util'


import vList from './Songlist'
export default {
  
   data(){
       return{
           arr:[],
           songs:[],
          
        //    轮播图配置选项
           swiperOption:{
               autoplay:true,//自动播放
               speed:2000,//播放速度
               loop:true,
               pagination:{
                   el:'.swiper-pagination',//分页器容器
                   clicktable:true,//分页器可以点击
               },
               //左右两边的导航按钮
               navigation:{
                   nextEl:'.swiper-button-next',
                   prevEl:'.swiper-button-prev',
               }
           },
                banners:[],
       }
   },
   
components:{
swiper,swiperSlide,vList
},

mounted(){
//     axios({
// url:'/music/personalized'
//     }).then(res=>{
// this.arr=res.data.result
//     });
    //请求轮播图接口

    // axios({
    //     url:'/music/banner?type=2'
    // }).then(result=>{
    //     console.log(result)
    //     this.banners=result.data.banners
    // })
this.axios.all([this.getBanner(),this.getPersonalized(),this.getNewList()])
.then(this.axios.spread((banners,result,newlist)=>{
  this.banners=banners.data.banners;
  this.arr=result.data.result;
  this.songs=newlist.data.playlist.tracks
  console.log(this.banners)
}))


},
methods: {
    callback(){},
    getBanner(){
    return this.axios.get(this.api.banner)
    },
    getPersonalized(){
  return this.axios.get(this.api.personalized)  
  },
getNewList(){
    return this.axios.get(this.api.newlist)
},

  toList(id){
      this.$router.push('/songlist/'+id)
  },

},
}
</script>

<style scoped>

.swiper{
    height: 3rem;
}
.swiper img{
    height: 100%;
    width: 100%;
}

.h1{
    margin-top: 0.4rem;
    font-size: 0.3rem;
    border-left: solid 2px  #d43c33;
    padding-left: 0.2rem;
}
.box{
    margin-top: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.box .item{
width: 32.9%;
margin-bottom: 0.2rem;
}
.box .item img{
    width: 100%;
}
.box .item .title{
    font-size: 0.23rem;
}

</style>