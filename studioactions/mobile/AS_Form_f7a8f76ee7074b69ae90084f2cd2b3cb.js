function AS_Form_f7a8f76ee7074b69ae90084f2cd2b3cb(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}