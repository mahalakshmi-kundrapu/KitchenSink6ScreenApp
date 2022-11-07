function AS_Button_c7b8389e6a564871a138f6f7507482f3(eventobject) {
	var currentForm = kony.application.getCurrentForm();
	if (currentForm != frmHome) {
	  currentForm.destroy();
	}
	frmHome.show();

}