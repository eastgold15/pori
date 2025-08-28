# @pori/config

```bash
npm i -D @pori/config
```

[Total TS Reference](https://www.totaltypescript.com/tsconfig-cheat-sheet)

- Sets source dir to `src` and out dir to `dist`
- Assumes you know your runtime, includes `@types/node` as a dependency, and sets `lib` to include DOM types.

## 安装配置

使用以下命令安装配置文件到您的项目中：

```bash
# 安装 .vscode 和 release 配置
npx install-config vscode release

# 只安装 .vscode 配置
npx install-config vscode

# 只安装 release 配置
npx install-config release
```

## tsc

```json
{ "extends": "@pori/config/tsconfig/tsc.json" }
```

## bundler

```json
{ "extends": "@pori/config/tsconfig/bundler.json" }
```

## biome

```json
{ "extends": "@pori/config/biome/all.json" }
```

all 、 end、 front

## vscode

.vscode 配置需要复制到项目中，使用安装脚本可以自动完成：

```bash
npx install-config vscode
```