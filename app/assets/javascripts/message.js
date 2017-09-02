$(function() {
  function buildMESSAGE(message) {
    var messages = $('tbody').append('<tr class="messages" data-id=' + message.id + '><td>' + message.text + '</td><td><a href="/messages/' + message.id + '">Show</a></td><td><a href="/messages/' + message.id +'/edit">Edit</a></td><td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/messages/' + message.id + '">Destroy</a></td>');
  }
  $(function() {
    setInterval(update,100000);
  })
  function update() {
    if($('.messages')[0]){
      var message_id = $('.messages:last').data('id');
    }
    else {
      var message_id = 0;
    }
    $.ajax({
      url: lacation.href,
      type: 'GET',
      data: {
        message: { id: message_id }
      },
      dataType: 'json'
    })
  }
  .alway(function(data) {
    $.each(data, function(i, data) {
      buildMESSAGE(data);
    })
  })
});
