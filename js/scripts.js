    function triangle() {
        var side1 = parseInt(document.getElementById("sideA").value);
        var side2 = parseInt(document.getElementById("sideB").value);
        var side3 = parseInt(document.getElementById("sideC").value);
        var text;
        var sides = [side1, side2, side3];
        if (side1 <= 0 || side2 <= 0 || side3 <=0){
            text = "Use positive integers";
        }
        else if ( side1  === side2 && side2 === side3 && side1 === side3){
            text =" Equilateral Triangle";
        }
        else if ( side1 === side2 || side2 === side3 || side1 === side3){
            text = "Isosceles Triangle";
        }
        else if ( (side1 + side2 <= side3 && side2 + side1 <= side3) || 
                  (side2 + side3 <= side1 && side3 + side2 <= side1) ||
                  (side1 + side3 <= side2 && side3 + side1 <= side2) ){
                      text = "No Triangle";
        }
        else if ( side1 !== side2 || side2 !== side3 || side3 !== side1){
            text = "Scalene Triangle"
        }
        else { 
           text =  "error";
        }
        document.getElementById("output").innerHTML = text;
    }    