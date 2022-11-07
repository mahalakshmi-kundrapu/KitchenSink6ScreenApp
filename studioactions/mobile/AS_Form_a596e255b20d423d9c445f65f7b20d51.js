function AS_Form_a596e255b20d423d9c445f65f7b20d51(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}