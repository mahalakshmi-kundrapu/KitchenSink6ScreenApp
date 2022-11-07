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