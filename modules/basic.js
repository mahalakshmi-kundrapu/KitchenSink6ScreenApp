function basic(){
  var segselectedRowIndex = frmBasicWidgets.segFirst.selectedRowIndex[1];
  switch(segselectedRowIndex)
  {

    case 0:	
      frmBtn.show();
      break;		
    case 1:
      frmCal.show();
      break;			
    case 2:
      frmChk.show();
      break;	
    case 3:
      alert("combobox widget is deprecated");
      //frmCBox.show();
      break;
    case 4:
      frmDatagrd.show();
      break;	
    case 5:
      frmImage.show();
      break;
    case 6:
      frmLbl.show();
      break;							
    case 7:
      var basicConf = {
        message: "Link widget is deprecated",
        alertType: constants.ALERT_TYPE_INFO,

      };
      var pspConfig = {
        "contentAlignment": constants.ALERT_CONTENT_ALIGN_LEFT
      };
      kony.ui.Alert(basicConf, pspConfig);
      break;				
    case 8:
      frmLstBox.show();
      break;	
    case 9:
      frmRdo.show();
      break;
    case 10:
      frmRich.show();
      break;	
    case 11:
      if(kony.os.deviceInfo().name == "thinclient")
      {
        alert("Not Available in SPA");
        break;
      }
      else
      {
        frmSlider.show();
        break;
      }			
    case 12:
      frmTxt.show();
      break;
    case 13:
      frmTbx.show();
      break;
    case 14:
      frmLst.show();
      break;
    case 15:
      frmNList.show();
      break;
    case 16:
      frmIcons.show();
      break;
  }  	

}
glbScrollBegining = false;
function scrolling() {
  if(glbScrollBegining == false) {
    kony.print("Entered True");
    glbScrollBegining = true
    frmScrollBoxMenu.FlexScrollContainer0ccefa3a33c3b49.scrollToBeginning()
  }
  else { 
    kony.print("Entered False");
    glbScrollBegining = false
    frmScrollBoxMenu.FlexScrollContainer0ccefa3a33c3b49.scrollToEnd();
  }
}
