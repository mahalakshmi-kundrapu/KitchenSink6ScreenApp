it("hamburgerMenuInScrollBox", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,2]"]);
	await kony.automation.playback.waitFor(["frmScrollBoxMenu","Button0c3ed9244aa654a"]);
	kony.automation.button.click(["frmScrollBoxMenu","Button0c3ed9244aa654a"]);
	kony.automation.capture();
	// :User Injected Code Snippet [// - [1 lines]]
	kony.automation.alert.click(0);
	// :End User Injected Code Snippet {11aa93a8-a058-b38f-53eb-79e6f971ea9f}
});