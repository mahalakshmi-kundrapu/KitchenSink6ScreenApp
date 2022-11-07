it("staticHTMLContent", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,5]"]);
	await kony.automation.playback.waitFor(["frmBrowserOptions","Btn1"]);
	kony.automation.button.click(["frmBrowserOptions","Btn1"]);
	await kony.automation.playback.waitFor(["frmBrowser","labl"]);
});