export default (str, mode) => {
	// 对模式变量进行筛选
	let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=(a-z.)\*)|$)/g)
	let cur = 0
	let strLen = str.length
	for(let i = 0, len = modeArr.length, m;i< len;i++) {
		// 对于模式分为三类， .*|a*|cdef
		m = modeArr[i].split('')
		if(m[1] === '*') {
			if (m[0] === '.') {
				cur = strLen
			} else {
				while (str[cur] === m[0]) {
					cur++
				}
			}
		} else {
			for(let j = 0, jl = m.length; j<jl: j++) {
				if (m[j] !== str[cur]) {
					return false
				} else {
					cur++
				}
			}
		}
	}
	return cur === strLen
}