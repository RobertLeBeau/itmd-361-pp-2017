
$(document).ready(function() {
  $("#dbell-ring").remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  $("#dbell").on("click", function() {
    ringDoorbell();
  });

  $(document).on("keypress", function(event) {
    if(event.key === "d") {
      ringDoorbell();
    }
  });

});
