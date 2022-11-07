function AS_Form_d57679d39c2e4234b61c530cbdb4aad7(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}