

/*****************************************************************
*	Name    : segwidMultiTemplate
*	Author  : Kony Solutions
*	Purpose : To add multiple row templates to the segment.Segment is created without any section header templates.
******************************************************************/
	
function segwidMultiTemplate()
{
	frmRowTemplates.segMultiTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"};
	frmRowTemplates.segMultiTemp.data = [
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400",template:flexVolet}, 
					{lbl1: "Gold Card",lbl2: "$200",lbl3: "$400",template:flexyelow}, 
					{lbl1: "Silver Card",lbl2: "$200",lbl3: "$400",template:flexblue}
				 ];	
}

/*****************************************************************
*	Name    : segWidoutRowtmplateJS
*	Author  : Kony Solutions
*	Purpose : To create a segment without row templates and  without section header templates.
******************************************************************/
	
function segWidoutRowtmplateJS()
{
	frmRowTemplates.segWidoutRowtmplate.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"};
	frmRowTemplates.segWidoutRowtmplate.setData([
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400"}, 
					{lbl1: "Gold Card",lbl2: "$300",lbl3: "$100"}, 
					{lbl1: "Silver Card",lbl2: "$500",lbl3: "$600"}
				 ]);
	var selectedInx = frmRowTemplates.segWidoutRowtmplate.selectedRowIndex;	 	
}

/*****************************************************************
*	Name    : SecHdrWidoutTemplatesJS
*	Author  : Kony Solutions
*	Purpose : To add different section header templates to the segment.Segment is created without any row templates.
******************************************************************/
	
function SecHdrWidoutTemplatesJS(evenObj)
{
	kony.print("Event obj is "+evenObj)
	kony.print("Event obj id is "+evenObj.id)
	if (evenObj["id"] == "btnSegMulSel")
	{
		kony.print("Entered 1 ")
		frmSecHdrWidoutTemplates.lblSegMulSelect.setVisibility(true);		
		frmSecHdrWidoutTemplates.btnSegMulSelect.setVisibility(true);
	}
	else
	{
		kony.print("Entered 2 ")
		frmSecHdrWidoutTemplates.lblSegMulSelect.setVisibility(false);		
		frmSecHdrWidoutTemplates.btnSegMulSelect.setVisibility(false);
	}
	frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.widgetDataMap = {lblSecHdr1:"lblSecHdr1",lblSecHdr2:"lblSecHdr2",BAccName:"BAccName",WithdrawLimit:"WithdrawLimit",CreditLimit:"CreditLimit",imgChk:"imgChk"};
	
	frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.data = [
							[ {lblSecHdr1:"Credit account details",lblSecHdr2:" Account No: xxxxxx0660",template:boxRefSegHdr},					
							    [
								   	{BAccName: "Titanium card",WithdrawLimit: "$200",CreditLimit: "$400",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Gold card",WithdrawLimit: "$500",CreditLimit: "$800",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Silver card",WithdrawLimit: "$700",CreditLimit: "$200",imgChk:"checkboxwhite.png"}
								]
							],
							
							[ {lblSecHdr1:"Savings account details",lblSecHdr2:" Account No: xxxxxx5221",template:boxRefSegHdr1},								
								[
									{BAccName:"Savings 1", WithdrawLimit: "$300",CreditLimit:"N/A",imgChk:"checkboxwhite.png"},
			 					 	{BAccName: "Savings 2", WithdrawLimit: "$400",CreditLimit: "N/A",imgChk:"checkboxwhite.png"}
								 ]
							],
							[ {lblSecHdr1:"Checking account details",lblSecHdr2:" Account No: xxxxxx7657",template:boxRefSegHdr2},
								[
									{BAccName: "Checking 1",WithdrawLimit: "N/A",CreditLimit: "$400",imgChk:"checkboxwhite.png"},
								 	{BAccName: "Checking 2",WithdrawLimit: "N/A",CreditLimit: "$800",imgChk:"checkboxwhite.png"}
			 					]
							]	
						];
	frmSecHdrWidoutTemplates.show();
}
	
