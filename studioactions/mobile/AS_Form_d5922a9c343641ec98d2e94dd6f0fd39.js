function AS_Form_d5922a9c343641ec98d2e94dd6f0fd39(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}