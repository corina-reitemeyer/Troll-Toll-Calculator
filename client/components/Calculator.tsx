import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sendRevenue } from '../apis/tollAnalytics'

interface Props {
  bridgeID: number
  bridgeName: string
}

export default function Calculator({ bridgeID }: Props) {
  const [activeTotal, setActiveTotal] = useState(0)
  const [activeGoldringTotal, setActiveGoalringTotal] = useState(0)
  const [activeRockcandyTotal, setActiveRockcandyTotal] = useState(0)
  const [activeGoatTotal, setActiveGoatTotal] = useState(0)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: sendRevenue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['revenue'] })
    },
  })

  const handleEvent = () => {
    setActiveTotal(activeTotal + 50)
    setActiveGoatTotal(Math.floor((activeTotal + 50) / 10000))
    setActiveGoalringTotal(Math.floor(((activeTotal + 50) % 10000) / 100))
    setActiveRockcandyTotal(((activeTotal + 50) % 10000) % 100)

    mutation.mutate({
      revenue: activeTotal,
      bridge_id: bridgeID,
    })
  }
  console.log(bridgeID)
  return (
    <>
      <div className="flex-row">
        <h3>Toll Collection</h3>
        <button className="button-text" onClick={handleEvent}>
          Add toll charge
        </button>
        <hr></hr>
        <section>
          <h4>Troll-toll total</h4>
          <p className="subtext">incl. boogies and underbridge tax</p>
          <p>Troll Rock Candy(Ȼ): {activeRockcandyTotal}</p>
          <p>Gold Rings(AuR): {activeGoldringTotal}</p>
          <p>Goat(GT): {activeGoatTotal}</p>
        </section>
      </div>
    </>
  )
}
