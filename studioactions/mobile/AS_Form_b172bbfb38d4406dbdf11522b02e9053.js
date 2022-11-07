function AS_Form_b172bbfb38d4406dbdf11522b02e9053(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}