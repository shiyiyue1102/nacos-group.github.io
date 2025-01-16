---
id: "question-history-14594"
title: "nacos 和nacos cloud 的有什么区别？"
date: "2024-09-26"
category: "expertConsultation"
description: "nacos开源版与nacos cloud版（即集成在阿里云微服务引擎MSE中的版本）之间存在一些核心差异，主要体现在以下几个方面：1. **功能扩展与服务支持**：   - **nacos开源版**是基础版本，提供服务发现、配置管理、服务健康检查等核心功能，适用于对基础微服务管理有需求的场景。   "
tags: ["nacos","opensource","nacos","cloud","区别"]
keywords: ["nacos","opensource","nacos","cloud","区别"]
---

## 用户问题 ： 
 nacos 和nacos cloud 的有什么区别？  

---------------
## 专家官方解答 ：

nacos开源版与nacos cloud版（即集成在阿里云微服务引擎MSE中的版本）之间存在一些核心差异，主要体现在以下几个方面：

1. **功能扩展与服务支持**：
   - **nacos开源版**是基础版本，提供服务发现、配置管理、服务健康检查等核心功能，适用于对基础微服务管理有需求的场景。
   - **nacos cloud版**则在开源版基础上集成了更多企业级特性，如自动化运维能力、多节点容灾、全局风险自动识别管理、云原生网关集成、平滑迁移工具等，增强了易用性、高可用性、安全性、性能及可观测性，更适合生产环境的严苛要求。

2. **高可用性和稳定性**：
   - nacos cloud版通过多节点容灾、多区域容灾等机制确保服务的高可用，提供无损上下线能力和自动扩缩容，这些是在开源版中未直接提供的高级特性。

3. **安全性增强**：
    - MSE中的nacos商业版引入了RAM鉴权体系、无AK访问模式、ACL控制、TLS传输加密等安全措施，确保数据传输和存储的安全性，这是开源版所不具备的。

4. **可观测性和监控**：
    - MSE版nacos提供了更为详尽的基础及高级监控功能，包括服务推送轨迹、配置推送轨迹等，便于运维团队实时掌握系统状态并快速响应。

5. **成本与试用**：
    - 虽然nacos开源版本身免费，但维护和扩展需自行负责。nacos cloud版虽然提供了更全面的服务，但可能涉及额外的费用。不过，您可以通过[nacos企业版介绍](https://nacos.io/cloud/?from=wuyi)页面了解详细的功能对比和价格信息，并有机会免费试用nacos专业版以体验其增强功能。

综上所述，选择nacos开源版还是nacos cloud版，取决于您的具体需求，如是否需要高级的企业级特性、对稳定性和安全性是否有更高要求，以及是否愿意为这些增值服务支付相应费用。如果您对这些差异有更具体的疑问或需要进一步的信息，请随时告知。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：微服务引擎(MSE）介绍 
 
 * 专家经验：Nacos 介绍 
 
 * 专家经验：CatalogController 里面的接口和客户端SDK的API区别是什么 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16002)给我们反馈。
