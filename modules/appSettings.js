
/*****************************************************************
*	Name    : onsuccesscallback
*	Author  : Kony Solutions
*	Purpose : The below function is the success callback of kony.application.settings.read API.
******************************************************************/

function onsuccesscallback(key,value)
{
	if ( value=="null" || value =="")
	{
		frmAppSetRead.lblMsgSetR.text = "Empty";
	}
	else
	{
		frmAppSetRead.lblMsgSetR.text = value;
	}
}

/*****************************************************************
*	Name    : onfailureback
*	Author  : Kony Solutions
*	Purpose : The below function is the failure callback of kony.application.settings.read API.
******************************************************************/

function onfailureback(errorcode,errormessage)
{
	alert("err is :"+errormessage);	
}

/*****************************************************************
*	Name    : onsuccesscallbackR
*	Author  : Kony Solutions
*	Purpose : The below function is the success callback of kony.application.settings.read API.
******************************************************************/

function onsuccesscallbackR(key,value)
{
	frmAppSetRead.lblMsgSetR1.text = value;
	switch(value)
	{
		case "Table view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_TABLEVIEW;
						break;
		case "Page view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_PAGEVIEW;
						frmAppSetRead.SegMsgSetR.pageOffDotImage = "orngsld";
						frmAppSetRead.SegMsgSetR.pageOnDotImage = "whitesld";
						break;
		case "Coverflow view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_COVERFLOW;
						break;
		case "Cylinder view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_CYLINDER;
						break;
		case "Inverted cylinder view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_INVERTED_CYLINDER;
						break;
		case "Inverted rotary view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_INVERTED_ROTARY;
						break;
		case "Linear view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_LINEAR;
						break;
		case "Stack view":
						frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_STACK;
						break;								
		
	}
	frmAppSetRead.show();
		
	
}

/*****************************************************************
*	Name    : onfailurebackR
*	Author  : Kony Solutions
*	Purpose : The below function is the failure callback of kony.application.settings.read API.
******************************************************************/

function onfailurebackR(errorcode,errormessage)
{
	alert("Err is :"+errormessage);
}

/*****************************************************************
*	Name    : onsuccesscallbackw
*	Author  : Kony Solutions
*	Purpose : Success call back function of kony.application.settings.write API.
******************************************************************/

function onsuccesscallbackw(key,value)
{
	kony.print("Value is :"+value);
}

/*****************************************************************
*	Name    : onfailurebackw
*	Author  : Kony Solutions
*	Purpose : Failure call back function of kony.application.settings.write API.This is invoked when ever writing the app settings is failed.
******************************************************************/

function onfailurebackw(errorcode,errormessage)
{
	alert("Error is :"+errormessage);
}

/*****************************************************************
*	Name    : onsuccesscallbackWrite
*	Author  : Kony Solutions
*	Purpose : Success call back function of kony.application.settings.write API.
******************************************************************/

function onsuccesscallbackWrite(key,value)
{	
	frmAppSetWrite.lblAppAfterSet.text = "App settings are successful";
}

/*****************************************************************
*	Name    : onfailurebackWrite
*	Author  : Kony Solutions
*	Purpose : Failure call back function of kony.application.settings.write API.This is invoked when ever writing the app settings is failed.
******************************************************************/

function onfailurebackWrite(errorcode,errormessage)
{
	alert("Error is :"+errormessage);
}

/*****************************************************************
*	Name    : read
*	Author  : Kony Solutions
*	Purpose : To read the application settings using kony.application.settings.read API
******************************************************************/

function read()
{
	kony.application.settings.read ("key1", onsuccesscallback, onfailureback)
	kony.application.settings.read ("key2", onsuccesscallbackR, onfailurebackR)
}

/*****************************************************************
*	Name    : write
*	Author  : Kony Solutions
*	Purpose : To write the application settings using kony.application.settings.write API
******************************************************************/

function write()
{
	var str1 = frmAppSetWrite.txtAppSet.text+" ";
	var str2 = frmAppSetWrite.CmbAppSet.selectedKey;
	kony.application.settings.write ("key1",str1,onsuccesscallbackw, onfailurebackw);
	kony.application.settings.write ("key2",str2,onsuccesscallbackWrite, onfailurebackWrite);
	
}

