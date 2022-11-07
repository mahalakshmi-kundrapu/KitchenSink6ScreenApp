function AS_Form_e8701f1a0e4042b5a46594e1d39e94d6(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}