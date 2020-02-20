<template>
  <div class="list">
      <!-- 图片 -->
<div class="hottop" style="'background:url('+bgimg+')'">

    <div class="hoticon" >
        <div class="hottime">更新日期：{{time | formatTime}}</div>
    </div>
</div>


<!-- 歌曲列表 -->

<div class="box">
<div class="item" v-for="(song,index) of songs" :key="song.id" @click="toPlay(song.id)">
    <div class="num">{{index+1>9?(index+1):'0'+(index+1)}}</div>
<div class="info">
<div class="song">{{song.name}}</div>
<div class="singer">
    <span v-for="(item,index2) of song.ar" :key="index2">{{item.name}}</span>
</div>
</div>

</div>

</div>


  </div>
</template>

<script>
export default {
    filters:{
formatTime(t){
    var date=new Date(t);
    var year=date.year();
    var month=date.getMonth()+1>9?date.getMonth()+1:'0'+(date.getMonth()+1)
    var day=date.getDate()>9?date.getDate():'0'+date.getDate();
return `${year}年${month}月${day}日`
}
    },
data(){
    return{
        songs:[],
        time:'',
    }
},
mounted() {
  this.axios({
    //   url:'/music/top/list?idx=1'
    url:this.apis.hot
  })  .then(res=>{
      this.song=res.data.playlist.tracks
      this.time=res.data.playlist.updatetime
  })
},

methods: {
    
},
}
</script>

<style scoped>

.list{
    /* view width */
    width: 100vw;
    
    height: 100vh;
}
/* 图片 */
.hottop{
height: 3rem;
width: 100%;
background-image: url('../../public/img/music/hot_music_bg.jpg');
}

.hoticon{
  background: url("../../public/img/music/index_icon.jpg") no-repeat;
  background-size: 3rem 2rem;
  height: 1.7rem;
background-position: -0.3rem -0.6rem;
position: relative;
top:0.5rem;
}


.hottime{
    font-size: 0.3rem;
    color: white;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
}

/* 列表 */
.item{
    display: flex;
    margin-bottom: .1rem;
    padding:.2rem;
}

.item .num{
    font-size: 0.3rem;
    margin-top:0.2rem;
}
.item .info{
margin-left: 0.3rem;
}
.item .info .song{
font-size: 0.4rem;
color: #333;

}
.item .info .singer{
font-size: 0.2rem;
color: #999;
margin-top: 0.2rem;

}

</style>