import Sequelize from 'sequelize'

export default function (Conn, prefix) {
  return Conn.define(prefix + 'options', {
    option_id: { type: Sequelize.INTEGER, primaryKey: true},
    option_name: { type: Sequelize.STRING },
    option_value: { type: Sequelize.STRING },
    autoload: { type: Sequelize.BOOLEAN }
  })
}