const db = require('../db')

module.exports = function getOwnersByPetId(petId) {
  const query = `
  SELECT name
  FROM owners AS o
  JOIN petowners AS po
  ON o.id = po.owner_id
  WHERE po.pet_id = $1
  `
  db.query(query, [petId])
}