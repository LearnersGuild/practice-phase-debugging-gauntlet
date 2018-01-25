const db = require('../db')

function getOwnersByPetId(petId) {
  console.log('we are in owners db');
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
