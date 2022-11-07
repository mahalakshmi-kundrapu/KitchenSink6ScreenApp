it("segmentMultiSelect", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
	kony.automation.button.click(["frmSegmentOptions","btn9"]);
	await kony.automation.playback.waitFor(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate"]);
	kony.automation.segmentedui.click(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate[0,0]"]);
	kony.automation.segmentedui.click(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate[0,1]"]);
	kony.automation.segmentedui.click(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate[0,2]"]);
});