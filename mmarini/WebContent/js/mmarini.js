/**
 * 
 */

var mmarini = mmarini || {};

mmarini.init = function() {
	$("#main-tab").tabs({
		beforeLoad : function(event, ui) {
			ui.jqXHR.error(function(s, e, x) {
				console.log("Error " + e + x);
				ui.panel.html("Error " + e);
			});
		}
	});
};
