it("SegmentPageIndicatorAtBottom", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
	await kony.automation.playback.waitFor(["frmSegmentOptions","Btn1"]);
	kony.automation.button.click(["frmSegmentOptions","Btn1"]);
	await kony.automation.playback.waitFor(["frmSegOptions","btn11"]);
	kony.automation.button.click(["frmSegOptions","btn11"]);
	await kony.automation.playback.waitFor(["frmLargeSegPageView","lbl1"]);
	kony.automation.capture();
	await kony.automation.device.deviceBack();
});