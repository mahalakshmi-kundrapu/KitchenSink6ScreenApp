function AS_Form_c78af896a5b34d8e9ded82b51fa30015(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}