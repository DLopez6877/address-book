$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var phoneInput = $("input#phone").val();
    var addressInput = $("input#address").val();

    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".phone").text(phoneInput);
    $(".address").text(addressInput);

    $("#info").show();

  });
});
