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