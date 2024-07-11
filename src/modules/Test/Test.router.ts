import { Router, Request, Response } from 'express'

import { generalTest } from './Test.controller'

const router = Router()

const placeHolderFunction = (req: Request, res: Response) => {
  const message = `This is ${req.method} request to ${req.route}`
  return res.status(200).json({ data: message })
}

router.route('/').get(generalTest).put(placeHolderFunction)

export default router
