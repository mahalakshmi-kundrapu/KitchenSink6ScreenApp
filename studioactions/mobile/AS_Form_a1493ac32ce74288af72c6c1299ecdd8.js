function AS_Form_a1493ac32ce74288af72c6c1299ecdd8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}