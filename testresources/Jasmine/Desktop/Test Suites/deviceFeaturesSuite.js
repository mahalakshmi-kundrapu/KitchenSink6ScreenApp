describe("deviceFeaturesSuite", function() {
	it("addContact", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn7"]);
		kony.automation.button.click(["frmDvcFeatures","btn7"]);
		await kony.automation.playback.waitFor(["frmContact","Btn1"]);
		kony.automation.button.click(["frmContact","Btn1"]);
		await kony.automation.playback.waitFor(["frmContact","lblDevContact"]);
		await kony.automation.device.deviceBack();
	  await kony.automation.device.deviceBack();
	});
	
	it("fetchContactRemoveContact", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn7"]);
		kony.automation.button.click(["frmDvcFeatures","btn7"]);
		await kony.automation.playback.waitFor(["frmContact","Btn1"]);
		kony.automation.button.click(["frmContact","Btn1"]);
		kony.automation.button.click(["frmContact","btn2"]);
		await kony.automation.device.deviceBack();
	  await kony.automation.device.deviceBack();
	});
	
	it("deviceInfo", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn9"]);
		kony.automation.button.click(["frmDvcFeatures","btn9"]);
		await kony.automation.playback.waitFor(["frmDeviceInfo","labl"]);
		await kony.automation.device.deviceBack();
	  await kony.automation.device.deviceBack();
	});
	
	it("localStoreGetItemSetItem", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn10"]);
		kony.automation.button.click(["frmDvcFeatures","btn10"]);
		await kony.automation.playback.waitFor(["frmLocalStore","frmLocalTxtSet1"]);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet1"],"1");
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet2"],"a");
		kony.automation.button.click(["frmLocalStore","Button0d236e0c832b94f"]);
		kony.automation.alert.click(0);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtGet1"],"1");
		kony.automation.button.click(["frmLocalStore","CopyButton080fb8c50a29540"]);
		expect(kony.automation.widget.getWidgetProperty(["frmLocalStore","frmLocalLblGet1"], "text")).toEqual("a");
		await kony.automation.device.deviceBack();
	});
	
	it("localStoreReadKey", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn10"]);
		kony.automation.button.click(["frmDvcFeatures","btn10"]);
		await kony.automation.playback.waitFor(["frmLocalStore","frmLocalTxtSet1"]);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet1"],"1");
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet2"],"a");
		kony.automation.button.click(["frmLocalStore","Button0d236e0c832b94f"]);
		kony.automation.alert.click(0);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtGetKey1"],"1");
		kony.automation.button.click(["frmLocalStore","CopyButton02f2e5005341143"]);
		expect(kony.automation.widget.getWidgetProperty(["frmLocalStore","frmLocalLblGetKey1"], "text")).toEqual("1");
		await kony.automation.device.deviceBack();
	});
	
	it("localStoreRemoveItem", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn10"]);
		kony.automation.button.click(["frmDvcFeatures","btn10"]);
		await kony.automation.playback.waitFor(["frmLocalStore","frmLocalTxtSet1"]);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet1"],"1");
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet2"],"a");
		kony.automation.button.click(["frmLocalStore","Button0d236e0c832b94f"]);
		kony.automation.alert.click(0);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtIndex"],"1");
		kony.automation.button.click(["frmLocalStore","CopyButton0453f04c4b4444b"]);
		expect(kony.automation.widget.getWidgetProperty(["frmLocalStore","frmLocalLblIndex"], "text")).toEqual("1 key/value is removed");
		await kony.automation.device.deviceBack();
	});
	
	it("localStoreClearItem", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn10"]);
		kony.automation.button.click(["frmDvcFeatures","btn10"]);
		await kony.automation.playback.waitFor(["frmLocalStore","frmLocalTxtSet1"]);
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet1"],"1");
		kony.automation.textbox.enterText(["frmLocalStore","frmLocalTxtSet2"],"a");
		kony.automation.button.click(["frmLocalStore","Button0d236e0c832b94f"]);
		kony.automation.alert.click(0);
		await kony.automation.scrollToWidget(["frmLocalStore","CopyButton03d0d37e0a76c48"]);
		kony.automation.button.click(["frmLocalStore","CopyButton03d0d37e0a76c48"]);
		expect(kony.automation.widget.getWidgetProperty(["frmLocalStore","lblLocalClear"], "text")).toEqual("Local Storage is cleared");
		await kony.automation.device.deviceBack();
	});
	
	it("createDatabaseshowData", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn11"]);
		kony.automation.button.click(["frmDvcFeatures","btn11"]);
		await kony.automation.playback.waitFor(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btnCreateDB"]);
		expect(kony.automation.widget.getWidgetProperty(["frmWebSQL","lblWebSqlUpdate"], "text")).toEqual("Database is created successfully with emp_details table");
		kony.automation.button.click(["frmWebSQL","btn3"]);
		await kony.automation.device.deviceBack();
	});
	
	it("insertDatabase", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn11"]);
		kony.automation.button.click(["frmDvcFeatures","btn11"]);
		await kony.automation.playback.waitFor(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btn2"]);
		kony.automation.button.click(["frmWebSQL","btn3"]);
		await kony.automation.device.deviceBack();
	});
	
	it("deleteDataInDatabase", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn11"]);
		kony.automation.button.click(["frmDvcFeatures","btn11"]);
		await kony.automation.playback.waitFor(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btn5"]);
		kony.automation.button.click(["frmWebSQL","btn3"]);
		await kony.automation.device.deviceBack();
	});
	
	it("updateDataInDatabase", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn11"]);
		kony.automation.button.click(["frmDvcFeatures","btn11"]);
		await kony.automation.playback.waitFor(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btn4"]);
		await kony.automation.device.deviceBack();
	});
	
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
		await kony.automation.device.deviceBack();
	});
	
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
	
	it("registerShakeEvent", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","Btn1"]);
		kony.automation.button.click(["frmDvcFeatures","Btn1"]);
		await kony.automation.playback.waitFor(["frmAclmeter","btn3"]);
		kony.automation.button.click(["frmAclmeter","btn3"]);
		await kony.automation.playback.waitFor(["frmRegisterAccelerometer","lblEvent1"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});
});