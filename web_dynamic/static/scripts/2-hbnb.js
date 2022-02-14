// JQuery code to enable or disable CheckBox 

$('document').ready(function () {
    const ID = {};
    $(document).on('change', 'input[type="checkbox"]', function () {
        if (this.checked) {
            ID[$(this).data('data-id')] = $(this).data('data-name');
        } else {
            delete ID[$(this).data('data-id')];
        }
        let amenitiesList = Object.values(ID);
        if (amenitiesList.length > 0) {
            $('div.amenities > h4').text(Object.values(ID).join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });
});

$.get('http://localhost:5001/api/v1/status/', function () {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});