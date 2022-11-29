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

        if (!inventoryId) throw new BadRequest('No inventory found' + inventoryId)
        return inventoryItem
    }
    async create(newinventory) {
        logger.log(newinventory)
        newinventory.id = dbContext.Inventory[dbContext.Inventory.length - 1].id + 1
        await dbContext.Inventory.push(newinventory)
        return newinventory

    }

}

export const inventorysService = new InventorysService()