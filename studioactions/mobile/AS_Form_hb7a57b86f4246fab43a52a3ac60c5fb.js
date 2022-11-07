function AS_Form_hb7a57b86f4246fab43a52a3ac60c5fb(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}