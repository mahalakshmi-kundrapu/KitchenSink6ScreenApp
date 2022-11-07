it("textAreaVGColor1", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
	await kony.automation.scrollToWidget(["frmTxt","Copylbl0bc8adaac08574c"]);
	await kony.automation.playback.waitFor(["frmTxt","CopyTextArea08c722531d43a4a"]);
	kony.automation.textarea.enterText(["frmTxt","CopyTextArea08c722531d43a4a"],"Kony Hyderabad\n");
	await kony.automation.device.deviceBack();
});