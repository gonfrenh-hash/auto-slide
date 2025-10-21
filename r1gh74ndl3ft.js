// Geser otomatis ke kanan lalu balik ke kiri
(function () {
  const track = document.getElementById("slideTrack");
  let direction = 1; // 1 = kanan, -1 = kiri
  let pos = 0;

  const slideWidth = 400; // sesuai .slide width
  const totalSlides = track.children.length;
  const maxShift = (totalSlides - 1) * slideWidth; // jarak maksimal ke kanan

  function animate() {
    // Gerakan pelan
    pos += direction * 2; // 2 = kecepatan pixel per frame

    // Batas kanan
    if (pos >= maxShift) {
      direction = -1; // balik ke kiri
    }

    // Batas kiri
    if (pos <= 0) {
      direction = 1; // balik ke kanan
    }

    track.style.left = -pos + "px";
    requestAnimationFrame(animate);
  }

  animate();
})();
