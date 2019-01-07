<template>
    <div class="app-detail">
        <img :src="list.img_url">
        <div class="deta">
            <h3>{{list.title}}</h3>
            <p>价格￥：<span>{{list.price}}</span></p>
            购买:
            <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button"  @click="sub">-</button>
                <input class="mui-input-numbox" type="number" value="1" v-model="val"/>
                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
            </div>
            <div class="footer">
                <button class="buy">立即购买</button>
                <button class="shopbuy" @click="addCart">加入购物车</button>
            </div>
        </div>
        <div class="detail">
            <h3>产品详情</h3>
            <img :src="list.deta1" alt="">
            <img :src="list.deta2" alt="">
            <img :src="list.deta3" alt="">
            <img :src="list.deta4" alt="">
            <img :src="list.deta5" alt="">
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        created(){
            this.getNewsInfo();
        },
        data(){
            return {
                id:this.$route.query.id,
                list:{},
                val:1
            }
        },
        methods:{
            addCart(){
                var pid=this.$route.params.id;
                var count=this.val;
                var uid=3;
                var url="http://127.0.0.1:3000/cart?pid="+pid+"&count="+count+"&uid="+uid;
                this.axios.get(url).then(result=>{
                    if(result.data.code==1){
                    //修改全局共享数据
                    this.$store.commit("increment",count);
                    Toast("添加成功")
                    }else
                    Toast("添加失败")
                })
            },
            getNewsInfo(){
                var id = this.$route.query.id;
                this.$http.get("deta?id="+id).then(result=>{
                    //console.log(result.body.data[0]);
                    this.list = result.body.data[0];
                }); 
            },
            sub(){
                if(this.val>1)
                this.val--;
            },
            add(){
                if(this.val<99)
                this.val++;
            }
        }
    }
</script>
<style>
    .app-detail{
        background: #fff;
    }
    .app-detail>img{
        height: 200px;
        width:50%;
    }
    .deta{
        width:50%;
        float: right;
        padding: 10px 15px;
        font-size: 14px;
    }
    .deta>h3{
        text-align: center;
        font-size: 16px;
        color: #000;
        font-weight: 400;
        padding-bottom: 10px;
    }
    .deta>p{
        font-size: 14px;
        color:#666;
    }
    .deta>p>span{
        font-size: 14px;
        color:#71b64c;
        font-weight: 700;
        margin-right: 10px;
    }
    button.mui-btn-numbox-minus{
        background-color: #eee !important;
    }
    button.mui-btn-numbox-plus{
        background-color: rgba(98,176,75,0.5) !important;
    }
    .footer{
        width:160px;
        margin-top: 30px;
    }
    .buy{
        font-size: 12px;
        border: 1px solid #71b64c;
        color:#71b64c
    }
    .shopbuy{
        font-size: 12px;
        float: right;
        background: #71b64c;
        color:#fff;
    }
    .detail{
        width:100%;
    }
    .detail h3{
        font-size: 14px;
        color:#222;
        text-align: center;
    }
    .detail img{
        width:100%;
    }
</style>
