function AS_Form_f03a352c86174290aee41ed99be2dc8f(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}