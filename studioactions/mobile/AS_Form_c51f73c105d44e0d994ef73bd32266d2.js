function AS_Form_c51f73c105d44e0d994ef73bd32266d2(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}