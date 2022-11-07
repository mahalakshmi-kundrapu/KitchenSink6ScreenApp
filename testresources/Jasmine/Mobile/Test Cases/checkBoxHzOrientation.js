it("checkBoxHzOrientation", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,2]"]);
	await kony.automation.playback.waitFor(["frmChk","cbHorizontal"]);
	kony.automation.checkboxgroup.click(["frmChk","cbHorizontal"], "cbg1");
	kony.automation.checkboxgroup.click(["frmChk","cbHorizontal"], "cbg2");
	kony.automation.checkboxgroup.click(["frmChk","cbHorizontal"], "cbg3");
});