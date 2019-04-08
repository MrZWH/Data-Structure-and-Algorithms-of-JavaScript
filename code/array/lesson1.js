export default (str) => {
	let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
	let num = str.split('')
	let code = []
	num.forEach(item => {
		if (map[item]) {
			code.push(map[item])
		}
	})

	let comb = arr => {
		let tmp =  []
		// 最外层的循环是遍历第一个元素， 里层的循环是遍历第二个元素
		for(let i = 0, il = arr[0].length; i< il; i++) {
			for (let j = 0, jl = arr[1].length; j < jl; j++) {
				tmp.push(`${arr[0][i]}${arr[1][j]}`)
			}
		}
		// tmp ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']

		arr.splice(0, 2, tmp) // arr [["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], 'ghi']

		if (arr.length > 1) {
			comb(arr)
		} else {
			return tmp
		}

		return arr[0]
	}
	return comb(code)
}