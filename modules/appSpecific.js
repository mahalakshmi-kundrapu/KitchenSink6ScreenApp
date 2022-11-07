/*****************************************************************
*	Name    : setBadge
*	Author  : Kony Solutions
*	Purpose : To set initial badge value as '0' for button widget 'btnBadge' and application icon.
******************************************************************/	

function setBadge(  )
{
	frmBadge.btnBadge.setBadge("0","");//Set badge value on  button widget
  	kony.application.setApplicationBadgeValue(""+0);
}

/*****************************************************************
*	Name    : BadgeIncrease
*	Author  : Kony Solutions
*	Purpose : To increase the badge value on button 'btnBadge' as well as application icon when ever user clicks the button 'btnBadge'.
******************************************************************/

function BadgeIncrease( )
{
	var counter = kony.os.toNumber(frmBadge.btnBadge.getBadge ()) + 1;// read badge value from button and increment it with 1 
	kony.print("this gets executed " + counter+ "type is "+typeof(counter));
	frmBadge.btnBadge.setBadge ("" + counter, "");// Set badge value on the button widget
	kony.application.setApplicationBadgeValue("" + counter);//Set badge value on app icon
}