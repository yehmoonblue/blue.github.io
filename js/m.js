console.log(123)
$("#selectList").val();
$("#selectList :selected").text();
$("#test1").change(function(){
  $("#test2").addOption($(this).val(), $('#test1 :selected').text());  
});
