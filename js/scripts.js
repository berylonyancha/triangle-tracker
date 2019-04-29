var myFunction = function(sidea, sideb, sidec) {



  var sidea = parseInt(document.getElementById("sidea").value);
  var sideb = arseInt(document.getElementById("sideb").value);
  var sidec = parseInt(document.getElementById("sidec").value);

  var sides = [sidea,sideb,sidec];
  var output = document.getElementById("output");
 


    if(sidea === sideb && sideb === sidec) {
    

        output.textcontent = "Equilateral Triangle";
    } else if (
        sidea === sideb && sideb !== sidec ||
        sidea === sidec && sidec !== sideb ||
        sideb === sidec && sideb !== sidea)  {
    
        output.textcontent =
        "Isosceles Triangle";



    } else if (
        // sidea + sideb > sidec &&
        // sidea + sidec > sideb &&
        // sideb + sidec > sidea &&
        sidea !== sideb && sideb !== sidec &&
        sidea !== sidec) {
        output.textcontent=
        "Scalene Triangle";

    };
};