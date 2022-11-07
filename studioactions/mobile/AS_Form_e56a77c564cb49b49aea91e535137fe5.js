function AS_Form_e56a77c564cb49b49aea91e535137fe5(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}