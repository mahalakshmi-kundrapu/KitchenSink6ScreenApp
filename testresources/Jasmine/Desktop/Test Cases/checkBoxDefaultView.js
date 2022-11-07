it("checkBoxDefaultView", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,2]"]);
	await kony.automation.playback.waitFor(["frmChk","cbvertical"]);
	kony.automation.checkboxgroup.click(["frmChk","cbvertical"], "cbg2");
	kony.automation.checkboxgroup.click(["frmChk","cbvertical"], "cbg3");
	kony.automation.checkboxgroup.click(["frmChk","cbvertical"], "cbg1");
	await kony.automation.device.deviceBack();
});