function AS_Form_d026e7bb39804c8693751473be4f3cc8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}