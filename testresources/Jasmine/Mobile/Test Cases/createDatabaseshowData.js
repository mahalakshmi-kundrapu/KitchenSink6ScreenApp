it("createDatabaseshowData", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","btn11"]);
	kony.automation.button.click(["frmDvcFeatures","btn11"]);
	await kony.automation.playback.waitFor(["frmWebSQL","btnCreateDB"]);
	kony.automation.button.click(["frmWebSQL","btnCreateDB"]);
	expect(kony.automation.widget.getWidgetProperty(["frmWebSQL","lblWebSqlUpdate"], "text")).toEqual("Database is created successfully with emp_details table");
	kony.automation.button.click(["frmWebSQL","btn3"]);
});