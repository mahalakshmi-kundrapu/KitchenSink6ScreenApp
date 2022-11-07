function AS_Form_fac492b1a8ce4241b9e0ca52f3adc8bc(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}