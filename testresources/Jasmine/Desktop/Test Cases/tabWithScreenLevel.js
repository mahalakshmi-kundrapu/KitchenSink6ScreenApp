it("tabWithScreenLevel", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmTabs","btn7"]);
	kony.automation.button.click(["frmTabs","btn7"]);
	await kony.automation.device.deviceBack();
});