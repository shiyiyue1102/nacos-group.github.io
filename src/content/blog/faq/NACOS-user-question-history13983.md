---
id: "question-history-13983"
title: "nacos 持久化存储方案介绍"
date: "2024-09-26"
category: "expertConsultation"
description: "Nacos在设计上支持两种类型的服务存储方案：持久化服务和临时服务，它们在数据持久性和生命周期管理上有显著差异。下面详细介绍这两种存储方案的特点及适用场景：### 持久化服务（ephemeral=false）- **特点**：  - 数据持久存在，除非用户手动删除，否则即使遇到集群故障、节点重启或微"
tags: ["nacos","opensource","持久化","存储","方案","介绍"]
keywords: ["nacos","opensource","持久化","存储","方案","介绍"]
---

## 用户问题 ： 
 nacos 持久化存储方案介绍  

---------------
## 专家官方解答 ：

Nacos在设计上支持两种类型的服务存储方案：持久化服务和临时服务，它们在数据持久性和生命周期管理上有显著差异。下面详细介绍这两种存储方案的特点及适用场景：

### 持久化服务（ephemeral=false）
- **特点**：
  - 数据持久存在，除非用户手动删除，否则即使遇到集群故障、节点重启或微服务应用自身的启停，服务实例信息也不会丢失。
  - 通过Raft一致性协议确保数据在集群中的高可用与强一致性，且数据会被持久化到磁盘。
  - Nacos服务端负责实例的健康检查，若检测到实例不健康，会标记其状态，防止流量导向问题节点。

### 临时服务（ephemeral=true）
- **特点**：
  - 数据生命周期与微服务应用绑定，应用停止或断开连接时，相应的服务实例信息将被自动移除。
  - 实例通过nacos-client发送心跳来维持活性，心跳失败则自动删除实例记录。
  - 采用Distro协议进行数据同步，业务数据不直接存储在磁盘上，仅保留必要的元数据信息。

### 选择指南
- **推荐实践**：对于Kubernetes(Docker/云环境)中易变IP、频繁更新重启的应用，推荐使用**临时服务**。这符合大部分微服务框架如Dubbo、Spring Cloud的默认设置，能有效应对动态环境的变化。
- **特定场景**：在无法集成nacos-client或需进行长期审计维护的场景，如MySQL服务、DNS服务（包括CoreDNS），应选择**持久化服务**。并根据实际情况合理配置健康检查策略，以确保服务的稳定性和可靠性。

综上所述，Nacos提供的持久化与临时服务存储方案，旨在满足不同应用场景下的服务管理和发现需求，用户可根据实际场景选择最合适的存储类型。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos 介绍 
 
 * [NacosSync 用户手册](https://nacos.io/docs/latest/ecology/use-nacos-sync)
 
 * 专家经验：Nacos中持久化服务和临时服务的区别 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13987)给我们反馈。
