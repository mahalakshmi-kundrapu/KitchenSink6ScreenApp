it("textAreaVSColor", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
	await kony.automation.scrollToWidget(["frmTxt","CopyTextArea0c90885b420bf49"]);
	await kony.automation.playback.waitFor(["frmTxt","CopyTextArea0c90885b420bf49"]);
	kony.automation.textarea.enterText(["frmTxt","CopyTextArea0c90885b420bf49"],"Kony Hyderabad\n\n\nHelloo\nKonyIndia 2\n");
});