function AS_Form_ga03af87c000466fbc3eda2862e0e5d0(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}