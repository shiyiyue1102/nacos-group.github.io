---
id: "question-history-8252"
title: "使用客户端SDK的删除实例API之后，为什么客户端查询实例依然可以查询到？但是使用管理端页面下线之后，使用"
date: "2024-09-26"
category: "expertConsultation"
description: "在Nacos中，客户端SDK删除实例与管理端页面下线实例存在本质区别，这直接导致了您观察到的现象。**原因分析：**1. **客户端SDK删除实例：**   客户端SDK调用删除实例API时，通常是指向OpenAPI。根据Nacos的设计，OpenAPI的主要目的是服务于应用程序，确保它们能获取到当"
tags: ["nacos-opensource","客户端SDK","删除实例API","查询实例","管理端页面","下线","区别"]
keywords: ["nacos-opensource","客户端SDK","删除实例API","查询实例","管理端页面","下线","区别"]
---

## 用户问题 ： 
 使用客户端SDK的删除实例API之后，为什么客户端查询实例依然可以查询到？但是使用管理端页面下线之后，使用客户端查询就查询不到了？客户端SDK删除实例和管理端页面下线的区别是什么？  

---------------
## 专家官方解答 ：

在Nacos中，客户端SDK删除实例与管理端页面下线实例存在本质区别，这直接导致了您观察到的现象。

**原因分析：**

1. **客户端SDK删除实例：**
   客户端SDK调用删除实例API时，通常是指向OpenAPI。根据Nacos的设计，OpenAPI的主要目的是服务于应用程序，确保它们能获取到当前可服务的实例列表。因此，当客户端通过SDK删除一个实例时，该操作实际上是尝试从服务发现的视角移除实例，但Nacos的OpenAPI为了保证服务的高可用性和正确性，不会立即将已下线或标记删除的实例从查询结果中剔除。这意味着，即使客户端发送了删除请求，由于OpenAPI的过滤逻辑，客户端查询实例时可能短时间内还能看到该实例，直到Nacos内部的健康检查机制确认该实例确实不可用后才会彻底移除。

2. **管理端页面下线实例：**
   相比之下，管理端页面执行的下线操作通常是通过Admin API来完成的。Admin API设计初衷是为了满足运维需求，允许查看和管理包括已下线实例在内的所有实例状态。当在管理界面将一个实例下线时，Nacos会立即将其标记为下线状态，并且在通过Admin API或管理界面查询时，这些下线实例将不再显示。因此，一旦实例在管理端被下线，客户端使用查询API（基于OpenAPI）就无法再查询到该实例，因为它已被明确标记为不可用。

**总结：**

- 客户端SDK删除实例操作可能因OpenAPI的实时性和过滤逻辑，导致短暂的查询差异。
- 管理端页面下线实例则会即时改变实例状态，并影响OpenAPI的查询结果，从而立即反映在客户端查询中。

基于上述分析，如果您希望客户端查询结果立即与实例下线状态保持一致，推荐使用管理端页面进行操作，因为这直接影响服务实例的可用性标识，进而迅速被客户端识别。而对于客户端SDK调用删除API后查询结果的延迟，是Nacos设计中对服务可用性保障的一部分。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：CatalogController 里面的接口和客户端SDK的API区别是什么 
 
 * [Nacos功能和需求列表](https://nacos.io/docs/latest/archive/feature-list)
 
 * [鉴权插件](https://nacos.io/docs/latest/plugin/auth-plugin)


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13602)给我们反馈。
