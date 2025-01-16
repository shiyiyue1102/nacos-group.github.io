---
id: "question-history-14862"
title: "nacos 2.2.0 以后 控制台 无需密码就能登录是怎么回事？"
date: "2024-09-26"
category: "expertConsultation"
description: "在 Nacos 2.2.2 版本之后，控制台无需密码就能登录的现象是由于 Nacos 对其默认控制台的登录策略进行了调整。根据提供的知识，这一改变是为了纠正用户的误解，即之前用户可能误以为Nacos默认是有鉴权机制的，实际上在未开启鉴权配置的情况下，默认是没有登录需求的。具体来说，Nacos 在2."
tags: ["nacos","220","控制台","无需","密码","登录","问题"]
keywords: ["nacos","220","控制台","无需","密码","登录","问题"]
---

## 用户问题 ： 
 nacos 2.2.0 以后 控制台 无需密码就能登录是怎么回事？  

---------------
## 专家官方解答 ：

在 Nacos 2.2.2 版本之后，控制台无需密码就能登录的现象是由于 Nacos 对其默认控制台的登录策略进行了调整。根据提供的知识，这一改变是为了纠正用户的误解，即之前用户可能误以为Nacos默认是有鉴权机制的，实际上在未开启鉴权配置的情况下，默认是没有登录需求的。

具体来说，Nacos 在2.2.2版本之后做了以下改动：
1. 当服务端未开启鉴权时，控制台不再显示登录页面，用户可以直接访问，无需输入密码。
2. 控制台会给予提示，告知用户当前集群未开启鉴权，增强了用户体验并明确了系统的安全状态。
3. 若要启用登录控制，用户需主动开启鉴权插件，之后控制台将要求登录验证。
4. 自2.2.3版本起，Nacos还支持了关闭开源控制台的功能，并能引导用户至自定义的Nacos控制台，进一步提升了系统的灵活性和安全性。

因此，如果你遇到Nacos 2.2.0以后版本的控制台无需密码登录的情况，这是预期的行为，特别是当你确认服务端未配置鉴权时。若需要实施鉴权以保护控制台访问安全，请参考Nacos官方文档中关于[鉴权插件-服务端插件](../../plugin/auth-plugin.md)的指导，以及如何[关闭登录功能](../admin/console-guide.md#1.1)的详细说明进行相应配置。


<font color="#949494">---------------</font> 


## 参考链接 ：

* [Authorization](https://nacos.io/docs/latest/guide/user/auth)
 
 * [控制台手册](https://nacos.io/docs/latest/guide/admin/console-guide)


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=14863)给我们反馈。
