import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import images from '../../assets/images'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('logo')} src={images.logo} alt="Game địa lí" />
      <Link className={cx('games')} to="/games">
        Trò chơi
      </Link>
      <Link to="/record">Tổng điểm</Link>
    </div>
  )
}

export default Home
