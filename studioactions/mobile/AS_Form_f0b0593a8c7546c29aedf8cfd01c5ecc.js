function AS_Form_f0b0593a8c7546c29aedf8cfd01c5ecc(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}