$(document).ready(function () {
  $('#search').on('keyup', function(e){
    var parameters = { name: $(this).val() };
    if(e.keyCode === 13) {
      $('.search-res').empty();
      $.get( '/artist/search', parameters, function (data) {
        var str = '';
        var id = data[0]._id;
        var str = '<li class="list-group-item">' + data[0].name + '</li>';

        console.log('===>', id)

        $('.search-res').append(str);
        $('.search-res').on('click', '.list-group-item', function() {
          createForm(id);
        })
       });
      }
  });

  function createForm(uid) {
    var objId = uid;
    console.log(objId)
  }
});
