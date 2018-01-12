$(document).ready(function(){
  $("#sortinghat").submit(function(event) {
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

    var result = 0;

    if(question1 === "Select"){
      alert("Please select an answer");
    }
    else if(question2 === "Select"){
      alert("Please select an answer");
    }
    else if(question2 === "Select"){
      alert("Please select an answer");
    }
    else if(question4 === "Select"){
      alert("Please select an answer");
    }
    else if(question5 === "Select"){
      alert("Please select an answer");
    }



    if(question1 === "Loyalty"){
      result = result + 1;
    }
    else if(question1 === "Success"){
      result = result + 2;
    }
    else if(question1 === "Knowledge"){
      result = result + 3;
    }
    else if(question1 === "Bravery"){
      result = result + 4;
    }


    if(question2 === "Failure"){
      result = result + 2;
    }
    else if(question2 === "Letting People Down"){
      result = result + 1;
    }
    else if(question2 === "Ignorance"){
      result = result + 3;
    }
    else if(question2 === "Complacency"){
      result = result + 4;
    }


    if(question3 === "Owl"){
      result = result + 4;
    }
    else if(question3 === "Toad"){
      result = result + 2;
    }
    else if(question3 === "Cat"){
      result = result + 3;
    }
    else if(question3 === "Rat"){
      result = result + 1;
    }


    if(question4 === "Defense Against the Dark Arts"){
      result = result + 4;
    }
    else if(question4 === "Herbology"){
      result = result + 1;
    }
    else if(question4 === "Transfiguration"){
      result = result + 3;
    }
    else if(question4 === "Potions"){
      result = result + 2;
    }

    if(question5 === "Dog"){
      result = result + 1;
    }
    else if(question5 === "Hummingbird"){
      result = result + 3;
    }
    else if(question5 === "Stag"){
      result = result + 4;
    }
    else if(question5 === "Serpent"){
      result = result + 2;
    }


    if(result >=1 && result <=5){
      $("#hufflepuff").toggle();
    }
    else if(result >= 6 && result <=10){
      $("#slytherin").toggle();
    }
    else if(result >= 11 && result <=15){
      $("#ravenclaw").toggle();
    }
    else if(result >= 16 && result <=20){
      $("#gryffindor").toggle();
    }
      event.preventDefault();

  });
});
