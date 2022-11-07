
/*****************************************************************
*	Name    : onClickOfFrmAniSeg
*	Author  : Kony Solutions
*	Purpose : To navigate to the appropriate animated forms from 'frmAni' .This function is meant for iphone platform.
******************************************************************/

function onClickOfFrmAniSeg(eventobj)
{
	var focIn = eventobj.selectedRowIndex[1];
	if(focIn==0)
		frmAni1.show();
	else if(focIn==1)
		frmAni2.show();
	else if(focIn==2)
		frmAni3.show();
	else if (focIn==3)
		frmAni4.show();
	else if(focIn==4) 
		frmAni5.show();
	else if(focIn==5)
		frmAni6.show();
	else if(focIn==6)
		frmAni7.show();
	else if(focIn==7)
		frmAni8.show();
	else if(focIn==8)
		frmAni9.show();
	else if(focIn==9)
		frmAni10.show();
	else if(focIn==10)
		frmAni11.show();
	else if(focIn==11)
		frmAni12.show();
	else if(focIn==12)
		frmAni13.show();
	else if(focIn==13)
		frmAni14.show();
	else if(focIn==14)
		frmAni15.show();
	else if(focIn==15)
		frmAni16.show();
	else if(focIn==16)
		frmAni17.show();
	else if(focIn==17)
		frmAni18.show();
	else if(focIn==18)
		frmAni19.show();
	else if(focIn==19)
		frmAni20.show();
	else if(focIn==20)
		frmAni21.show();
	else if(focIn==21)
		frmAniMoveInFromBottom.show();
	else if(focIn==22)
		frmAniMoveInFromTop.show();
	else		
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniAndSeg
*	Author  : Kony Solutions
*	Purpose : To navigate to the appropriate animated forms from 'frmAniAnd' .This function is meant for android platform.
******************************************************************/

function onClickOfFrmAniAndSeg(eventobj)
{
	var focIn = eventobj.selectedRowIndex[1];
	if(focIn==0)
		frmAni22.show();
	else if(focIn==1)
		frmAni23.show();
	else if(focIn==2)
		frmAni24.show();
	else if (focIn==3)
		frmAni25.show();
	else if(focIn==4) 
		frmAni26.show();
	else if(focIn==5)
		frmAni27.show();
	else if(focIn==6)
		frmAni28.show();
	else if(focIn==7)
		frmAni29.show();
	else if(focIn==8)
		frmAni30.show();
	else
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniSPASeg
*	Author  : Kony Solutions
*	Purpose : To navigate to the appropriate animated forms for SPA platform.
******************************************************************/

function onClickOfFrmAniSPASeg(eventobj)
{
	var focIn = eventobj.selectedRowIndex[1];
	if(focIn==0)
		frmAni32.show();
	else if(focIn==1)
		frmAni33.show();
	else if(focIn==2)
		frmAni34.show();
	else if (focIn==3)
		frmAni35.show();
	else
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniWin
*	Author  : Kony Solutions
*	Purpose : To navigate to the appropriate animated forms for windows platform.
******************************************************************/

function onClickOfFrmAniWin(eventobj)
{ 
    focIn = eventobj.selectedRowIndex[1];
    if(focIn==0)
		frmAniWin1.show();
	else if(focIn==1)
		frmAniWin2.show();
	else if(focIn==2)
		frmAniWin3.show();
	else if (focIn==3)
		frmAniWin4.show();
	else if(focIn==4) 
		frmAniWin5.show();
	else if(focIn==5)
		frmAniWin6.show();
	else
	   kony.print("no form shown");
}

/*****************************************************************
*	Name    : buttonBack
*	Author  : Kony Solutions
*	Purpose : To navigate back to the form which consists list of animations supported by the platform.
******************************************************************/

function buttonBack()
{
	frmAni.show();
}
