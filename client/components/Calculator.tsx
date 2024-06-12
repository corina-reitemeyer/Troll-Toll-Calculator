export default function Calculator() {
  // Corina's thinking
  // Add 50 rockcandies to a total starting from 0
  // if Rockcandies is < than 100 = display rockcandies (no conversion)
  // if rockcandies is >= than 100 = display as 1 goldring (conversion)
  // if Gold rings is < than 100 = display as goldrings (no conversion)
  // if Gold rings is >= 100 = display 1 Goat (conversion)
  // if Goats is >= 1 =  no further conversion, it stays as Goat (no conversion)
  // --------------- //
  // Bihui's thinking <- WE CHOOSE THIS APPROACH
  // total = total + 50 rock candies
  // if sum < 100 = rockcandies
  // if 100 < total < 10000
  // sum = total % 10
  // if total > 10000, sum = 10000 % 100

  const total = 80748
  const goatTotal = Math.floor(total / 10000) // expect: 8
  const goldRingTotal = Math.floor((total % 10000) / 100) //expect: 7
  const rockCandyTotal = (total % 100000) % 100 // expect: 48

  console.log(goatTotal)
  console.log(goldRingTotal)
  console.log(rockCandyTotal)
}
