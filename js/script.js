$(function(){

	// jQueryを利用してロード時にfadeTitl関数が呼ばれるようにします。
	$(window).on("load" , fadeTitle);

	// jQueryを利用して動かす対象のタイトルを取得します
	var $fadeTitle = $(".fade-title") ,
		$fadeSpans = null;

	// アニメーションの秒数を定義しておきます。
	var TEXT_DELAY_TIME = 100 ,   // 1文字ずつの時間差をつける時間(ミリ秒)
		TEXT_ANIMATION_TIME = 100;// 1文字ずつのテキストを表示しきるまでの時間(ミリ秒)

	// html関数を利用して、htmlの中身を書き換えています
	// text関数で.fade-title要素の中身を取得して、replaceと正規表現を利用してspanで囲みます
	$fadeTitle.html($fadeTitle.text().replace(/(\S)/g, '<span>$1</span>'));

	// spanで囲んだ後、fadeTitle内のspanを取得します。
	$fadeSpans = $fadeTitle.find("span");

	// ロードの前に対象のspanを透明にしておきます
	$fadeSpans.css("opacity" , 0);

	function fadeTitle(){
		// eachを利用してspanの数分処理を行います
		$fadeSpans.each(function(idx){
			// jQueryのeachが引数idxに何番目かの情報を格納してくれています。
			// delay関数を使用することにより、時間さを付けています(何番目×ミリ秒)
			// animate関数で透明な要素を100ミリ秒かけて表示させます
			$(this).delay(idx * TEXT_DELAY_TIME).animate({opacity:1} , TEXT_ANIMATION_TIME);
		});
	}
});