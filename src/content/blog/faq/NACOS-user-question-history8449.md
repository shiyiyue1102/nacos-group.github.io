---
id: "question-history-8449"
title: "Nacos部署对外需要开放哪些端口？只开放8848就可以了吗？"
date: "2024-09-26"
category: "expertConsultation"
description: "Nacos部署对外开放时，通常需要考虑以下几个端口：1. **主端口 (默认 8848)**：这是客户端、控制台以及OpenAPI所使用的HTTP端口。大部分场景下，与Nacos交互都会通过这个端口进行。2. **客户端gRPC请求服务端端口 (默认 9848)**：用于客户端通过gRPC协议向服务"
tags: ["nacos","opensource","部署","端口","8848","对外","开放"]
keywords: ["nacos","opensource","部署","端口","8848","对外","开放"]
---

## 用户问题 ： 
 Nacos部署对外需要开放哪些端口？只开放8848就可以了吗？  

---------------
## 专家官方解答 ：

Nacos部署对外开放时，通常需要考虑以下几个端口：

1. **主端口 (默认 8848)**：这是客户端、控制台以及OpenAPI所使用的HTTP端口。大部分场景下，与Nacos交互都会通过这个端口进行。

2. **客户端gRPC请求服务端端口 (默认 9848)**：用于客户端通过gRPC协议向服务端发起连接和请求。在某些采用VIP或其他网络中转设备的部署架构中，除了主端口8848外，这个端口也需要被暴露以确保客户端能正常通信。

因此，只开放8848端口在很多场景下是不够的，尤其是当你的应用或者服务依赖于gRPC协议与Nacos通信时，9848端口也必须开放。但是，如果部署环境简单且仅使用HTTP协议进行配置管理和服务发现，则仅开放8848端口可能满足基本需求。

综上所述，是否只开放8848端口取决于你的具体应用场景和技术栈。在复杂的微服务架构或需要gRPC支持的情况下，建议同时开放8848和9848端口。

参考链接：
- [Nacos部署开放端口说明](https://nacos.io/docs/latest/guide/admin/cluster-mode-quick-start/)
- [Nacos官方文档](https://nacos.io/docs/latest/)


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos部署开放端口，集群部署开通端口 
 
 * 专家经验：主流的配置中心有哪些？ 
 
 * 专家经验：Nacos 如何关闭/nacos/v2/console/namespace，使api不对外开放 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13666)给我们反馈。
