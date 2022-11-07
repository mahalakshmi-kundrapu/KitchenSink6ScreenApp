function AS_Form_e145c57a6c09477294e2d16bce2fb6e4(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}