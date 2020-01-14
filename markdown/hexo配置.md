### 装载 hexo
```
hexo init blog
cd blog
```

### 装载 icarus 主题
```
git clone https://github.com/ppoffice/hexo-theme-icarus.git themes/icarus
```

启动 Hexo
```
hexo server 持续监听
```

### 查杀指定端口进程
```
sudo lsof -i :27017

COMMAND   PID    USER        FD      TYPE             DEVICE             SIZE/OFF      NODE       NAME
[mongod]  859   zhangsan    313u      IPv6            0x1111111111111     0t0         TCP        *:cslistener (LISTEN)

## 二、根据进程名称
ps -ef | grep nginx

  501 17780     1   0  8:36下午 ??         0:00.00 nginx: master process nginx
  501 17781 17780   0  8:36下午 ??         0:00.00 nginx: worker process
  501 17790 14611   0  8:39下午 ttys004    0:00.00 grep nginx

根据PID杀进程：
sudo kill -9 859
```
