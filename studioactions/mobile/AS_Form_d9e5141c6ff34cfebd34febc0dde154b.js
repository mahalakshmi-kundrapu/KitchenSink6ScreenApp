function AS_Form_d9e5141c6ff34cfebd34febc0dde154b(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}