function AS_Form_c4c3a45bb03e44aa99519b872106ae18(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}