it("sliderPosition", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
	await kony.automation.playback.waitFor(["frmSlider","CopySlider0519b62d358a042"]);
	kony.automation.slider.slide(["frmSlider","CopySlider0519b62d358a042"], 91);
	expect(kony.automation.widget.getWidgetProperty(["frmSlider","CopySlider0519b62d358a042"], "selectedValue")).toEqual(91);
	await kony.automation.device.deviceBack();
});