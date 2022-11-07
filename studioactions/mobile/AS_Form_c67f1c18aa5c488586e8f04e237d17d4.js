function AS_Form_c67f1c18aa5c488586e8f04e237d17d4(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}