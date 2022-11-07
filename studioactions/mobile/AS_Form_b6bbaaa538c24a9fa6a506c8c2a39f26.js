function AS_Form_b6bbaaa538c24a9fa6a506c8c2a39f26(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}