// 导入 readline-sync 模块
const readlineSync = require('readline-sync');

// 使用 readline-sync 获取用户输入
let name = readlineSync.question("Enter your name: ");

// 打印用户输入
console.log(`Hello, ${name}!`);
