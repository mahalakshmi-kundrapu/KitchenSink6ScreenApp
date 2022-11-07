it("segmentFocusSkin", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
	kony.automation.button.click(["frmSegmentOptions","btn8"]);
	await kony.automation.playback.waitFor(["frmSegSections1","lbl1"]);
	await kony.automation.playback.waitFor(["frmSegSections1","Segment01b90f15914ac43"]);
	kony.automation.segmentedui.click(["frmSegSections1","Segment01b90f15914ac43[0,0]"]);
	await kony.automation.device.deviceBack();
});