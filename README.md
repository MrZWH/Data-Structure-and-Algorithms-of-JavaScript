## js 数据结构与算法

### 简单算法
- 字符串
- 数组
   - 知识点
     - Array.prototype.splice
- 正则
- 排序
- 递归

### 基础算法之“字符串类”
字符串作为JS最基本的数据类型，掌握好字符串类型的算法题目是学习算法最好的入门阶梯，也是业务开发中最受用的部分之一。
#### 反转字符串中的单词
- 知识点
    - String.prototype.split
    - String.prototype.match
    - Array.prototype.map
    - Array.prototype.reverse
    - Array.prototype.join

#### 计数二进制子串
题目：给定一个字符串 s ，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是组合在一起的。重复出现的子串要计算它们出现的次数。  
示例1：  
**输入**： “00110011”  
**输出**： 6  
**解释**：有 6 个子串具有相同数量的连续 1 和 0：“0011”，“01”，“1100”，“10”，“0011”，“01”。
请注意，一些重复出现的子串要计算它们出现的次数。  
另外，“00110011”不是有效的子串，因为所有的 0 （和 1）没有组合在一起。  

- 难度大的算法题如何解？
  - 算法的本质是寻找规律并实现
- 如何找到规律？
  - 发现输入和输出的关系，寻找突破点
- 复杂的实现怎么办？
  - 实现是程序 + 数据结构的结合体

<span color=#FF0000>**0011**</span>0011  
0<font color=#FF0000>**011**</font>0011  
00<font color=#FF0000>**1100**</font>11  
001<font color=#FF0000>**10**</font>011  
0011<font color=#FF0000>**0011**</font>  
00110<font color=#FF0000>**01**</font>1  

### 基础算法之“数组类
数组是JS世界里必不可少的类型，“小小”的数组，“大大”的世界，一维、二维空间、组合、分组、堆栈、队列等等都离不开它，学习这个章节打开潘朵拉的盒子吧。
#### 电话号码的组合（公式运算）

#### 卡牌分组（归类运算）
leetcode 914.卡牌分组  
操作系统支持的最大数`Number.MAX_SAFE_INTEGER`,
对数组的清空使用`arr.length = 0`,复制数组`[].concat(arr)`
#### 种花问题（筛选运算）
leetcode 605  
数学建模是算法中最有用的理论课
知识点：问题抽象、数学建模、动态输入
#### 格雷编码（二进制运算）
leetcode 89  
知识点：发现规律、动态输入。  


### 基础算法之“正则类”
正则是让人又爱又恨的JS知识，“爱”它的神通广大，“恨”它的抽象难懂，我们尝试从基础用法到高级模式匹配让你走近它的梦幻世界
#### 重复的子字符串
459.重复的子字符串  
知识点：重视基础、知识全面
#### 正则表达式匹配
总结规律、分布演练

### 基础算法之“排序类”
排序是学生时代标志性的回忆，然而如何魔改“冒泡排序”、“选择排序”让很多看似与排序无关的题目迎刃而解是不是闻所未闻，还等什么呢？
时间复杂度：看的是运行次数。
空间复杂度：看的是占内存情况。

#### 冒泡排序、选择排序
重点是理解原理

#### 最大间距
164.最大间距  
一般思路：先调用 sort api 排序，然后两两相减取最大值。   
这样性能不是最优，因为排序之后又循环了一遍，可以在使用冒泡排序过程中把最大值比较完成。

#### 数组中第 K 个最大元素
215  
要吃透基础的排序算法，因为它是所有变种排序的基石。

#### 按奇偶排序数组Ⅱ
922  
一半是奇数一半是偶数，数组的长度一定是偶数。

#### 缺失的第一个正数
41  
0 不是正整数。
运用选择排序做最优解。

### 递归

#### 复原 IP 地址
255 在 ip 中是最大的情况。  
ip 由 三个 . 分成四份，每一份都是 0 ~ 255。

#### 串联所有单词的子串
30  
缺（6 - 2 ~ 6 - 4）

## 数据结构
- 栈
- 队列
- 链表
- 矩阵
- 二叉树
- 堆

### 栈
#### 682.棒球比赛

#### 85.最大矩形

### 队列
#### 622.设计循环队列
#### 621.任务调度器
es6 api `string.padEnd(5, '-')`长度不够符号来凑。

### 链表
#### 148.排序链表
![](./images/时间空间复杂度表.PNG)

#### 141.环形链表
缺（9-4）

### 矩阵
#### 54.螺旋矩阵

#### 48.旋转图像
按中间行对换元素，然后再按对角线交换元素。

### 二叉树
#### 101.对称二叉树
二叉树的特性：一个节点有两个子节点（左节点、右节点）  
重点：  
- 计算当前节点属于哪一层
- 记录当前层的起始点
- 记录上一层的起始点
- 找到当前节点的父节点

#### 98.验证二叉搜索树

### 堆
基本概念：
- 必须是完全二叉树（满二叉树：不存在空余节点；完全二叉树：n-1 层必须是满二叉树。）
- 任一节点的值是其子树所有节点的最大值或最小值（最大堆、最小堆）

排序：
构建最大堆的过程会选出一个最大值。

#### 451.根据字符出现频率排序
1. 统计
2. 排序
3. 输出

string.repeat(number) 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。

#### 313.超级丑数
- 丑数： 只包含因子 2、3、5 的正整数被称作丑数，比如 4、10、12 都是丑数，而 7、23、111 则不是丑数，另外 1 也是丑数
- 超级丑数
- 质因数：质因数就是一个数的约数，并且是质数
- 质数：在大于 1 的自然数中，除了 1 和 它本身意外不再有其它因数

解题思路：
1. 求解任意整数的质因数
2. 质因数是否在指定质因数范围内
3. 是否达到指定个数 n

堆在排序上有一定的应用，而在查找上也有一定的优势。