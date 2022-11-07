function AS_Form_ff6822c49ab847c8aec661b836c9c596(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}