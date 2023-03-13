import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './NoData.module.scss'
import images from '../../../assets/images'

const cx = classNames.bind(styles)

function NoData() {
  return (
    <div className={cx('wrapper')}>
      <img src={images.logo} alt="logo" />
      <Link className={cx('to-games-btn')} to="/games">
        Về trang cấu hình
      </Link>
      <Link to="/">Về trang chủ</Link>
    </div>
  )
}

export default NoData
