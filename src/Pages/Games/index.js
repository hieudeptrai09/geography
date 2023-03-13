import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { useGlobalStates, actions } from '../../warehouse'
import { themes, isNeedImage, continents } from '../../dropdown.js'
import styles from './Game.module.scss'

const cx = classNames.bind(styles)

function Games() {
  const [state, dispatch] = useGlobalStates()
  const {
    question,
    answer,
    mode,
    suggestion,
    noAnswer,
    onlyCountry,
    hiddenInQuestion,
    hiddenInAnswer,
    continent,
  } = state

  const [step1ruoi, setStep1ruoi] = useState(false)
  const [step2, setStep2] = useState(false)
  const [step2ruoi, setStep2ruoi] = useState(false)
  const [step3, setStep3] = useState(false)
  const [step4, setStep4] = useState(false)

  return (
    <div className={cx('capital-wrapper')}>
      <div className={cx('question-wrapper')}>
        <div>
          <label className={cx('label')}>Chủ đề câu hỏi: </label>
          <select
            defaultValue="-1"
            onChange={(e) => {
              setStep2(true)
              if (isNeedImage(themes[e.target.value])) setStep1ruoi(true)
              else setStep1ruoi(false)
              dispatch(actions.setQuestion(e.target.value))
            }}
          >
            <option hidden disabled value="-1"></option>
            {themes.map((theme, index) => {
              return (
                <option key={index} value={index}>
                  {theme}
                </option>
              )
            })}
          </select>
        </div>
        {step1ruoi && (
          <div>
            <input
              className={cx('label', 'radio')}
              type="checkbox"
              onChange={(e) => {
                dispatch(actions.setHiddenInQuestion(e.target.checked))
              }}
            />
            Che ảnh ở câu hỏi
            {state.hiddenInQuestion && (
              <select
                defaultValue="-1"
                onChange={(e) => {
                  dispatch(
                    actions.setTypeUncoveredQuestion(
                      Boolean(Number.parseInt(e.target.value)),
                    ),
                  )
                }}
              >
                <option hidden disabled value="-1">
                  Kiểu mở ảnh
                </option>
                <option value={'0'}>5 mảnh kiểu Olympia</option>
                <option value={'1'}>Mở từng mảnh nhỏ</option>
              </select>
            )}
            {state.typeUncoveredQuestion && (
              <select
                defaultValue="-1"
                onChange={(e) => {
                  dispatch(
                    actions.setColumnCellQuestion(
                      Number.parseInt(e.target.value),
                    ),
                  )
                }}
              >
                <option hidden disabled value="-1">
                  Số cột
                </option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                <option value={'6'}>6</option>
                <option value={'7'}>7</option>
                <option value={'8'}>8</option>
                <option value={'9'}>9</option>
                <option value={'10'}>10</option>
              </select>
            )}
            {state.typeUncoveredQuestion && (
              <select
                defaultValue="-1"
                onChange={(e) => {
                  dispatch(
                    actions.setRowCellQuestion(Number.parseInt(e.target.value)),
                  )
                }}
              >
                <option hidden disabled value="-1">
                  Số hàng
                </option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                <option value={'6'}>6</option>
                <option value={'7'}>7</option>
                <option value={'8'}>8</option>
                <option value={'9'}>9</option>
                <option value={'10'}>10</option>
              </select>
            )}
          </div>
        )}
      </div>
      <div className={cx('answer-wrapper')}>
        {step2 && (
          <div>
            <label className={cx('label')}>Chủ đề câu trả lời: </label>
            <select
              defaultValue="-1"
              onChange={(e) => {
                setStep3(true)
                if (isNeedImage(themes[e.target.value])) setStep2ruoi(true)
                else setStep2ruoi(false)
                dispatch(actions.setAnswer(e.target.value))
              }}
            >
              <option hidden disabled value="-1"></option>
              {themes.map((theme, index) => {
                if (
                  themes[question] !== 'Mã FIFA' &&
                  themes[question] !== 'Mã IOC'
                ) {
                  if (index != question) {
                    return (
                      <option key={index} value={index}>
                        {theme}
                      </option>
                    )
                  }
                } else if (themes[question] === 'Mã FIFA') {
                  if (index != question && themes[index] !== 'Mã IOC') {
                    return (
                      <option key={index} value={index}>
                        {theme}
                      </option>
                    )
                  }
                } else {
                  if (index != question && themes[index] !== 'Mã FIFA') {
                    return (
                      <option key={index} value={index}>
                        {theme}
                      </option>
                    )
                  }
                }
              })}
            </select>
          </div>
        )}
        {step2ruoi && (
          <div>
            <input
              className={cx('label', 'radio')}
              type="checkbox"
              onChange={(e) => {
                dispatch(actions.setHiddenInAnswer(e.target.checked))
              }}
            />
            Che ảnh ở câu trả lời
            {state.hiddenInAnswer && (
              <select
                defaultValue="-1"
                onChange={(e) => {
                  dispatch(
                    actions.setTypeUncoveredAnswer(
                      Boolean(Number.parseInt(e.target.value)),
                    ),
                  )
                }}
              >
                <option hidden disabled value="-1">
                  Kiểu mở ảnh
                </option>
                <option value={'0'}>5 mảnh kiểu Olympia</option>
                <option value={'1'}>Mở từng mảnh nhỏ</option>
              </select>
            )}
            {state.typeUncoveredAnswer && (
              <select
                defaultValue="-1"
                onChange={(e) => {
                  dispatch(
                    actions.setColumnCellAnswer(
                      Number.parseInt(e.target.value),
                    ),
                  )
                }}
              >
                <option hidden disabled value="-1">
                  Số cột
                </option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                <option value={'6'}>6</option>
                <option value={'7'}>7</option>
                <option value={'8'}>8</option>
                <option value={'9'}>9</option>
                <option value={'10'}>10</option>
              </select>
            )}
            {state.typeUncoveredAnswer && (
              <select
                defaultValue="-1"
                onChange={(e) => {
                  dispatch(
                    actions.setRowCellAnswer(Number.parseInt(e.target.value)),
                  )
                }}
              >
                <option hidden disabled value="-1">
                  Số hàng
                </option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                <option value={'6'}>6</option>
                <option value={'7'}>7</option>
                <option value={'8'}>8</option>
                <option value={'9'}>9</option>
                <option value={'10'}>10</option>
              </select>
            )}
          </div>
        )}
      </div>
      {step3 && (
        <div>
          <input
            type="radio"
            className={cx('label', 'radio')}
            onChange={() => {
              setStep4(false)
              dispatch(actions.setMode(false))
            }}
            checked={mode === false}
          />
          Trắc nghiệm
          <input
            type="radio"
            className={cx('left-radio', 'radio')}
            onChange={() => {
              setStep4(true)
              dispatch(actions.setMode(true))
              dispatch(actions.setForce(true))
            }}
            checked={mode === true}
          />
          Tự luận
          <br />
          {mode ? (
            <>
              <input
                className={cx('radio', 'label')}
                type="checkbox"
                onChange={(e) => {
                  dispatch(actions.setSuggestion(e.target.checked))
                }}
              />
              Gợi ý
            </>
          ) : (
            <>
              <label className={cx('label')}>Số phương án: </label>
              <input
                type="number"
                placeholder="từ 2 đến 10 phương án"
                className={cx('number-answer-input')}
                onChange={(e) => {
                  if (e.target.value >= 2 && e.target.value <= 10) {
                    setStep4(true)
                    dispatch(actions.setNoAnswer(e.target.value))
                    dispatch(actions.setForce(true))
                  } else setStep4(false)
                }}
              />
            </>
          )}
          <div>
            <label className={cx('label')}>Chủ quyền: </label>
            <select
              defaultValue="false"
              onChange={(e) => {
                dispatch(
                  actions.setOnlyCountry(
                    Boolean(Number.parseInt(e.target.value)),
                  ),
                )
              }}
            >
              <option hidden disabled value="-1"></option>
              <option value={'0'}>Tất cả các nước</option>
              <option value={'1'}>Chỉ thành viên và quan sát viên LHQ</option>
            </select>
          </div>
          <div>
            <label className={cx('label')}>Châu lục: </label>
            <select
              defaultValue="0"
              onChange={(e) => {
                dispatch(actions.setContinent(e.target.value))
              }}
            >
              <option hidden disabled value="-1"></option>
              {continents.map((continent, index) => {
                return (
                  <option key={index} value={index}>
                    {continent}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
      )}
      {step4 && (
        <Link className={cx('label')} to="/games/start">
          Vô chơi
        </Link>
      )}
    </div>
  )
}

export default Games
