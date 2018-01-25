// hide the pet
$(document).ready(() => {
  const petOwnerDiv = $('#pet-owners')
  const petNameSpan = $('#owners-pet-name')
  const ownersList = $('#owners-list')
  petOwnerDiv.hide()

  $('.pet-name').on('click', function () {
    petOwnerDiv.show()
    petNameSpan.html($(this).html())
    const petId = $(this).data('id')

    fetch(`/pets/${petId}/owners`)
      .then(owners => {
        ownersList.empty()
        owners.forEach(owner => {
          ownersList.append(`<li>${owner.name}</li>`)
        })
      })
      .catch(console.error)
  })

})