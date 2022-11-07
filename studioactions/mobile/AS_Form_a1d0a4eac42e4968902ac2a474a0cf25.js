function AS_Form_a1d0a4eac42e4968902ac2a474a0cf25(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}