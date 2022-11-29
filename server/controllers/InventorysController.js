import BaseController from '../utils/BaseController'
import { inventoriesService } from '../services/InventoriesService.js'
import { logger } from '../utils/Logger.js'
import { response } from 'express'

export class InventorysController extends BaseController {
    constructor() {
        super('api/inventory')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
            .delete('/:id', this.remove)


    }

    async getAll(req, res, next) {
        try {
            const inventory = await inventoriesService.getAll()
            return res.send(inventory)

        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            const inventoryItem = await inventoriesService.getOne(req.params.id)

            return res.send({ inventoryItem, message: 'Here is the inventory item' })
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            // logger.log(req.body)
            const newInventory = await inventoriesService.create(req.body)
            return res.send(newInventory)
        } catch (error) {
            next(error)
        }
    }
    async remove(req, res, next) {
        try {
            const inventoryItem = await inventoriesService.remove(req.params.id)

            return res.send({ inventoryItem, message: 'item deleted' })
        } catch (error) {
            next(error)
        }
    }


}