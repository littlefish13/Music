<template>
<div class="search_nav">

  <div class="search">
    <span class="search_btn">
<img src="../../public/img/music/search.png" alt="">
    </span>
    <div class="search_input">
<input type="text"  placeholder="搜索歌曲、歌手、专辑" v-model.trim="str">
</div>
<div class="search_cancel" v-show="Tag" @click="str=''">x</div>
  </div>

<div class="hot_search"  v-show="Tag=!Tag">
<p class="hot_search_title">热门搜索</p>
<a><button class="hot_search_list" v-for="item of hotArr" :key="item.score" @click="search_btn(item.first)">{{item.first}}</button></a>

</div>

<div class="hot_searching" v-show="Tag=false?str='':str!=''">
<p class="hot_searching_title">搜索"{{str}}"</p>
<ul>
  <li v-for="item of arr" :key="item.id" @click="toPlay(item.id)"> <span class="search_btn">
<img src="../../public/img/music/search.png" alt="">
    </span>
    <p class="search_res">{{item.name}}</p>
    </li>
    
</ul>
</div>



  </div>
</template>

<script>
// import axios from 'axios'
export default {
data(){
  return{
    arr:[],
    str:'',
    Tag:true,
    hotArr:[],
  }
},
methods: {
  search_btn(item){
    this.str=item
  },
  toPlay(id){
    this.$router.push('/play/'+id)
  }
},

watch: {
  str:{
    handler(newVal,oldVal){
      console.log(this.str)
      this.arr=[]
      
      if(newVal !=""){
      this.axios({
    url:this.api.search+'?keywords='+newVal
   
  }).then(res=>{  
    this.arr=res.data.result.songs
    console.log(this.arr)
  })
      }
      
    },

  },



// hotArr:{
//  handler(newVal,oldVal){
//       this.hotArr=[]
//       if(newVal !=""){
//       axios({
//     url:"/music/search/hot/detail?cb=getHotArr"
//   }).then(res=>{
//     console.log(res)
//     this.hotArr=res.data.data
//     console.log(this.hotArr)

//   })
//       }
//  }

// }




},





mounted() {
  // axios({
  //   url:"/music/search?cb=getContent&keywords="+this.str,
  //   limit:6
  // }).then(res=>{
  //   console.log(res)
  //   this.arr=res.data.result.queryCorrected[0]
  //   console.log(this.str)

  // })
  // ,
   this.axios({
    url:this.api.searchhot
  }).then(res=>{
    this.hotArr=res.data.result.hots
  })
},







}





// function getContent(res){
//   vue.arr=res.s
// }

// function getHotArr(res){
//    vue.hotArr=res.s
// }


</script>

<style scoped>
.search{
  line-height: 0.5rem;
  position: relative;
  height: 1.1rem;
  border-bottom: 1px solid rgb(240, 240, 240);
  text-align: center;
  width: 100%;
}
.search input{
  border-radius: 5rem;
  width: 5.5rem;
  height: 0.5rem;
  background-color: rgb(245, 245, 245);
  padding-left: 0.6rem;
  border: none;
  outline: none; 
}

.search .search_input{
margin: 0 auto;
display: block;
}

.search input::-webkit-input-placeholder{
  color: rgb(190, 190, 190);
  }
.search_btn{
  display: inline-block;
  position: absolute;
  width: 0.26rem;
  left: 5.5%;
  top:5.5%;
}

.search_btn img{
  width: 100%;
}


.search_cancel{
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.25rem;
  border-radius: 50%;
  font-size: 0.3rem;
  color: rgb(235, 235, 235);
  position: absolute;
  right: 6%;
  top: 38%;
  background-color: rgb(167, 166, 166)
}

/* 热门搜索 */
.hot_search{
  margin: 0.2rem;
  display: block;
}
.hot_search .hot_search_title{

font-size: 0.21rem;
color: rgb(104, 103, 103);
}

.hot_search .hot_search_list{
border-radius: 5rem;
border: 1px solid lightgray;
background-color: white;
height: 0.5rem;
padding:0 0.18rem;
  outline: none; 
  cursor: pointer;
}




/* 正在搜索 */

.hot_searching .hot_searching_title{
color: rgb(57, 120, 192);
font-size: 0.27rem;
padding:0.3rem;
border-bottom: 1px solid rgb(240, 240, 240);
}
.hot_searching ul{
  width: 95%;
  margin: 0 auto;
}
.hot_searching ul li{
  position: relative;
 border-bottom: 1px solid rgb(240, 240, 240);
 height: 0.68rem;
 line-height:  0.68rem;
 overflow: hidden;
}


.hot_searching ul li .search_btn{
  display: inline-block;
  position: absolute;
  width: 0.26rem;
  left: 3%;
  top:-30%;
}


.search_res{
  font-size: 0.24rem;
  padding-left: 0.6rem;

}
.hot_search_list{
  margin: 0.11rem;
}

</style>