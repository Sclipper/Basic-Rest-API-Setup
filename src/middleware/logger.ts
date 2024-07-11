// import { Request, NextFunction, Response } from 'express'
// import { AccessLog, User } from 'database'
// import { Request as AuthReq } from './types'

// const getDurationInMilliseconds = (start: any) => {
//   // https://nodejs.org/api/process.html#processhrtimetime
//   const NS_PER_SEC = 1e9
//   const NS_TO_MS = 1e6
//   const diff = process.hrtime(start)

//   return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
// }

// const logger = async (req: Request | AuthReq, res: Response, next: NextFunction) => {
//   res.on('finish', async () => {
//     let user_type = ''
//     let user_id: number | null = null
//     let startTime = process.hrtime()

//     if ('auth' in req) {
//       user_type = req.auth.role
//       user_id = req.auth.id
//       startTime = req.auth.startTime
//     }

//     const route = req.originalUrl
//     // TODO: ask what this is supposed be(info)
//     const info = 'info'
//     const rec_date = new Date()
//     const http_status = res.statusCode
//     const ip_address = req.ip
//     const duration = getDurationInMilliseconds(startTime)
//     const { method } = req

//     const data = {
//       route,
//       user_id,
//       user_type,
//       info,
//       rec_date,
//       http_status,
//       ip_address,
//       duration,
//       method,
//     }
//     try {
//       if (user_id) {
//         const user = await User.findByPk(user_id)
//         if (
//           user &&
//           (route.includes('login') || route.includes('settings') || route.includes('user'))
//         ) {
//           user.last_login = new Date()
//           await user?.save()
//         }
//         await AccessLog.create({
//           ...data,
//           api_user_id: user?.getDataValue('api_user_id'),
//         })
//       }
//     } catch (err) {
//       // @ts-ignore
//       console.log('logger.ts: ', err.message)
//     }
//   })
//   next()
// }

// export default logger
