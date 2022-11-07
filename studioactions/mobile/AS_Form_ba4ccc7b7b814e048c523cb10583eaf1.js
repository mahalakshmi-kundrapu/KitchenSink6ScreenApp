function AS_Form_ba4ccc7b7b814e048c523cb10583eaf1(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}