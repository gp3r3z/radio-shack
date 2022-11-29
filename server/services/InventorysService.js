import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"



class InventorysService {
    async getAll() {
        const inventory = await dbContext.Inventory
        return inventory
    }
    async getOne(inventoryId) {
        logger.log(inventoryId)
        const inventoryItem = await dbContext.Inventory.find(inv => inv.id == inventoryId)

        logger.log(inventoryItem)
        if (!inventoryItem) throw new BadRequest('No inventory found' + inventoryId)
        return inventoryItem
    }
    async create(newinventory) {

        logger.log(newinventory)
        newinventory.id = dbContext.Inventory[dbContext.Inventory.length - 1].id + 1
        await dbContext.Inventory.push(newinventory)
        return newinventory

    }
    async remove(inventoryId) {
        const removedItem = await this.getOne(inventoryId)
        let index = dbContext.Inventory.indexOf(removedItem)
        dbContext.Inventory.splice(index, 1)
        return `${removedItem.name} no longer available`
    }

}

export const inventorysService = new InventorysService()