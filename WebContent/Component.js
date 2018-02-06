sap.ui.define([ "sap/ui/core/UIComponent", 
	    "sap/ui/model/json/JSONModel",
		"nttdata/ui5/template/start/controller/HelloDialog" ], function(
		UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("nttdata.ui5.template.start.Component", {
		metadata : {
			manifest : "json"
		},
		init : function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set i18n model
//			var i18nModel = new ResourceModel({
//				bundleName : "nttdata.ui5.template.start.i18n.i18n"
//			});
//			this.setModel(i18nModel, "i18n");
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
		},

		openHelloDialog : function() {
			this._helloDialog.open();
		}
	});
});