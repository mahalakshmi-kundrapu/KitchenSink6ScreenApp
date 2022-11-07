function AS_Form_gadef7b5f8f446e8b5eb85814dcb11dc(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}