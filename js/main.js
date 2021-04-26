// Smooth Scrolling with offset
$(".sections a, .btn a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800
    );
  }
});

// Remove anchor from URl bar
var Webflow = Webflow || [];
Webflow.push(function () {
  $("a").click(function () {
    setTimeout(function () {
      history.replaceState(null, null, " ");
    }, 0);
  });
});

//  Phobos
var modalbtnPhobos = document.getElementsByClassName("modalbtnPhobos")[0];

var modalPhobos = document.getElementById("phobos_overlay");

var closebtnPhobos = document.getElementsByClassName("closebtnPhobos")[0];

modalbtnPhobos.addEventListener("click", openmodalPhobos);

closebtnPhobos.addEventListener("click", closemodalPhobos);

window.addEventListener("click", outsideclickPhobos);

function openmodalPhobos() {
  phobos_overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closemodalPhobos() {
  {
    phobos_overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function outsideclickPhobos(e) {
  if (e.target == phobos_overlay) {
    phobos_overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

//  Deimos
var modalbtnDeimos = document.getElementsByClassName("modalbtnDeimos")[0];

var modalDeimos = document.getElementById("deimos_overlay");

var closebtnDeimos = document.getElementsByClassName("closebtnDeimos")[0];

modalbtnDeimos.addEventListener("click", openmodalDeimos);

closebtnDeimos.addEventListener("click", closemodalDeimos);

window.addEventListener("click", outsideclickDeimos);

function openmodalDeimos() {
  deimos_overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closemodalDeimos() {
  {
    deimos_overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function outsideclickDeimos(e) {
  if (e.target == deimos_overlay) {
    deimos_overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
