
/*
function toggleText1(){
  document.getElementById("Aboutme").style.display="block"
  document.getElementById("sections").style.display="none"
}

function toggleText2(){
  document.getElementById("sections").style.display="none"
  document.getElementById("Geboorteplaats").style.display="block"
}
*/

function toggleText1(){
    document.getElementById("AboutMe").style.display="block"
    document.getElementById("Hobbys").style.display="none"
    document.getElementById("Skills").style.display="none"
    document.getElementById("Toekomst").style.display="none"

    document.getElementById("textbox").style.backgroundColor="#E8FbE1"

    document.getElementById("btn1").style.borderBottom="none"
    document.getElementById("btn2").style.borderBottom="1px solid black"
    document.getElementById("btn3").style.borderBottom="1px solid black"
    document.getElementById("btn4").style.borderBottom="1px solid black"

    var image = document.getElementById("foto");
      image.src = ".//images/vakantiefoto1.jpg"
  }
 


  function toggleText2(){
    document.getElementById("AboutMe").style.display="none"
    document.getElementById("Hobbys").style.display="block"
    document.getElementById("Skills").style.display="none"
    document.getElementById("Toekomst").style.display="none"

    document.getElementById("textbox").style.backgroundColor="#ECE3FC"

    document.getElementById("btn1").style.borderBottom="1px solid black"
    document.getElementById("btn2").style.borderBottom="none"
    document.getElementById("btn3").style.borderBottom="1px solid black"
    document.getElementById("btn4").style.borderBottom="1px solid black"

    var image = document.getElementById("foto");
      image.src = "../images/voetbal.jpg"
  }


  function toggleText3(){
    document.getElementById("AboutMe").style.display="none"
    document.getElementById("Hobbys").style.display="none"
    document.getElementById("Skills").style.display="block"
    document.getElementById("Toekomst").style.display="none"

    document.getElementById("textbox").style.backgroundColor="#FCEBF6"

    document.getElementById("btn1").style.borderBottom="1px solid black"
    document.getElementById("btn2").style.borderBottom="1px solid black"
    document.getElementById("btn3").style.borderBottom="none"
    document.getElementById("btn4").style.borderBottom="1px solid black"

    var image = document.getElementById("foto");
      image.src = "../images/koken.jpg"
  }


  function toggleText4(){
    document.getElementById("AboutMe").style.display="none"
    document.getElementById("Hobbys").style.display="none"
    document.getElementById("Skills").style.display="none"
    document.getElementById("Toekomst").style.display="block"

    document.getElementById("textbox").style.backgroundColor="#C8D3B8"

    document.getElementById("btn1").style.borderBottom="1px solid black"
    document.getElementById("btn2").style.borderBottom="1px solid black"
    document.getElementById("btn3").style.borderBottom="1px solid black"
    document.getElementById("btn4").style.borderBottom="none"

    var image = document.getElementById("foto");
      image.src = ".//images/alkmaar.jpg"
  }
  