/*****************************************************************
*	Name    : androidSegmentSecDock
*	Author  : Kony Solutions
*	Purpose : To achieve the docking behaviour in android platform by creating the segment without any templates.
******************************************************************/

function androidSegmentSecDock()
{
	
	frmSegSections.segment2117989725237554.data=[
								[ "Credit account details",					
								    [
									   	{lblSegSec1: "Titanium Card",lblSegSec2: "$200",lblSegSec3: "$400"}, 
										{lblSegSec1: "Gold card",lblSegSec2: "$500",lblSegSec3: "$800"}, 
										{lblSegSec1: "Silver card",lblSegSec2: "$700",lblSegSec3: "$200"},
										{lblSegSec1: "Silver card",lblSegSec2: "$700",lblSegSec3: "$200"}
									]
								],
								
								[ "Savings account details",								
									[
										{lblSegSec1:"Savings 1", lblSegSec2: "$300",lblSegSec3:"N/A"},
				 					 	{lblSegSec1: "Savings 2", lblSegSec2: "$400",lblSegSec3: "N/A"},
										{lblSegSec1:"Savings 1", lblSegSec2: "$300",lblSegSec3:"N/A"},
				 					 	{lblSegSec1: "Savings 2", lblSegSec2: "$400",lblSegSec3: "N/A"}
									 ]
								],
								[ "Checking account details",
									[
										{lblSegSec1: "Checking 1",lblSegSec2: "N/A",lblSegSec3: "$400"},
									 	{lblSegSec1: "Checking 2",lblSegSec2: "N/A",lblSegSec3: "$800"},
										{lblSegSec1:"Savings 1", lblSegSec2: "$300",lblSegSec3:"N/A"},
				 					 	{lblSegSec1: "Savings 2", lblSegSec2: "$400",lblSegSec3: "N/A"}
				 					]
								]	
							];
							
}

/*****************************************************************
*	Name    : segwidDictionary
*	Author  : Kony Solutions
*	Purpose : To create a segment which is dictionary enabled.
******************************************************************/

function segwidDictionary(  )
{
	var segdata = [ [ "  A", [ { cname : "Afghanistan" } , { cname : "Akrotiri" } , { cname : "Albania" }  ] ],
	[ "  B", [ { cname : "Bahamas, The" } , { cname : "Bahrain " } , { cname : "Bangladesh " }  ] ],
	[ "  C", [ { cname : "Cambodia" } , { cname : "Cameroon " } , { cname : "Canada " }  ] ],
	[ "  D", [ { cname : "Denmark" } , { cname : "Dhekelia" } , { cname : "Djibouti" }  ] ],
	[ "  E", [ { cname : "Ecuador " } , { cname : "Egypt" } , { cname : "El Salvador " }  ] ],
	[ "  F", [ { cname : "Faroe Islands " } , { cname : "Fiji" } , { cname : "Finland " }  ] ],
	[ "  G", [ { cname : "Gabon" } , { cname : "Gambia, The" } , { cname : "Gaza Strip" }  ] ],
	[ "  H", [ { cname : "Haiti" } , { cname : "Honduras" } , { cname : "Hong Kong" }  ] ],
	[ "  I", [ { cname : "Iceland " } , { cname : "India" } , { cname : "Indonesia " }  ] ],
	[ "  J", [ { cname : "Jamaica" } , { cname : "Jan Mayen" } , { cname : "Japan" }  ] ],
	[ "  K", [ { cname : "Kazakhstan" } , { cname : "Kenya" } , { cname : "Kiribati" }  ] ],
	[ "  L", [ { cname : "Laos" } , { cname : "Latvia " } , { cname : "Lebanon" }  ] ],
	[ "  M", [ { cname : "Macau" } , { cname : "Macedonia " } , { cname : "Madagascar" }  ] ],
	[ "  N", [ { cname : "Namibia " } , { cname : "Nauru" } , { cname : "Navassa Island " }  ] ],
	[ "  O", [ { cname : "Oman " }  ] ],
	[ "  P", [ { cname : "Pakistan" } , { cname : "Palau" } , { cname : "Panama" }  ] ],
	[ "  Q", [ { cname : "Qatar" }  ] ],
	[ "  R", [ { cname : "Reunion " } , { cname : "Romania " }  ] ],
	[ "  S", [ { cname : "Saint Helena " } , { cname : "Saint Lucia" } , { cname : "Samoa" }  ] ],
	[ "  T", [ { cname : "Taiwan" } , { cname : "Tajikistan " }  ] ],
	[ "  U", [ { cname : "Uganda " } , { cname : "Ukraine" }  ] ],
	[ "  V", [ { cname : "Vanuatu " } , { cname : "Venezuela" }  ] ],
	[ "  W", [ { cname : "Wake Island " } , { cname : "Wallis and Futuna" }  ] ],
	[ "  Y", [ { cname : "Yemen " }  ] ],
	[ "  Z", [ { cname : "Zambia " } , { cname : "Zimbabwe" }  ] ] ];
	frmDictView.segStates.setDataWithSections (segdata);
}

