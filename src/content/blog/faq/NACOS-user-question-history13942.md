---
id: "question-history-13942"
title: "nacos启动命令是什么？"
date: "2024-09-26"
category: "expertConsultation"
description: "Nacos的启动命令根据您的操作系统有所不同：#### 对于Linux/Unix/Mac系统：启动命令为（以单机模式运行）：```shellsh startup.sh -m standalone```如果在Ubuntu系统上运行上述命令遇到问题，可以尝试使用bash命令执行：```shellbash"
tags: ["nacos","开源","启动命令","什么"]
keywords: ["nacos","开源","启动命令","什么"]
---

## 用户问题 ： 
 nacos启动命令是什么？  

---------------
## 专家官方解答 ：

Nacos的启动命令根据您的操作系统有所不同：

#### 对于Linux/Unix/Mac系统：
启动命令为（以单机模式运行）：
```shell
sh startup.sh -m standalone
```
如果在Ubuntu系统上运行上述命令遇到问题，可以尝试使用bash命令执行：
```shell
bash startup.sh -m standalone
```

#### 对于Windows系统：
启动命令（同样是以单机模式运行）为：
```cmd
startup.cmd -m standalone
```
您也可以直接双击`shutdown.cmd`文件来关闭Nacos服务器。

这些命令都是在Nacos的安装目录下的`bin`文件夹中执行的。请确保您已经完成了Nacos的下载、解压以及必要配置之后，再执行相应的启动命令。


<font color="#949494">---------------</font> 


## 参考链接 ：



 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13943)给我们反馈。
