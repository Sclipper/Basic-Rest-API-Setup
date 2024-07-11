import { Response } from 'express'
import { asyncHandler } from 'middleware'

/**
 * @tips
 * This is the file that holds all the functions that are called by the local router
 */

export const generalTest = asyncHandler(async (_req: Request, res: Response) => {
  res.send('Write some logic here friend :)')
})
