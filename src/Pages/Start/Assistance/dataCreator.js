import countryData from '../../../countryData.js'
import { themes, isNeedImage } from '../../../dropdown.js'

function dataCreator(id, type) {
  const temp = countryData[id][type]

  if (Array.isArray(temp)) {
    if (isNeedImage(themes[type])) {
      let randomer = Math.floor(Math.random() * temp.length)
      return temp[randomer]
    } else {
      let flag = false
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].name === '') {
          flag = true
          break
        }
      }
      if (flag) {
        let randomer = Math.floor(Math.random() * temp.length)
        return temp[randomer]
      } else {
        let randomer = Math.floor(Math.random() * (temp.length + 1))
        if (randomer === temp.length) {
          let result = ''
          for (let i = 0; i < temp.length; i++) {
            if (i === 0) result += temp[i].name
            if (i > 0 && i < temp.length - 1) result += ', ' + temp[i].name
            if (i === temp.length - 1) result += ' và ' + temp[i].name
          }
          return result + '*'
        } else return temp[randomer]
      }
    }
  } else return temp
}

export default dataCreator
