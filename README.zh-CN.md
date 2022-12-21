<h1 align="center">koishi-plugin-hitokoto</h1>

<p align="center">
  <img src="./logo.png" width="600px"></img>
</p>

<p align="center">「用代码表达言语的魅力，用代码书写山河的壮丽。」</p>
<p align="center"><sup>——一言开发者</sup></p>

🌏 [English](./README.md) | 简体中文

动漫也好、小说也好、网络也好，不论在哪里，我们总会看到有那么一两个句子能穿透你的心。我们把这些句子汇聚起来，形成一言网络，以传递更多的感动。如果可以，我们希望我们没有停止服务的那一天。

简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是一言存在的目的。

这是 [koishi](https://github.com/koishijs/koishi) 框架的一言插件，调用指令后会回复随机的一句话。数据来源于 [一言网](https://hitokoto.cn)。

## 安装方式

该插件可以通过插件市场安装，也可以通过包管理器安装。

### 插件市场安装

如果你已经有一个完整可运行的 koishi 环境，并且添加了插件市场插件，那么你可以直接在插件市场中搜索本插件的名称「`hitokoto`」并进行安装。

### 手动安装

如果你想要手动安装本插件，你应该确保你的系统已经安装了 `npm` 或者 `yarn`，然后运行下面的命令：

```bash
# 如果你使用的是 npm
$ npm install --save koishi-plugin-hitokoto
# 如果你使用的是 yarn
$ yarn add koishi-plugin-hitokoto
```

当你使用包管理器安装完毕后，还需要将此插件的名称填入你的 koishi 配置文件。

我们假设你的配置文件是 YAML 格式，你需要像下面这样添加一个配置项：

```yaml
---
# ...
plugins:
  hitokoto:
    # 添加你需要的配置，具体见下面的配置项介绍
    apiUrl: https://api.hitokoto.cn/
    minLength: 0
    maxLength: 30
```

## 配置

该插件有以下配置项可以配置：

|      名字      |      类型       | 是否必选 |           默认值           |                                       描述                                        |
| :------------: | :-------------: | :------: | :------------------------: | :-------------------------------------------------------------------------------: |
|    `apiUrl`    |    `string`     |    否    | `https://api.hitokoto.cn/` |                                   一言服务地址                                    |
|  `minLength`   |    `number`     |    否    |             0              |                     句子最小长度，可在调用指令时用选项覆盖。                      |
|  `maxLength`   |    `number`     |    否    |             30             |                     句子最大长度，可在调用指令时用选项覆盖。                      |
| `defaultTypes` | `Array<string>` |    否    |          所有类型          | 默认句子类型，可在调用指令时用选项覆盖。若传入的是空字符串，则当作 `['a']` 类型。 |

## 多语言

这个插件支持多语言。

### 支持语言

- 简体中文 - [@MaikoTan](https://github.com/MaikoTan)
- 英语 - [@MaikoTan](https://github.com/MaikoTan)
- 日语 - [@MaikoTan](https://github.com/MaikoTan)

### 贡献翻译

我们通过 [Crowdin](https://crowdin.com/) 网站本地化这个项目。

如果你愿意提供翻译，请注册一个 [Crowdin](https://crowdin.com/)的帐号，然后在 [hatsushimo](https://crowdin.com/project/hatsushimo) 项目的 `hitokoto` 文件夹中贡献您的翻译。

## 修订日志

你可以在[这里](./CHANGELOG.md)查看本插件的修订日志。

## 许可证

该项目遵循 MIT 协议，且以非商业形式引用[一言网](https://hitokoto.cn)的数据。
