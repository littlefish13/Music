<template>
  <div class="hot_list" >

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
</template>

<script>
export default {
props:['arr'],
// data() {
//   return {
//     arr:[]
//   }
// },
methods: {
  toPlay(id){
    this.$router.push('/play/'+id)
  }
},
}
</script>

<style scoped>
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
</style>