var a = [],
  parsedValue;

$(document).ready(function() {

  var val = [];
  //var firstVal = [];
  //var secondVal = [];
  //var myArray = [];
  //output the value
  //$("#result").html(sum);
  $("#1").click(function() {
    storeValue(1);
  });
  $("#2").click(function() {
    storeValue(2);
  });
  $("#3").click(function() {
    storeValue(3);
  });
  $("#4").click(function() {
    storeValue(4);
  });
  $("#5").click(function() {
    storeValue(5);
  });
  $("#6").click(function() {
    storeValue(6);
  });
  $("#7").click(function() {
    storeValue(7);
  });
  $("#8").click(function() {
    storeValue(8);
  });
  $("#9").click(function() {
    storeValue(9);
  });
  $("#0").click(function() {
    storeValue(0);
  });

  //operation
  $("#add").click(function() {
    //convert the array string to integer
    //val1 = parseInt(val1.join(''), 10);
    val.push(parsedValue);
    val.push("+");
    clearValue();
    console.log(val);
  });

  $("#subtract").click(function() {
    //convert the array string to integer
    //val1 = parseInt(val1.join(''), 10);
    val.push(parsedValue);
    val.push("-");
    clearValue();
    console.log(val);
  })
  $("#multiply").click(function() {
    //convert the array string to integer
    //val1 = parseInt(val1.join(''), 10);
    val.push(parsedValue);
    val.push("*");
    clearValue();
    console.log(val);
  })
  $("#divide").click(function() {
    //convert the array string to integer
    //val1 = parseInt(val1.join(''), 10);
    val.push(parsedValue);
    val.push("/");
    clearValue();
    console.log(val);
  })

  //calculate values
  $("#equal").click(function() {
    val.push(parsedValue);
    console.log(val);
    $("#result").text(calculate(val));
  });

  //clear val content
  $("#clear").click(function() {
    a = [];
    parsedValue = 0;
    val = [];
    $("#result").text("0");
  });

  //equals
});

function calculate(val) {
  if (val[1] == "+") {
    return val[0] + val[2];
  } else if (val[1] == "-") {
    return val[0] - val[2];
  } else if (val[1] == "*") {
    return val[0] * val[2];
  } else if (val[1] == "/") {
    return val[0] / val[2];
  }
}

function storeValue(number) {
  a.push(number);
  parsedValue = parseInt(a.join(''), 10);
  console.log(a);
  $("#result").text(parsedValue);
}

function clearValue() {
  a = [];
  parsedValue = 0;
}