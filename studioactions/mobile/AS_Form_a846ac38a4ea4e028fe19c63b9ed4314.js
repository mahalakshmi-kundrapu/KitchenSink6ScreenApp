function AS_Form_a846ac38a4ea4e028fe19c63b9ed4314(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}