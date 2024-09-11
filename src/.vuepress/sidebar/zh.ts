import { sidebar } from "vuepress-theme-hope";
import fs from 'fs';
import path from 'path';

// function traverseDirectories(directoryPath: string): string[] {
//   const directoriesSet: Set<string> = new Set();
//   const files = fs.readdirSync(directoryPath, { withFileTypes: true });

//   for (const file of files) {
//     const filePath = path.join(directoryPath, file.name);
//     const relativePath = path.relative(process.cwd(), filePath);

//     if (file.isDirectory()) {
//       directoriesSet.add(relativePath.split(path.sep).join('/'));

//       const subdirectories = traverseDirectories(filePath);
//       subdirectories.forEach((subPath) => directoriesSet.add(path.join(relativePath, subPath).split(path.sep).join('/')));
//     }
//   }

//   return Array.from(directoriesSet);
// }
// const directoryPath = path.resolve(__dirname, '../../zh'); 
// const directoryStructure = traverseDirectories(directoryPath);

function getDirectories(srcPath: string): string[] {
    const directories: string[] = [];
    const lastFolderName =path.basename(srcPath);
    // directories.push(`/${lastFolderName}/`);

    function traverse(currentPath: string) {
        const items = fs.readdirSync(currentPath);
        for (const item of items) {
            const itemPath = path.join(currentPath, item);
            if (fs.statSync(itemPath).isDirectory()) {
                // 获取相对路径并格式化为Linux格式
                const relativePath = path.relative(srcPath, itemPath).replace(/\\/g, '/');
                directories.push(`/${lastFolderName}/${relativePath}/`);
                traverse(itemPath);
            }
        }
    }

    traverse(srcPath);
    return [...new Set(directories)]; // 去重
}
const baseDir = path.resolve(__dirname, '../../zh'); 
const directoryStructure = getDirectories(baseDir);

const zhSidebarConfig ={...directoryStructure.reduce((acc: Record<string, string>, path: string) =>
  {
    acc[`${path}`] = 'structure';
    return acc;
  }, 
  {
    //初始化值，如果自动生成包含初始配置的key，通常会被覆盖，因为它在最前面
  //   "/zh/": [
  //   "",
  //   {
  //     text: "如何使用",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文章",
  //     icon: "book",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   "slide",
  // ],
  })
};


//覆盖掉自动生成的前缀配置
const coverSidebarConfig ={
  "/zh/": [
  "",
  {
    text: "如何使用",
    icon: "laptop-code",
    prefix: "demo/",
    link: "demo/",
    children: "structure",
  },
  {
    text: "文章",
    icon: "book",
    prefix: "posts/",
    children: "structure",
  },
  "intro",
  "slide",
],
}

//替换指定key的值，通常个性化配置
interface ObjectAny {
  [key: string]: any;
}

function changeKeyValue(obj: ObjectAny, key: string, value: any): void {
  if (key in obj) {
      obj[key] = value;
  } else {
      console.warn(`sidebarPrefix "${key}" does not exist in the SidebarConfig`);
  }
}
//changeKeyValue(coverSidebarConfig, 'name', '李四'); 
//合并对象
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return {...obj1,...obj2};
}




// const obj1 = { name: 'Alice', age: 30 };
// const obj2 = { city: 'New York', country: 'USA' };
// const mergedObj = mergeObjects(obj1, obj2);
debugger;
const pp=JSON.stringify(mergeObjects(zhSidebarConfig,coverSidebarConfig));
// {
//   "/zh/": "structure",
//   "/zh/demo/": "structure",
//   "/zh/music/": "structure",
//   "/zh/open-source-projects/": "structure",
//   "/zh/posts/": "structure",
//   "/zh/posts/apple/": "structure",
//   "/zh/posts/banana/": "structure",
//   "/zh/program-life/": "structure",
//   "/zh/soft-tool/": "structure"
//   }

{
  

}


export const zhSidebar = sidebar(mergeObjects(zhSidebarConfig,coverSidebarConfig));






// export const zhSidebar = sidebar({

//   // "/zh/": directoryStructure,
//   "/src/zh/": "structure",
//   "/src/zh/demo/": "structure"
// }
 
// );
