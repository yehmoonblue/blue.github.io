console.log(123)
$("selector").val();
function check(){
            var talk=true;
            var name = $("input#name").val();
            var age = $("input#age").val();
            if(talk){
                        alert("Hi!,"+$("input#name").val("")+",你今年是"+$("input#age").val("")+"歲。")
            };
            $("body").on("click","#button", function(){
            if( $("#one-checkbox").prop("checked") ){
                        alert( "你是"+$("#one-checkbox").val());
            } else {
                        alert( "你不是"+$("#one-checkbox").val() );
            }
});

