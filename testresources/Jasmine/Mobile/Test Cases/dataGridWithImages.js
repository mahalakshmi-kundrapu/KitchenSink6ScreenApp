it("dataGridWithImages", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,4]"]);
	await kony.automation.scrollToWidget(["frmDatagrd","Copylbl0a9b171b71ec547"]);
	kony.automation.capture();
});