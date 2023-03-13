import Home from '../Home'
import Games from '../Games'
import Record from '../Record'
import Start from '../Start'
import MultipleChoice from '../Start/MultipleChoice'
import GameOver from '../GameOver'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/games', component: Games },
  { path: '/games/start', component: MultipleChoice },
  { path: '/record', component: Record },
  { path: '/gameover', component: GameOver },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
