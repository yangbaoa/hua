#设置客户端语言
SET NAMES UTF8;
#放弃数据库(如果存在)
DROP DATABASE IF EXISTS huahui;
#创建数据库
CREATE DATABASE huahui CHARSET=UTF8;
#进入数据库
USE huahui;
#创建
CREATE TABLE dourou(
    did INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(58),
    price DECIMAL(6,2),
    img_url VARCHAR(128),
    deta1 VARCHAR(128),
    deta2 VARCHAR(128),
    deta3 VARCHAR(128),
    deta4 VARCHAR(128),
    deta5 VARCHAR(128)
);
INSERT INTO dourou VALUES
(null,"冬日美人",15,"http://127.0.0.1:3300/img/newd/dr1.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"定盘星生石花组合",59,"http://127.0.0.1:3300/img/newd/dr2.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"云端松露",188,"http://127.0.0.1:3300/img/newd/dr3.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"蟹爪兰",30,"http://127.0.0.1:3300/img/newd/dr4.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"鹅顶凤梨",20,"http://127.0.0.1:3300/img/newd/dr5.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"暖心瓶",30,"http://127.0.0.1:3300/img/newd/dr6.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"乐呵呵",40,"http://127.0.0.1:3300/img/newd/dr7.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"眉清目秀",49,"http://127.0.0.1:3300/img/newd/dr8.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"长条盆组合",28,"http://127.0.0.1:3300/img/newd/dr9.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"秋风三色（组合）",49,"http://127.0.0.1:3300/img/newd/dr10.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"元宝帝玉",30,"http://127.0.0.1:3300/img/newd/dr11.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"笑脸生石花 9株",29,"http://127.0.0.1:3300/img/newd/dr12.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"爱心有肉（组合）",15,"http://127.0.0.1:3300/img/newd/dr13.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"熊童子 单株",21,"http://127.0.0.1:3300/img/newd/dr14.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"桃之卵 2株",17,"http://127.0.0.1:3300/img/newd/dr15.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"园满多肉套餐",398,"http://127.0.0.1:3300/img/newd/dr16.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"红葡萄 单株",10,"http://127.0.0.1:3300/img/newd/dr17.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"彩铅三友（组合）",26,"http://127.0.0.1:3300/img/newd/dr18.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg"),
(null,"帝王玉露",39,"http://127.0.0.1:3300/img/newd/dr19.jpg","http://127.0.0.1:3300/img/newd/dt1.jpg","http://127.0.0.1:3300/img/newd/dt2.jpg","http://127.0.0.1:3300/img/newd/dt3.jpg","http://127.0.0.1:3300/img/newd/dt4.jpg","http://127.0.0.1:3300/img/newd/dt5.jpg"),
(null,"扇盆四合（组合）",54,"http://127.0.0.1:3300/img/newd/dr20.jpg","http://127.0.0.1:3300/img/newd/dt6.jpg","http://127.0.0.1:3300/img/newd/dt7.jpg","http://127.0.0.1:3300/img/newd/dt8.jpg","http://127.0.0.1:3300/img/newd/dt9.jpg","http://127.0.0.1:3300/img/newd/dt10.jpg");

CREATE TABLE lvzhi(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(58),
    price DECIMAL(6,2),
    img_url VARCHAR(128),
    ldeta1 VARCHAR(128),
    ldeta2 VARCHAR(128)
);
INSERT INTO lvzhi VALUES
(null,"美国万年青",19,"http://127.0.0.1:3300/img/newl/lz1.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"观音竹",13.6,"http://127.0.0.1:3300/img/newl/lz2.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"大叶银斑葛",12.9,"http://127.0.0.1:3300/img/newl/lz3.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"白掌",14.8,"http://127.0.0.1:3300/img/newl/lz4.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"太阳神",15.9,"http://127.0.0.1:3300/img/newl/lz5.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"清新静雅  4盆",22.9,"http://127.0.0.1:3300/img/newl/lz6.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"金玉满堂  4盆",36.9,"http://127.0.0.1:3300/img/newl/lz7.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"吉祥如意  4盆",36.9,"http://127.0.0.1:3300/img/newl/lz8.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"流年生香 6盆",29,"http://127.0.0.1:3300/img/newl/lz9.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"红红火火 4盆",52,"http://127.0.0.1:3300/img/newl/lz10.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"清新淡雅 4盆",39,"http://127.0.0.1:3300/img/newl/lz11.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"幸福满屋 3盆",29,"http://127.0.0.1:3300/img/newl/lz12.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"五福临门 5盆",46,"http://127.0.0.1:3300/img/newl/lz13.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"猪笼草",11.5,"http://127.0.0.1:3300/img/newl/lz14.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"金钱树",12.9,"http://127.0.0.1:3300/img/newl/lz15.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"九里香",10.5,"http://127.0.0.1:3300/img/newl/lz16.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"人参榕",9,"http://127.0.0.1:3300/img/newl/lz17.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"栀子花",8.5,"http://127.0.0.1:3300/img/newl/lz18.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"白掌",9,"http://127.0.0.1:3300/img/newl/lz19.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg"),
(null,"单杆发财树",7.5,"http://127.0.0.1:3300/img/newl/lz20.jpg","http://127.0.0.1:3300/img/newl/lt1.jpg","http://127.0.0.1:3300/img/newl/lt2.jpg");

CREATE TABLE yuanyi(
    yid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(58),
    price DECIMAL(6,2),
    img_url VARCHAR(128),
    ydeta VARCHAR(128)
);
INSERT INTO yuanyi VALUES
(null,"种植工具（组合）",9.9,"http://127.0.0.1:3300/img/newy/yy1.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"铲子",4.8,"http://127.0.0.1:3300/img/newy/yy2.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"喷水壶",5,"http://127.0.0.1:3300/img/newy/yy3.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"多肉营养土种植土",3.25,"http://127.0.0.1:3300/img/newy/yy4.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"B0072",6.6,"http://127.0.0.1:3300/img/newy/yy5.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"多肉精品盆器",6.7,"http://127.0.0.1:3300/img/newy/yy6.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"新品白瓷盆",2.9,"http://127.0.0.1:3300/img/newy/yy7.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"创意新品盆器",2.8,"http://127.0.0.1:3300/img/newy/yy8.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"花卉园艺师布景培训",4500,"http://127.0.0.1:3300/img/newy/yy9.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"7元以下盆器",5,"http://127.0.0.1:3300/img/newy/yy10.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"剪刀",1.8,"http://127.0.0.1:3300/img/newy/yy11.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"7元以上盆器",7.3,"http://127.0.0.1:3300/img/newy/yy12.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"筒铲",2.2,"http://127.0.0.1:3300/img/newy/yy13.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"气吹",2.4,"http://127.0.0.1:3300/img/newy/yy14.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"水壶",2.8,"http://127.0.0.1:3300/img/newy/yy15.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"三件套",2.6,"http://127.0.0.1:3300/img/newy/yy16.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"铺面土",4.8,"http://127.0.0.1:3300/img/newy/yy17.jpg","http://127.0.0.1:3300/img/newy/yt.jpg"),
(null,"镊子",1.6,"http://127.0.0.1:3300/img/newy/yy18.jpg","http://127.0.0.1:3300/img/newy/yt.jpg");

CREATE TABLE hua_user(
    id INT PRIMARY KEY AUTO_INCREMENT ,
    uname VARCHAR(25),
    upwd  VARCHAR(32)
);
INSERT INTO hua_user VALUES
(null,'qiongqiong',md5('123')),
(null,'tom',md5('123')),
(null,'jerry',md5('123'));