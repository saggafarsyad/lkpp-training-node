import winston from 'winston'

const { combine, timestamp, json } = winston.format

const nodeNo = process.env.API_NODE_NO

const nodeNoFormat = winston.format(info => {
  info.nodeNo = nodeNo
  return info
})

export default winston.createLogger({
  level: 'debug',
  format: combine(
    nodeNoFormat(),
    timestamp(),
    json()
  ),
  transports: [
    new winston.transports.Console()
  ]
})