<template>
    <div class="app-lv">
        <h3>绿植盆栽</h3>
        <div class="bigImg">
            <img src="img/lvzhi.jpg" alt="">
        </div>
        <div class="duo-box">
            <div class="duo-item" v-for="item in list" :key="item.lid">
                <router-link :to="'/detaill?id='+item.lid">
                    <img :src="item.img_url"/>
                    <span class="title">{{item.title}}</span>
                    <span class="now">￥{{item.price}}</span>
                </router-link>
            </div>
        </div>
        <mt-button type="default" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data() {
            return {
                list:[],        //显示数据列表
                lno:0,          //当前页码
                lSize:6,        //页大小
                lCount:1     //总页数
            }
        },
        methods:{
            getMore(){
                this.lno++;
                //创建变量保存是否有当前页条件
                //true 有数据 false 无数据 
                var hasMore = this.lno <= this.lCount;
                //console.log(hasMore)
                //如果没有页数，停止函数执行 
                if(!hasMore){
                    //console.log(111)
                    Toast("已经是最后一页了")
                    return
                    }

                //1:发送请求 获取分页数据
                var url = "imglz?lno="+this.lno+"&lSize="+this.lSize;
                this.$http.get(url).then(result=>{
                    //this.list = result.body.data;
                    var rows = this.list.concat(result.body.data);
                    this.list = rows;
                    //保留总页数
                    this.lCount = result.body.lCount;
                });
                //2:并且显示组件模板中
            }
        },
        created(){
            this.getMore();
        }
    }
</script>
<style>
    .app-lv{
        width:100%;
        background: #fff;
        margin-bottom: 50px;
    }
    .app-lv>h3{
        padding: 15px 0 10px;
        margin:0px;
        font-size: 14px;
        color: #666;
    }
    .app-lv>div.bigImg{
        width:100%;
        height: 190px;
    }
    .app-lv>div.bigImg>img{
        width:100%;
    }
    .duo-box{
        width:100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .duo-item{
        width:48%;
        height: 220px;
    }
    .duo-item img{
        width:100%;
    }
    .duo-item>span.title{
        float: left;
        font-size: 12px;
        color:#333;
    }
    .duo-item>span.now{
        float: right;
        font-size: 12px;
        color:#71b64c;
    }
</style>
