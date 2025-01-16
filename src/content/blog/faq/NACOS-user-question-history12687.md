---
id: "question-history-12687"
title: "nacos的 端口有哪些 以及端口的协议"
date: "2024-09-26"
category: "expertConsultation"
description: "Nacos暴露的端口及其协议包括：1. **主端口 (HTTP)**: 默认为8848，用于客户端、控制台以及OpenAPI的HTTP通信。2. **客户端gRPC端口**: 默认为主端口+1000，即9848，用于客户端通过gRPC协议向服务端发起连接和请求。3. **服务端gRPC端口**: 默"
tags: ["nacos","nacos-opensource","端口","哪些","端口的协议"]
keywords: ["nacos","nacos-opensource","端口","哪些","端口的协议"]
---

## 用户问题 ： 
 nacos的 端口有哪些 以及端口的协议  

---------------
## 专家官方解答 ：

Nacos暴露的端口及其协议包括：

1. **主端口 (HTTP)**: 默认为8848，用于客户端、控制台以及OpenAPI的HTTP通信。
2. **客户端gRPC端口**: 默认为主端口+1000，即9848，用于客户端通过gRPC协议向服务端发起连接和请求。
3. **服务端gRPC端口**: 默认为主端口+1001，即9849，用于服务间同步等内部通信。
4. **Jraft请求服务端端口**: 默认为主端口-1000，即7848，用于处理服务端间的Raft相关请求。

这些端口的配置可以通过修改`server.port`来指定主端口，其他端口则会根据上述偏移量自动计算得出。需要注意的是，Nacos服务端不直接支持修改gRPC客户端端口的偏移量，如果需要调整，需借助VIP/SLB等网络设备进行端口映射。

关于端口协议，上述已明确指出各端口的主要用途及协议类型，包括HTTP和gRPC。

参考链接：
- [Nacos部署开放端口，集群部署开通端口](https://nacos.io/docs/latest/guide/admin/cluster-mode-quick-start/)
- [Nacos如何指定端口](https://nacos.io/docs/latest/guide/admin/cluster-mode-quick-start/)
- [主流的配置中心有哪些？](https://nacos.io/docs/latest/guide/admin/cluster-mode-quick-start/)


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos部署开放端口，集群部署开通端口 
 
 * 专家经验：Nacos如何指定端口 
 
 * 专家经验：主流的配置中心有哪些？ 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13853)给我们反馈。
