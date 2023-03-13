import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faXmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'

import { useGlobalStates, actions } from '../../../warehouse'
import countryData, {
  countriesInUN,
  countriesInContinents,
} from '../../../countryData'
import { themes, isNeedImage, continents } from '../../../dropdown'
import { questionCreator, dataCreator } from '../Assistance'
import Image from '../Image'
import NoData from '../NoData'

import styles from './MultipleChoice.module.scss'

const cx = classNames.bind(styles)

function Choice() {
  const [state, dispatch] = useGlobalStates()

  const [count, setCount] = useState(1)
  const [mark, setMark] = useState(0)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [answerPlace, setAnswerPlace] = useState(-1)
  const [choseAns, setChoseAns] = useState(-1)
  const [infoAdd, setInfoAdd] = useState([])
  const [submitted, setSubmitted] = useState()
  let data = useRef([])
  let maxMark = useRef()
  let answered = useRef([])
  let navigate = useNavigate()
  const questionImage = isNeedImage(themes[state.question])
  const answerImage = isNeedImage(themes[state.answer])

  useEffect(() => {
    if (state.onlyCountry) {
      if (continents[state.continent] === 'Tất cả') {
        data.current = countriesInUN
      } else {
        data.current = countriesInContinents[
          continents[state.continent]
        ].filter((index) => countriesInUN.indexOf(index) >= 0)
      }
    } else {
      if (continents[state.continent] === 'Tất cả') {
        let temp = []
        for (let i = 1; i <= countryData.length; i++) temp.push(i)
        data.current = temp
      } else {
        data.current = countriesInContinents[continents[state.continent]]
      }
    }
    for (let i = 0; i < state.noAnswer; i++) {
      answered.current.push(false)
    }
  }, [])

  useEffect(() => {
    let infoAdd = [] //126, 228
    let questionId =
      data.current[Math.floor(Math.random() * data.current.length)] - 1
    let question = dataCreator(questionId, themes[state.question])
    if (
      typeof question === 'object' &&
      !Array.isArray(question) &&
      question !== null
    ) {
      infoAdd.push(question.type)
      if (questionImage) question = question.link
      else question = question.name
    } else if (typeof question === 'string') {
      infoAdd.push('')
    }

    let place = Math.floor(Math.random() * state.noAnswer)

    let correctAnswer = dataCreator(questionId, themes[state.answer])
    if (
      typeof correctAnswer === 'object' &&
      !Array.isArray(correctAnswer) &&
      correctAnswer !== null
    ) {
      infoAdd.push(correctAnswer.type)
      if (answerImage) correctAnswer = correctAnswer.link
      else correctAnswer = correctAnswer.name
    } else if (typeof correctAnswer === 'string') {
      if (correctAnswer.substr(correctAnswer.length - 1) === '*')
        correctAnswer = correctAnswer.substr(0, correctAnswer.length - 1)
      infoAdd.push('')
    }

    if (correctAnswer === '' && !answerImage) correctAnswer = 'Không có'

    let answersTemp = []
    for (let i = 0; i < state.noAnswer - 1; i++) {
      let answerId =
        data.current[Math.floor(Math.random() * data.current.length)] - 1
      let anotherAnswer = dataCreator(answerId, themes[state.answer])
      if (
        typeof anotherAnswer === 'object' &&
        !Array.isArray(anotherAnswer) &&
        question !== null
      ) {
        if (answerImage) anotherAnswer = anotherAnswer.link
        else anotherAnswer = anotherAnswer.name
      } else if (typeof anotherAnswer === 'string') {
        if (anotherAnswer.substr(anotherAnswer.length - 1) === '*')
          anotherAnswer = anotherAnswer.substr(0, anotherAnswer.length - 1)
      }

      if (anotherAnswer === '' && !answerImage) anotherAnswer = 'Không có'

      let questionFromAnswer = countryData[answerId][themes[state.question]]
      let isMatch = Array.isArray(questionFromAnswer)
        ? questionFromAnswer.indexOf(correctAnswer) >= 0
        : questionFromAnswer === correctAnswer

      if (
        anotherAnswer !== correctAnswer &&
        answersTemp.indexOf(anotherAnswer) === -1 &&
        !isMatch
      ) {
        answersTemp.push(anotherAnswer)
      } else {
        --i
        continue
      }
    }

    answersTemp.splice(place, 0, correctAnswer)

    setSubmitted(false)
    setQuestion(question)
    setAnswers(answersTemp)
    setAnswerPlace(place)
    setInfoAdd(infoAdd)
    if (document.querySelector('.' + styles.submit) !== null)
      document.querySelector('.' + styles.submit).disabled = false
    for (let i = 0; i < state.noAnswer; i++) answered.current[i] = false

    maxMark.current = state.noAnswer - 1
  }, [count])

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (mark > 0) {
        for (var i = 0; i < state.noAnswer; i++) {
          if (i === choseAns)
            document
              .querySelector('#button-' + i)
              .classList.remove(styles.rightAnswer)
          else
            document
              .querySelector('#button-' + i)
              .classList.remove(styles.wrongAnswer)
        }
        setCount(count + 1)
      }
    }, 1000)
    return () => clearInterval(timerId)
  }, [mark])

  const chooseAnswer = (index) => {
    if (choseAns !== -1 && !answered.current[choseAns])
      document
        .querySelector('#button-' + choseAns)
        .classList.remove(styles.active)
    document.querySelector('#button-' + index).classList.add(styles.active)
    setChoseAns(index)
  }

  const checkAnswer = () => {
    if (choseAns !== -1 && !answered.current[choseAns]) {
      if (choseAns === answerPlace) {
        setMark(mark + maxMark.current)
        setSubmitted(true)
        document.querySelector('.' + styles.submit).disabled = true
        document
          .querySelector('#button-' + choseAns)
          .classList.remove(styles.active)
        for (var i = 0; i < state.noAnswer; i++) {
          if (i === choseAns)
            document
              .querySelector('#button-' + i)
              .classList.add(styles.rightAnswer)
          else
            document
              .querySelector('#button-' + i)
              .classList.add(styles.wrongAnswer)
          if (answered.current[i])
            document
              .querySelector('#button-' + i)
              .classList.remove(styles.active)
        }
      } else {
        answered.current[choseAns] = true
        --maxMark.current
        document
          .querySelector('#button-' + choseAns)
          .classList.add(styles.wrongAnswer)
        if (maxMark.current === 0) {
          dispatch(actions.setMark(mark))
          setSubmitted(true)
          document
            .querySelector('#button-' + answerPlace)
            .classList.add(styles.rightAnswer)
          // for(var i = 0; i < state.noAnswer; i++) {
          // 	if(answered.current[i]) document.querySelector('#button-'+i).classList.remove(styles.active)
          // }
          setTimeout(() => {
            navigate('/gameover', { replace: true })
          }, 1000)
        }
      }
    }
  }

  if (!state.mode) {
    if (state.force)
      return (
        <div>
          <div className={cx('paragraph')}>
            <p className={cx('mark')}>{mark + ' điểm'}</p>
            <p className={cx('question')}>
              Câu {count}:{' '}
              {questionCreator(
                question,
                themes[state.question],
                themes[state.answer],
                infoAdd[0],
                infoAdd[1],
              )}
            </p>
          </div>
          {questionImage && (
            <Image
              src={
                question ||
                'https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.svg'
              }
              className={cx('question-image')}
              alt="một thứ gì đó"
              covered={state.hiddenInQuestion}
              isQuestion
              place="question"
              type={state.typeUncoveredQuestion}
              columnCell={
                state.typeUncoveredQuestion ? state.columnCellQuestion : 4
              }
              rowCell={state.typeUncoveredQuestion ? state.rowCellQuestion : 4}
              submitted={submitted}
            />
          )}
          <div className={cx('answer-wrapper')}>
            {answers.map((answer, index) => {
              return (
                <button
                  id={`button-${index}`}
                  className={cx('answer-item', {
                    [styles.active]: answered.current[index],
                    [styles.wrongAnswer]: answered.current[index],
                    [styles.answerImageBtn]: answerImage,
                    [styles.answerTextBtn]: !answerImage,
                  })}
                  key={index}
                  onClick={() => chooseAnswer(index)}
                >
                  {answerImage ? (
                    <Image
                      className={cx('answer-image', {
                        [styles.noImage]: !answer,
                      })}
                      src={
                        answer ||
                        'https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.svg'
                      }
                      alt={'câu trả lời thứ' + { index }}
                      covered={state.hiddenInAnswer}
                      isQuestion={false}
                      place={`button-${index}`}
                      type={state.typeUncoveredAnswer}
                      columnCell={
                        state.typeUncoveredAnswer ? state.columnCellAnswer : 4
                      }
                      rowCell={
                        state.typeUncoveredAnswer ? state.rowCellAnswer : 4
                      }
                      submitted={submitted}
                    />
                  ) : (
                    <span>{answer}</span>
                  )}
                  <FontAwesomeIcon
                    className={cx('right-answer-icon')}
                    icon={faCheck}
                  />
                  <FontAwesomeIcon
                    className={cx('wrong-answer-icon')}
                    icon={faXmark}
                  />
                  <FontAwesomeIcon
                    className={cx('confirm-icon')}
                    icon={faCircleCheck}
                  />
                </button>
              )
            })}
          </div>
          <button className={cx('submit')} onClick={checkAnswer}>
            Trả lời
          </button>
        </div>
      )
    else return <NoData />
  }
}

export default Choice
