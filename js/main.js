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

mediumZoom("[data-zoomable]", {
  margin: 24,
});
