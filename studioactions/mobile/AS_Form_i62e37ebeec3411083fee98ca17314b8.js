function AS_Form_i62e37ebeec3411083fee98ca17314b8(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}