/*****************************************************************
*	Name    : searchBy
*	Author  : Kony Solutions
*	Purpose : To show the form's segment which is 'searchby' enabled and user can search by any of its widget's text.In the below case user need to search by name of the airlines.
******************************************************************/

function searchBy()
{
		frmSeg1.show();
}

/*****************************************************************
*	Name    : multiSelect
*	Author  : Kony Solutions
*	Purpose : To show the selected data from the segment 'frmSecHdrWidoutTemplates'
******************************************************************/

function multiSelect()
{
	var selectedItems  =  frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.selectedItems;
	var arr = new Array();
	if (selectedItems == null || selectedItems == "")
	{
		alert("No item is selected. Please select atleast one item from the above segment");
		return;
	}
	for (var  i = 0; i< selectedItems.length ;i++)
	{
		arr.push({lblMulSel1:selectedItems[i]["BAccName"],lblMulSel2:selectedItems[i]["WithdrawLimit"],lblMulSel3:selectedItems[i]["CreditLimit"]})
	}
	frmSegMulSelectData.segment21927389591153585.setData(arr);
	frmSegMulSelectData.show();
}

function onEditing (seguiWidget, editmode, sectionIndex, rowIndex)
{
	seguiWidget.removeAt(rowIndex,sectionIndex);
}
function onEditingIconStyle(seguiWidget, editmode, sectionIndex, rowIndex)
{
	if (editmode == 2)	
		seguiWidget.removeAt(rowIndex,sectionIndex);		
	else
	{
		i++;
		var data = { cname : "Inserted contact"+i,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }
		seguiWidget.addDataAt(data, rowIndex, sectionIndex);
	}
}

