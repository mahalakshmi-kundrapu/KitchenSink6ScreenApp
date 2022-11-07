function AS_Form_f6a2e2d50103408ea8f0f65c19d833d8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}