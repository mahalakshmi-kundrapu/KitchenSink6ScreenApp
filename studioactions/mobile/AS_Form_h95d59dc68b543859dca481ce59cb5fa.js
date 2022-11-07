function AS_Form_h95d59dc68b543859dca481ce59cb5fa(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}