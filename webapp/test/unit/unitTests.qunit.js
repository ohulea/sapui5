/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"library2/library2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});