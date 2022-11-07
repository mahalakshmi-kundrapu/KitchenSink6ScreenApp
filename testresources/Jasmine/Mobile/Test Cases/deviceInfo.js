it("deviceInfo", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","btn9"]);
	kony.automation.button.click(["frmDvcFeatures","btn9"]);
	await kony.automation.playback.waitFor(["frmDeviceInfo","labl"]);
});