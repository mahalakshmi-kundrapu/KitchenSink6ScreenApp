
function home(){
	var segselectedRowIndex = frmHome.segHome.selectedRowIndex[1];
	switch(segselectedRowIndex)
	{
		
		case 0:			
			frmUICategory.show();
			break;		
		case 1:
			if(kony.os.deviceInfo().name == "blackberry" )
			{
				alert("Not available in blackberry");
			}
			else if(kony.os.deviceInfo().name == "WindowsPhone")
				frmAniWin.show();
			else if ( kony.os.deviceInfo().name == "android")
				frmAniAnd.show();
			else if (kony.os.deviceInfo().name == "thinclient")
				frmAniSPA.show();
			else if (kony.os.deviceInfo().name == "Windows 8")
				alert("Not Applicable for windows 8");
			else frmAni.show();		
			break;
		case 2:
			frmDvcFeatures.show();
			break;
		case 3:
			feedBack();
			break;
	}

}

function uICategory(){	
	var segselectedRowIndex = frmUICategory.uiCatSeg.selectedRowIndex[1];
	switch(segselectedRowIndex)
	{
		case 0:			
			frmContainerWidgets.show();
			break;		
		case 1:
			frmBasicWidgets.show();	
			break;
		case 2:
			frmAdvancedWidgets.show();
			break;
		case 3:
			if(kony.os.deviceInfo().name=="iPad")
			frmIpadSpecificFeatures.show();
			else
			alert("These features specific to IPad only")
			break;
	}
	
}
function container(){
	var segselectedRowIndex = frmContainerWidgets.uiSeg.selectedRowIndex[1];
	switch(segselectedRowIndex)
	{
		case 0:
			frmFormOptions.show();
			break;
		case 1:
			frmTabs.show();
			break;
		case 2:
        	frmScrollBoxMenu.show();
        	break;
// 		  if(kony.os.deviceInfo().name == "thinclient")
// 			{
// 				frmScrollSPA.show();
// 				break;
// 			}				
// 			else
// 			{
// 				frmScrollBoxMenu.show();
// 				break;
// 			}
	}
}
function frmOptions(){

	var segselectedRowIndex = frmFormOptions.frmOptSeg.selectedRowIndex[1];
	
	switch(segselectedRowIndex)
	{
		
		case 0:			
			frmForm.show();
			break;		
		case 1:
			frmImgBck.show();			
			break;
		case 2:
			frmHdrFooter.show();
			break;			
		case 3:			
			if(kony.os.deviceInfo().name == "thinclient")
			{
				alert("Not available in SPA");
				break;
			}
			else if(kony.os.deviceInfo().name == "WindowsPhone")
			{
				alert("Not available in Windows");
				break;
			}	
			else
			{
				frmTitlebar.show();
				break;
			}
			
		case 4:	
			
			if(flag == 0)
			{	
				flag = 1;
				if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad"  )
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
				else
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
					
				kony.timer.schedule("timer4", dismissLoadingScreen, 4,false);				
				break;
			}
			else
			{
				break;
			}
			
		case 5:
			if(flag1 == 0)
			{
				flag1 =1;
				if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad" )
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
				else
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
				kony.timer.schedule("timer5", dismissLoadingScreen1, 4,false);				
				break;
			}
			else
			{
				break;
			}
			
		case 6:
			frmGestures.show();
			break;		
		case 7:			
			frmComplex.show();		
			break;	
		case 8:
// 			frmPopup.show();
			break;
			
	}
}

/*****************************************************************
*	Name    : dismissLoadingScreen
*	Author  : Kony Solutions
*	Purpose : To dismiss the loading screen
******************************************************************/

function dismissLoadingScreen()

{
	kony.application.dismissLoadingScreen();
	kony.timer.cancel("timer4");
	flag =0;
	flag1 =0;
}

/*****************************************************************
*	Name    : dismissLoadingScreen1
*	Author  : Kony Solutions
*	Purpose : To dismiss the loading screen
******************************************************************/

function dismissLoadingScreen1()

{
	kony.application.dismissLoadingScreen();
	kony.timer.cancel("timer5");
	flag =0;
	flag1 =0;
}


/*****************************************************************
 *	Name    : onGestureFunction
 *	Author  : Kony Solutions
 *	Purpose : To give an alert as which gesture is performed on the form 'frmGestures'
 ******************************************************************/
