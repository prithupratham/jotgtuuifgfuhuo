function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/a5dI3TTvO/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var lion = 0;
var frog = 0;

function gotResults(error, results) 
{
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Bark") {
      img.src = 'https://media.giphy.com/media/mmyMZ84jnSlu8/giphy.gif';
      dog = dog+1;
    } else if (results[0].label == "Mew") {
      img.src = 'https://th.bing.com/th/id/R.70b74e477046a76f33196b49ac983981?rik=CBz8mRlIKvbXBw&riu=http%3a%2f%2forig05.deviantart.net%2f317c%2ff%2f2011%2f185%2f9%2f6%2fchi_meow_by_musiloka-d3kymv0.gif&ehk=eJccZpbBwLpT6Cht28s03o4G3qZg3RGkSEp%2bzOKDBL4%3d&risl=&pid=ImgRaw&r=0';
      cat = cat + 1;
      else if (results[0].label == "Ribbit")
      {
      img.src = 'https://www.bing.com/th/id/OGC.03c6f439255e21bc8975fcb512d8c55a?pid=1.7&rurl=https%3a%2f%2fwww.animaker.com%2fblog%2fwp-content%2fuploads%2f2018%2f05%2fAnimaker-lion.gif&ehk=Nr%2b%2fJcg3ccuABOVx0eG24s%2f9FS20Sj%2bYy690%2fWQNonY%3d';
      }
      else if (results[0].label == "Ribbit")
      {
      img.src = 'https://th.bing.com/th/id/R.b36a63add741f3be29c13d8389f5ed9c?rik=o6C4j%2fZyNcSAdg&riu=http%3a%2f%2fbestanimations.com%2fAnimals%2fMammals%2ffrog-animated-gif-1.gif&ehk=stz0xiGQBlNIIkelzpgKI250i9NR%2bKSeAsBJwsyeA3U%3d&risl=&pid=ImgRaw&r=0';
      }
    } else{
      img.src = 'listen.gif';
    }
  }
}

    
