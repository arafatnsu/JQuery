function addListItem() {
    var text = $('#to_do').val();
    if(text === '') {
      alert('name is required');
    } else {
      $('#list_item').append('<li><input class="completeItem" type="checkbox">'+text+'<i class="fa fa-trash-o deleteItem" aria-hidden="true"></li>');
      $('#to_do').val('');
    }
}

function completeItem() {
    $(this).parent().toggleClass('done');
}

function deleteItem() {
    $(this).parent().remove();
}

$(document).ready(function(){
    $('#add_task').on('click', addListItem);
    $('#list_item').on('change', '.completeItem', completeItem);
    $('#list_item').on('click', '.deleteItem', deleteItem);
    $('#to_do').on('keypress', function(event) {
        if(event.which === 13) {
            addListItem();
            event.preventDefault();
        }
    });

});