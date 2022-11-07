function AS_Form_b161bb9ee8944bbdab5a28b5fea794f1(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}