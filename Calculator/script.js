var a = [],
  parsedValue;

$(document).ready(function() {

  var val = [];

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
    $("#dot").click(function() {
    storePoint('.');
  });

  //operation
  $("#add").click(function() {
    val.push(parsedValue);
    val.push("+");
    clearValue();
    console.log(val);
  });

  $("#subtract").click(function() {
    val.push(parsedValue);
    val.push("-");
    clearValue();
    console.log(val);
  })
  $("#multiply").click(function() {
    val.push(parsedValue);
    val.push("*");
    clearValue();
    console.log(val);
  })
  $("#divide").click(function() {
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
});

function calculate(val) {

  var calcValue;

  //if (val[val.length - 1] === NaN) 
  //  val.pop();
  //

  while (val.length != 1) {

    if (val[1] == "+") {
      calcValue = val[0] + val[2];
    } else if (val[1] == "-") {
      calcValue = val[0] - val[2];
    } else if (val[1] == "*") {
      calcValue = val[0] * val[2];
    } else if (val[1] == "/") {
      calcValue = val[0] / val[2];
    }

    val.shift();
    val.shift();
    val.unshift(calcValue);

  }

  return calcValue;

}

function storeValue(number) {
  a.push(number);
  parsedValue = parseFloat(a.join(''), 10);
  console.log(a);
  console.log(parsedValue);
  $("#result").text(parsedValue);
}

function storePoint(number) {
  a.push(number);
  console.log(a);
  $("#result").text(a.join(''));
}

function clearValue() {
  a = [];
  parsedValue = 0;
}