const db = require('../db')

module.exports = function getPets() {
  const query = `
    SELECT p.name, s.species_name, p.pet_id
    FROM pets AS p
      JOIN species AS s
      ON p.species_id = s.species_id
  `
  return db.query(query)
}