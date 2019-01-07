<template>
    <div class="app-login">
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>用户登陆</h3>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- <form action="#"> -->
                        用户名称:<input type="text" placeholder="请输入用户名" v-model="uname">
                        用户密码:<input type="password" placeholder="请输入密码" v-model="upwd">
                        <button class="btn" @click="handleLogin">立即登陆</button>
                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data(){
            return{
                uname:"",
                upwd:""
            }
        },
        methods:{
            handleLogin(){
                //console.log(111);
                var uname=this.uname;
                var upwd=this.upwd;
                // console.log(uname);
                // console.log(upwd)
                // var url="Login?uname="+uname+"&upwd="+upwd
                // this.$http.get(url).then(result=>{
                //     var obj=result.body;
                //     if(obj.code==-1)
                //     Toast(obj.msg)
                //     else
                //     this.$router.push("Home");
                // });
                //上面兼容性太差
                var url="http://127.0.0.1:3300/login?uname="+uname+"&upwd="+upwd
                this.axios.get(url).then(result=>{
                    console.log(result)
                     var obj=result.data;
                     if(obj.code==1)
                     this.$router.push("Home");
                     else
                     Toast(obj.msg)
                })
            }
        }
    }
</script>
<style>
    .mui-card-header>h3{
        padding-left: 120px;
        font-size: 16px;
        font-weight: 500;
    }
    .btn{
        width:326px;
        height: 45px;
        background-color: #71b64c;
        color:#fff;
        font-size: 16px;
        font-weight: 400;
    }
</style>
