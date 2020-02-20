<template>
  <div >
      <!-- <div class="play_btn">
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
</div> -->



<!-- <div class="vplay">
 <v-play @click="toggle"></v-play>
</div> -->



<div class="mask" v-show="isShow">
    <p class="common_title">歌曲评论</p>
    <div class="del" @click="commonTag">x</div>
    <ul>

        <li v-for="(common,i) of commonArr" :key="i"><span class="userImg"><img :src="common.user.avatarUrl" alt=""></span> <p>{{common.content}}</p></li>
    </ul>
       
    </div>

  </div>

</template>

<script>
// import vPlay from './Play'
export default {
    
props:['songid','commonIshow'],

data() {
    return {
        songUrl:'',
        tip:'▶',
        detail:'',
        picUrl:'',
        isShow:true,
        arr:[],
        url:'',
        commonArr:[],
       
        

    } 
},
components:{
    // vPlay
},

mounted() {
//     // console.log(this.$route.params.songid)
//     this.songUrl="https://music.163.com/song/media/outer/url?id="+this.$route.params.songid+".mp3"
// console.log(this.$route.params.id)
// this.axios({
//     url:this.api.songdetail+'?ids='+this.$route.params.songid
    
// }).then(res=>{
//     console.log(res)
//     console.log(res.data.songs[0].name)

//     this.detail=res.data.songs[0]
//     this.picUrl=res.data.songs[0].al.picUrl
// })






    this.axios({
    url:this.api.common+'?id='+this.$route.params.songid+'&limit=1'
    
}).then(result=>{
   
    console.log(result)
    console.log(this.$route.params.songid)
    // console.log(res.data.songs[0].name)
// this.arr=res.
    // this.detail=res.data.songs[0]
    // this.picUrl=res.data.songs[0].al.picUrl
    this.commonArr=result.data.hotComments
    console.log(this.commonArr)
})





},
methods: {
    toggle(){
     
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
    commonTag(){
this.isShow=!this.isShow
    }
},






}
</script>

<style scoped>

.play_btn{
 margin-top: 4rem;
  position: relative;
background: url("../../public/img/music/needle-ip6.png") no-repeat;

    background-position: 5rem 5rem;
   
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

/* 查看评论 */

   .mask{
       height: 17%;
      position: absolute;
      top:72%;
      left: 2.3%;
       overflow: scroll;
       margin: auto;
       width: 82%;
       z-index: 100;
      background-color: rgb(105, 105, 105);
      opacity: 0.9;
      font-size: 0.24rem;
     border-radius: 0.5rem;
     padding: 0.4rem;
   }
 
   .mask ul li {
       height: 0.4rem;
     width: 100%;
  font-size: 0.28rem;
  line-height: 0.4rem;
  position: relative;
  margin-bottom: 0.2rem;
   }
   .mask ul li p{
       color: white;
 width: 95%;
 height: 100%;
 padding-left: 0.5rem;

  display:block;
  overflow:hidden;
  word-break:keep-all;
  white-space:nowrap;
  text-overflow:ellipsis;
  display: inline-block;


   }


.common_title{
    font-size: 0.33rem;
    margin-bottom: 0.25rem;
    color:  #d43c33;
    font-weight: bold;
}

/* 用户头像 */
.userImg{
    position: absolute;
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem; 
    vertical-align: middle;
}

.userImg img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}


/* 取消按钮 */

.del{
    position: absolute;
    top:10%;
    right: 5%;
    color: white;
    border-radius: 50%;
    border: 1px solid white;
    font-size: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    line-height: 0.25rem;
    text-align: center;
}
</style>