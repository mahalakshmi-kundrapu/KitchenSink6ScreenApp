it("formWithPasswordField", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmFormOptions","frmOptSeg"]);
	kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmForm","RadioButtonGroup1"]);
	kony.automation.radiobuttongroup.click(["frmForm","RadioButtonGroup1"], "rbg2");
	kony.automation.textbox.enterText(["frmForm","TextFieldPassword"],"kony hyderabad");
	await kony.automation.device.deviceBack();
});