
$(document).ready(function() {
	
	// New message balloon

	if($("li.icon-pm .private-message-count strong").text() === "0") {
		$("li.icon-pm .private-message-count").hide();
	};
	if($("li.icon-notification .notification-count strong").text() === "0") {
		$("li.icon-notification .notification-count").hide();
	};

});