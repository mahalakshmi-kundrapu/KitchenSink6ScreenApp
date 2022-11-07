it("tabCollapseView", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmTabs","btn2"]);
	kony.automation.button.click(["frmTabs","btn2"]);
	await kony.automation.playback.waitFor(["frmTabWid","Tabpane"]);
	kony.automation.tabpane.click(["frmTabWid","Tabpane"], "Tab2");
	kony.automation.tabpane.click(["frmTabWid","Tabpane"], "Tab3");
	kony.automation.tabpane.click(["frmTabWid","Tabpane"], "Tab1");
	await kony.automation.device.deviceBack();
});