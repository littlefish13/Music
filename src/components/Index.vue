<template>
  <div>
<div class="top">
    <div class="top_info">
        <img src="../../public/img/music/01.gif" alt="">
    </div>
    <div class="top_btn">
<img src="../../public/img/music/02.gif" alt="">
    </div>
</div>

      <div class="nav">

      <router-link to='/index/recommend' active-class="active">推荐音乐</router-link>
      <router-link to='/index/hot' active-class="active">热歌榜</router-link>
      <router-link to='/index/search' active-class="active">搜索</router-link>

      </div>
<div class="content">
      <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top{
    width:100%;
    height: 1.5rem;
    background-color: #d43c33;
    display: flex;
    justify-content: space-around;
  
}
.top_info{
    width:4rem;
}
.top_btn{
    margin-top: .2rem;
    
}

.nav{
    display: flex;
    text-align: center;
    justify-content: space-around;
    border-bottom: rgb(235, 235, 235) 1px solid;
}

.nav a{
    font-size: 0.27rem;
    width: 1.2rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-decoration: none;
    color: black;
}

.nav a.active{
    color:  #d43c33;
    border-bottom: 0.05rem solid #d43c33;
}


</style>