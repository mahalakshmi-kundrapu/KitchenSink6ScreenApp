it("defaultSlider", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
	await kony.automation.playback.waitFor(["frmSlider","Slider0c3ed0b3aee0847"]);
	kony.automation.slider.slide(["frmSlider","Slider0c3ed0b3aee0847"], 91);
	await kony.automation.device.deviceBack();
});