  $(document).ready(function() {

    var sum = 10 + 10;
    var val1 = [];
    var val2 = [];
    var myArray = [];
    //output the value
    //$("#result").html(sum);
    $("#1").click(function() {
      val1.push(1);
      $("#result").text(val1);
      console.log(val1);
    });
    $("#2").click(function() {
      val1.push(2);
      console.log(val1);
    });
    $("#3").click(function() {
      val1.push(3);
      console.log(val1);
    });
    $("#4").click(function() {
      val1.push(4);
      console.log(val1);
    });
    $("#5").click(function() {
      val1.push(5);
      console.log(val1);
    });
    $("#6").click(function() {
      val1.push(6);
      console.log(val1);
    });
    $("#7").click(function() {
      val1.push(7);
      console.log(val1);
    });
    $("#8").click(function() {
      val1.push(8);
      console.log(val1);
    });
    $("#9").click(function() {
      val1.push(9);
      console.log(val1);
    });
    $("#0").click(function() {
      val1.push(0);
      console.log(val1);
    });

    //operation
    $("#add").click(function() {
      //convert the array string to intiger
      val1 = parseInt(val1.join(''), 10);
      $("#result").text(add(val1, 2));
    });
    
    
    //clear val1 content
    $("#clear").click(function(){
      val1 = [];
      $("#result").text("0");
    });
  });

  function add(var1, var2) {
    return var1 + var2;
  }
