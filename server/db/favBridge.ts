import db from './connection'
import { FavBridge } from '../../models/favBridge'


// write function to add favourite bridge - POST 
// where user_id and bridges_id 
// return 202 message

export async function addFavBridge(id: number): Promise<FavBridge> {
    return db('favBridges').insert(id)
}

// write function to remove favourite bridges - POST
// where user_id / bridges_id?

export async function delFavBridge(user_id: number, bridges_id: number){
    return db('favBridges')
    .where({ user_id, bridges_id}).del()
}