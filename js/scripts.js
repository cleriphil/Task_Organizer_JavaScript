$(document).ready(function() {
  $("#add-task").click(function() {
    $("#new-tasks").append('<div class="new-task">' +
                              '<div class="form-group">' +
                                '<label for="new-description">Description</label>' +
                                '<input type="text" class="form-control new-description">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-notes">Notes</label>' +
                                '<input type="text" class="form-control new-notes">' +
                              '</div>' +
                            '</div>');
  });


  $("form#new-todolist").submit(function(event) {
    event.preventDefault();

    var inputtedCategory = $("input#new-category").val();

    var newToDoList = { category: inputtedCategory, tasks: [] };


    $("ul#categories").append("<li><span class='category'>" + newToDoList.category + " " + "</span></li>");


  });
});
