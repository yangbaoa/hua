<template>
    <div class="app-container">
        <div class="app">
            <div class="tit">
                <img src="img/logonew.png" alt="">
            </div>
            <nav class="navb">
                <router-link to="/home">首页</router-link>
                <router-link to="/duo">多肉</router-link>
                <router-link to="/lvz">绿植</router-link>
                <router-link to="/yuan">园艺</router-link>
            </nav>
        </div>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
            <router-link class="mui-tab-item" to="/login">
				<span class="mui-icon mui-icon-contact">
        		</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
            <router-link class="mui-tab-item" to="/recommended">
				<a><span class="mui-icon mui-icon-extra mui-icon-extra-new"></span></a>
			</router-link>
		</nav>
    </div>

</template>

<style>
    .app{
        height: 80px;
        background: #fff;
    }
    .tit{
        width:100%;
        height: 36px;
        line-height: 55px;
        text-align: center;
    }
    .tit>img{
        height: 28px;
    }
    .navb{
        width:100%;
        display: flex;
        justify-content:space-around;
        padding:10px;
    }
    .navb>a{
        display: inline-block;
        width:25%;
        height: 20px;
        text-align: center;
        color:#666;
        font-size: 12px;
    }
</style>
