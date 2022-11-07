it("fowmWithTextArea", async function() {
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
	kony.automation.textarea.enterText(["frmForm","TextArea1"],"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. kony");
	await kony.automation.device.deviceBack();
});