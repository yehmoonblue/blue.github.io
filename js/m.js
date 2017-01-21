console.log(123)
$("selector").val();
$("body").on("click","#button", function(){
            if($("#one-checkbox").prop("checked")){
                        alert("你是"+$("#one-checkbox").val());
            }else{
                        alert("你不是"+$("#one-checkbox").val());
            }}
            );

