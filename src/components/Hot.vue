<template>
  <div class="hot_nav">
<div class="banner" :style="'background:url('+bgimg+')'" v-if="$route.params.id===undefined">
      <div class="ymusic" v-if="$route.params.id===undefined"></div>
  <div class="banner_title" v-if="$route.params.id===undefined"></div>
  
 
  <div v-else  class="list_title">
  <img :src="bgimg">
  </div>

<p class="songlist_title" v-if="$route.params.id!=undefined">{{title}}</p>

  <p v-if="$route.params.id===undefined">更新日期：{{time | formatTime}}</p>

  <!-- <div class="banner_bg">


  </div> -->
  
</div>



<div class="list_banner" :style="'background:url('+bgimg+')'" v-if="$route.params.id!=undefined">

<div class="blur" :style="'background:url('+bgimg+')'"></div>
   
  <div class="banner_title" v-if="$route.params.id===undefined"></div>
  
 
  <div v-else  class="list_title">
  <img :src="bgimg">
  </div>

<p class="songlist_title" v-if="$route.params.id!=undefined">{{title}}</p>

 
  
  <!-- <div class="banner_bg">


  </div> -->
  
</div>



<div class="info"  v-if="$route.params.id!=undefined">
<!-- 标签 -->
 <div class="hash_tag" >标签：
    <button class="hash_tag_btn" v-for="(tag_item,i) of hashTag" :key="i">{{hashTag[i]}}</button>
    </div>
<p class="scribe">
简介：{{scribe}}
</p>


</div>


<div class="hot_list" >
  <div class="songlist" v-if="$route.params.id!=undefined">歌曲列表</div>
<ul>
  <li v-for="(item ,i) of arr" :key="item.id" @click="toPlay(item.id)">
    <div class="num_small" v-if="true?10>(i+1):10<(i+1)">
{{'0'+(i+1)}}
    </div>
     <div class="num_big" v-if="false?10>(i+1):10<=(i+1)">
{{i+1}}
    </div>
    <div class="song">
      <p class="title">{{item.name}}<span v-show="true?item.alia[0]!=undefined:item.alia[0]=undefined" class="alia">{{'('+item.alia[0]+')'}}</span></p>
  <p class="singer"><span class="sq"></span>{{item.ar[0].name}}-{{item.al.name}}</p>
  </div>
    
  <span class="play"></span></li>
 <li><span class="play"></span></li>
</ul>

</div>



  </div>
</template>

<script>

export default {
data() {
  return {
    arr:[],
    time:'',
    bgimg:'',
    title:'',
    hashTag:[],
    scribe:''
  }
},
    filters:{
formatTime(t){
    var date=new Date(t);
    var year=date.getFullYear();
    var month=date.getMonth()+1>9?date.getMonth()+1:'0'+(date.getMonth()+1)
    var day=date.getDate()>9?date.getDate():'0'+date.getDate();
return `${year}年${month}月${day}日`
}
    },

mounted() {
 var url=this.api.hot

 if(this.$route.params.id!=undefined){
   url=this.api.songlist+'?id='+this.$route.params.id
 }
    this.axios({url}).then(res=>{
     console.log(res.data.playlist.tracks)
    this.arr=res.data.playlist.tracks
    this.time=res.data.playlist.updateTime
    this.bgimg=res.data.playlist.coverImgUrl
    this.title=res.data.playlist.name
    this.hashTag=res.data.playlist.tags
    this.scribe=res.data.playlist.description
    console.log(this.title)
  })
},
 
methods: {
  toPlay(id){
    this.$router.push('/play/'+id)
  }
},
}
</script>

<style scoped>
.hot_nav .banner p{
font-size: 0.21rem;
color: white;
padding: 0.3rem;

}
.hot_nav .banner .banner_title{
  background-size: 105%;
 width:3rem;
  height: 0.94rem;
  background-position: 3rem -0.9rem;
  background-image: url("../../public/img/music/index_icon.jpg")
}
.hot_nav .banner .ymusic{
  background-size: 110%;
  width:3rem;
  height: 0.5rem;
  background-position: -0.2rem -0.5rem;
  background-image: url("../../public/img/music/index_icon.jpg")
}
.hot_nav{
  width: 100%;
}
.banner{
  position: relative;
  background-size: cover;
  /* background-image: url('../../public/img/music/hot_music_bg.jpg'); */
  display: flex;
  flex-direction: column;
  padding-top:0.25rem;
  padding-bottom:0.2rem;
  justify-content: space-around;
  z-index: 0;
}





