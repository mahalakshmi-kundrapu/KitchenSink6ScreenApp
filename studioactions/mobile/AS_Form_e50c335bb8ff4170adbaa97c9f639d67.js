function AS_Form_e50c335bb8ff4170adbaa97c9f639d67(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}