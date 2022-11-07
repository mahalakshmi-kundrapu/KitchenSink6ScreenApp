function AS_Form_db741f5c1dc14f17a60e9b220722ead4(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}