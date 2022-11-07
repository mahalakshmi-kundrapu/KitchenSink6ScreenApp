it("formWithImageAsBackground", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmFormOptions","frmOptSeg"]);
	kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmImgBck","lbl1"]);
	kony.automation.capture();
	await kony.automation.device.deviceBack();
});