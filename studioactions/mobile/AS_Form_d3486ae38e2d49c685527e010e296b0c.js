function AS_Form_d3486ae38e2d49c685527e010e296b0c(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}