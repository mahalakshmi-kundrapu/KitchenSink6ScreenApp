function AS_Form_cd175a56d4e14ce6860386c8534d8976(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}