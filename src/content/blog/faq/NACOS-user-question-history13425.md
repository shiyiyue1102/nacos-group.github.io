---
id: "question-history-13425"
title: "nacos2.2.3 开启鉴权配置、权限认证的具体流程"
date: "2024-09-26"
category: "expertConsultation"
description: "要在Nacos 2.2.3版本中开启鉴权配置并进行权限认证，具体流程如下：### 1. 确定部署环境- **非Docker环境**：直接编辑`application.properties`文件。- **Docker环境**：通过环境变量配置。- **Kubernetes (k8s)环境**：通过配置"
tags: ["nacos-opensource","nacos223","开启鉴权配置","权限认证","具体流程"]
keywords: ["nacos-opensource","nacos223","开启鉴权配置","权限认证","具体流程"]
---

## 用户问题 ： 
 nacos2.2.3 开启鉴权配置、权限认证的具体流程  

---------------
## 专家官方解答 ：

要在Nacos 2.2.3版本中开启鉴权配置并进行权限认证，具体流程如下：

### 1. 确定部署环境
- **非Docker环境**：直接编辑`application.properties`文件。
- **Docker环境**：通过环境变量配置。
- **Kubernetes (k8s)环境**：通过配置映射或环境变量设置。

### 2. 修改核心鉴权配置
不论哪种部署方式，都需要确保以下核心配置项被正确设定：
- **开启鉴权功能**：`nacos.core.auth.enabled=true`
- **设置鉴权系统类型**（仅当使用非默认鉴权插件时）：`nacos.core.auth.system.type=nacos`
- **自定义密钥**：为了安全，需自定义JWT令牌的密钥，确保长度超过32字符，并使用Base64编码。例如：
  ```
  nacos.core.auth.default.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=
  ```
- **服务端身份标识**（集群模式重要）：
  ```
  nacos.core.auth.server.identity.key=yourIdentityKey
  nacos.core.auth.server.identity.value=yourIdentityValue
  ```

### 3. 实施步骤

#### 非Docker环境
1. 打开Nacos服务器的`conf/application.properties`文件。
2. 修改或添加上述提到的核心鉴权配置项。
3. 保存更改，无需重启服务端，鉴权开关即时生效。

#### Docker环境
1. 启动Docker容器时，添加必要的环境变量，例如：
   ```powershell
   docker run ... \
   -e NACOS_AUTH_ENABLE=true \
   -e NACOS_AUTH_TOKEN_EXPIRE_SECONDS=18000 \
   -e NACOS_AUTH_TOKEN=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg= \
   -e NACOS_AUTH_CACHE_ENABLE=false \
   ...
   ```
2. 如果使用自定义镜像，需预先在Dockerfile中或构建镜像前修改配置文件。

#### Kubernetes (k8s)环境
1. 在Nacos Deployment或StatefulSet的yaml配置文件中，通过`env`部分添加鉴权相关的环境变量。
2. 确保`NACOS_AUTH_ENABLE=true`及其他必要环境变量设置正确。
3. 应用配置更改，使用`kubectl apply -f your-config-file.yaml`命令更新部署。

### 4. 认证与访问
- 开启鉴权后，访问Nacos控制台或API时，需要提供有效的用户名和密码。
- 登录凭证需基于正确的密钥生成，以通过Nacos的权限验证。

### 注意事项
- 动态修改密钥时，确保新密钥的有效性，避免因修改不当导致登录失败或请求异常。
- 在集群环境中，确保所有节点的鉴权配置一致，包括密钥和身份标识，以免引发403错误。

以上步骤涵盖了Nacos 2.2.3版本开启鉴权配置与权限认证的基本流程。确保遵循每个环节的具体指导，以顺利完成配置。更多详细信息和最新更新，请参考Nacos官方文档：[Nacos官方鉴权指南](https://nacos.io/docs/latest/guide/user/auth/) 和 [Nacos Docker部署说明](https://github.com/nacos-group/nacos-docker)。


<font color="#949494">---------------</font> 


## 参考链接 ：

* [Authorization](https://nacos.io/docs/latest/guide/user/auth)
 
 * 专家经验：Nacos部署集群模式怎么打开鉴权 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=13895)给我们反馈。
