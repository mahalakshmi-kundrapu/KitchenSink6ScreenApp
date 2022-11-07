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