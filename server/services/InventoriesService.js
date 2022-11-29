import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"



class InventoriesService {
    async getAll() {
        // NOTE we now can access the db from db context 
        const inventory = await dbContext.Inventories.find({})
        return inventory
    }
    async getOne(inventoryId) {

        // TODO get from db 
        logger.log(inventoryId)
        const inventoryItem = await dbContext.Inventory.find(inv => inv.id == inventoryId)

        logger.log(inventoryItem)
        if (!inventoryItem) throw new BadRequest('No inventory found' + inventoryId)
        return inventoryItem
    }
    async create(newinventory) {

        logger.log(newinventory)
        // newinventory.id = dbContext.Inventory[dbContext.Inventory.length - 1].id + 1
        // await dbContext.Inventory.push(newinventory)

        // NOTE connecting to db
        let newItem = dbContext.Inventories.create(newinventory)
        return newItem

    }
    async remove(inventoryId) {
        // TODO remove from db 

        const removedItem = await this.getOne(inventoryId)
        let index = dbContext.Inventory.indexOf(removedItem)
        dbContext.Inventory.splice(index, 1)
        return `${removedItem.name} no longer available`
    }

}

export const inventoriesService = new InventoriesService()