import { useGlobalStates, actions } from '../../warehouse'

function Writing() {
  const [state, dispatch] = useGlobalStates()

  return <div>Writing</div>
}

export default Writing
