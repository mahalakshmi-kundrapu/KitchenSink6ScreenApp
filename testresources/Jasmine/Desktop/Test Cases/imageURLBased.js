it("imageURLBased", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,5]"]);
	await kony.automation.playback.waitFor(["frmImage","btn4"]);
	kony.automation.button.click(["frmImage","btn4"]);
	await kony.automation.playback.waitFor(["frmURLBasedImage","Image091ed1f59af7f4c"]);
	kony.automation.capture();
	await kony.automation.device.deviceBack();
});