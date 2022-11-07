it("fowmWithCheckBox", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
	kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmFormOptions","frmOptSeg"]);
	kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,0]"]);
	await kony.automation.playback.waitFor(["frmForm","RadioButtonGroup1"]);
	kony.automation.radiobuttongroup.click(["frmForm","RadioButtonGroup1"], "rbg2");
	await kony.automation.scrollToWidget(["frmForm","CheckBoxGroup0a43fcf67c4f148"]);
	kony.automation.checkboxgroup.click(["frmForm","CheckBoxGroup0a43fcf67c4f148"], "cbg1");
	kony.automation.checkboxgroup.click(["frmForm","CheckBoxGroup0a43fcf67c4f148"], "cbg1");
	await kony.automation.device.deviceBack();
});