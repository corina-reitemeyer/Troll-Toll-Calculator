import { useState } from "react"
import { FavBridge } from "../../models/favBridge"
// Use custom hook to make changes to the databases
import useAddFavBridge from "../hooks/use-add-favBridge"
import useDeleteFavBridge from "../hooks/use-add-favBridge"
// write function to handle the change state
function changeFavorite() {
const [clicked, setClicked] =useState(false)
const [bridgeId, setBridgeId] =useState<number | null>(null)

const addFavBridge = useAddFavBridge()
const deleteFavBridge = useDeleteFavBridge()

const handleButtonClick = () => {
  if (!clicked) {const newFavBridge: FavBridge = {

  }
addFavBridge.mutate(newFavBridge, {
  onSuccess: (data) => {
    setBridgeId(data.id)
  }
})}
}

}

// Write function that sets css 
//return html keeping in mind the html semantics
//communicate with list team
//integrate auth