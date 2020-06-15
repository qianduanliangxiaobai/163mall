<template>
    
   <div class="title-div">
    
        <van-row type="flex" justify="space-between">
            <van-col span="20">
                <van-field
                    v-model="value1"
                    @input="inputValFn"
                    class="search-div"
                    left-icon="smile-o"
                    label="剁手预警"
                   
                    placeholder="好货内部价"
                >
                    <template v-slot:left-icon>
                        <van-icon name="search"  class="search-iconleft"/>
                    </template>
                    <template #button>
                        <van-icon name="close" @click="clear_search_inputValFn" v-show="isClose"/>
                    </template>
                </van-field> 
            </van-col>
            <van-col span="3">
                 <van-button @click="cancle()" plain type="info"  class="cancle-btn" size="small">取消</van-button>
            </van-col>
           
        </van-row>
   </div>


</template>
<script>
export default {
    name:'searchPage',
    data(){
        return {
            value1:"",
            isClose:false
        }
    },
    methods:{
        cancle(){
            this.$router.push('/')
        },
        inputValFn(v){
            this.value1=v;
            // console.log(v)
        },
        clear_search_inputValFn(){
            this.value1='';
           this.$nextTick(
             ()=>{
                   this.isClose=false;
             
           })
        }
    },
    watch:{
        value1(){
            this.isClose=true;
        }
    }
}
</script>
 <style  scoped>
.cancle-btn{
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
}
.title-div{
     /* display: flex; */
    /* justify-content: center; */
    padding: 0 20px;
}
.search-div{
    padding-top: 0;
    padding-left: 2rem;
    padding-bottom: 0;
    border:0;
    background-color:#f4f4f4 ;
    height: 2rem;
    border-radius: 5px;
   
}
.search-iconleft{
    font-size:1.2rem;
}
</style>