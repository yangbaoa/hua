<template>
    <div class="app-detail">
        <img :src="list.img_url">
        <div class="deta">
            <h3>{{list.title}}</h3>
            <p>价格￥：<span>{{list.price}}</span></p>
            购买:
            <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" value="1"/>
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
            <div class="footer">
                <button class="buy">立即购买</button>
                <button class="shopbuy">加入购物车</button>
            </div>
        </div>
        <div class="detail">
            <h3>产品详情</h3>
            <img :src="list.ldeta1" alt="">
            <img :src="list.ldeta2" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.getNewsInfo();
        },
        data(){
            return {
                id:this.$route.query.id,
                list:{}
            }
        },
        methods:{
            getNewsInfo(){
                var id = this.$route.query.id;
                this.$http.get("detail?id="+id).then(result=>{
                    //console.log(result.body.data[0]);
                    this.list = result.body.data[0];
                }); 
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
