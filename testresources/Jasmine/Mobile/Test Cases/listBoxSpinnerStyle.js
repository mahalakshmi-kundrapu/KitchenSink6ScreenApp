it("listBoxSpinnerStyle", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,8]"]);
	await kony.automation.playback.waitFor(["frmLstBox","CopydefaultLb0f2a7f5faf5fe4d"]);
	kony.automation.listbox.selectItem(["frmLstBox","CopydefaultLb0f2a7f5faf5fe4d"], "lb3");
});