export default (tasks, n) => {
	// 表示最终队列的执行结果
	let q = ''
	// 对归类进行存储
	let Q = {}
	tasks.forEach(item => {
		if (Q[item]) {
			Q[item] ++
		} else {
			Q[item] = 1
		}
	})

	while (1) {
		// 任务清单
		let keys = Object.keys(Q)
		if (!keys[0]) {
			break
		}
		// 声明一个队列,用来存储 1+n 的任务单元
		let tmp = []
		for(let i = 0; i<=n; i++) {
			let max = 0
			let key
			let pos
			keys.forEach((item, idx) => {
				if (Q[item] > max) {
					max = Q[item]
					key = item
					let pos = idx
				}
			})

			if (key) {
				tmp.push(key)
				keys.splice(pos, 1)
				Q[key] --
				if (Q[key] < 1) {
					delete Q[key]
				}
			} else {
				break
			}
		}

		q += tmp.join('').padEnd(n+1, '-')
	}

	// 边界的处理，最后不要出现冷却时间
	q = q.replace(/-+$/g, '')
	return q.length
}