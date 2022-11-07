describe("formAnimationsSuite", function() {
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
});