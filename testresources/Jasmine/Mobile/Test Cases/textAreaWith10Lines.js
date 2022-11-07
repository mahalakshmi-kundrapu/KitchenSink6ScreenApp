it("textAreaWith10Lines", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
	await kony.automation.scrollToWidget(["frmTxt","CopyTextArea04754955b33b343"]);
	await kony.automation.playback.waitFor(["frmTxt","CopyTextArea04754955b33b343"]);
	kony.automation.textarea.enterText(["frmTxt","CopyTextArea04754955b33b343"],"kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad ");
});