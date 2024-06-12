import { useState } from 'react'

export default function Calculator() {
  const total = 0
  const goatTotal = Math.floor(total / 10000) // expect: 8
  const goldRingTotal = Math.floor((total % 10000) / 100) //expect: 7
  const rockCandyTotal = (total % 100000) % 100 // expect: 48

  const [activeTotal, setActiveTotal] = useState(total)

  const handleEvent = (sum: number) => {
    setActiveTotal(sum)

    return (
      <>
        <hr></hr>
        <h3>Toll Collection</h3>
        <p>Bridge: Auckland Bridge</p>
        {/* DATAPOINT NEEDED FROM DATABASE */}
        <button onClick={() => handleEvent(activeTotal + 50)}>
          Add toll charge
        </button>
        <hr></hr>
        <section>
          <h4>Troll-toll total</h4>
          <p>incl. boogies and underbridge tax</p>
          <hr></hr>
          <p>Troll Rock Candy(Ȼ): {rockCandyTotal}</p>
          <p>Gold Rings(AuR): {goldRingTotal}</p>
          <p>Goat(GT): {goatTotal}</p>
        </section>
      </>
    )
  }
}
