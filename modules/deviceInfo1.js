
/*****************************************************************
*	Name    : deviceInfo
*	Author  : Kony Solutions
*	Purpose : To display the device information on the form.
******************************************************************/

function deviceInfoFunction()
{
      var deviceInfo = kony.os.deviceInfo();
      var details = new Array();
      for(var key in deviceInfo)
      {
            var detail=new Object();
            if (key=="hastouchsupport" || key=="hasorientationsupport" || key=="hasgps" || key=="hasaccelerometer"|| key=="hasCamera" || key=="hascamera" ||key=="deviceWidth" ||key=="deviceHeight" )
            	continue;
            else if ((key=="model" || key=="deviceid")&&(kony.os.deviceInfo().name == "thinclient"))
            {
            		
            }
            else
                detail.lblKey=""+key;
            
            detail.lblVal=""+deviceInfo[key];
            details.push(detail);
      }
      
	  if (kony.os.deviceInfo().name != "thinclient" && kony.os.deviceInfo().name != "WindowsPhone" && kony.os.deviceInfo().name != "Windows 8" )
      {
      	details.push({lblKey:"deviceWidth",lblVal:""+kony.os.deviceInfo().deviceWidth});
      	details.push({lblKey:"deviceHeight",lblVal:""+kony.os.deviceInfo().deviceHeight});
      }
      if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_PORTRAIT)
            details.push({lblKey:"orientation",lblVal:"Portrait"});
      else if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_LANDSCAPE)
            details.push({lblKey:"orientation",lblVal:"Landscape"});
      details.push({lblKey:"freeMemory",lblVal:""+kony.os.freeMemory()});
      details.push({lblKey:"userAgent",lblVal:""+kony.os.userAgent()});
      details.push({lblKey:"accelerometerSupport",lblVal:""+kony.os.hasAccelerometerSupport()});
      details.push({lblKey:"GPSSupport",lblVal:""+kony.os.hasGPSSupport()});
      details.push({lblKey:"orientationSupport",lblVal:""+kony.os.hasOrientationSupport()});
      details.push({lblKey:"cameraSupport",lblVal:""+kony.os.hasCameraSupport()});
      details.push({lblKey:"touchSupport",lblVal:""+kony.os.hasTouchSupport()});
      
      frmDeviceInfo.segDeviceInfo.setData(details);
}

