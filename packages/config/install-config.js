#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取 __dirname（在 ES Modules 中需要特殊处理）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('请提供要安装的配置名称，例如: node install-config.js vscode release');
  process.exit(1);
}

// 定义可复制的配置目录
const copyableConfigs = {
  '.vscode': '.vscode',
  'release': 'release'
};

// 定义可扩展的配置（通过 extends 使用）
const extendableConfigs = ['tsconfig', 'biome'];

// 检查参数是否有效
const validArgs = args.filter(arg => {
  if (copyableConfigs[arg]) {
    return true;
  } else if (extendableConfigs.includes(arg)) {
    console.log(`注意: ${arg} 配置通过 extends 方式使用，无需复制`);
    return false;
  } else {
    console.log(`警告: 未知的配置名称 '${arg}'`);
    return false;
  }
});

// 执行复制操作
validArgs.forEach(configName => {
  const sourceDir = path.join(__dirname, configName);
  const targetDir = path.join(process.cwd(), copyableConfigs[configName]);
  
  try {
    // 检查源目录是否存在
    if (fs.existsSync(sourceDir)) {
      // 复制目录
      fs.copySync(sourceDir, targetDir);
      console.log(`成功安装 ${configName} 配置到 ${targetDir}`);
    } else {
      console.log(`源目录不存在: ${sourceDir}`);
    }
  } catch (error) {
    console.error(`复制 ${configName} 配置时出错:`, error);
  }
});

console.log('配置安装完成');