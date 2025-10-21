(function () {
  const track = document.getElementById("slideTrack");
  let direction = 1;
  let pos = 0;

  const slideWidth = 400;
  const totalSlides = track.children.length;
  const maxShift = (totalSlides - 1) * slideWidth;

  function animate() {

    pos += direction * 2;


    if (pos >= maxShift) {
      direction = -1;
    }


    if (pos <= 0) {
      direction = 1;
    }

    track.style.left = -pos + "px";
    requestAnimationFrame(animate);
  }

  animate();
})();
