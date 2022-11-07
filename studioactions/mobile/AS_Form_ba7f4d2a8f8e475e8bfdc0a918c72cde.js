function AS_Form_ba7f4d2a8f8e475e8bfdc0a918c72cde(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}