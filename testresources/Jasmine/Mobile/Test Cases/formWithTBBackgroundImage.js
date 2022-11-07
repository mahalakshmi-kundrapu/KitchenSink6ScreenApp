it("formWithTBBackgroundImage", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
	kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,3]"]);
	kony.automation.button.click(["frmTitlebar","btn3"]);
	await kony.automation.playback.waitFor(["frmTitleBar3","Label011a531ddd2ce43"]);
});