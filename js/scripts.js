var myFunction =function(sidea, sideb, side c) {



  var sidea=parseInt(document.getElementById("sideA").value);
  var sideb=parseInt(document.getElementById("sideB").value);
  var sidec=parseInt(document.getElementById("sideC").value);

  var sides=[sidea,sideb,sidec];
  var type=["equilateral triangle","isosceles triangle","scalene triangle","not a triangle"]
 


 if 
    (
        sidea + sideb > sidec &&
        sideb + sidec > sidea &&
        sidea + sidec> sideb &&
        (sidea === sideb && sideb === sidec);
    ) {

        output.textcontent =
        "Equilateral Triangle";
    } else if (
        sidea + sideb > sidec &&
        sidea + sidec > sideb &&
        sideb + sidec > sidea &&

        ((sidea === sideb && sideb !== sidec) ||
        (sidea === sidec && sidec !== sideb) ||
        (sideb === sidec && sideb !== sidea))
    ) {
        output.textcontent =
        "Isosceles Triangle";



    } else if (
        sidea + sideb > sidec &&
        sidea + sidec > sideb &&
        sideb + sidec > sidea &&
        (sidea !== sideb && sideb !== sidec &&
        sidea !== sidec)
        output.textcontent=
        "Scalene Triangle";

    };
};