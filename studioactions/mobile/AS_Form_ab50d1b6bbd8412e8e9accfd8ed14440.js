function AS_Form_ab50d1b6bbd8412e8e9accfd8ed14440(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}