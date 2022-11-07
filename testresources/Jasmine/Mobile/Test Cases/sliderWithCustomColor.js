it("sliderWithCustomColor", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
	await kony.automation.playback.waitFor(["frmSlider","CopySlider0b2eb2ffb03a04c"]);
	kony.automation.slider.slide(["frmSlider","CopySlider0b2eb2ffb03a04c"], 79);
});