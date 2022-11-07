
/*****************************************************************
*	Name    : advanced
*	Author  : Kony Solutions
*	Purpose : To navigate to the different forms from advanced widgets form.
******************************************************************/

function advanced()
{
	var segselectedRowIndex = frmAdvancedWidgets.segFirst.selectedRowIndex[1];
	switch(segselectedRowIndex)
	{
		case 0:	
			frmSegmentOptions.show();
			break;		
		case 1:
        	alert("ImageStrip widget is deprecated");
			//frmImgStrip.show();
			break;			
		case 2:
        	alert("ImageGallery widget is deprecated");
			//frmImgGal.show();
			break;	
		case 3:
        	alert("In progress");
			//frmMap.show();
			break;
		case 4:
			if(kony.os.deviceInfo().name =="iPad Simulator")
			{
				frmBrowserOptions.show();			
				break;
			}
			else
			{
				frmPhn.show();
				break;	
			}
		case 5:
			if(kony.os.deviceInfo().name =="iPad Simulator")
			{
				frmSwitch.show();
				break;
			}
			else
			{
				frmBrowserOptions.show();			
				break;			
			}
									
		case 6:
			if(kony.os.deviceInfo().name == "blackberry" || kony.os.deviceInfo().name == "android" || kony.os.deviceInfo().name == "thinclient")
			{
				alert("Available only in iPhone and WindowsPhone");
				break;
			}
			else
			{
				frmSwitch.show();
				break;
			}			
		case 7:
			if(kony.os.deviceInfo().name == "WindowsPhone")
			{
				set3DOSData();
				frm3DObj.show();
				break;
			}
			else
			{
				alert("Available only for WindowsPhone");
				break;
			}
	} 

}
