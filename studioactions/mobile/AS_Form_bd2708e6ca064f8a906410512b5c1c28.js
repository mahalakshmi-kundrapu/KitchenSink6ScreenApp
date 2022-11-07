function AS_Form_bd2708e6ca064f8a906410512b5c1c28(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}