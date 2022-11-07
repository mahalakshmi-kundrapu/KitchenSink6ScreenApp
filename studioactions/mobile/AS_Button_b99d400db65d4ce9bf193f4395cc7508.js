function AS_Button_b99d400db65d4ce9bf193f4395cc7508(eventobject) {
	var currentForm = kony.application.getCurrentForm();
	if (currentForm != frmHome) {
	  currentForm.destroy();
	}
	frmHome.show();

}