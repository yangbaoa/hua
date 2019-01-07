<template>
   <div class="app-home">
       <mt-swipe :auto="5000">
           <mt-swipe-item v-for="item in list" :key="item.id">
               <img :src="item.img_url" alt=""/>
           </mt-swipe-item>
       </mt-swipe>
       <div class="dr">
            <div class="header">
                <p>New 多肉上新
                    <span>多肉新品，万象出品</span>
                </p>
                <p>
                    <router-link to="/duo">更多新品 ></router-link>
                </p>
            </div>
            <div class="content">
                <div class="con_item" v-for="item in imgs" :key="item.id">
                    <div class="con_tit">{{item.title}}</div>
                    <div class="con_img">
                        <img :src="item.img_url"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="dr">
            <div class="header">
                <p>Hot 热门绿植</p>
                <p>
                    <router-link to="/lvz">更多新品 ></router-link>
                </p>
            </div>
            <div class="content">
                <div class="con_item" v-for="item in imgll" :key="item.id">
                    <div class="con_tit">{{item.title}}</div>
                    <div class="con_img">
                        <img :src="item.img_url"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="header">
                <p>多肉植物</p>
                <p>
                    <router-link to="/duo">更多 ></router-link>
                </p>
            </div>
            <img src="img/drzw.jpg"/>
            <div class="box_con">
                <div class="box_item" v-for="item in imgdr" :key="item.id">
                    <img :src="item.img_url"/>
                    <h3 class="bot">{{item.title}}</h3>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="header">
                <p>绿植盆栽</p>
                <p>
                    <router-link to="/lvz">更多 ></router-link>
                </p>
            </div>
            <img src="img/lzpz.jpg"/>
            <div class="box_con">
                <div class="box_item" v-for="item in imglz" :key="item.id">
                    <img :src="item.img_url"/>
                    <h3 class="bot">{{item.title}}</h3>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="header">
                <p>园艺资材</p>
                <p>
                    <router-link to="/yuan">更多 ></router-link>
                </p>
            </div>
            <img src="img/yyzc.jpg"/>
            <div class="box_con">
                <div class="box_item" v-for="item in imgyy" :key="item.id">
                    <img :src="item.img_url"/>
                    <h3 class="bot">{{item.title}}</h3>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
    export default {
        created() {
            this.getImage();
            this.getRimg();
            this.getLimg();
            this.getDrimg();
            this.getLzimg();
            this.getYyimg();
        },
        methods: {
            getImage(){
                //console.log(111)
                this.$http.get("imagelist").then(result=>{
                    //console.log(result.body)
                    this.list=result.body
                })
            },
            getRimg(){
                this.$http.get("imgdrr").then(result=>{
                    //console.log(result)
                    this.imgs=result.body
                })
            },
            getLimg(){
                this.$http.get("imgll").then(result=>{
                    //console.log(result)
                    this.imgll=result.body
                })
            },
            getDrimg(){
                this.$http.get("imgduorou").then(result=>{
                    //console.log(result)
                    this.imgdr=result.body
                })
            },
            getLzimg() {
                this.$http.get("imglvz").then(result=>{
                    //console.log(result)
                    this.imglz=result.body
                })
            },
            getYyimg() {
                this.$http.get("imgyy").then(result=>{
                    //console.log(result)
                    this.imgyy=result.body
                })
            }
        },
        data() {
            return {
                list:[],
                imgs:[],
                imgll:[],
                imgdr:[],
                imglz:[],
                imgyy:[]
            }
        }
    }
</script>
<style>
    .app-home .mint-swipe{
        height: 170px;
        background: #fff;
    }
    .app-home .mint-swipe img{
        width: 100%;
        height: 130px;
    }
    .mint-swipe-indicators .mint-swipe-indicator.is-active{
        background: #71b64c;
    }
    .dr{
        overflow: hidden;
        position: relative;
        width:100%;
        padding-top: 15px;
        background: #fff;
    }
    .header{
        overflow: hidden;
        margin-bottom: 10px
    }
    .header>p:first-child{
        letter-spacing: -1px;
        font-weight: 900;
        font-size: 15px;
        color:#000;
        float: left;
    }
    .header>p:first-child>span{
        font-size: 12px;
        color:#333;
        margin-left: 6px;
    }
    .header>p:nth-child(2){
        font-size: 12px;
        float: right;
    }
    .header>p:nth-child(2)>a{
        color:#a4a4a4;
    }
    .content{
        width:100%;
        display: flex;
        justify-content: space-around;
    }
    .con_item{
        width:48%;
        height: 220px;
    }
    .con_item>.con_tit{
        height: 20px;
        color:#666;
        font-size: 12px;
        text-align: center;
    }
    .con_item>.con_img{
        height: 200px;
    }
    .con_item>.con_img>img{
        width: 100%;
    }
    .box{
        overflow: hidden;
        position: relative;
        padding-top: 15px;
        background: #fff;
    }
    .box>img{
        width:100%;
        height: 105px;
        margin-bottom: 10px;
    }
    .box_con{
        width:100%;
        height: 135px;
        font-size: 14px;
        text-align: center;
        display: flex;
        justify-content: space-around;
    }
    .box_con .box_item{
        display: inline-block;
        width: 24%;
        height: 130px;
    }
    .box_con .box_item>img{
        width: 100%;
    }
    .box_con .box_item .bot{
        font-size: 12px;
        color: #666;
    }
</style>
