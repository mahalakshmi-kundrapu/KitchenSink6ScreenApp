function AS_Form_b062dbdd95e1489788b1f7bb631dee04(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}