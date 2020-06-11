/* eslint-disabed */
const { exec } = require('../db/mysql')

const getCityList = (provinceName) => {

  const sql = `select provinceName, max(province_confirmedCount)province_confirmedCount, 
  province_curedCount, province_deadCount, province_suspectedCount
  , DATE_FORMAT(updateTime, '%Y-%m-%d')updateTime from dxyarea 
  where provinceName = "${ provinceName }" 
  group by DATE_FORMAT(updateTime, '%Y-%m-%d')
  order by DATE_FORMAT(updateTime,'%Y-%m-%d') asc;`
  return exec(sql)
}

module.exports = { getCityList }