it("labelWithDifferentSkins", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,6]"]);
	await kony.automation.playback.waitFor(["frmLbl","labl"]);
	kony.automation.capture();
	await kony.automation.playback.wait(3000);
	await kony.automation.scrollToWidget(["frmLbl","Label04a700f93bcb141"]);
	kony.automation.capture();
});