$(function() {
  $(function() {
    setInterval(update,100000);
  })
  function update() {
    var message_id = $('.messages:last').data('id');
    $.ajax({
      url: lacation.href,
      type: 'GET',
      data: {
        message: { id: message_id }
      },
      dataType: 'json'
    })
  }
});
