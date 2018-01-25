const db = require('../db')

function getOwnersByPetId(petId) {
  const query = `
  SELECT name
  FROM owners AS o
  JOIN petowners AS po
  ON o.owner_id = po.owner_id
  WHERE po.pet_id = $1
  `
  return db.query(query, [petId])
}

module.exports = getOwnersByPetId
