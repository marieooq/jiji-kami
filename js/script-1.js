
var h = function(){
   $(".fade-title").hide();
};

var appear = function(){
     $('head').append(
                    '<style type="text/css">#cover { display: block; }</style>'
                );
                $(window).load(function() { // すべての要素が読み込まれたタイミングで
                    $('#cover').fadeOut("slow"); // #cover要素をゆっくりと非表示にする
                    $('#title').fadeIn(3000);
                });
};

//var titleMove = function(){
//    $(".fade-title").fadeIn(3000);
//};
//
//var first = function(callback){
//    appear();
//    callback();
//};
//
//first(titleMove);

appear();
h();


//console.error('エラー');
