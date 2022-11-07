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