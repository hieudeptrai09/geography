import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'
import { useGlobalStates } from '../../warehouse'
import images from '../../assets/images'
import styles from './GameOver.module.scss'

const cx = classNames.bind(styles)

function GameOver() {
  const state = useGlobalStates()[0]
  let navigate = useNavigate()

  return (
    <div className={cx('wrapper')}>
      <img className={cx('image')} src={images.balloon} alt="celebrating"></img>
      <h1 className={cx('text')}>
        Chúc mừng bạn đã dành được {state.mark} điểm
      </h1>
      <div className={cx('btn-wrapper')}>
        <button
          className={cx('btn', 'old-btn')}
          onClick={() => navigate('/games/start')}
        >
          Chơi lại cấu hình cũ
        </button>
        <button
          className={cx('btn', 'new-btn')}
          onClick={() => navigate('/games')}
        >
          Chơi cấu hình mới
        </button>
      </div>
    </div>
  )
}

export default GameOver
