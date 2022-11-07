it("dynamicHTMLContent", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,5]"]);
	kony.automation.button.click(["frmBrowserOptions","btn2"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmBrowserDynURL","labl"]);
});