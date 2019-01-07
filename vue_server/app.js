//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
//2.2:配置允许脚手架访问程序
app.use(cors({
    origin:["http://127.0.0.1:6230",
    "http://localhost:6230"],
    credentials:true
}));
//7.1:node.js app.js
//   加载第三方模块 express-session
const session = require("express-session")
//7.2:对模块配置   
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000 * 60 * 60 * 24 
  }
}));


//3:指定监听端口3000
app.listen(3300);
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))


//功能一:首页轮播图
app.get("/imagelist",(req,res)=>{
   var obj = [
     {id:1,img_url:"http://127.0.0.1:3300/img/lb1.jpg"},
     {id:2,img_url:"http://127.0.0.1:3300/img/lb2.jpg"},
     {id:3,img_url:"http://127.0.0.1:3300/img/lb3.jpg"},

   ];
   res.send(obj);
});
//二.多肉肉
app.get("/imgdrr",(req,res)=>{
  var obj = [
    {id:1,title:"定盘星生石花组合",img_url:"http://127.0.0.1:3300/img/20181227165502.jpg"},
    {id:2,title:"云端松露",img_url:"http://127.0.0.1:3300/img/20181213164729.jpg"},

  ];
  res.send(obj);
});
//三.绿绿的
app.get("/imgll",(req,res)=>{
  var obj = [
    {id:1,title:"人参榕",img_url:"http://127.0.0.1:3300/img/20180814141854.jpg"},
    {id:2,title:"栀子花",img_url:"http://127.0.0.1:3300/img/20180814141922.jpg"},

  ];
  res.send(obj);
});
//四.多肉植物
app.get("/imgduorou",(req,res)=>{
  var obj = [
    {id:1,title:"眉清目秀",img_url:"http://127.0.0.1:3300/img/r6.jpg"},
    {id:2,title:"园满多肉套餐",img_url:"http://127.0.0.1:3300/img/r7.jpg"},
    {id:3,title:"丽娜莲 单株",img_url:"http://127.0.0.1:3300/img/r8.jpg"},
    {id:4,title:"蓝精灵 单株",img_url:"http://127.0.0.1:3300/img/r5.jpg"}
  ];
  res.send(obj);
});
//五.绿植物
app.get("/imglvz",(req,res)=>{
  var obj = [
    {id:1,title:"太阳神",img_url:"http://127.0.0.1:3300/img/r1.jpg"},
    {id:2,title:"单杆发财树",img_url:"http://127.0.0.1:3300/img/r2.jpg"},
    {id:3,title:"鸟巢蕨",img_url:"http://127.0.0.1:3300/img/r3.jpg"},
    {id:4,title:"鸭脚木",img_url:"http://127.0.0.1:3300/img/r4.jpg"}
  ];
  res.send(obj);
});
//六.园艺
app.get("/imgyy",(req,res)=>{
  var obj = [
    {id:1,title:"喷水壶",img_url:"http://127.0.0.1:3300/img/r9.jpg"},
    {id:2,title:"铲子",img_url:"http://127.0.0.1:3300/img/r10.jpg"},
    {id:3,title:"剪刀",img_url:"http://127.0.0.1:3300/img/r11.jpg"},
    {id:4,title:"镊子",img_url:"http://127.0.0.1:3300/img/r12.jpg"}
  ];
  res.send(obj);
});

