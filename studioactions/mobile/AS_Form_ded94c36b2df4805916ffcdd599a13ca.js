function AS_Form_ded94c36b2df4805916ffcdd599a13ca(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}