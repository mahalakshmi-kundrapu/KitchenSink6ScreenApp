it("textBoxWithBGColor", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
	kony.automation.textbox.enterText(["frmTbx","CopyTextField0de477f87aff745"],"kony Hyderabad ");
});