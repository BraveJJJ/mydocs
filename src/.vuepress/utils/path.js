import fs from 'fs';
import path from 'path';



// const fs = require('fs');
// const path = require('path');

/**
 * 读取指定目录下的所有.md文件，按照文件名从大到小排列
 * @param relativePath 相对路径
 * @returns {string[]|*[]} 文件名数组
 */
function findMdFiles(relativePath) {
    const directoryPath = path.join(process.cwd() + '/docs/', relativePath); // 使用process.cwd()来获取当前工作目录并构建目录路径

    try {
        const files = fs.readdirSync(directoryPath);

        // 筛选出以.md为后缀的文件名并排除README.md
        const mdFiles = files
            .filter((file) => file.endsWith('.md') && file !== 'README.md')
            .map((file) => path.parse(file).name);

        // 按照从大到小排序
        mdFiles.sort((a, b) => {
            const aNum = parseInt(a.slice(1));
            const bNum = parseInt(b.slice(1));
            return bNum - aNum;
        });
        console.log(mdFiles);

        return mdFiles;
    } catch (error) {
        console.error(`Error reading directory ${directoryPath}: ${error}`);
        return [];
    }
}


function traverseDirectories(directoryPath) {
    const directoryObject = {};
    const files = fs.readdirSync(directoryPath, { withFileTypes: true });
  
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file.name);
      const relativePath = path.relative(process.cwd(), filePath);
  
      if (file.isDirectory()) {
        const subdirectoryObject = traverseDirectories(filePath);
        directoryObject[relativePath] = "structure";
        Object.keys(subdirectoryObject).forEach((subPath) => {
          directoryObject[path.join(relativePath, subPath)] = "structure";
        });
      } else {
        directoryObject[relativePath] = "structure";
      }
    });
  
    return directoryObject;
  }

  export const traverseDirectories = traverseDirectories;
  export const findMdFiles = findMdFiles; 

