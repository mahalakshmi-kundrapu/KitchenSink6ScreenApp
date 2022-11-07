function AS_Form_i491d3c643194ae6bfc96c6fc41c5332(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}