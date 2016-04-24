$(document).on('ready', function(){
  console.log("hi this is a test");

  var range1_selection = $("#range1");
  var range2_selection = $("#range2");
  var range3_selection = $("#range3");
  var range4_selection = $("#range4");

  range1_selection.on("change", slideListener);
  range2_selection.on("change", slideListener);
  range3_selection.on("change", slideListener);
  range4_selection.on("change", slideListener);

})


var slideListener = function(event){
  var new_value = (this.value);
  console.log(this.id)
  var output_selection= $("span#" + this.id);
  console.log("this is the output")
  console.log(output_selection);
  console.log(output_selection[0].innerHTML);
  output_selection[0].innerHTML = new_value +"%";


}