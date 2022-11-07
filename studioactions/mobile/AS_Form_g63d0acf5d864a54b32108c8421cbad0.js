function AS_Form_g63d0acf5d864a54b32108c8421cbad0(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}