function dataForSeg(eventObj)
{
	var segdata = [ [ "  A", [ { cname : "Afghanistan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Akrotiri" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Albania" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  B", [ { cname : "Bahamas, The",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Bahrain ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Bangladesh ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  C", [ { cname : "Cambodia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Cameroon ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Canada ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  D", [ { cname : "Denmark",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Dhekelia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Djibouti",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  E", [ { cname : "Ecuador ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Egypt",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "El Salvador ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  F", [ { cname : "Faroe Islands ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Fiji",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Finland ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  G", [ { cname : "Gabon",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Gambia, The",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Gaza Strip",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  H", [ { cname : "Haiti",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Honduras",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Hong Kong",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  I", [ { cname : "Iceland ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "India",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Indonesia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  J", [ { cname : "Jamaica",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Jan Mayen",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Japan" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  K", [ { cname : "Kazakhstan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Kenya" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Kiribati",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  L", [ { cname : "Laos" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Latvia " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Lebanon",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  M", [ { cname : "Macau",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Macedonia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Madagascar",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  N", [ { cname : "Namibia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Nauru" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Navassa Island ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  O", [ { cname : "Oman ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  P", [ { cname : "Pakistan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Palau" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Panama" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Q", [ { cname : "Qatar" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  R", [ { cname : "Reunion ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Romania " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  S", [ { cname : "Saint Helena ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Saint Lucia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Samoa",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  T", [ { cname : "Taiwan" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Tajikistan ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  U", [ { cname : "Uganda ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Ukraine",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  V", [ { cname : "Vanuatu " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Venezuela",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  W", [ { cname : "Wake Island " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Wallis and Futuna" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Y", [ { cname : "Yemen " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Z", [ { cname : "Zambia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Zimbabwe",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ] ];
	
	eventObj.segStates.setDataWithSections(segdata);
}


function editOrDone(eventObj)
{
	if (eventObj.text == "Edit")
	{
		frmIconEditStyle.segStates.editStyle = constants.SEGUI_EDITING_STYLE_ICON;
		eventObj.text = "Done";
	}
	else
	{
		frmIconEditStyle.segStates.editStyle = constants.SEGUI_EDITING_STYLE_NONE;
		eventObj.text = "Edit";
	}
	
}


function dismiLoadScrnRefresh()
{
	kony.application.dismissLoadingScreen();
	kony.timer.cancel("newTimer");
}

function refresh(seguiWidget)
{
	if (j == 24)
		j = 0;
	var data = { cname : "Inserted contact"+j  }
	if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad" )
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);

	kony.timer.schedule("newTimer", dismiLoadScrnRefresh,2,false);
	frmPushPull.segStates.addDataAt(data, 0, j);
	
	
	j++;
}



function callService()
{
	hbxHeadSearchORE.tbxSearchORE.text="";

	serviceData = new Array();
	frmSegOnReachEnd.segRecords.removeAll();
	countORE = 0;
	for(var i=0;i<100;i++)
	{
		serviceData.push({"lbl1":"Ambs, Yvonne"+i,"lbl2":"NiederLassung","lbl3":"000PI00299","lbl4":"HeinrichVon","lbl5":"79100 Frieberg"});
		serviceData.push({"lbl1":"Bmbs, Yvonne"+i,"lbl2":"NiederLassung","lbl3":"000PI00299","lbl4":"HeinrichVon","lbl5":"79100 Frieberg"});
	}
}


function scrollEnd()
{
	if(hbxHeadSearchORE.tbxSearchORE.text=="")
	{
		var displayData =serviceData;
	}
	else
	{
		var displayData = searchData;
	}
	
	if(countORE < displayData.length)
	{
		var max = 0;
		if(countORE+20 < displayData.length)
		{
			max = countORE+20;
		}
		else
		{
			max = displayData.length;
		}
		var currentData = new Array();
		for(var i=countORE; i<max; i++)
		{
			 currentData.push(displayData[i]);
		}
		if(countORE>0)
			frmSegOnReachEnd.segRecords.removeAt(countORE, 0);
		frmSegOnReachEnd.segRecords.addAll(currentData);
		if(max!=displayData.length)
			frmSegOnReachEnd.segRecords.addDataAt({"lblLoadingORE" :"Loading...",template:hbxLoadORE}, max, 0)
		countORE = max;
	}
}


function displaySearch()
{
	searchData = new Array();
	var searchText = hbxHeadSearchORE.tbxSearchORE.text
	countORE=0;
	for(var i=0; i<serviceData.length; i++)
	{
		kony.print(i+"countORE : "+countORE);
		if(serviceData[i]["lbl1"].substring(0, searchText.length)==searchText)
		{
			searchData.push(serviceData[i]);
		}
	}
	frmSegOnReachEnd.segRecords.removeAll();
	scrollEnd();
}


function beginEdit()
{
	countORE=0;
}

