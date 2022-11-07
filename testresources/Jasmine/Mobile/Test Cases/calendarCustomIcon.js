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