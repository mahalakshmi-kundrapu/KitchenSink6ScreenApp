function AS_Form_aaa4f0cda230468aada0e27ac6d4c4a6(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}