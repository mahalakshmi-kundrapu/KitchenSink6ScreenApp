function AS_Form_a2a53c95aaf54d40a382b15622ae20bf(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}