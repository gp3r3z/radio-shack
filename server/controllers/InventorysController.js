import BaseController from '../utils/BaseController'
import { inventorysService } from '../services/InventorysService.js'
import { logger } from '../utils/Logger.js'
import { response } from 'express'

export class InventorysController extends BaseController {
    constructor() {
        super('api/inventory')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)


    }

    async getAll(req, res, next) {
        try {
            const inventory = await inventorysService.getAll()
            return res.send(inventory)

        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            const inventoryItem = await inventorysService.getOne(req.params.id)

            return response.send({ inventoryItem, message: "Here is the inventory item" })
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            // logger.log(req.body)
            const newInventory = await inventorysService.create(req.body)
            return res.send(newInventory)
        } catch (error) {
            next(error)
        }
    }

}