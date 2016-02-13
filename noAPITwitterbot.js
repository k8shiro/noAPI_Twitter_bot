var userName = "****"
var userPassword = "****"


var now = new Date();

var year = now.getYear(); // 年
var month = now.getMonth() + 1; // 月
var day = now.getDate(); // 日
var hour = now.getHours(); // 時
var min = now.getMinutes(); // 分
var sec = now.getSeconds(); // 秒

// Tweetの内容
var tweetText = 'おはようございます' + year + '年' + month + '月' + day + '日' + hour + '時' + min + '分' + sec + '秒</strong>' + 'です';


//  Internet Explorerオブジェクトを取得(Internet Explorerの起動)
var ieApp = new ActiveXObject( "InternetExplorer.Application" );

//  Internet Explorerアプリケーションを表示
ieApp.Visible = true;


//  ページの読み込みが終わるまで処理を止める　その後3秒停止
while( ieApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );


//　サイトに移動
ieApp.Navigate( "https://twitter.com/?lang=ja" );

//  ページの読み込みが終わるまで処理を止める　その後3秒停止
while( ieApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

// ログイン
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

	//  ページの読み込みが終わるまで処理を止める　その後3秒停止
	while( ieApp.Busy )
	    WScript.Sleep( 500 ); 
	WScript.Sleep( 3000 );
}

// Tweetする
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

//ログアウト
var userDropdown = ieApp.document.getElementById("user-dropdown-toggle");
userDropdown.click();
WScript.Sleep( 3000 );
var logoutButton = ieApp.document.getElementById("signout-form");//.children.item(1);
//logoutButton.dispatchEvent(submitEvent);
logoutButton.click();






