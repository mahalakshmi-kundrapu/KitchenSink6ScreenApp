describe("BasicSuite", function () {
	beforeEach(async function () {
		await frmHome.show();
	});

	it("addContact", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,2]"]);
		await kony.automation.playback.waitFor(["frmDvcFeatures", "btn7"]);
		kony.automation.button.click(["frmDvcFeatures", "btn7"]);
		await kony.automation.playback.waitFor(["frmContact", "Btn1"]);
		kony.automation.button.click(["frmContact", "Btn1"]);
		await kony.automation.playback.waitFor(["frmContact", "lblDevContact"]);
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
	});


	it("buttonWithDifferenSkins", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,0]"]);
		await kony.automation.device.deviceBack();
	});

	it("calendarCustomIcon", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal", "Copycaldefault0f9830c40ed7b49"]);
		kony.automation.calendar.selectDate(["frmCal", "Copycaldefault0f9830c40ed7b49"], [6, 11, 2015]);
		await kony.automation.device.deviceBack();
	});

	it("calendarDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal", "lbl1"]);
		await kony.automation.playback.waitFor(["frmCal", "caldefault"]);
		kony.automation.calendar.selectDate(["frmCal", "caldefault"], [11, 12, 2015]);
		await kony.automation.device.deviceBack();
	});

	it("calendarGridOnScreenView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.device.deviceBack();
	});

	it("calendarGridPopupView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal", "Copycaldefault0b651494fd8084b"]);
		kony.automation.calendar.selectDate(["frmCal", "Copycaldefault0b651494fd8084b"], [6, 3, 2015]);
		await kony.automation.device.deviceBack();
	});

	it("checkBoxDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmChk", "cbvertical"]);
		kony.automation.checkboxgroup.click(["frmChk", "cbvertical"], "cbg2");
		kony.automation.checkboxgroup.click(["frmChk", "cbvertical"], "cbg3");
		kony.automation.checkboxgroup.click(["frmChk", "cbvertical"], "cbg1");
		await kony.automation.device.deviceBack();
	});

	it("checkBoxHzOrientation", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmChk", "cbHorizontal"]);
		kony.automation.checkboxgroup.click(["frmChk", "cbHorizontal"], "cbg1");
		kony.automation.checkboxgroup.click(["frmChk", "cbHorizontal"], "cbg2");
		kony.automation.checkboxgroup.click(["frmChk", "cbHorizontal"], "cbg3");
		await kony.automation.device.deviceBack();
	});


	it("buttonWithDifferenSkins", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,0]"]);
		await kony.automation.scrollToWidget(["frmBtn", "imagepatch9"]);
		await kony.automation.playback.waitFor(["frmBtn", "imagepatch9"]);
		kony.automation.button.click(["frmBtn", "imagepatch9"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("calendarCustomIcon", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal", "Copycaldefault0f9830c40ed7b49"]);
		kony.automation.calendar.selectDate(["frmCal", "Copycaldefault0f9830c40ed7b49"], [6, 11, 2015]);
		await kony.automation.device.deviceBack();
	});

	it("calendarDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal", "lbl1"]);
		await kony.automation.playback.waitFor(["frmCal", "caldefault"]);
		kony.automation.calendar.selectDate(["frmCal", "caldefault"], [11, 12, 2015]);
		await kony.automation.device.deviceBack();
	});

	it("calendarGridOnScreenView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.device.deviceBack();
	});

	it("calendarGridPopupView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,1]"]);
		await kony.automation.playback.waitFor(["frmCal", "Copycaldefault0b651494fd8084b"]);
		kony.automation.calendar.selectDate(["frmCal", "Copycaldefault0b651494fd8084b"], [6, 3, 2015]);
		await kony.automation.device.deviceBack();
	});

	it("checkBoxDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmChk", "cbvertical"]);
		kony.automation.checkboxgroup.click(["frmChk", "cbvertical"], "cbg2");
		kony.automation.checkboxgroup.click(["frmChk", "cbvertical"], "cbg3");
		kony.automation.checkboxgroup.click(["frmChk", "cbvertical"], "cbg1");
		await kony.automation.device.deviceBack();
	});

	it("checkBoxHzOrientation", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,2]"]);
		await kony.automation.playback.waitFor(["frmChk", "cbHorizontal"]);
		kony.automation.checkboxgroup.click(["frmChk", "cbHorizontal"], "cbg1");
		kony.automation.checkboxgroup.click(["frmChk", "cbHorizontal"], "cbg2");
		kony.automation.checkboxgroup.click(["frmChk", "cbHorizontal"], "cbg3");
		await kony.automation.device.deviceBack();
	});

	it("dataGridWithAlterRowSkins", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,4]"]);
		await kony.automation.scrollToWidget(["frmDatagrd", "Copylbl061ab3375b9a743"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("dataGridWithImages", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,4]"]);
		await kony.automation.scrollToWidget(["frmDatagrd", "Copylbl0a9b171b71ec547"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("dataGridWithTextAndImage", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,4]"]);
		await kony.automation.scrollToWidget(["frmDatagrd", "Copylbl061ab3375b9a743"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});



	it("defaultRadioButton", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo", "RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg1");
		await kony.automation.device.deviceBack();
	});


	it("formTextBox", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx", "TextField0b948d870dc044d"], "kony Hyderabad");
		await kony.automation.device.deviceBack();
	});

	it("formWithCalendar", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmForm", "RadioButtonGroup1"]);
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		kony.automation.calendar.selectDate(["frmForm", "calen"], [10, 14, 2015]);
		await kony.automation.device.deviceBack();
	});





	it("formWithHeaderAndFooter", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,2]"]);
		await kony.automation.scrollToWidget(["frmHdrFooter", "CopylblHeader074e3196050a044"]);
		await kony.automation.device.deviceBack();
	});

	it("formWithIcons", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,16]"]);
		await kony.automation.playback.waitFor(["frmIcons", "Image0d7227a86652c43"]);
		await kony.automation.device.deviceBack();
	});

	it("formWithImageAsBackground", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmImgBck", "lbl1"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});


	it("formWithLoadScreenCenter", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,4]"]);
		await kony.automation.playback.wait(5000);
		await kony.automation.device.deviceBack();
	});

	it("formWithPasswordField", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmForm", "RadioButtonGroup1"]);
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		kony.automation.textbox.enterText(["frmForm", "TextFieldPassword"], "kony hyderabad");
		await kony.automation.device.deviceBack();
	});

	it("formWithRadioButton", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmForm", "RadioButtonGroup1"]);
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		await kony.automation.device.deviceBack();
	});


	it("formWithTextField", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmForm", "RadioButtonGroup1"]);
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		kony.automation.textbox.enterText(["frmForm", "TextFieldName"], "kony Hyderabad ");
		await kony.automation.device.deviceBack();
	});

	it("fowmWithCheckBox", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmForm", "RadioButtonGroup1"]);
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		await kony.automation.scrollToWidget(["frmForm", "CheckBoxGroup0a43fcf67c4f148"]);
		kony.automation.checkboxgroup.click(["frmForm", "CheckBoxGroup0a43fcf67c4f148"], "cbg1");
		kony.automation.checkboxgroup.click(["frmForm", "CheckBoxGroup0a43fcf67c4f148"], "cbg1");
		await kony.automation.device.deviceBack();
	});

	it("fowmWithTextArea", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmFormOptions", "frmOptSeg"]);
		kony.automation.segmentedui.click(["frmFormOptions", "frmOptSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmForm", "RadioButtonGroup1"]);
		kony.automation.radiobuttongroup.click(["frmForm", "RadioButtonGroup1"], "rbg2");
		kony.automation.textarea.enterText(["frmForm", "TextArea1"], "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. kony");
		await kony.automation.device.deviceBack();
	});



	it("imageCrop", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage", "btn3"]);
		kony.automation.button.click(["frmImage", "btn3"]);
		await kony.automation.playback.waitFor(["frmImgCrop", "lbl2"]);
		await kony.automation.playback.waitFor(["frmImgCrop", "img2"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("imageMaintainRatio", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage", "btn2"]);
		kony.automation.button.click(["frmImage", "btn2"]);
		await kony.automation.playback.waitFor(["frmImgMaintainAspectRatio", "labl"]);
		await kony.automation.scrollToWidget(["frmImgMaintainAspectRatio", "img2"]);
		await kony.automation.playback.waitFor(["frmImgMaintainAspectRatio", "img2"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("imageURLBased", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,5]"]);
		await kony.automation.playback.waitFor(["frmImage", "btn4"]);
		kony.automation.button.click(["frmImage", "btn4"]);
		await kony.automation.playback.waitFor(["frmURLBasedImage", "Image091ed1f59af7f4c"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});


	it("listBoxBGImage2", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmLstBox", "CopydefaultLb0254c1dd74a0045"]);
		kony.automation.listbox.selectItem(["frmLstBox", "CopydefaultLb0254c1dd74a0045"], "lb3");
		await kony.automation.device.deviceBack();
	});

	it("listBoxDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmLstBox", "defaultLb"]);
		kony.automation.listbox.selectItem(["frmLstBox", "defaultLb"], "lb2");
		await kony.automation.device.deviceBack();
	});
	it("listBoxSpinnerStyle", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,8]"]);
		await kony.automation.playback.waitFor(["frmLstBox", "CopydefaultLb0f2a7f5faf5fe4d"]);
		kony.automation.listbox.selectItem(["frmLstBox", "CopydefaultLb0f2a7f5faf5fe4d"], "lb3");
		await kony.automation.device.deviceBack();
	});

	it("radioButtonBGColor", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo", "RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg3");
		await kony.automation.device.deviceBack();
	});

	it("radioButtonTickedAndUnTicked", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo", "RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg1");
		await kony.automation.device.deviceBack();
	});

	it("radioButtonVerticalOrientation", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,9]"]);
		await kony.automation.playback.waitFor(["frmRdo", "RadioButtonGroup083e657b73acd41"]);
		kony.automation.radiobuttongroup.click(["frmRdo", "RadioButtonGroup083e657b73acd41"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup061975199fa1443"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg3");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg1");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg2");
		kony.automation.radiobuttongroup.click(["frmRdo", "CopyRadioButtonGroup02d8ab108045247"], "rbg3");
		await kony.automation.device.deviceBack();
	});

	it("richText", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,10]"]);
		await kony.automation.playback.waitFor(["frmRich", "labl"]);
		await kony.automation.device.deviceBack();
	});


	it("tabCollapseView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs", "btn2"]);
		kony.automation.button.click(["frmTabs", "btn2"]);
		await kony.automation.playback.waitFor(["frmTabWid", "Tabpane"]);
		kony.automation.tabpane.click(["frmTabWid", "Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmTabWid", "Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmTabWid", "Tabpane"], "Tab1");
		await kony.automation.device.deviceBack();
	});

	it("tabDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs", "btn1"]);
		kony.automation.button.click(["frmTabs", "btn1"]);
		await kony.automation.playback.waitFor(["frmTabWid2", "Tabpane"]);
		kony.automation.tabpane.click(["frmTabWid2", "Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmTabWid2", "Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmTabWid2", "Tabpane"], "Tab1");
		await kony.automation.device.deviceBack();
	});

	it("tabToggleView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs", "btn5"]);
		kony.automation.button.click(["frmTabs", "btn5"]);
		await kony.automation.playback.waitFor(["frmToggleTabs", "Tabpane"]);
		kony.automation.tabpane.click(["frmToggleTabs", "Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmToggleTabs", "Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmToggleTabs", "Tabpane"], "Tab1");
		await kony.automation.device.deviceBack();
	});

	it("tabWithImage", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs", "btn4"]);
		kony.automation.button.click(["frmTabs", "btn4"]);
		await kony.automation.playback.waitFor(["frmToggleTabs", "Tabpane"]);
		kony.automation.tabpane.click(["frmToggleTabs", "Tabpane"], "Tab2");
		kony.automation.tabpane.click(["frmToggleTabs", "Tabpane"], "Tab3");
		kony.automation.tabpane.click(["frmToggleTabs", "Tabpane"], "Tab1");
		await kony.automation.device.deviceBack();
	});

	it("tabWithScreenLevel", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,0]"]);
		await kony.automation.playback.waitFor(["frmContainerWidgets", "uiSeg"]);
		kony.automation.segmentedui.click(["frmContainerWidgets", "uiSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmTabs", "btn7"]);
		kony.automation.button.click(["frmTabs", "btn7"]);
		await kony.automation.device.deviceBack();
	});

	it("textAreaBGColor", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.playback.waitFor(["frmTxt", "bgcolor"]);
		kony.automation.textarea.enterText(["frmTxt", "bgcolor"], "Kony Hyderabad ");
		await kony.automation.device.deviceBack();
	});

	it("textAreaDefaultView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.playback.waitFor(["frmTxt", "TextArea0596e78d7d54744"]);
		kony.automation.textarea.enterText(["frmTxt", "TextArea0596e78d7d54744"], "Kony Hyderabad\n");
		await kony.automation.device.deviceBack();
	});

	it("textAreaPlaceHolder", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.playback.waitFor(["frmTxt", "TextArea033ffdf6277e846"]);
		kony.automation.textarea.enterText(["frmTxt", "TextArea033ffdf6277e846"], "Kony Hyderabad");
		await kony.automation.device.deviceBack();
	});

	it("textAreaVGColor1", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.scrollToRow(["frmBasicWidgets", "segFirst[0,12]"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.scrollToWidget(["frmTxt", "Copylbl0bc8adaac08574c"]);
		await kony.automation.playback.waitFor(["frmTxt", "CopyTextArea08c722531d43a4a"]);
		kony.automation.textarea.enterText(["frmTxt", "CopyTextArea08c722531d43a4a"], "Kony Hyderabad\n");
		await kony.automation.device.deviceBack();
	});

	it("textAreaVSColor", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.scrollToWidget(["frmTxt", "CopyTextArea0c90885b420bf49"]);
		await kony.automation.playback.waitFor(["frmTxt", "CopyTextArea0c90885b420bf49"]);
		kony.automation.textarea.enterText(["frmTxt", "CopyTextArea0c90885b420bf49"], "Kony Hyderabad\n\n\nHelloo\nKonyIndia 2\n");
		await kony.automation.device.deviceBack();
	});

	it("textAreaWith10Lines", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.scrollToWidget(["frmTxt", "CopyTextArea04754955b33b343"]);
		await kony.automation.playback.waitFor(["frmTxt", "CopyTextArea04754955b33b343"]);
		kony.automation.textarea.enterText(["frmTxt", "CopyTextArea04754955b33b343"], "kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad  kony hyderabad ");
		await kony.automation.device.deviceBack();
	});

	it("textAreaWithBGImage", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,12]"]);
		await kony.automation.scrollToWidget(["frmTxt", "Copylbl02a982e22a48548"]);
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("textBoxBGImage", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		await kony.automation.scrollToWidget(["frmTbx", "CopyTextField01b100602574049"]);
		kony.automation.textbox.enterText(["frmTbx", "CopyTextField01b100602574049"], "kony Hyderabad ");
		kony.automation.capture();
		await kony.automation.device.deviceBack();
	});

	it("textBoxSearchView", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		await kony.automation.scrollToWidget(["frmTbx", "CopyTextField07c52f4d00d944a"]);
		await kony.automation.device.deviceBack();
	});

	it("textBoxVGSkin", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx", "CopyTextField0c12530be25234c"], "kony Hyderabad ");
		await kony.automation.device.deviceBack();
	});

	it("textBoxVSSkin", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		await kony.automation.scrollToWidget(["frmTbx", "CopyTextField0379d59d3dc5342"]);
		kony.automation.textbox.enterText(["frmTbx", "CopyTextField0379d59d3dc5342"], "kony Hyderabad ");
		await kony.automation.device.deviceBack();
	});

	it("textBoxWithBGColor", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx", "CopyTextField0de477f87aff745"], "kony Hyderabad ");
		await kony.automation.device.deviceBack();
	});

	it("textboxWithPlaceHolder", async function () {
		await kony.automation.playback.waitFor(["frmHome", "segHome"]);
		kony.automation.segmentedui.click(["frmHome", "segHome[0,0]"]);
		await kony.automation.playback.waitFor(["frmUICategory", "uiCatSeg"]);
		kony.automation.segmentedui.click(["frmUICategory", "uiCatSeg[0,1]"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		await kony.automation.playback.waitFor(["frmBasicWidgets", "segFirst"]);
		kony.automation.segmentedui.click(["frmBasicWidgets", "segFirst[0,13]"]);
		kony.automation.textbox.enterText(["frmTbx", "CopyTextField08f9f9364a52449"], "Kony Hyderabad");
		await kony.automation.device.deviceBack();
	});

});