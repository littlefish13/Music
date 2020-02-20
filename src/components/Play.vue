<template>
  <div class="play" v-if="detail" @click="toggle">
      <div class="bg" :style="'background:url('+picUrl+')'">

      </div>
      
      <img src="../../public/img/music/needle-ip6.png" class="needle" alt="">
    


    <!-- 播放 -->
      <div class="playing" >

      
<div class="play_btn">
    <transition>
     <div :class="{songImg:true, songmove:tip==='‖',songstop:tip==='▶'}">
<img :src="picUrl">
    </div>
    </transition>
   

    <div class="songImg_border">
<img src="../../public/img/music/disc-ip6.png" alt="">
    </div>
<audio :src="songUrl" ref="myaudio" ></audio>
    <div class="playing_btn"  v-show='isShow'>
      {{tip}}
      </div>
    
</div>
      


      </div>
 

      <div class="song_info">
<p class="song_name">{{detail.name}}
    <span class="origin_singer" v-if="detail.alia[0]">{{'('+detail.alia[0]+')'}}</span>
    <span class="singer">-{{detail.ar[0].name}}</span>


</p>

</div>

<div class="vcommon">
 <v-common v-show="!commonTag"></v-common>
</div>
<div class="common" @click.capture="toCommon(detail.id)" :songid='detail.id' v-show="commonTag" >
    <p>查看评论</p>
    
    
</div>

  </div>
</template>

<script>
import vCommon from './Common'
export default {
data() {
    return {
        songUrl:'',
        tip:'▶',
        detail:'',
        picUrl:'',
        isShow:true,
        id:'',
        commonTag:true
        
    } 
},
mounted() {
    // console.log(this.$route.params.songid)
    this.songUrl="https://music.163.com/song/media/outer/url?id="+this.$route.params.songid+".mp3"
// // console.log(this.songUrl)
this.axios({
    url:this.api.songdetail+'?ids='+this.$route.params.songid
    
}).then(res=>{
    console.log(this.$route)
    console.log(res.data.songs[0].name)

    this.detail=res.data.songs[0]
    
    this.picUrl=res.data.songs[0].al.picUrl
})


},
components:{
vCommon
},
methods: {
    toggle(){
        console.log(myaudio)
        this.isShow=!this.isShow
       var myaudio=this.$refs.myaudio;
       if(this.tip=='▶'){
        myaudio.play(); 
   this.tip="‖"
       }else{
           myaudio.pause();
           this.tip="▶"
       }
    
    },
   toCommon(id){       
//  this.$router.push('/common/'+id) 
 this.commonTag=!this.commonTag
   }
        
   
},
}
</script>

<style scoped>
.play{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    

}
.playing{
    width: 100%;
    height: 7rem;
    /* display: flex;
    justify-content:center;
    align-items:center;
    display:-webkit-flex; */

}

.play_btn{
 margin-top: 4rem;
  position: relative;
background: url("../../public/img/music/needle-ip6.png") no-repeat;
    /* background-size: 50%; */
    background-position: 5rem 5rem;
    /* background: url("../../public/img/music/disc-ip6.png") no-repeat; */
}
.playing_btn{
  position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;  
    width: 0.9rem;
    height: 0.9rem;
    background-color: rgb(112, 112, 112);
    opacity: 0.6;
    border-radius: 50%;
    border: 2px solid white;
    font-size: 0.5rem;
    color: white;
    text-align: center;
    line-height: 0.9rem;
}

.needle{
    width: 1.5rem;
    height: 2.6rem;
    z-index: 10;
    position: absolute;
    left: 45%;
}
.songImg_border img{
     width: 5rem;
    height: 5rem;
    margin: auto;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

}
.songImg{
       width: 3.2rem;
    height: 3.2rem;
    display: inline-block;
    position: absolute;
     left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    

}
.songImg img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.songmove{
    animation: circle 12s linear infinite;
}
.songstop{
    animation: circle 12s linear infinite;
    animation-play-state: paused;
}

/* 歌曲信息 */
.song_info{
flex: 1;
font-size: 0.31rem;
text-align: center;
overflow: hidden;
z-index: 3;
color: white;
line-height: 0.5rem;
width: 80%;
margin: auto;
}
.singer{
    font-size: 0.3rem;
    color: gray;
}



/* 背景 */
.bg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    filter: blur(0.3rem);
}



/* 旋转 */


@keyframes circle {
    0%{transform:rotate(0deg)}
    100%{transform: rotate(360deg)}
    }





    /* 查看评论 */

    .common{
        z-index: 50;
        position: absolute;
        left: 38%;
        bottom: 5%;
        width: 1.5rem;
        height: 0.5rem;
        color: red;
        font-size: 0.27rem;
        text-align: center;
        line-height: 0.5rem;
        opacity: 0.8;
        border-radius: 3rem;
        border:red solid 1px;
        cursor: pointer;
    }

   
</style>