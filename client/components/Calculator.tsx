import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sendRevenue } from '../apis/tollAnalytics'
import CalculatorBanner from './CalculatorBanner.tsx'

export default function Calculator() {
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
      id: 0,
      bridge_id: 0,
    })
  }

  return (
    <>
      <CalculatorBanner />
      <hr></hr>
      <h3>Toll Collection</h3>
      <p>Bridge: {}</p>
      {/* DATAPOINT NEEDED FROM DATABASE - this needs to be active bridge that is associated with the troll that is taking the toll */}
      <button onClick={handleEvent}>Add toll charge</button>
      <hr></hr>
      <section>
        <h4>Troll-toll total</h4>
        <p>incl. boogies and underbridge tax</p>
        <hr></hr>
        <p>Troll Rock Candy(Ȼ): {activeRockcandyTotal}</p>
        <p>Gold Rings(AuR): {activeGoldringTotal}</p>
        <p>Goat(GT): {activeGoatTotal}</p>
      </section>
    </>
  )
}
