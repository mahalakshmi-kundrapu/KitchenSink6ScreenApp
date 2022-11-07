function AS_Form_d9d8fe7b1a0f40b0b8fa4e21ddf9532d(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}