it("localStoreGetItemSetItem", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","btn10"]);
	kony.automation.button.click(["frmDvcFeatures","btn10"]);
	await kony.automation.playback.waitFor(["frmLocalStore","frmLocalTxtSet1"]);
	kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet1"],"1");
	kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet2"],"a");
	kony.automation.button.click(["frmLocalStore","Button0d236e0c832b94f"]);
	kony.automation.alert.click(0);
	kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtGet1"],"1");
	kony.automation.button.click(["frmLocalStore","CopyButton080fb8c50a29540"]);
	expect(kony.automation.widget.getWidgetProperty(["frmLocalStore","frmLocalLblGet1"], "text")).toEqual("a");
	await kony.automation.device.deviceBack();
});