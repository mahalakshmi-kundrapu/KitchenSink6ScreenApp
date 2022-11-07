it("SegmentPageView", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
	await kony.automation.playback.waitFor(["frmSegmentOptions","Btn1"]);
	kony.automation.button.click(["frmSegmentOptions","Btn1"]);
	await kony.automation.playback.waitFor(["frmSegOptions","btn2"]);
	kony.automation.button.click(["frmSegOptions","btn2"]);
	await kony.automation.playback.waitFor(["frmSeg2","lbl1"]);
	kony.automation.capture();
	await kony.automation.device.deviceBack();
});