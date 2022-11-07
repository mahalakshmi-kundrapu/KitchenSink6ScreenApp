function AS_Form_a8bec59ee8904dc0b10302cebed81b74(eventobject) {
	var currentForm = kony.application.getCurrentForm();
	if (currentForm != frmHome) {
	  currentForm.destroy();
	}
	frmHome.show();

}