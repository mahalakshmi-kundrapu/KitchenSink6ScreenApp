function AS_Form_b6f94d877b334c9e86361b662d8f2e8e(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}