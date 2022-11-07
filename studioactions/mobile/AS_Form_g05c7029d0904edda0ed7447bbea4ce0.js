function AS_Form_g05c7029d0904edda0ed7447bbea4ce0(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}