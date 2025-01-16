---
id: "question-history-14005"
title: "nacos默认密码是什么？"
date: "2024-09-26"
category: "expertConsultation"
description: "Nacos的默认用户名和密码均为`nacos`。这一默认凭证是在Nacos集群初始化时自动设置的。如果您需要修改默认密码，可以在初始化集群前编辑相应的数据库脚本文件，如`mysql-schema.sql`，并将`$new_password`替换为经过BCrypt加密的新密码。或者在集群启动后，通过控"
tags: ["nacos","默认密码"]
keywords: ["nacos","默认密码"]
---

## 用户问题 ： 
 nacos默认密码是什么？  

---------------
## 专家官方解答 ：

Nacos的默认用户名和密码均为`nacos`。这一默认凭证是在Nacos集群初始化时自动设置的。如果您需要修改默认密码，可以在初始化集群前编辑相应的数据库脚本文件，如`mysql-schema.sql`，并将`${new_password}`替换为经过BCrypt加密的新密码。或者在集群启动后，通过控制台的用户管理界面、运维API以及直接操作外置数据库（非内置Derby数据库）的方式来修改密码或添加新用户。记得，当您进行这些操作时，若Nacos已开启鉴权，需具备管理员权限。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：nacos用户密码设置 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=14014)给我们反馈。
