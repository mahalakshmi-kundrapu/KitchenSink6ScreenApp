function AS_Form_g739c95674f948b9a6606581f76e9b7b(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}