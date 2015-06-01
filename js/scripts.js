$(document).ready(function() {
  $("#add-task").click(function() {
    $("#new-tasks").append('<div class="new-task">' +
                              '<div class="form-group">' +
                                '<label for="new-task-name">Description</label>' +
                                '<input type="text" class="form-control new-task-name">' +
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

    $(".new-task").each(function() {
      var inputtedTaskName = $(this).find("input.new-task-name").val();
      var inputtedNotes = $(this).find("input.new-notes").val();

      var newTask = { taskName: inputtedTaskName, notes: inputtedNotes };
      newToDoList.tasks.push(newTask);
    });


    $("ul#categories").append("<li><span class='category'>" + newToDoList.category + " " + "</span></li>");

    $(".category").last().click(function() {
      $("#show-category").show();

      $("#show-category h2").text(newToDoList.category);

      $("ul#tasks").text("");
      newToDoList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li>" + task.taskName + " -- " + task.notes + "</li>");
      });
    });

    $("input#new-task-name").val("");
    $("input#new-category").val("");
    $("input#new-notes").val("");

    $("#new-todolist").each(function() {
      this.reset();
    });


  });
});
