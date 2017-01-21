console.log(123)
$("selector").val();
function check(){
            var talk=true;
            var name = $("input#name").val();
            var age = $("input#age").val();
            if(talk){
            alert("Hi!,"+name+",你今年是"+age+"歲。")}
            
            }
$("input#name").val("");
$("input#age").val("");


$("body").on("click","#button", function(){
        if( $("#one-checkbox").prop("checked") ){ // 回傳布林值
            alert( "你是"+$("#one-checkbox").val() );
        } else {
            alert( "你不是"+$("#one-checkbox").val() );
        }
    });
