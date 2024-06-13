
import {
  useUpdateActiveBridge,
  useResetActiveBridge,
} from '../hooks/use-update-activeBridge'

// import request from 'superagent'

function ChangeActive({ id, isActive }: { id: number; isActive: boolean }) {
  const addActiveBridge = useUpdateActiveBridge()
  const deleteActiveBridge = useResetActiveBridge()

  const handleClick = async () => {
    if (addActiveBridge.isPending || deleteActiveBridge.isPending) {
        return
    }

    if (!isActive) {
      console.log('set active bridge:', { id })
      await addActiveBridge.mutateAsync({ id })
    } else {
      console.log('delete active bridge:', { id })
      await deleteActiveBridge.mutateAsync({ id })
    }
  }
  return (
    <button onClick={handleClick} disabled={addActiveBridge.isPending || deleteActiveBridge.isPending}>
      {isActive ? 'Delete Active Bridge' : 'Add Active Bridge'}
    </button>
  )
}
export default ChangeActive
