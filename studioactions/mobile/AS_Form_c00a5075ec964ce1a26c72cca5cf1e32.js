function AS_Form_c00a5075ec964ce1a26c72cca5cf1e32(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}