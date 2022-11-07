it("formWithLoadScreenCenter", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmFormOptions","frmOptSeg"]);
	kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,4]"]);
	await kony.automation.playback.wait(5000);
	await kony.automation.device.deviceBack();
});