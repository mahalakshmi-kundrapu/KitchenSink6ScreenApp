function AS_Form_caa007b960b44e4683a5a39ea1db305d(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}