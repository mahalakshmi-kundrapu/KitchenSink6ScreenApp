function AS_Form_e872ff63cfd34caeb5bb30638f315432(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}