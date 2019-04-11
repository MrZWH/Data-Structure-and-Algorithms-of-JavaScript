## js 数据结构与算法

### 简单算法
- 字符串
- 数组
   - 知识点
     - Array.prototype.splice
- 正则
- 排序
- 递归

#### 基础算法之“字符串类”
字符串作为JS最基本的数据类型，掌握好字符串类型的算法题目是学习算法最好的入门阶梯，也是业务开发中最受用的部分之一。
##### 反转字符串中的单词
- 知识点
    - String.prototype.split
    - String.prototype.match
    - Array.prototype.map
    - Array.prototype.reverse
    - Array.prototype.join

##### 计数二进制子串
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

#### 基础算法之“数组类
数组是JS世界里必不可少的类型，“小小”的数组，“大大”的世界，一维、二维空间、组合、分组、堆栈、队列等等都离不开它，学习这个章节打开潘朵拉的盒子吧。
##### 电话号码的组合（公式运算）

##### 卡牌分组（归类运算）
leetcode 914.卡牌分组  
操作系统支持的最大数`Number.MAX_SAFE_INTEGER`,
对数组的清空使用`arr.length = 0`,复制数组`[].concat(arr)`
##### 种花问题（筛选运算）
leetcode 605  
数学建模是算法中最有用的理论课
知识点：问题抽象、数学建模、动态输入
##### 格雷编码（二进制运算）
leetcode 89  
知识点：发现规律、动态输入。  


#### 基础算法之“正则类”
正则是让人又爱又恨的JS知识，“爱”它的神通广大，“恨”它的抽象难懂，我们尝试从基础用法到高级模式匹配让你走近它的梦幻世界
##### 重复的子字符串
459.重复的子字符串  
知识点：重视基础、知识全面
##### 正则表达式匹配
总结规律、分布演练

#### 基础算法之“排序类”
排序是学生时代标志性的回忆，然而如何魔改“冒泡排序”、“选择排序”让很多看似与排序无关的题目迎刃而解是不是闻所未闻，还等什么呢？
时间复杂度：看的是运行次数。
空间复杂度：看的是占内存情况。

##### 冒泡排序、选择排序
重点是理解原理

##### 最大间距
164.最大间距  
一般思路：先调用 sort api 排序，然后两两相减取最大值。   
这样性能不是最优，因为排序之后又循环了一遍，可以在使用冒泡排序过程中把最大值比较完成。

##### 数组中第 K 个最大元素
215  
要吃透基础的排序算法，因为它是所有变种排序的基石。

##### 按奇偶排序数组Ⅱ
922  
一半是奇数一半是偶数，数组的长度一定是偶数。

##### 缺失的第一个正数
41  
0 不是正整数。
运用选择排序做最优解。