sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("nttdata.ui5.techdemo.start.controller.App", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
   });
});