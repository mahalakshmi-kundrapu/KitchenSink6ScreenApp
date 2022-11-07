function AS_Form_cb6d03717f9446209d5ce6921772f4f5(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}