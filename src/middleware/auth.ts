// import { User } from 'database'
// import { findOneOr404 } from 'database/helper'
// import { messages, throwNewError } from 'helper'
// import jwt from 'jsonwebtoken'
// import { appKey } from 'config/secrets'
// import jwtDecode from 'jwt-decode'
// import { Request, RootTokenType, TokenData } from './types'
import { NextFunction } from 'express'
import asyncHandler from './asyncHandler'

// const { error } = messages

const auth = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // if (!req.headers.authorization) {
  //   throwNewError('', error.tokenRequired())
  // }
  // const token = req.headers.authorization?.split(' ')[1] as string

  // const decoded = jwtDecode<RootTokenType>(token)
  // if (decoded?.type === 'root') {
  //   if (decoded.exp > new Date().getTime() / 1000) {
  //     req.auth = {
  //       id: decoded.id,
  //       role: decoded.role,
  //       customer_id: decoded.customer_id,
  //       type: decoded.type,
  //       startTime: process.hrtime(),
  //     }
  //     next()
  //     return // This is important, otherwise the API will die
  //   }
  // }

  // const tokenData = jwt.verify(token, appKey) as TokenData

  // const user = await findOneOr404(
  //   User.findOne({
  //     where: { email: tokenData.email },
  //     attributes: ['id', 'role', 'customer_id'],
  //     raw: true,
  //   }),
  //   error.invalidToken(),
  // )
  // req.auth = {
  //   id: user.id,
  //   role: user.role,
  //   customer_id: user.customer_id,
  //   startTime: process.hrtime(),
  // }
  next()
})

export default auth
