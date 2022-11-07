
/*****************************************************************
*	Name    : onCapture
*	Author  : Kony Solutions
*	Purpose : To capture an image and assign the captured image to image widget.
******************************************************************/

function onCapture(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom:true,separatorHeight:30});
	frmCameraBasic.imageCamBasic.rawBytes=cameraObj.rawBytes;
	frmCameraBasic.lblCamBasic.text ="The image which is captured is shown below"	
	kony.application.dismissLoadingScreen();	
}

/*****************************************************************
*	Name    : onCaptureFrmOverLay
*	Author  : Kony Solutions
*	Purpose : To capture an image by overlaying a form on top of the camera and assign the captured image to image widget.
******************************************************************/

function onCaptureFrmOverLay(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	frmCameraFrmOverlay.imageFrmCamFrmOverRef.rawBytes=cameraObj.rawBytes;
	frmCameraFrmOverlay.lblFrmCamOverlay.text = "Third image from left is the captured image";
	if (kony.os.deviceInfo().name != "android")
		frmCameraFrmOverlay.show();
	kony.application.dismissLoadingScreen();
}

/*****************************************************************
*	Name    : onCapturePublic
*	Author  : Kony Solutions
*	Purpose : To capture an image in 'PUBLIC' access mode and assign the captured image to image widget.
******************************************************************/

function onCapturePublic(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	frmCamAcsModes.img1CamAcc.rawBytes = cameraObj.rawBytes;
	frmCamAcsModes.lblFrmCamAccessModes.text = "First image from left is the captured image in public mode. You can see the image in image Gallery of the camera as well.To observe this ,Hide the application and open camera and go to image gallery."
	kony.application.dismissLoadingScreen();
}

/*****************************************************************
*	Name    : onCapturePrivate
*	Author  : Kony Solutions
*	Purpose : To capture an image in 'PRIVATE' access mode and assign the captured image to image widget.
******************************************************************/

function onCapturePrivate(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	frmCamAcsModes.img2CamAcc.rawBytes = cameraObj.rawBytes;
	if (kony.os.deviceInfo().name != "iPhone")
		frmCamAcsModes.lblFrmCamAccessModes.text = "Second image from left is the captured image in private mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
	else
		frmCamAcsModes.lblFrmCamAccessModes.text = "First image from left is the captured image in private mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
			
	kony.application.dismissLoadingScreen();

}

/*****************************************************************
*	Name    : onCaptureinMemory
*	Author  : Kony Solutions
*	Purpose : To capture an image in 'INMEMORY' access mode and assign the captured image to image widget.
******************************************************************/

function onCaptureinMemory(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	frmCamAcsModes.img3CamAcc.rawBytes = cameraObj.rawBytes;
	if (kony.os.deviceInfo().name != "iPhone")
		frmCamAcsModes.lblFrmCamAccessModes.text = "Third image from left is the captured image in inMemory mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
	else
		frmCamAcsModes.lblFrmCamAccessModes.text = "Second image from left is the captured image in inMemory mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
	kony.application.dismissLoadingScreen();
	
}

/*****************************************************************
*	Name    : onCapturePortrait
*	Author  : Kony Solutions
*	Purpose : To capture an image in 'PORTRAIT' orientation mode and assign the captured image to image widget.
******************************************************************/

function onCapturePortrait(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	frmCamOrient.imgCamPortrait.rawBytes = cameraObj.rawBytes;
	frmCamOrient.lblFrmCamOrient.text = "First image from left is the captured image in portrait orientation mode"
	kony.application.dismissLoadingScreen();
	
}

/*****************************************************************
*	Name    : onCaptureLandScape
*	Author  : Kony Solutions
*	Purpose : To capture an image in 'LANDSCAPE' orientation mode and assign the captured image to image widget.
******************************************************************/

function onCaptureLandScape(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	frmCamOrient.imgCamLand.rawBytes = cameraObj.rawBytes;
	frmCamOrient.lblFrmCamOrient.text = "Second image from left is the captured image in Landscape orientation mode"
	kony.application.dismissLoadingScreen();
}

