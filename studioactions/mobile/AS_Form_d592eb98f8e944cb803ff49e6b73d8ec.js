function AS_Form_d592eb98f8e944cb803ff49e6b73d8ec(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}