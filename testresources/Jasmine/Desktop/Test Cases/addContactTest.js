it("addContactTest", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	await kony.automation.scrollToWidget(["frmHome","segHome"]);
	kony.automation.flexcontainer.click(["frmHome","segHome[0,2]","Copyflex0eb2d1dbdee5446"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","btn7"]);
	await kony.automation.scrollToWidget(["frmDvcFeatures","btn7"]);
	kony.automation.button.click(["frmDvcFeatures","btn7"]);
	await kony.automation.playback.waitFor(["frmContact","Btn1"]);
	await kony.automation.scrollToWidget(["frmContact","Btn1"]);
	kony.automation.button.click(["frmContact","Btn1"]);
});