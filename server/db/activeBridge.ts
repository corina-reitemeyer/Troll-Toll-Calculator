// import db from './connection'
// import { ActiveBridge } from '../../models/activeBridge'

// // write function to set active bridge - POST
// export async function setActiveBridge(
//     id: number, active_user_id:string, added_by_user_id: string) {
//     try{
//      const newActiveBridge = await db ('bridges')
//         .where({id})
//         .update({active_user_id, added_by_user_id})
//         .returning('*')
//     return newActiveBridge
//     } catch (error) {
//         console.error(`Error setting active bridge: ${error}`)
//     }
//     throw new Error
// }

// // Write a functon to delete active bridge - DEL
// export async function delActiveBridge(added_by_user_id: number, active_user_id: number) {
//     try {
//         await db('bridges').where({added_by_user_id, active_user_id }).del()
//     } catch (error) {
//         console.error(`Error deleting active bridge: ${error}`)
//         throw error
//     }
// }
