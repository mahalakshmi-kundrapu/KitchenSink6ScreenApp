function AS_Form_a663f108cdf8426380a57e2d8c173c87(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}