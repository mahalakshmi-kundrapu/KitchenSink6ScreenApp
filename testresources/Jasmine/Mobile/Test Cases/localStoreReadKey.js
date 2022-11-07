it("localStoreReadKey", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","btn10"]);
	kony.automation.button.click(["frmDvcFeatures","btn10"]);
	await kony.automation.playback.waitFor(["frmLocalStore","frmLocalTxtSet1"]);
	kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet1"],"1");
	kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet2"],"a");
	kony.automation.button.click(["frmLocalStore","Button0d236e0c832b94f"]);
	kony.automation.alert.click(0);
	kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtGetKey1"],"1");
	kony.automation.button.click(["frmLocalStore","CopyButton02f2e5005341143"]);
	expect(kony.automation.widget.getWidgetProperty(["frmLocalStore","frmLocalLblGetKey1"], "text")).toEqual("1");
});