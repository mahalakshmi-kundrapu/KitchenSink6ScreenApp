function AS_Form_b28d49ffcf3644538c07598da0d05aed(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}