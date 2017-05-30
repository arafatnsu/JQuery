// validating task on basis of user's input
function addItem() {
  var text = $('#to_do').val();
    if(text === '') {
      $('.error_message').html('Name is required.')
      //alert('name is required');
    } else {
      $('#list_item').append('<li><input class="completeItem" type="checkbox">'+text+'<i class="fa fa-trash-o deleteItem" aria-hidden="true"></li>');
      $('#to_do').val('');
      $('.error_message').html('')
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
      if (confirm("Do you really want to delete this?")) {
          $(this).parent().remove();
          }
           return false;
      }
    else {
     alert('You have not selected any item.');
    }
  })
    
}

// functions executed while loading page
$(document).ready(function(){
    addListItem()
    deleteItem()
    completeItem()
});
