it("textAreaDefaultView", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
	await kony.automation.playback.waitFor(["frmTxt","TextArea0596e78d7d54744"]);
	kony.automation.textarea.enterText(["frmTxt","TextArea0596e78d7d54744"],"Kony Hyderabad\n");
	await kony.automation.device.deviceBack();
});