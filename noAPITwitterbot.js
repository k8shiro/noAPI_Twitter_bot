var userName = "****"
var userPassword = "****"


var now = new Date();

var year = now.getYear(); // �N
var month = now.getMonth() + 1; // ��
var day = now.getDate(); // ��
var hour = now.getHours(); // ��
var min = now.getMinutes(); // ��
var sec = now.getSeconds(); // �b

// Tweet�̓��e
var tweetText = '���͂悤�������܂�' + year + '�N' + month + '��' + day + '��' + hour + '��' + min + '��' + sec + '�b</strong>' + '�ł�';


//  Internet Explorer�I�u�W�F�N�g���擾(Internet Explorer�̋N��)
var ieApp = new ActiveXObject( "InternetExplorer.Application" );

//  Internet Explorer�A�v���P�[�V������\��
ieApp.Visible = true;


//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( ieApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );


//�@�T�C�g�Ɉړ�
ieApp.Navigate( "https://twitter.com/?lang=ja" );

//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( ieApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

// ���O�C��
var userNameTextBox = ieApp.document.getElementsByName( "session[username_or_email]" ).item(0) ;
var userPasswordTextBox = ieApp.document.getElementsByName( "session[password]" ).item(0) ;
var loginButton = ieApp.document.getElementsByClassName("js-submit").item(0) ;

if(userNameTextBox !== null){

	userNameTextBox.value = userName;
	userPasswordTextBox.value = userPassword;
	WScript.Sleep( 500 );

	var submitEvent = ieApp.document.createEvent("HTMLEvents");
	submitEvent.initEvent("submit", true, true);
	loginButton.dispatchEvent(submitEvent);
	loginButton.click();

	//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
	while( ieApp.Busy )
	    WScript.Sleep( 500 ); 
	WScript.Sleep( 3000 );
}

// Tweet����
var tweetAreaButton = ieApp.document.getElementById("global-new-tweet-button");
tweetAreaButton.click();
WScript.Sleep( 500 );
var tweetTextBox = ieApp.document.getElementById("tweet-box-global").children.item(0);
tweetTextBox.innerHTML =
WScript.Sleep( 3000 );
var tweetButton = ieApp.document.getElementsByClassName("btn primary-btn tweet-action tweet-btn js-tweet-btn").item(1) ;
tweetButton.click();

while( ieApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

//���O�A�E�g
var userDropdown = ieApp.document.getElementById("user-dropdown-toggle");
userDropdown.click();
WScript.Sleep( 3000 );
var logoutButton = ieApp.document.getElementById("signout-form");//.children.item(1);
//logoutButton.dispatchEvent(submitEvent);
logoutButton.click();






