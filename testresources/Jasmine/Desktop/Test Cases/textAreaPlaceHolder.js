it("textAreaPlaceHolder", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
	await kony.automation.playback.waitFor(["frmTxt","TextArea033ffdf6277e846"]);
	kony.automation.textarea.enterText(["frmTxt","TextArea033ffdf6277e846"],"Kony Hyderabad");
	await kony.automation.device.deviceBack();
});