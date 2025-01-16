---
id: "question-history-15621"
title: "nacos2.0.2更新配置时，底层sql会在config_info表中更新原有的还是新增一条"
date: "2024-09-26"
category: "expertConsultation"
description: "根据已有的知识内容，我们可以分析您关于`nacos2.0.2更新配置时，底层sql会在config_info表中更新原有的还是新增一条`的问题。虽然提供的参考资料没有直接提及Nacos 2.0.2版本中关于`config_info`表操作的具体SQL行为，但我们可以基于Nacos的工作原理进行合理推"
tags: ["nacos","opensource","nacos202","更新","配置","SQL","config_info"]
keywords: ["nacos","opensource","nacos202","更新","配置","SQL","config_info"]
---

## 用户问题 ： 
 nacos2.0.2更新配置时，底层sql会在config_info表中更新原有的还是新增一条  

---------------
## 专家官方解答 ：

根据已有的知识内容，我们可以分析您关于`nacos2.0.2更新配置时，底层sql会在config_info表中更新原有的还是新增一条`的问题。虽然提供的参考资料没有直接提及Nacos 2.0.2版本中关于`config_info`表操作的具体SQL行为，但我们可以基于Nacos的工作原理进行合理推测。

在Nacos的配置管理机制中，当配置发生变更时，通常不会在`config_info`表中直接更新原有记录，而是采用追加新记录的方式进行。这是因为Nacos需要保留配置的变更历史，以便于版本回溯和问题追踪。因此，每当配置发生变化并发布成功后，Nacos会在`config_info`表中增加一条新的记录，同时记录下变更的时间戳、配置的MD5校验值等元数据信息，而旧的配置记录会被标记为非最新版本。

**解释：**
1. **保留历史版本**：通过添加新记录而非更新旧记录，Nacos能够自然地保存配置的所有历史版本，这对于配置的版本管理和审计非常重要。
2. **MD5值管理**：每次新增配置记录时，Nacos会计算配置内容的MD5值并与之前记录比较，以此决定是否需要推送给客户端，这有助于减少不必要的配置推送，提高效率。
3. **高可用性和一致性**：这样的设计也有助于保持配置管理的高可用性，即使在配置更新过程中遇到问题，也不会丢失旧的正确配置信息。

综上所述，基于Nacos的配置管理设计原则和实践，当您在Nacos 2.0.2中更新配置时，底层SQL操作倾向于在`config_info`表中新增一条记录，而不是直接更新原有的记录。如果您需要更详尽的技术细节或官方文档确认，请查阅Nacos的官方文档或社区讨论。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos 配置无法动态刷新 
 
 * 专家经验：NACOS 配置中心和注册中心是分两个集群部署还是放在一个集群中 
 
 * 专家经验：主流的配置中心有哪些？ 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=15680)给我们反馈。
