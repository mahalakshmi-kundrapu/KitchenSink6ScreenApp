it("EncryptDecryptCryptoLibraries", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","Copybtn048573e68991245"]);
	kony.automation.button.click(["frmDvcFeatures","Copybtn048573e68991245"]);
	await kony.automation.playback.waitFor(["frmCrypto","textEncrypt"]);
	kony.automation.textbox.enterText(["frmCrypto","textEncrypt"],"konyLabs");
	kony.automation.button.click(["frmCrypto","btn1"]);
	expect(kony.automation.widget.getWidgetProperty(["frmCrypto","lblEncrypt"], "text")).toEqual("Encrypted text = /CR931X3wK0E6rbF5+z5zA==");
	kony.automation.button.click(["frmCrypto","CopyButton0bb052f895b6846"]);
	expect(kony.automation.widget.getWidgetProperty(["frmCrypto","lblDecrypt"], "text")).toEqual("Decrypted text = konyLabs");
	await kony.automation.device.deviceBack();
});