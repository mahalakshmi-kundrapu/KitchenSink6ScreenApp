function AS_Form_b6dab3c2b80a4badaa08de91fe82d588(eventobject) {
var currentForm = kony.application.getCurrentForm();
if (currentForm != frmHome) {
  currentForm.destroy();
}
frmHome.show();

}