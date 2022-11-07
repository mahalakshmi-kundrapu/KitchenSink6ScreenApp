
/*****************************************************************
*	Name    : Encrypt
*	Author  : Kony Solutions
*	Purpose : To encrypt the user text and display the encrypted text.
******************************************************************/

function Encrypt()
{
	try
	{
		var algo="aes";
		if(kony.os.deviceInfo().name == "blackberry")
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		else
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		if (frmCrypto.textEncrypt.text == "" || frmCrypto.textEncrypt.text ==null)
		{
			frmCrypto.lblEncrypt.text =  "Please enter the text to encrypt";
			return;
		}
		else
		{
			var inputstr=frmCrypto.textEncrypt.text;
		}
		
		var prptobj={padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};

		var myEncryptedTextRaw = kony.crypto.encrypt(algo,encryptDecryptKey,inputstr,prptobj);
		var myEncryptedText  = kony.convertToBase64(myEncryptedTextRaw);
		
		frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedText.toString();
		
		myClearText = kony.crypto.decrypt(algo,encryptDecryptKey,myEncryptedTextRaw,prptobj);
		
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackEncryptAes : "+err );
	}
}

/*****************************************************************
*	Name    : decrypt
*	Author  : Kony Solutions
*	Purpose : To decrypt the encrypted text and display the decrypted text.
******************************************************************/

function decrypt()
{
	try
	{
		if (frmCrypto.lblEncrypt.text == "" ||frmCrypto.lblEncrypt.text ==null || frmCrypto.lblEncrypt.text == "Please enter the text to encrypt")
		{
			frmCrypto.lblDecrypt.text ="Please enter the text to encrypt and then try decrypt."
			return;
		}
		frmCrypto.lblDecrypt.text ="Decrypted text = "+myClearText.toString();
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackDecryptAes : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD2
*	Author  : Kony Solutions
*	Purpose : To create hash value for the user text using "MD2" Algorithm.
******************************************************************/

function createHashMD2()
{
	try
    {
		var algo="md2";
		var inputstr=frmCrypto.txtMd2Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD2Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD2 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD4
*	Author  : Kony Solutions
*	Purpose : To create hash value for the user text using "MD4" Algorithm.
******************************************************************/

function createHashMD4()
{
	try
    {
		var algo="md4";
		var inputstr=frmCrypto.txtMD4Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD4Hash.text = myHashValue		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD4 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD5
*	Author  : Kony Solutions
*	Purpose : To create hash value for the user text using "MD5" Algorithm.
******************************************************************/

function createHashMD5()
{
	try
    {
		var algo="md5";
		var inputstr=frmCrypto.txtMD5Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD5Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD5 : "+err );
	}
}