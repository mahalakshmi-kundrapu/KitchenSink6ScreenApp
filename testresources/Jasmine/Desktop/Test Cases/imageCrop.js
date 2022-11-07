it("imageCrop", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,5]"]);
	await kony.automation.playback.waitFor(["frmImage","btn3"]);
	kony.automation.button.click(["frmImage","btn3"]);
	await kony.automation.playback.waitFor(["frmImgCrop","lbl2"]);
	await kony.automation.playback.waitFor(["frmImgCrop","img2"]);
	kony.automation.capture();
	await kony.automation.device.deviceBack();
});