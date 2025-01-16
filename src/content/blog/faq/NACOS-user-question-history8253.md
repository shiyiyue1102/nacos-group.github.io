---
id: "question-history-8253"
title: "CatalogController 里面的接口和客户端SDK的API区别是什么啊？"
date: "2024-09-26"
category: "expertConsultation"
description: "在Nacos中，`CatalogController`里面的接口与客户端SDK的API存在明显的区别，主要体现在它们的设计目的和服务对象上：1. **`CatalogController`接口**：   - 这部分接口属于Admin API，主要服务于运维人员以及控制台需求。   - 它提供了更全面"
tags: ["nacos-opensource","CatalogController","接口","客户端SDK","API","区别"]
keywords: ["nacos-opensource","CatalogController","接口","客户端SDK","API","区别"]
---

## 用户问题 ： 
 CatalogController 里面的接口和客户端SDK的API区别是什么啊？  

---------------
## 专家官方解答 ：

在Nacos中，`CatalogController`里面的接口与客户端SDK的API存在明显的区别，主要体现在它们的设计目的和服务对象上：

1. **`CatalogController`接口**：
   - 这部分接口属于Admin API，主要服务于运维人员以及控制台需求。
   - 它提供了更全面、未经过滤的信息视图，如能获取到已标记为下线的实例信息，以便于运维操作和监控。
   - `CatalogController`作为Admin API的控制器，其设计考虑了管理层面的深度和广度，允许对服务及其实例进行更深入的管理和查询操作。

2. **客户端SDK的API**：
   - 客户端SDK主要提供openAPI，这是面向应用程序开发者设计的API。
   - openAPI如`ServiceController`和`InstanceController`，关注于服务发现和注册的核心功能，确保应用能够动态发现并连接到可用的服务实例。
   - openAPI会自动过滤掉不可用、下线的实例，仅向应用提供健康、可用的服务列表，以保证应用的正常运行和服务质量。

**总结**：
- `CatalogController`接口倾向于提供更为详尽的系统视图，适合运维监控和管理操作。
- 客户端SDK的API则专注于为应用提供实时、可用的服务实例信息，以保障服务的高可用性和动态配置能力。

参考链接：
- Nacos OpenAPI文档: [https://nacos.io/docs/latest/guide/user/open-api/](https://nacos.io/docs/latest/guide/user/open-api/)


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：CatalogController 里面的接口和客户端SDK的API区别是什么 
 
 * 专家经验：Nacos1.0和Nacos2.0的api有什么区别？2.0的中小版本升级相关问题 
 
 * [Nacos功能和需求列表](https://nacos.io/docs/latest/archive/feature-list)


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13603)给我们反馈。
