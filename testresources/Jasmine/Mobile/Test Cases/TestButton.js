it("TestButton", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
	await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
	await kony.automation.playback.waitFor(["frmSegmentOptions","btn7"]);
	kony.automation.button.click(["frmSegmentOptions","btn7"]);
	await kony.automation.playback.waitFor(["frmsegGroupMode","Button0eb315e3100e544"]);
	kony.automation.button.click(["frmsegGroupMode","Button0eb315e3100e544"]);
});