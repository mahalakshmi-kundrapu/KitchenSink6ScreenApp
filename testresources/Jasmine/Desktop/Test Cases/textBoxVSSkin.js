it("textBoxVSSkin", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
	await kony.automation.scrollToWidget(["frmTbx","CopyTextField0379d59d3dc5342"]);
	kony.automation.textbox.enterText(["frmTbx","CopyTextField0379d59d3dc5342"],"kony Hyderabad ");
	await kony.automation.device.deviceBack();
});