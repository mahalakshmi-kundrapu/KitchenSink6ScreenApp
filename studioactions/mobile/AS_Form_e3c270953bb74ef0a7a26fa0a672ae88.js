function AS_Form_e3c270953bb74ef0a7a26fa0a672ae88(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}