function AS_Form_g6cb47d587de4bd2adef92e7bb4486fa(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}