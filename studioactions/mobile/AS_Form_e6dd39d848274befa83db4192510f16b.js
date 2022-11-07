function AS_Form_e6dd39d848274befa83db4192510f16b(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}