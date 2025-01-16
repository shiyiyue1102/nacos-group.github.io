---
id: "question-history-12713"
title: "nacos关闭双写 需要每个节点执行么？"
date: "2024-09-26"
category: "expertConsultation"
description: "在Nacos 2.3.0及以上版本中，由于这些版本默认不存在双写模式，因此无需执行关闭双写的操作。但针对提问中的“nacos关闭双写需要每个节点执行么？”这一问题，基于Nacos的运作机制和提供的解决方案，如果是在需要关闭双写的旧版本情况下，关闭双写的操作理论上是针对整个集群的配置更改，因而确实需要"
tags: ["nacos-opensource","nacos","双写","每个节点","执行","关闭","需要"]
keywords: ["nacos-opensource","nacos","双写","每个节点","执行","关闭","需要"]
---

## 用户问题 ： 
 nacos关闭双写 需要每个节点执行么？  

---------------
## 专家官方解答 ：

在Nacos 2.3.0及以上版本中，由于这些版本默认不存在双写模式，因此无需执行关闭双写的操作。但针对提问中的“nacos关闭双写需要每个节点执行么？”这一问题，基于Nacos的运作机制和提供的解决方案，如果是在需要关闭双写的旧版本情况下，关闭双写的操作理论上是针对整个集群的配置更改，因而确实需要在每个节点上执行关闭操作以确保整个集群的一致性。

参考解决方案中提到的关闭双写API命令为：
```bash
curl -X PUT 'localhost:8848/nacos/v1/ns/operator/switches?entry=doubleWriteEnabled&value=false'
```
此命令需要在每个节点上独立执行，以确保集群中所有节点都关闭了双写功能。执行后，可以通过检查相应节点的日志文件，如`logs/naming-server.log`，查找“Disable Double write, stop and clean v1.x cache and features”字样来验证双写功能是否成功关闭。

综上所述，虽然Nacos 2.3.0版本不需要此操作，但理解关闭双写的通用流程对于维护不同版本的Nacos集群仍然重要。在需要执行此操作的旧版本集群中，确实每个节点都需要执行关闭命令。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos nacos 2.3.0全新安装也需要关闭双写吗？ 
 
 * [Nacos 2.0 升级文档](https://nacos.io/docs/latest/upgrading/200-upgrading)
 
 * 专家经验：Nacos nacos 2.3.0 如何关闭cp模式，只保留ap的注册中心？ 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13864)给我们反馈。
