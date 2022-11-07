function AS_Form_e546de8b12e34c9baa9b53b8fd0068cf(eventobject) {
	var currentForm = kony.application.getCurrentForm();
	if (currentForm != frmHome) {
	  currentForm.destroy();
	}
	frmHome.show();

}