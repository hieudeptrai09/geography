import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Image.module.scss'

const cx = classNames.bind(styles)

const loadImage = (setImageDimensions, isQuestion, imageUrl) => {
  const img = document.createElement('img')
  img.src = imageUrl

  img.onload = () => {
    isQuestion
      ? setImageDimensions({
          width: (img.width * 300) / img.height,
          height: 300,
        })
      : setImageDimensions({
          width: 200,
          height: (img.height * 200) / img.width,
        })
  }
  img.onerror = (err) => {
    console.log('img error')
    console.error(err)
  }
}

function Image({
  src,
  alt,
  covered,
  className,
  isQuestion,
  place,
  type,
  columnCell,
  rowCell,
  submitted,
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [typeUncovered, setTypeUncovered] = useState(0)
  const [tempBtnArray, setTempBtnArray] = useState([])

  useEffect(() => {
    if (covered) {
      let temp = []
      for (let i = 0; i < rowCell; i++)
        for (let j = 0; j < columnCell; j++) temp.push(i + '' + j)
      setTempBtnArray(temp)
    }
  }, [])

  useEffect(() => {
    if (covered) {
      for (let i = 0; i < rowCell; i++)
        for (let j = 0; j < columnCell; j++)
          if (document.querySelector('.' + place + ' #btn-' + i + j) !== null)
            document
              .querySelector('.' + place + ' #btn-' + i + j)
              .classList.remove(styles.uncover)
      loadImage(setDimensions, isQuestion, src)
    }
  }, [submitted])

  const uncover = (e) => {
    let chosenPiece = e.target.id.substr(4)
    if (type) {
      document
        .querySelector('.' + place + ' #' + e.target.id)
        .classList.add(styles.uncover)
    } else {
      const fivePieces = [
        ['00', '01', '10'],
        ['02', '03', '13'],
        ['20', '30', '31'],
        ['23', '32', '33'],
        ['11', '12', '21', '22'],
      ]
      for (var i = 0; i < 5; i++) {
        if (fivePieces[i].indexOf(chosenPiece) > -1) {
          console.log(i)
          for (var j = 0; j < fivePieces[i].length; j++) {
            console.log(fivePieces[i][j])
            document
              .querySelector('.' + place + ' #btn-' + fivePieces[i][j])
              .classList.add(styles.uncover)
          }
          break
        }
      }
    }
  }

  const wrapperDimension = () => {
    if (covered) {
      if (isQuestion) return { width: dimensions.width }
      else return { height: dimensions.height }
    } else return {}
  }

  const gridSize = (n) => {
    let result = 'auto'
    for (let i = 1; i < n; i++) result += ' auto'
    return result
  }

  return (
    <div style={wrapperDimension()} className={cx('wrapper')}>
      <img src={src} alt={alt} className={className} />
      {covered && (
        <div
          style={{
            width: dimensions.width,
            height: dimensions.height,
            gridTemplateColumns: gridSize(columnCell),
            gridTemplateRows: gridSize(rowCell),
          }}
          className={cx('btn-wrapper', {
            [place]: true,
            [styles.uncover]: submitted,
          })}
        >
          {tempBtnArray.map((btnCode) => {
            return (
              <button
                key={btnCode}
                id={'btn-' + btnCode}
                onClick={(e) => uncover(e)}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Image