function onGestureFunction(commonWidget, gestureInfo) // The callback function when the gesture event is triggered.
{
    frmGestures.imgGes.isVisible = true;
    try {
        var direction = "";
        var GesType = "" + gestureInfo.gestureType;
        var tapParams = gestureInfo.gesturesetUpParams.taps;
        if (GesType == "1") //Double tap gesture
        {
            if (kony.os.deviceInfo().name == "thinclient") frmGestures.lblGesture.text = "A Double tap gesture was performed.";
            else {
                frmGestures.lblresult.text = "A Double tap gesture was performed.";
                frmGestures.imgGes.src = "doubletap.png";
            }
        } else if (GesType == "2") //Swipe gesture
        {
            var swipeDirection = "" + gestureInfo.swipeDirection; //Read swipe direction
            if (swipeDirection == "1") {
                direction = "LEFT";
                frmGestures.imgGes.src = "arrowsleft.png";
            } else if (swipeDirection == "2") {
                direction = "RIGHT";
                frmGestures.imgGes.src = "arrowsright.png";
            } else if (swipeDirection == "3") {
                direction = "TOP";
                frmGestures.imgGes.src = "arrowstop.png";
            } else {
                direction = "BOTTOM";
                frmGestures.imgGes.src = "arrowsbottom.png";
            }

            if (kony.os.deviceInfo().name == "thinclient") frmGestures.lblGesture.text = "A swipe gesture was performed in the " + direction + " direction.";
            else
            frmGestures.lblresult.text = "A swipe gesture was performed in the " + direction + " direction.";
        } else if (GesType == "3") {
            if (kony.os.deviceInfo().name == "thinclient") frmGestures.lblGesture.text = "A longpress gesture was performed";
            frmGestures.lblresult.text = "A longpress gesture was performed";
            frmGestures.imgGes.src = "longpress.png";
        }
    } catch (err) {
        alert("error in gesture call back" + err);
    }
}

/*****************************************************************
 *	Name    : GenericGestureHandler
 *	Author  : Kony Solutions
 *	Purpose : To set gestures(Double tap,Swipe,Long press) to the form 'frmGestures'
 ******************************************************************/
function GenericGestureHandler() //This function registers the Gesture events for the widgets.
{
    try {
        frmGestures.setGestureRecognizer(1, {
            fingers: 1,
            taps: 2
        }, onGestureFunction); //double tap gesture
        frmGestures.setGestureRecognizer(2, {
            fingers: 1,
            swipedistance: 50,
            swipevelocity: 75
        }, onGestureFunction); // swipe with default parameters
        frmGestures.setGestureRecognizer(3, {
            pressDuration: 2
        }, onGestureFunction); //2 sec press duration
    } catch (err) {
        alert("error while regestering the gestures" + err)
    }
}
/*****************************************************************
 *	Name    : createAppMenu
 *	Author  : Kony Solutions
 *	Purpose : To create app menu programatically.
 ******************************************************************/
function createAppMenu() {
    contact = ["contactid", "Home", "home.png", appMenuCalBack];
    login = ["loginid", "login", "depo.png", appMenuCalBack];
    promt = ["promptid", "prompt", "pay.png", appMenuCalBack];
    loca = ["localid", "local", "order.png", appMenuCalBack];
    close = ["closeid", "close", "shutdown_button.png", appExitCallBack];
    appMenu = [contact, login, promt, loca, close];
    if (kony.os.deviceInfo().name == "thinclient") {
        kony.application.createAppMenu("ksaAppMenu", appMenu, "appMenuSPA", "");
    } else if (kony.os.deviceInfo().name == "iPad") {
        kony.application.createAppMenu("ksaAppMenu", appMenu, "AppMenuIpad", "");
    } else {
        kony.application.createAppMenu("ksaAppMenu", appMenu, "", "");
    }
    kony.application.setCurrentAppMenu("ksaAppMenu");
}

/*****************************************************************
 *	Name    : appMenuCalBack
 *	Author  : Kony Solutions
 *	Purpose : To go to home screen when ever user clicks appmenu items except he clicks on 'exit' appmenu item.
 ******************************************************************/
function appMenuCalBack() {
    var currentForm = kony.application.getCurrentForm();
    frmHome.show();
    if (currentForm.id != "frmHome") {
        currentForm.destroy();
    }
}

/*****************************************************************
 *	Name    : appExitCallBack
 *	Author  : Kony Solutions
 *	Purpose : To exit from the app when ever user clicks 'exit' appmenu item.
 ******************************************************************/
function appExitCallBack() {
    kony.application.exit();
}