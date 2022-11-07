function AS_Form_i07ae4ea365b42c9be42462e3317f2c3(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}