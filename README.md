## js 数据结构与算法

### 简单算法
- 字符串
- 数组
   - 知识点
     - Array.prototype.splice
- 正则
- 排序
- 递归

#### 字符串
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

<font color=#FF0000>0011</font>0011  
0<font color=#FF0000>011</font>0011  
00<font color=#FF0000>1100</font>11  
001<font color=#FF0000>10</font>011  
0011<font color=#FF0000>0011</font>  
00110<font color=#FF0000>01</font>1  
