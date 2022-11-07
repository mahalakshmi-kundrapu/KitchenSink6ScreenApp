function AS_Form_e57294d50d3b4386bf1d5c40b2027a19(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}