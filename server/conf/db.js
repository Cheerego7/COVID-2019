/* eslint-disabed */
const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF

// 如果是在开发环境下
if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '18907663910',
    port: '3306',
    database: 'covid19'
  }
}

module.exports = {
  MYSQL_CONF
}