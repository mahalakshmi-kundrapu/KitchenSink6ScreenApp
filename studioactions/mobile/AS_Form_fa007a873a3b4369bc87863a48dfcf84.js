function AS_Form_fa007a873a3b4369bc87863a48dfcf84(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}