---
id: "question-history-10491"
title: "#Nacos的配置推送如何工作？"
date: "2024-09-26"
category: "expertConsultation"
description: "Nacos的配置推送工作原理主要经历了不同的发展阶段，在早期的1.X版本中采用了UDP推送作为优化手段，而在2.0及之后的版本中，则转向了更为稳定和高效的TCP连接，具体通过gRPC双向流实现。下面详细解析其工作原理：### Nacos 1.X 版本（UDP推送）在Nacos 1.X版本中，为了加速"
tags: ["Nacos","配置推送","工作原理","开源","机制","解析","实时"]
keywords: ["Nacos","配置推送","工作原理","开源","机制","解析","实时"]
---

## 用户问题 ： 
 #Nacos的配置推送如何工作？  

---------------
## 专家官方解答 ：

Nacos的配置推送工作原理主要经历了不同的发展阶段，在早期的1.X版本中采用了UDP推送作为优化手段，而在2.0及之后的版本中，则转向了更为稳定和高效的TCP连接，具体通过gRPC双向流实现。下面详细解析其工作原理：

### Nacos 1.X 版本（UDP推送）
在Nacos 1.X版本中，为了加速服务发现和配置更新的通知，引入了UDP推送机制作为辅助。这一机制的目标是在网络状况良好的情况下，提高客户端发现服务变更的速度。然而，UDP协议本身是无连接的，不保证消息的可靠传输，因此UDP推送仅作为一种辅助手段，客户端主要还是依赖于每10秒一次的轮询查询来获取最新配置。

**工作流程简述：**
1. **服务端准备推送：** 当配置发生变化时，Nacos Server准备通过UDP向已注册的客户端发送更新通知。
2. **推送尝试与重试：** 服务器可能会对推送进行多次尝试，因为UDP的不可靠性可能导致数据丢失，这过程中可能会占用较多资源并可能导致数据对象长时间持有。
3. **客户端接收：** 客户端需要开放UDP端口等待接收来自Nacos Server的配置更新通知。

### Nacos 2.0+ 版本（gRPC双向流）
从Nacos 2.0版本开始，UDP推送被废弃，转而采用基于gRPC的双向流通信，这是对推送机制的重大改进，旨在提供更稳定、实时的数据推送服务。

**工作原理：**
1. **建立连接：** 客户端与Nacos Server之间建立长期的gRPC双向流连接，这是一种全双工通信方式，即双方都可以同时发送数据而无需等待对方响应。
2. **实时推送：** 当配置发生变更时，Nacos Server通过已建立的gRPC连接即时推送配置更新至客户端，确保数据的实时性和可靠性。
3. **资源高效：** 相比UDP，gRPC提供了连接管理和流量控制，减少了因网络不稳定导致的消息丢失问题，同时也降低了服务器资源的消耗。
4. **安全增强：** gRPC支持TLS加密，进一步提升了数据传输的安全性。

### 总结
Nacos的配置推送机制从UDP转向gRPC双向流，体现了从追求速度到追求稳定性和安全性的转变。对于仍在使用UDP推送的用户，官方建议升级至2.X版本以享受更稳定的配置管理服务。此外，对于配置管理的其他细节，如监控与鉴权，Nacos也提供了相应的配置选项，允许用户根据实际需求调整暴露的信息和服务行为。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos UDP推送失败 
 
 * 专家经验：怎么能让nacos 的actuator 查不到任何信息呢 
 
 * 专家经验：Nacos 服务数据一直推送失败 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13688)给我们反馈。