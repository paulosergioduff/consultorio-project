var subscribedownload_suffix = "";
var subscribedownload_busy = false;
function subscribedownload_submit(suffix) {
	if (subscribedownload_busy == true) return;
	subscribedownload_busy = true;
	subscribedownload_suffix = suffix;
	jQuery("#submit"+suffix).attr("disabled","disabled");
	jQuery("#loading"+suffix).fadeIn(300);
	jQuery("#message"+suffix).slideUp("slow");
	
	jQuery.post(subscribedownload_action, {
		subscribedownload_email: jQuery("#email"+suffix).val(),
		subscribedownload_name: jQuery("#name"+suffix).val(),
		subscribedownload_url: jQuery("#url"+suffix).val(),
		subscribedownload_suffix: suffix,
		action: "subscribedownload_submit"
	},
	function(data) {
		jQuery("#submit"+subscribedownload_suffix).removeAttr("disabled");
		jQuery("#loading"+subscribedownload_suffix).fadeOut(300);
		if(data.match("subscribedownload_confirmation_info") != null) {
			subscribedownload_ga_track("subscribe-and-download", "subscribe");
			jQuery("#subscribedownload_signup_form"+subscribedownload_suffix).fadeOut(500, function() {
				jQuery("#subscribedownload_confirmation_container"+subscribedownload_suffix).html(data);
				jQuery("#subscribedownload_confirmation_container"+subscribedownload_suffix).fadeIn(500, function() {
					if (jQuery("#redirect"+subscribedownload_suffix).val() != "") {
						location.href = jQuery("#redirect"+subscribedownload_suffix).val();
					}
				});
			});
		} else {
			jQuery("#message"+subscribedownload_suffix).html(data);
			jQuery("#message"+subscribedownload_suffix).slideDown("slow");
		}
		subscribedownload_busy = false;
	});
}
function subscribedownload_ga_track(type, action) {
	if (subscribedownload_ga_tracking != "on") return;
	try {
		var title = document.title;
		if (title.length > 0) {
			if (typeof _gaq == 'object') {
				_gaq.push(['_trackEvent', type, action, title, 1, false]);
			} else if (typeof _trackEvent == 'function') { 
				_trackEvent(type, action, title, 1, false);
			} else if (typeof __gaTracker == 'function') { 
				__gaTracker('send', 'event', type, action, title);
			} else if (typeof ga == 'function') {
				ga('send', 'event', type, action, title);
			}
		}
	} catch(error) {
	
	}
}