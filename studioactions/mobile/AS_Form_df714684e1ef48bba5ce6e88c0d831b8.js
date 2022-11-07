function AS_Form_df714684e1ef48bba5ce6e88c0d831b8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}