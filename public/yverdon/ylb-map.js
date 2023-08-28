var url_param = $(location).attr('href').split("?");
var param = (url_param[1]);
if(param == 'yverdon-interactive-map') {
	$('head').append('<link rel="stylesheet" href="/fileadmin/templates/ylb/css/interactive-map.css" type="text/css" />');
	$('head').append('<base target="_blank" />');
}