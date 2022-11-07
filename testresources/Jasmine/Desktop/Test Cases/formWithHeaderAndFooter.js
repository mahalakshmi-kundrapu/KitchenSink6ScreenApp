it("formWithHeaderAndFooter", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
	kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,2]"]);
	await kony.automation.scrollToWidget(["frmHdrFooter","CopylblHeader074e3196050a044"]);
	await kony.automation.device.deviceBack();
});