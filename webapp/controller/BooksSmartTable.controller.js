sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("library2.library2.controller.BooksSmartTable", {
		onInit: function () {

		},

		onBook: function (oEvent) {
			debugger;
			this.getView().getModel().setUseBatch(false);
			var sPath = oEvent.getSource().getParent().getParent().getContent()[0].getTable().getSelectedContexts()[0].getPath();
			var oObject = oEvent.getSource().getParent().getParent().getContent()[0].getTable().getSelectedContexts()[0].getObject();
			var avnrbooks = oObject.Avnrbooks;
			if (oObject.Avnrbooks !== 0) {
				// this.getView().getModel().update(sPath, oObject, {
				// 	success: function () {
				// 		// if (avnrbooks !== oObject.Avnrbooks) {
				// 			MessageToast.show("You have booked successfully!");
				// 		// } else {
				// 		// 	MessageToast.show("You have already booked this book!");

				// 		// }
				// 	},
				// 	error: function () {
				// 		MessageToast.show("Booking error!");
				// 	}
				// });
				this.getView().getModel().callFunction("/Order", { 
					method: "GET", 
					urlParameters: {
						"ISBN": oObject.ISBN
					}, 
					success: (oData, response) => {
						MessageToast.show("You have booked successfully!");
					}, 
					error: oError => {
						MessageToast.show("Booking error!");
					}
				});
			} else {
				MessageToast.show("No books available!");
			}
		}
	});
});