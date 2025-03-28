
import config from 'config'
import { type Request, type Response } from 'express'

import * as utils from '../lib/utils'

module.exports = function retrieveAppVersion () {
  return (_req: Request, res: Response) => {
    res.json({
      version: config.get('application.showVersionNumber') ? utils.version() : ''
    })
  }
}
