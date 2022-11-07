function AS_Form_a9da20179709457a802ec0ed7e16adaf(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}