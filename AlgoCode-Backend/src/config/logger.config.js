import winston from "winston";
import { LOG_DB_URL } from "./server.config.js";
import "winston-mongodb";

const allowedTransports = [];

// the below transport configuration enables logging on the console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

// the below transport configuration enables logging in the mongoDB
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
    // metaKey: metadata({fillExcept: ['message', 'level', 'timestamp']}),
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: `app.log`,
  })
);


export const logger = winston.createLogger({
  // defualt formatting
  format: winston.format.combine(
    // winston.format.colorize(),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});
