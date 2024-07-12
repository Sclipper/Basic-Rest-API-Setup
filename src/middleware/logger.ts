import { Request, NextFunction, Response } from 'express'
import { prisma } from '../..'

const getDurationInMilliseconds = (start: [number, number]) => {
  // https://nodejs.org/api/process.html#processhrtimetime
  const NS_PER_SEC = 1e9
  const NS_TO_MS = 1e6
  const diff = process.hrtime(start)

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

const logger = async (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', async () => {
    const user_type = undefined // TODO: Fix those when you have users
    const user_id = undefined // TODO: Fix those when you have users
    const startTime = process.hrtime()

    const route = req.originalUrl
    // TODO: ask what this is supposed be(info)
    const rec_date = new Date()
    const http_status = res.statusCode
    const ip_address = req.ip
    const duration = getDurationInMilliseconds(startTime)
    const { method } = req

    const data = {
      route,
      user_id,
      user_type,
      rec_date,
      http_status,
      ip_address,
      duration,
      method,
    }
    try {
      await prisma.logs.create({
        data,
      })
    } catch (err) {
      // @ts-ignore
      console.log('logger.ts: ', err.message)
    }
  })
  next()
}

export default logger
