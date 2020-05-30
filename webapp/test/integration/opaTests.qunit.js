/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"library2/library2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});