/* 播放列表 */
.hot_list ul{
  width: 100%;
  
}
.hot_list ul li{
  height: 1rem;
  overflow: hidden;
  border-bottom: lightgray 1px solid;
  line-height: 0.6rem;
  position: relative;


  
}
.hot_list ul li .play{
  position: absolute;
  right: 2%;
  top:30%;
  background-size: 550%;
  width:0.6rem;
  height: 0.6rem;
  
  background-position: -.4rem 0rem;
  background-image: url("../../public/img/music/index_icon.jpg")
}

.hot_list ul li .song{
  display: inline-block;
  vertical-align: bottom;
  height: 1rem;
  line-height: 0.46rem;
}

.hot_list ul li .num_small,.hot_list ul li .num_big {
color: gray;
font-size: 0.28rem;
display: inline-block;
margin: 0.2rem; 
}
.hot_list ul li:nth-of-type(-n+3) .num_small{
  color:  #d43c33;
}

.hot_list ul li .title{
white-space: nowrap;
  font-size: 0.3rem;
  width:4.5rem;
  display:block;
  overflow:hidden;
  word-break:keep-all;
  white-space:nowrap;
  text-overflow:ellipsis;
  display: inline-block;
  vertical-align: top;

}

.hot_list ul li .title .alia{
color: gray;
width:6rem;
  display:block;
  overflow:hidden;
  word-break:keep-all;
  white-space:nowrap;
  text-overflow:ellipsis;
  display: inline-block;
  vertical-align: top;
}


.hot_list ul li .singer{
  color: gray;
  font-size: 0.22rem;
  
}

.hot_list ul li p .sq{

 display: inline-block;
  background-size: 1000%;
  width:0.3rem;
  height: 0.15rem;
  margin-top: -0.52rem;
  
  background-position: 0rem 0rem;
  background-image: url("../../public/img/music/index_icon.jpg")
}

/* 歌单详情 */
.list_banner{
   position: relative;
  background-size: cover;
  /* background-image: url('../../public/img/music/hot_music_bg.jpg'); */
  display: flex;
  padding-top:0.25rem;
  padding-bottom:0.2rem;
overflow: hidden;
  z-index: 0;
}

.blur{
  position: absolute;
  margin-top: -10%;
  margin-left: -10%;
  width: 120%;
  height: 150%;
  filter: blur(0.3rem);
  z-index: 1;
  opacity: 0.98;
  
}

.list_title{
  width: 2rem;
  height: 2rem;
  margin: 0.25rem 0.2rem;
  margin-bottom: 0.4rem;
  z-index: 100;
    display: inline-block;

}
.list_title img{
  width: 100%;
}
.songlist_title{
  z-index: 50;
  color: white;
  font-size: 0.3rem;
  margin: 0.32rem 0;
}


/* 详情简介 */
.info{
  width: 90%;
  margin: auto;
}

/* 标签 */

.hash_tag{
  font-size: 0.26rem;
  margin: 0.3rem 0;
}

.hash_tag_btn{
  border-radius: 5rem;
border: 1px solid lightgray;
background-color: white;
height: 0.5rem;
padding:0 0.2rem;
  outline: none; 
  cursor: pointer;
}

.scribe{
  white-space: nowrap;
  font-size: 0.3rem;
  width:100%;
  margin: 0.4rem 0;
  display:block;
  overflow:hidden;
  word-break:keep-all;
  text-overflow:ellipsis;
  /* display: inline-block; */
    font-size: 0.24rem;
}



/* 歌曲列表表头 */
.songlist{
  background-color: rgb(233, 233, 233);
  font-size: 0.20rem;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.2rem;
  color: gray;
}
</style>