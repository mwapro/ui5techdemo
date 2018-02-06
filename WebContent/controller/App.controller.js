sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("nttdata.ui5.template.start.controller.App", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
   });
});