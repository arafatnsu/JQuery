function addListItem() {
  $('#add_task').on('click', function() {
    var text = $('#to_do').val();
    if(text === '') {
      alert('name is required');
    } else {
      $('#list_item').append('<li><input class="completeItem" type="checkbox">'+text+'<i class="fa fa-trash-o deleteItem" aria-hidden="true"></li>');
      $('#to_do').val('');
    }
  });
}

function completeItem() {
    $('.completeItem').on('click', function() {
      $(this).parent().toggleClass('done')
    })
}

function deleteItem() {
  $('.deleteItem').on('click', function() {
    if($(this).parent().find('.completeItem').is(':checked')) {
          $(this).parent().remove();
      }
    else {
      alert('you have not selected');
    }
  })
    
}

function checkForListItem() {
  $('#to_do').on('keypress', function(event) {
        if(event.which === 13) {
            addListItem();
            event.preventDefault();
        }
    });
}

$(document).ready(function(){
    addListItem()
    deleteItem()
    completeItem()
    checkForListItem()
});
