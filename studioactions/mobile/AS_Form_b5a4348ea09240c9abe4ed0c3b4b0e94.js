function AS_Form_b5a4348ea09240c9abe4ed0c3b4b0e94(eventobject) {
	var currentForm = kony.application.getCurrentForm();
	if (currentForm != frmHome) {
	  currentForm.destroy();
	}
	frmHome.show();

}