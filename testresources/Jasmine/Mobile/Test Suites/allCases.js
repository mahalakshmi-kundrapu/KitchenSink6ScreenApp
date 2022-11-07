describe("allCases", function() {
	it("addContact", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn7"]);
		kony.automation.button.click(["frmDvcFeatures","btn7"]);
		await kony.automation.playback.waitFor(["frmContact","Btn1"]);
		kony.automation.button.click(["frmContact","Btn1"]);
		await kony.automation.playback.waitFor(["frmContact","lblDevContact"]);
		await kony.automation.playback.waitFor(["frmContact","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmContact","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("AdvancedWidgetsMap", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,3]"]);
		kony.automation.alert.click(0);
	});
	
	it("buttonWithDifferenSkins", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,0]"]);
		await kony.automation.scrollToWidget(["frmBtn","imagepatch9"]);
		await kony.automation.playback.waitFor(["frmBtn","imagepatch9"]);
		kony.automation.button.click(["frmBtn","imagepatch9"]);
		kony.automation.capture();
		await kony.automation.playback.waitFor(["frmBtn","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmBtn","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("calendarCustomIcon", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal","Copycaldefault0f9830c40ed7b49"]);
		kony.automation.calendar.selectDate(["frmCal","Copycaldefault0f9830c40ed7b49"], [6,11,2015]);
	});
	
	it("calendarDefaultView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal","lbl1"]);
		await kony.automation.playback.waitFor(["frmCal","caldefault"]);
		kony.automation.calendar.selectDate(["frmCal","caldefault"], [11,12,2015]);
	});
	
	it("calendarGridOnScreenView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,1]"]);
	});
	
	it("calendarGridPopupView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal","Copycaldefault0b651494fd8084b"]);
		kony.automation.calendar.selectDate(["frmCal","Copycaldefault0b651494fd8084b"], [6,3,2015]);
	});
	
	it("checkBoxDefaultView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmChk","cbvertical"]);
		kony.automation.checkboxgroup.click(["frmChk","cbvertical"], "cbg2");
		kony.automation.checkboxgroup.click(["frmChk","cbvertical"], "cbg3");
		kony.automation.checkboxgroup.click(["frmChk","cbvertical"], "cbg1");
	});
	
	it("checkBoxHzOrientation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmChk","cbHorizontal"]);
		kony.automation.checkboxgroup.click(["frmChk","cbHorizontal"], "cbg1");
		kony.automation.checkboxgroup.click(["frmChk","cbHorizontal"], "cbg2");
		kony.automation.checkboxgroup.click(["frmChk","cbHorizontal"], "cbg3");
	});
	
	it("comboBoxListView", async function() {
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,3]"]);
		kony.automation.alert.click(0);
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
	});
	
	it("dataGridWithAlterRowSkins", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,4]"]);
		await kony.automation.scrollToWidget(["frmDatagrd","Copylbl061ab3375b9a743"]);
		kony.automation.capture();
	});
	
	it("dataGridWithImages", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,4]"]);
		await kony.automation.scrollToWidget(["frmDatagrd","Copylbl0a9b171b71ec547"]);
		kony.automation.capture();
	});
	
	it("dataGridWithTextAndImage", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,4]"]);
		await kony.automation.scrollToWidget(["frmDatagrd","Copylbl061ab3375b9a743"]);
		kony.automation.capture();
	});
	
	it("defaultRadioButton", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo","RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg1");
	});
	
	it("defaultSlider", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
		await kony.automation.playback.waitFor(["frmSlider","Slider0c3ed0b3aee0847"]);
		kony.automation.slider.slide(["frmSlider","Slider0c3ed0b3aee0847"], 91);
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
	});
	
	it("deviceInfo", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn9"]);
		kony.automation.button.click(["frmDvcFeatures","btn9"]);
		await kony.automation.playback.waitFor(["frmDeviceInfo","labl"]);
	});
	
	it("dynamicHTMLContent", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,5]"]);
		kony.automation.button.click(["frmBrowserOptions","btn2"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmBrowserDynURL","labl"]);
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
	});
	
	it("fetchContactRemoveContact", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn7"]);
		kony.automation.button.click(["frmDvcFeatures","btn7"]);
		await kony.automation.playback.waitFor(["frmContact","Btn1"]);
		kony.automation.button.click(["frmContact","Btn1"]);
		kony.automation.button.click(["frmContact","btn2"]);
	});
	
	it("formBottomLeftTopAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,7]"]);
		await kony.automation.playback.waitFor(["frmAni29","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni29","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formBottomTOpAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,0]"]);
		await kony.automation.playback.waitFor(["frmAni22","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni22","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formBottomTopStyleAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmAni30","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni30","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formFromCenterAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,5]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmAni27","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni27","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formfromLeftAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmAni23","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni23","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formfromRightAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmAni24","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni24","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formTextBox", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx","TextField0b948d870dc044d"],"kony Hyderabad");
	});
	
	it("formToLeftAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,4]"]);
		await kony.automation.playback.waitFor(["frmAni26","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni26","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formTopRightBottomAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,6]"]);
		await kony.automation.playback.waitFor(["frmAni28","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni28","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formToRightAnimation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
		await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
		kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,3]"]);
		await kony.automation.playback.waitFor(["frmAni25","navHome","Button0b4beb5a153b24d"]);
		kony.automation.button.click(["frmAni25","navHome","Button0b4beb5a153b24d"]);
	});
	
	it("formWithCalendar", async function() {
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
		kony.automation.calendar.selectDate(["frmForm","calen"], [10,14,2015]);
	});
	
	it("formWithDefaultTitleBar", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
		kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,3]"]);
		await kony.automation.playback.waitFor(["frmTitlebar","btn1"]);
		kony.automation.button.click(["frmTitlebar","btn1"]);
		await kony.automation.playback.waitFor(["frmTitleBar1","Label011a531ddd2ce43"]);
	});
	
	it("formWithHeaderAndFooter", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
		kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,2]"]);
		await kony.automation.scrollToWidget(["frmHdrFooter","CopylblHeader074e3196050a044"]);
	});
	
	it("formWithIcons", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,16]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,16]"]);
		await kony.automation.playback.waitFor(["frmIcons","Image0d7227a86652c43"]);
	});
	
	it("formWithImageAsBackground", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions","frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmImgBck","lbl1"]);
		kony.automation.capture();
	});
	
	it("formWithList", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,14]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,14]"]);
		await kony.automation.playback.waitFor(["frmLst","segFirst"]);
		kony.automation.segmentedui.click(["frmLst","segFirst[0,0]"]);
		await kony.automation.playback.waitFor(["frmLst","segFirst"]);
		kony.automation.segmentedui.click(["frmLst","segFirst[0,1]"]);
	});
	
	it("formWithLoadScreenCenter", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions","frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,4]"]);
		await kony.automation.playback.wait(5000);
	});
	
	it("formWithNestedList", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,15]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,15]"]);
		await kony.automation.playback.waitFor(["frmNList","segFirst"]);
		kony.automation.segmentedui.click(["frmNList","segFirst[0,0]"]);
		await kony.automation.playback.waitFor(["frmNLst2","segFirst"]);
		kony.automation.segmentedui.click(["frmNLst2","segFirst[0,0]"]);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmNList","segFirst"]);
		kony.automation.segmentedui.click(["frmNList","segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmNLst2","segFirst"]);
		kony.automation.segmentedui.click(["frmNLst2","segFirst[0,1]"]);
	});
	
	it("formWithPasswordField", async function() {
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
		kony.automation.textbox.enterText(["frmForm","TextFieldPassword"],"kony hyderabad");
	});
	
	it("formWithRadioButton", async function() {
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
		kony.automation.radiobuttongroup.click(["frmForm","RadioButtonGroup1"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmForm","RadioButtonGroup1"], "rbg2");
	});
	
	it("formWithTBBackgroundColor", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
		kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,3]"]);
		kony.automation.button.click(["frmTitlebar","btn2"]);
		await kony.automation.playback.waitFor(["frmTitlebar2","Label011a531ddd2ce43"]);
	});
	
	it("formWithTBBackgroundImage", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,0]"]);
		kony.automation.segmentedui.click(["frmFormOptions","frmOptSeg[0,3]"]);
		kony.automation.button.click(["frmTitlebar","btn3"]);
		await kony.automation.playback.waitFor(["frmTitleBar3","Label011a531ddd2ce43"]);
	});
	
	it("formWithTextField", async function() {
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
		kony.automation.textbox.enterText(["frmForm","TextFieldName"],"kony Hyderabad ");
	});
	
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
	});
	
	it("fowmWithComboBox", async function() {
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
		kony.automation.listbox.selectItem(["frmForm","listboxCountry"], "lb3");
	});
	
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
	});
	
	it("hamburgerMenuInScrollBox", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmScrollBoxMenu","Button0c3ed9244aa654a"]);
		kony.automation.button.click(["frmScrollBoxMenu","Button0c3ed9244aa654a"]);
		kony.automation.capture();
		// :User Injected Code Snippet [// - [1 lines]]
		kony.automation.alert.click(0);
		// :End User Injected Code Snippet {11aa93a8-a058-b38f-53eb-79e6f971ea9f}
	});
	
	it("HZImageStripSlotView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,1]"]);
		kony.automation.alert.click(0);
	});
	
	it("imageCrop", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage","btn3"]);
		kony.automation.button.click(["frmImage","btn3"]);
		await kony.automation.playback.waitFor(["frmImgCrop","lbl2"]);
		await kony.automation.playback.waitFor(["frmImgCrop","img2"]);
		kony.automation.capture();
	});
	
	it("imageFitToDimension", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage","btn1"]);
		kony.automation.button.click(["frmImage","btn1"]);
		await kony.automation.playback.waitFor(["frmImgFitToDimensions","lbl3"]);
		await kony.automation.scrollToWidget(["frmImgFitToDimensions","img3"]);
		kony.automation.capture();
	});
	
	it("imageGallery", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,2]"]);
		kony.automation.alert.click(0);
	});
	
	it("imageMaintainRatio", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage","btn2"]);
		kony.automation.button.click(["frmImage","btn2"]);
		await kony.automation.playback.waitFor(["frmImgMaintainAspectRatio","labl"]);
		await kony.automation.scrollToWidget(["frmImgMaintainAspectRatio","img2"]);
		await kony.automation.playback.waitFor(["frmImgMaintainAspectRatio","img2"]);
		kony.automation.capture();
	});
	
	it("imageURLBased", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage","btn4"]);
		kony.automation.button.click(["frmImage","btn4"]);
		await kony.automation.playback.waitFor(["frmURLBasedImage","Image091ed1f59af7f4c"]);
		kony.automation.capture();
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
	});
	
	it("labelWithDifferentSkins", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,6]"]);
		await kony.automation.playback.waitFor(["frmLbl","labl"]);
		kony.automation.capture();
		await kony.automation.playback.wait(3000);
		await kony.automation.scrollToWidget(["frmLbl","Label04a700f93bcb141"]);
		kony.automation.capture();
	});
	
	it("listBoxBGImage2", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmLstBox","CopydefaultLb0254c1dd74a0045"]);
		kony.automation.listbox.selectItem(["frmLstBox","CopydefaultLb0254c1dd74a0045"], "lb3");
	});
	
	it("listBoxDefaultView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmLstBox","defaultLb"]);
		kony.automation.listbox.selectItem(["frmLstBox","defaultLb"], "lb2");
	});
	
	it("listBoxSpinnerStyle", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmLstBox","CopydefaultLb0f2a7f5faf5fe4d"]);
		kony.automation.listbox.selectItem(["frmLstBox","CopydefaultLb0f2a7f5faf5fe4d"], "lb3");
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
	});
	
	it("radioButtonBGColor", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo","RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg3");
	});
	
	it("radioButtonTickedAndUnTicked", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo","RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg1");
	});
	
	it("radioButtonVerticalOrientation", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo","RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg3");
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
	});
	
	it("richText", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,10]"]);
		await kony.automation.playback.waitFor(["frmRich","labl"]);
	});
	
	it("segmentFocusSkin", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		kony.automation.button.click(["frmSegmentOptions","btn8"]);
		await kony.automation.playback.waitFor(["frmSegSections1","lbl1"]);
		await kony.automation.playback.waitFor(["frmSegSections1","Segment01b90f15914ac43"]);
		kony.automation.segmentedui.click(["frmSegSections1","Segment01b90f15914ac43[0,0]"]);
	});
	
	it("segmentGroupMode", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		kony.automation.button.click(["frmSegmentOptions","btn7"]);
		await kony.automation.playback.waitFor(["frmsegGroupMode","labl"]);
	});
	
	it("segmentHeaderTemplate", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		kony.automation.button.click(["frmSegmentOptions","btn5"]);
		await kony.automation.playback.waitFor(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate"]);
	});
	
	it("segmentMultiSelect", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		kony.automation.button.click(["frmSegmentOptions","btn9"]);
		await kony.automation.playback.waitFor(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate"]);
		kony.automation.segmentedui.click(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate[0,0]"]);
		kony.automation.segmentedui.click(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate[0,1]"]);
		kony.automation.segmentedui.click(["frmSecHdrWidoutTemplates","segSecHdrWidoutTmplate[0,2]"]);
	});
	
	it("SegmentPageIndicatorAtBottom", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		await kony.automation.playback.waitFor(["frmSegmentOptions","Btn1"]);
		kony.automation.button.click(["frmSegmentOptions","Btn1"]);
		await kony.automation.playback.waitFor(["frmSegOptions","btn11"]);
		kony.automation.button.click(["frmSegOptions","btn11"]);
		await kony.automation.playback.waitFor(["frmLargeSegPageView","lbl1"]);
		kony.automation.capture();
	});
	
	it("SegmentPageView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		await kony.automation.playback.waitFor(["frmSegmentOptions","Btn1"]);
		kony.automation.button.click(["frmSegmentOptions","Btn1"]);
		await kony.automation.playback.waitFor(["frmSegOptions","btn2"]);
		kony.automation.button.click(["frmSegOptions","btn2"]);
		await kony.automation.playback.waitFor(["frmSeg2","lbl1"]);
		kony.automation.capture();
	});
	
	it("SegmentTableView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		await kony.automation.playback.waitFor(["frmSegmentOptions","Btn1"]);
		kony.automation.button.click(["frmSegmentOptions","Btn1"]);
		await kony.automation.playback.waitFor(["frmSegOptions","Btn1"]);
		kony.automation.button.click(["frmSegOptions","Btn1"]);
		await kony.automation.playback.waitFor(["frmSeg","lbl1"]);
	});
	
	it("segmentWithRowTemplate", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		kony.automation.button.click(["frmSegmentOptions","btn4"]);
		await kony.automation.playback.waitFor(["frmRowTemplates","labl"]);
	});
	
	it("segWithPreferedWidth", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		await kony.automation.playback.waitFor(["frmAdvancedWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,0]"]);
		kony.automation.button.click(["frmSegmentOptions","btn6"]);
		await kony.automation.playback.waitFor(["frmSegBoxes","labl"]);
	});
	
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
	});
	
	it("SliderSelectedValue", async function() {
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
	});
	
	it("sliderWith20Value", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
		await kony.automation.playback.waitFor(["frmSlider","CopySlider049bb958ca9b948"]);
		kony.automation.slider.slide(["frmSlider","CopySlider049bb958ca9b948"], 75);
	});
	
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
	
	it("sliderWithMinMaxvalues", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,11]"]);
		await kony.automation.playback.waitFor(["frmSlider","CopySlider0ed9720af87bb43"]);
		kony.automation.slider.slide(["frmSlider","CopySlider0ed9720af87bb43"], 1986);
	});
	
	it("staticHTMLContent", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,2]"]);
		kony.automation.segmentedui.click(["frmAdvancedWidgets","segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmBrowserOptions","Btn1"]);
		kony.automation.button.click(["frmBrowserOptions","Btn1"]);
		await kony.automation.playback.waitFor(["frmBrowser","labl"]);
	});
	
	it("tabCollapseView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs","btn2"]);
		kony.automation.button.click(["frmTabs","btn2"]);
		await kony.automation.playback.waitFor(["frmTabWid","Tabpane"]);
		kony.automation.tabpane.click(["frmTabWid","Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmTabWid","Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmTabWid","Tabpane"], "Tab1");
	});
	
	it("tabDefaultView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs","btn1"]);
		kony.automation.button.click(["frmTabs","btn1"]);
		await kony.automation.playback.waitFor(["frmTabWid2","Tabpane"]);
		kony.automation.tabpane.click(["frmTabWid2","Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmTabWid2","Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmTabWid2","Tabpane"], "Tab1");
	});
	
	it("tabToggleView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs","btn5"]);
		kony.automation.button.click(["frmTabs","btn5"]);
		await kony.automation.playback.waitFor(["frmToggleTabs","Tabpane"]);
		kony.automation.tabpane.click(["frmToggleTabs","Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmToggleTabs","Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmToggleTabs","Tabpane"], "Tab1");
	});
	
	it("tabWithImage", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs","btn4"]);
		kony.automation.button.click(["frmTabs","btn4"]);
		await kony.automation.playback.waitFor(["frmToggleTabs","Tabpane"]);
		kony.automation.tabpane.click(["frmToggleTabs","Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmToggleTabs","Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmToggleTabs","Tabpane"], "Tab1");
	});
	
	it("tabWithScreenLevel", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets","uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets","uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs","btn7"]);
		kony.automation.button.click(["frmTabs","btn7"]);
	});
	
	it("textAreaBGColor", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
		await kony.automation.playback.waitFor(["frmTxt","bgcolor"]);
		kony.automation.textarea.enterText(["frmTxt","bgcolor"],"Kony Hyderabad ");
	});
	
	it("textAreaDefaultView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
		await kony.automation.playback.waitFor(["frmTxt","TextArea0596e78d7d54744"]);
		kony.automation.textarea.enterText(["frmTxt","TextArea0596e78d7d54744"],"Kony Hyderabad\n");
	});
	
	it("textAreaPlaceHolder", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
		await kony.automation.playback.waitFor(["frmTxt","TextArea033ffdf6277e846"]);
		kony.automation.textarea.enterText(["frmTxt","TextArea033ffdf6277e846"],"Kony Hyderabad");
	});
	
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
	});
	
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
	
	it("textAreaWithBGImage", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,12]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,12]"]);
		await kony.automation.scrollToWidget(["frmTxt","Copylbl02a982e22a48548"]);
		kony.automation.capture();
	});
	
	it("textBoxBGImage", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		await kony.automation.scrollToWidget(["frmTbx","CopyTextField01b100602574049"]);
		kony.automation.textbox.enterText(["frmTbx","CopyTextField01b100602574049"],"kony Hyderabad ");
		kony.automation.capture();
	});
	
	it("textBoxSearchView", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		await kony.automation.scrollToWidget(["frmTbx","CopyTextField07c52f4d00d944a"]);
	});
	
	it("textBoxVGSkin", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx","CopyTextField0c12530be25234c"],"kony Hyderabad ");
	});
	
	it("textBoxVSSkin", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		await kony.automation.scrollToWidget(["frmTbx","CopyTextField0379d59d3dc5342"]);
		kony.automation.textbox.enterText(["frmTbx","CopyTextField0379d59d3dc5342"],"kony Hyderabad ");
	});
	
	it("textBoxWithBGColor", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx","CopyTextField0de477f87aff745"],"kony Hyderabad ");
	});
	
	it("textboxWithPlaceHolder", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx","CopyTextField08f9f9364a52449"],"Kony Hyderabad");
	});
	
	it("updateDataInDatabase", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures","btn11"]);
		kony.automation.button.click(["frmDvcFeatures","btn11"]);
		await kony.automation.playback.waitFor(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btnCreateDB"]);
		kony.automation.button.click(["frmWebSQL","btn4"]);
	});
	
	it("defaultLink", async function() {
		await kony.automation.playback.waitFor(["frmHome","segHome"]);
		kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,7]"]);
		kony.automation.alert.click(0);
	});
});