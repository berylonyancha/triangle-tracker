function myFunction() {



  var sidea=parseInt(document.getElementById("sideA").value);
  var sideb=parseInt(document.getElementById("sideB").value);
  var sidec=parseInt(document.getElementById("sideC").value);

  var sides=[sidea,sideb,sidec];
  var type=["equilateral triangle","isosceles triangle","scalene triangle","not a triangle"]
}

var sides = [];
sides.push(sidea);
sides.push(sideb);
sides.push(sidec);

// if (side[0]<0 || side[1]<0 || side[2]<0){
//   var output1=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[3];
//   document.getElementById("triangleTracker").innerHTML=output1;
// }

if (
        sidea + sideb > sidec &&
        sideb + sidec > sidea &&
        sidea + sidec> sideb &&
        (sidea === sideb && sideb === sidec);
    ) {

        document.getElementById("output").innerHTML =
        "Equilateral Triangle";
    } else if (
        sidea + sideb > sidec &&
        sidea + sidec > sideb &&
        sideb + sidec > sidea &&

        ((sidea === sideb && sideb !== sidec) ||
        (sidea === sidec && sidec !== sideb) ||
        (sideb === sidec && sideb !== sidea))
    ) {
        document.getElementById("output").innerHTML =
        "Isosceles Triangle";



    } else if (
        sidea + sideb > sidec &&
        sidea + sidec > sideb &&
        sideb + sidec > sidea &&
        (sidea !== sideb && sideb !== sidec &&
        sidea !== sidec)
        document.getElementById("output").innerHTML =
        "Scalene Triangle";
