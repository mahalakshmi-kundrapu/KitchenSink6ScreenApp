function AS_Form_hcfa3c90d9b54e8998eaf4e4e94eea9d(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}