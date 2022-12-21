# koishi-plugin-hitokoto

<p align="center">
  <img src="./logo.png" width="600px"></img>
</p>

<p align="center">「用代码表达言语的魅力，用代码书写山河的壮丽。」</p>
<p align="center"><sup>——一言开发者</sup></p>

[English](./README.md) | 简体中文

这是 [koishi](https://github.com/koishijs/koishi) 框架的一言插件，调用指令后会回复随机的一句话。该服务由 [一言网](https://hitokoto.cn) 提供。

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

## Translation

这个插件支持多语言。

若您愿意提供翻译，请注册一个 [Crowdin](https://crowdin.com/) 的帐号，然后在 [hatsushimo](https://crowdin.com/project/hatsushimo) 项目的 `hitokoto` 文件夹中贡献您的翻译。

## ChangeLog 修订日志

你可以在[这里](./CHANGELOG.md)查看本插件的修订日志。

## License 许可证

该项目遵循 MIT 协议，且以非商业形式引用[一言网](https://hitokoto.cn)的数据。
