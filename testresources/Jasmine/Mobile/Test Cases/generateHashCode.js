it("generateHashCode", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","Copybtn048573e68991245"]);
	kony.automation.button.click(["frmDvcFeatures","Copybtn048573e68991245"]);
	await kony.automation.scrollToWidget(["frmCrypto","CopyButton0bc2484acf2df47"]);
	await kony.automation.playback.waitFor(["frmCrypto","txtMD5Hash"]);
	kony.automation.textbox.enterText(["frmCrypto","txtMD5Hash"],"kony");
	kony.automation.button.click(["frmCrypto","CopyButton0bc2484acf2df47"]);
	expect(kony.automation.widget.getWidgetProperty(["frmCrypto","lblMD5Hash"], "text")).toEqual("0cc3edb76da4240af609570b6d94501c");
});