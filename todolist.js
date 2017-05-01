// validating task on basis of user input, throw error if field is empty
function addItem() {
  var text = $('#to_do').val();
    if(text === '') {
      alert('name is required');
    } else {
      $('#list_item').append('<li><input class="completeItem" type="checkbox">'+text+'<i class="fa fa-trash-o deleteItem" aria-hidden="true"></li>');
      $('#to_do').val('');
    }
}

function addListItem() {
  /*
    add task while clicking button
  */
  $('#add_task').on('click', function() {
    addItem()
  });
  
  // add task while pressing enter key
  $('#to_do').on('keypress', function(event) {
        if(event.which === 13) {
            addItem();
            event.preventDefault();
        }
    });
}

//jquery function for dynamic elements
function completeItem() {
    $(document).on('click', '.completeItem', function() {
      $(this).parent().toggleClass('done')
    })
}

// functions executed for deleting task
function deleteItem() {
  $(document).on('click', '.deleteItem', function() {
    if($(this).parent().find('.completeItem').is(':checked')) {
          $(this).parent().remove();
      }
    else {
      alert('you have not selected');
    }
  })
    
}

// functions executed while loading page
$(document).ready(function(){
    addListItem()
    deleteItem()
    completeItem()
});
