function AS_Form_b8624530a3f44ad8a9530e926cea34e7(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}