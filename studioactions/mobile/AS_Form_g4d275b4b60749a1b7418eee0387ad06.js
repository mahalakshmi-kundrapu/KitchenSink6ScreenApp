function AS_Form_g4d275b4b60749a1b7418eee0387ad06(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}