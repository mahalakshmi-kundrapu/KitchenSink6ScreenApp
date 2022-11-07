function AS_Form_d61651385c1c4aaabe4ab48fd50f12f8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}