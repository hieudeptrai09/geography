import { useContext } from 'react'
import Context from './Context'

export const useGlobalStates = () => {
  const [state, dispatch] = useContext(Context)
  return [state, dispatch]
}
