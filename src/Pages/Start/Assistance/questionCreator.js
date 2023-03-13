import { themes, isNeedImage } from '../../../dropdown.js'

function questionCreator(
  data,
  questionType,
  answerType,
  addInfoQuestion,
  addInfoAnswer,
) {
  let questionInSentence = questionType[0].toLowerCase() + questionType.slice(1)
  let answerInSentence = answerType[0].toLowerCase() + answerType.slice(1)

  if (questionType === 'Quốc gia') {
    return `Đâu là ${answerInSentence} ${addInfoAnswer} của ${data}?`
  } else {
    if (data === '') {
      if (answerType === 'Quốc gia')
        return `Quốc gia nào dưới đây không có ${questionInSentence} ${addInfoQuestion}?`
      else
        return `${answerType} ${addInfoAnswer} của quốc gia này là gì, biết rằng quốc gia đó không có ${questionInSentence} ${addInfoQuestion}?`
    } else {
      let result = ''
      if (isNeedImage(questionType)) {
        //câu hỏi dạng hình
        result = 'Đây là '
      } else {
        //câu hỏi dạng chữ
        if (data.substr(data.length - 1) === '*') {
          //số nhiều
          data = data.substr(0, data.length - 1)
          result = `${data} là các `
        } else result = `${data} là `
      }
      if (answerType === 'Quốc gia')
        result += `${questionInSentence} ${addInfoQuestion} của quốc gia nào?`
      else
        result += `${questionInSentence} ${addInfoQuestion} của quốc gia có ${answerInSentence} ${addInfoAnswer} là gì?`
      return result
    }
  }
}

export default questionCreator