//功能七:多肉分页显示
app.get("/duorou",(req,res)=>{
  //1:获取参数
  var dno = req.query.dno;
  var dSize = req.query.dSize;
  //2:设置默认值 1 4
  if(!dno){dno = 1}
  if(!dSize){dSize=6}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(dno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(dSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(did) AS c FROM dourou";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/dSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT did,title,price,img_url FROM dourou LIMIT ?,?";
  var offset = parseInt((dno-1)*dSize);
      dSize = parseInt(dSize);
  pool.query(sql,[offset,dSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  
 //功能八,绿植
 app.get("/imglz",(req,res)=>{
  var lno=req.query.lno;
  var lSize=req.query.lSize;
  if(!lno){lno = 1}
  if(!lSize){lSize = 6}
  var reg = /^[0-9]{1,3}$/;
  if(!reg.test(lno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
  }
  if(!reg.test(lSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  var progress = 0;
  var obj = {code:1};
  var sql = "SELECT count(lid) as l FROM lvzhi";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    var lCount=Math.ceil(result[0].l/lSize);
    progress+=50;
    obj.lCount = lCount;
    if(progress==100){
      res.send(obj);
    }
  });
  var sql="SELECT lid,title,price,img_url FROM lvzhi LIMIT ?,?";
  var offset = parseInt((lno-1)*lSize);
      lSize = parseInt(lSize);
  pool.query(sql,[offset,lSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
 })
 //功能九,园艺
app.get("/yuanyi",(req,res)=>{
  //1:获取参数
  var yno = req.query.yno;
  var ySize = req.query.ySize;
  //2:设置默认值 1 4
  if(!yno){yno = 1}
  if(!ySize){ySize=6}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(yno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(ySize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(yid) AS y FROM yuanyi";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var yCount = Math.ceil(result[0].y/ySize);
    progress+=50;
    obj.yCount = yCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT yid,title,price,img_url FROM yuanyi LIMIT ?,?";
  var offset = parseInt((yno-1)*ySize);
      ySize = parseInt(ySize);
  pool.query(sql,[offset,ySize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });
 //功能十:查看详情
app.get("/deta",(req,res)=>{
  //1:参数 id 
  var id = req.query.id;
  var sql = "SELECT `did`, `title`, `price`, `img_url`, `deta1`, `deta2`, `deta3`, `deta4`, `deta5` FROM `dourou` WHERE did=?"
  //console.log(id)
  //3:json {code:1,data:[{}]}
  pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      //console.log(result)
      res.send({code:1,data:result});
  });
});
app.get("/detail",(req,res)=>{
  //1:参数 id 
  var id = req.query.id;
  var sql = "SELECT `lid`, `title`, `price`, `img_url`, `ldeta1`, `ldeta2` FROM `lvzhi` WHERE lid=?"
  //console.log(id)
  //3:json {code:1,data:[{}]}
  pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      //console.log(result)
      res.send({code:1,data:result});
  });
});
app.get("/detaily",(req,res)=>{
  //1:参数 id 
  var id = req.query.id;
  var sql = "SELECT `yid`, `title`, `price`, `img_url`, `ydeta` FROM `yuanyi` WHERE yid=?"
  //console.log(id)
  //3:json {code:1,data:[{}]}
  pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      //console.log(result)
      res.send({code:1,data:result});
  });
});
//登陆
app.get("/login",(req,res)=>{
  //1:获取参数 uname,upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:创建正则表达式验证
  //3:创建sql
  // console.log(uname);
  // console.log(upwd)
  var sql = "SELECT count(id) as c FROM hua_user WHERE uname = ? AND upwd = md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    //console.log(result);
   if(err)throw err;
   var obj = result[0].c;
   if(obj == 1){
    //7.3:将用户名保存session对象中
    req.session.uname = uname;
    res.send({code:1,msg:"登录成功"});
   }else{
    res.send({code:-1,msg:"用户名或密码有误"}) 
    }  
  });
  //4:返回结果
})

/*
//功能二:新闻分页显示
app.get("/newslist",(req,res)=>{
 //1:获取参数
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=7}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }

 var progress = 0;
 var obj = {code:1};
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(id) AS c FROM xz_news";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql =" SELECT id,title,ctime,img_url,";
     sql+=" point,content";
     sql+=" FROM xz_news";
     sql+=" LIMIT ?,?";
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
 //7:返回结果
});  


//功能三:查找一条新闻详细信息
app.get("/newsinfo",(req,res)=>{
   //1:参数 id 
   var id = req.query.id;
   var sql = " SELECT id,title,content,";
       sql +=" point,ctime";
       sql +=" FROM xz_news WHERE id = ?";
   //3:json {code:1,data:[{}]}
   pool.query(sql,[id],(err,result)=>{
       if(err)throw err;
       res.send({code:1,data:result});
   });
});


//功能四:分页查找指定新闻下评论列表
app.get("/getcomment",(req,res)=>{
 //1:获取参数
 var pno = req.query.pno;  //页码
 var pageSize = req.query.pageSize;//页大小
 var nid = req.query.nid; //新闻id
 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=7}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }
 var progress = 0;
 var obj = {code:1};
 obj.uname = req.session.uname;
 //11:49
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(id) AS c FROM xz_comment WHERE nid = ?";
 nid = parseInt(nid);
 pool.query(sql,[nid],(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql =" SELECT id,user_name,ctime,";
     sql+=" content";
     sql+=" FROM xz_comment";
     sql+=" WHERE nid = ?";
     sql+=" ORDER BY id DESC";
     sql+=" LIMIT ?,?";
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[nid,offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
});

//功能五:发表评论
//引入第三方模块:bodyParser 处理post请求
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended:false
}));
app.post("/addComment",(req,res)=>{
  //1:获取3个参数
  //需要第三方模块支持 bodyParser
  var nid = req.body.nid;
  var content = req.body.content;
  var user_name = req.session.uname;
  //2:创建sql语句
  var sql  =" INSERT INTO `xz_comment`(`id`,";
      sql +=" `nid`, `user_name`, `ctime`,";
      sql +=" `content`) VALUES";
      sql +=" (null,?,?,now(),?)";
  nid = parseInt(nid);
  pool.query(sql,[nid,user_name,content],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"评论发表成功"});
  });
  //3:返回添加结果
})


//功能六:查询商品列表
app.get("/goodsList",(req,res)=>{
  var obj = [];
  obj.push({id:1,title:"小辣椒",old:1999,now:99,img_url:"http://127.0.0.1:3000/img/banner1.png"});
  obj.push({id:2,title:"中辣椒",old:2999,now:99,img_url:"http://127.0.0.1:3000/img/banner2.png"});
  obj.push({id:3,title:"大辣椒",old:3999,now:99,img_url:"http://127.0.0.1:3000/img/banner3.png"});
  res.send(obj);

});


//功能七:用户登录
app.get("/login",(req,res)=>{
   //1:获取参数 uname,upwd
   var uname = req.query.uname;
   var upwd = req.query.upwd;
   //2:创建正则表达式验证
   //3:创建sql
   var sql = "SELECT count(id) as c";
   sql +=" FROM xz_login";
   sql +=" WHERE uname = ? AND upwd = md5(?)";
   pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    var obj = result[0].c;
    if(obj == 1){
     //7.3:将用户名保存session对象中
     req.session.uname = uname;
     res.send({code:1,msg:"登录成功"});
    }else{
     res.send({code:-1,msg:"用户名或密码有误"}) 
     }  
   });
   //4:返回结果
})

//功能八:加入购物车
app.get("/addCart",(req,res)=>{
  var uid = req.query.uid;
  var pid = req.query.pid;
  var c = req.query.count;
  var sql  =" INSERT INTO `xz_shoppingcart_item`(`iid`, `user_id`, `product_id`, `count`, `is_checked`) VALUES (null,?,?,?,0)"
  pool.query(sql,[uid,pid,c],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"购物车添加成功"});
  });
})

//功能九:查询购物详细信息
app.get("/getCarts",(req,res)=>{
  var uid = req.query.uid;
  var sql =" SELECT c.iid,c.user_id,c.count";
  sql +=" ,p.price,p.lname";
  sql +=" FROM xz_laptop p,";
  sql +=" xz_shoppingcart_item c";
  sql +=" WHERE p.lid = c.product_id";
  sql +=" AND c.user_id = ?";
  uid = parseInt(uid);
  pool.query(sql,[uid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
  });
  //4:返回结果
})

//功能十:更新购物数量
app.get("/updateCart",(req,res)=>{
   //1:参数 iid/count
   var iid = req.query.iid;
   var count = req.query.count;
   var sql = " UPDATE xz_shoppingcart_item";
   sql += " SET count = ? WHERE iid = ?";
   iid = parseInt(iid);
   count = parseInt(count);
   pool.query(sql,[count,iid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows > 0){
         res.send({code:1,msg:"数量修改成功"});
        }else{
         res.send({code:-1,msg:"数量修改失败"});
        }
   })
})

//功能十一:搜索商品
app.get("/search",(req,res)=>{
   //如果搜索参数太多
   //var color = req.query.color;
   //var are = req.query.are;
   //var sql = "SELECT ....";
   //if(color != undefined){
   //sql += "AND color="+color;
   //}
   //if(are != undefined){
   //  sql+"AND are = "+color
   //}


   //商品名称关键字
   var keyword = req.query.keyword;
   var low = req.query.low;
   var high = req.query.high;
   var sql = " SELECT lid,lname,price";
   sql +=" FROM xz_laptop";
   sql +=" WHERE lname LIKE ?";
   sql +=" AND price >= ?";
   sql +=" AND price <= ?";
   low = parseFloat(low);
   high = parseFloat(high);
   pool.query(sql,[`%${keyword}%`,low,high],(err,result)=>{
       if(err)throw err;
       if(result.length == 0){
         res.send({code:-1,msg:"您搜索商品不存在噢!"});
       }else{
         res.send({code:1,data:result})
       }
   });
})*/