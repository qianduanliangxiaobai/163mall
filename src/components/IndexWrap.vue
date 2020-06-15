<template>
  <div class="title">   
     <van-row type="flex" justify="space-between">
        <van-col span="5">
          <img src="../assets/logo-img.png" alt="" class="logo">
        </van-col>
        <van-col span="16"  class="search_div" @click="search()">
          <van-icon name="search"  size="1rem"/>
        </van-col>
        <van-col span="3">
          <van-button type="primary" size="mini" class="login-btn">登录</van-button>
        </van-col>
     </van-row>
  </div>
</template>

<script>
export default {
  name: 'Indexwrap',
  data(){
    return {
      msg:'123'
    }
  },
  methods:{
    search(){
      this.$router.push('./search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 3.84rem;
  height: 1.533333rem;
  margin-left: 3rem;
  padding-top: 0.5rem;
}
.login-btn{
  width: 1.98667rem;
  height:1.9333rem;
  line-height: .53333rem;
  text-align: center;
  color: #DD1A21;
  border:1px solid #DD1A21;
  border-radius: .10667rem;
  margin-left: .21333rem;
  font-size: .32rem;
  background: white;
  /* vertical-align: middle; */
  /* margin: 0 auto; */
  /* display: flex;
  justify-content: center; */
}
.search_div{
  background: #ededed;
  border-radius: 0.5rem;
   display: flex;
  align-items: center;
}
</style>
