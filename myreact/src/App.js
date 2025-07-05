/* git的使用：
1. 安装：git是一个基于操作系统的运行程序，所以不能使用npm安装
   需要去官网下载安装包 https://git-scm.com
   安装过程：一路下一步
   检测： 打开终端，git --version 
         win 操作系统：在桌面任意空白区域，单击鼠标右键
                      菜单栏里有git base here
                               git gui here
   安装完毕后就可以在电脑上使用git指令
  2. git首次安装需要进行配置 ！！否则形成历史版本时会报错
    配置方式：
  2.1.查看全局配置列表
      打开命令行：目录无所谓
      输入指令：git config --list
  2.2.配置全局用户名：git config --global user.name '你的用户名'
  2.3.配置全局邮箱：git config --global user.email '你的邮箱' 
  ！！再次查看全局配置列表： git config --list 就会出现配置的全局用户名和邮箱
 3.git的本地操作
  1.初始化 
    进入需要git管理的文件夹下执行: git init   !!出现 Initialized empty Git repository in 路径，代表初始化成功
    那么该文件夹下会出现一个.git的文件夹，这个文件夹就变成了一个由git管理的本地仓库，该文件夹下的所有文件都会被git管理
    注意：空文件夹git不管
          初始化之后未被提交到暂存区的代码目录会是绿色的 目录右边有一个U
  2.git仓库基本形态
    git会把这个仓库虚拟出三个位置
    工作区：所有能够看到的内容，code里所有的代码
    暂存区：保存想要形成历史版本的内容，当历史版本形成后，暂存区清空
    历史区：把暂存区的所有内容形成历史版本
    将工作区内容添加到暂存区：git add . !!文件目录右边的字母变成A M表示提交到暂存区后又更改(暂存区修改后不会形成本次的历史版本)
    将暂存区的内容形成历史版本：git commit -m '简要说明' !!目录变回正常样式 A消失但是M还在
    查看历史版本：git log 
    回退历史版本：git reset --hard 版本id（！！历史版本里commit后面的一串字符）
    git的忽略文件：一个没有名字，只有.gitignore后缀的文件
                  如果某些文件不需要被git管理就可以写到这个文件里，如node_modules
    git的远程操作：
    前提：需要先有一个github远程账号
    1.一个本地仓库的首次上传
      新建一个远程仓库，然后拿到https地址 !!!执行三行提示指令
      把本地仓库和远程仓库关联：git remote add 变量 远程地址 !!git remote add origin https...
      把本地仓库内容上传到远程：git push -u 地址变量名 分支名称 
      注意：一台电脑的首次上传需要输入用户名和密码
      ！！上传之后刷新github
    2.该本地仓库的第二次上传
*/
import './app.css'
function App() {
  return (
    <div className="App">
     {/* 初始化 */}
     this is app
     {/* ！！！第二次上传 */}
     <div className="box1"></div>
    </div>
  );
}

export default App;
