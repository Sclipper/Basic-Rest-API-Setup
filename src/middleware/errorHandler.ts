import { NextFunction, Request, Response } from 'express'

export const errorMessages = {
  validationError: 'ValidationError',
}

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // This is how you define unused var even tho it is needed
  _next: NextFunction,
) => {
  const name = err.name || 'ServerError'
  const message = err.message || 'Server Error'
  let code = 500

  const { validationError } = errorMessages

  switch (name) {
    case validationError:
      // case failedCreatingCompany:
      code = 400
      break
    default:
      code = 500
  }

  if (code === 500) {
    // Possibly note this is sentry
  }

  return res.status(code).json({
    success: false,
    error: { name, message },
  })
}

export default errorHandler
