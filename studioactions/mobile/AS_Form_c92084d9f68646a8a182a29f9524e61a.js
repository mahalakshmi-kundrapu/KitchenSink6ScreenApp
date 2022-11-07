function AS_Form_c92084d9f68646a8a182a29f9524e61a(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}