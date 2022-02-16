// 范围表达式解析生成列表
// Yefei <316606233@qq.com>

// [A-Z]-[0-100]
// A-0
// A-1
// ...
// A-100
// B-0

// [A-Z]-[0-100]-[A-D]
// A-0-A
// A-0-B

const RE = /(\[(([a-z]\-[a-z])|(\d+\-\d+))\])/ig;

function parse(text, limit = 1000, exclude = null) {
  const array = []
  const tmp = []
  let exp
  while ((exp = RE.exec(text)) !== null) {
    array.push(exp)
    tmp.push([])
    tmp.push([])
  }
  tmp.push([])

  if (exclude) {
    exclude = exclude.map(i => String(i).toUpperCase())
  }

  let j = 0
  let substrIndex = 0
  for (let arrIndex in array) {
    arrIndex = Number(arrIndex)
    const m = array[arrIndex]
    const [i1, i2] = [j++, j++]
    tmp[i1] = [text.substring(substrIndex, m.index)]
    substrIndex = m.index + m[0].length
    // alphabet
    if (m[3]) {
      let [a, b] = m[3].toUpperCase().split('-')
      for (let i = a.charCodeAt(0); i <= b.charCodeAt(0); i++) {
        const c = String.fromCharCode(i)
        if (exclude && exclude.indexOf(c.toUpperCase()) !== -1) continue
        tmp[i2].push(c)
        if (tmp[i2].length === limit) break
      }
    }
    // number
    if (m[4]) {
      let [a, b] = m[4].split('-')
      for (let i = Number(a); i <= Number(b); i++) {
        if (exclude && exclude.indexOf(String(i)) !== -1) continue
        tmp[i2].push(i)
        if (tmp[i2].length === limit) break
      }
    }
  }
  tmp[tmp.length - 1] = [text.substring(substrIndex)]

  const results = []
  const result = []
  function mig(arr, index) {
    for (var i = 0; i < arr[index].length; i++) {
      result[index] = arr[index][i];
      if (index !== arr.length - 1) {
        if (!mig(arr, index + 1)) return
      } else {
        results.push(result.join(''))
        if (results.length === limit) return false
      }
    }
    return true
  }
  mig(tmp, 0)
  return results
}

module.exports = parse

// console.log('out:', parse('[95-110]', 100, exclude=['b',4]))
