function AS_Form_b5730b88549549f5a2ddfd4ec3ce63ed(eventobject) {
	var currentForm = kony.application.getCurrentForm();
	if (currentForm != frmHome) {
	  currentForm.destroy();
	}
	frmHome.show();

}