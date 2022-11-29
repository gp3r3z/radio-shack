import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import InventorySchema from '../models/Inventory.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);


  // Inventory = [
  //   { id: 1, name: 'VCR', description: 'the next generation of videos' },
  //   { id: 2, name: 'DVD', description: 'the next next generation of videos' },
  //   { id: 3, name: 'BlueRay', description: 'the next next NEXT generation of videos' }

  // ]

  Inventories = mongoose.model("Inventory", InventorySchema)

}

export const dbContext = new DbContext()
