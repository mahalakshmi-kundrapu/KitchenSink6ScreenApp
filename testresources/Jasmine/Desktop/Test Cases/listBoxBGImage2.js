it("listBoxBGImage2", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,8]"]);
	await kony.automation.playback.waitFor(["frmLstBox","CopydefaultLb0254c1dd74a0045"]);
	kony.automation.listbox.selectItem(["frmLstBox","CopydefaultLb0254c1dd74a0045"], "lb3");
	await kony.automation.device.deviceBack();
});