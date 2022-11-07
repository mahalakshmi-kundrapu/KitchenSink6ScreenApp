it("sliderWith20Value", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
	await kony.automation.playback.waitFor(["frmSlider","CopySlider049bb958ca9b948"]);
	kony.automation.slider.slide(["frmSlider","CopySlider049bb958ca9b948"], 75);
	await kony.automation.device.deviceBack();
});