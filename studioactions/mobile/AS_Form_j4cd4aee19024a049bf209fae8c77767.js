function AS_Form_j4cd4aee19024a049bf209fae8c77767(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}