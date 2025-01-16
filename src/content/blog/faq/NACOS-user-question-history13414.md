---
id: "question-history-13414"
title: "invalid server identity key or value, please make sur"
date: "2024-09-26"
category: "expertConsultation"
description: "遇到“nacos-opensource invalid server identity key or value, please make sure set `nacos.core.auth.server.identity.key` and `nacos.core.auth.server.ident"
tags: ["nacos-opensource","invalid","server","identity","key","value","set"]
keywords: ["nacos-opensource","invalid","server","identity","key","value","set"]
---

## 用户问题 ： 
 invalid server identity key or value, please make sure set `nacos.core.auth.  

---------------
## 专家官方解答 ：

遇到“nacos-opensource invalid server identity key or value, please make sure set `nacos.core.auth.server.identity.key` and `nacos.core.auth.server.identity.value`”的错误提示，意味着Nacos配置中服务器标识密钥(key)或其对应的值(value)存在问题。这通常是因为它们未被正确设置，或者是使用了默认值，从而导致鉴权失败。根据提供的知识，以下是解决此问题的详细步骤：

### 原因分析
- **服务器标识密钥与值未设置或使用默认值**：Nacos要求为鉴权配置唯一的服务器标识密钥及其对应的值，以增强安全性。默认值容易受到攻击，因此系统提示需手动设置。
- **密钥与值一致性问题**：所有Nacos集群节点上的这些配置必须保持一致，否则可能导致鉴权失败。

### 解决步骤
#### 非镜像部署
1. **定位配置文件**：找到Nacos配置文件，通常位于`${nacos.home}/conf/application.properties`。
2. **设置服务器标识密钥与值**：
   - 在配置文件中添加或修改以下两项：
     - `nacos.core.auth.server.identity.key`: 设置为一个自定义的键名，例如`MyServerIdentityKey`。
     - `nacos.core.auth.server.identity.value`: 设置一个与之匹配的唯一值，例如`MyUniqueServerIdentityValue`。
     确保所有Nacos节点上的这两项配置一致，并且不使用默认值。
3. **保存并重启Nacos服务**：修改后，保存配置文件并重启Nacos服务器，使更改生效。

#### Docker镜像部署
1. **设置环境变量**：对于使用Docker部署的Nacos，需要通过环境变量传递服务器标识密钥与值。
   - 添加环境变量至Docker启动命令或Compose文件中：
     - `NACOS_AUTH_IDENTITY_KEY`: 设置为自定义的键名，如`MyServerIdentityKey`。
     - `NACOS_AUTH_IDENTITY_VALUE`: 设置对应的唯一值，如`MyUniqueServerIdentityValue`。
   确保所有Nacos容器使用相同的环境变量值。
2. **重启容器**：更新Docker容器配置后，重启容器使设置生效。

### 额外说明
- 确保`nacos.core.auth.server.identity.key`和`nacos.core.auth.server.identity.value`的设置既独特又安全，避免使用易猜测的值。
- 如果是在已开启鉴权功能后发现此问题，可能需要暂时关闭鉴权功能，按照上述步骤重新配置后再开启鉴权，确保整个过程对现有业务的影响最小。

通过以上步骤，你应该能够解决“invalid server identity key or value”的错误，增强Nacos系统的安全性。务必确保所有更改与配置的一致性，以及在进行这些操作时考虑业务低峰期，以避免不必要的服务中断。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Nacos鉴权相关建议 
 
 * 专家经验：nacso 报 403 invalid token 
 
 * 专家经验：启动报错java.lang.IllegalArgumentException: the length of secret key must great than or equal 32 bytes... 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13890)给我们反馈。
