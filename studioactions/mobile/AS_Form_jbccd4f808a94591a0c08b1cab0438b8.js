function AS_Form_jbccd4f808a94591a0c08b1cab0438b8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}