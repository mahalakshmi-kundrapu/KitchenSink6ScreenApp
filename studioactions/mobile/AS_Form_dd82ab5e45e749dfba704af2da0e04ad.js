function AS_Form_dd82ab5e45e749dfba704af2da0e04ad(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}