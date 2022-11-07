function AS_Form_e020f320f25e4f2ab5fb2f9787167aba(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}