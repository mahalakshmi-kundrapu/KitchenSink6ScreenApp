function AS_Form_a2e6d7b10c7844ddb40c089afc2b6f78(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}