const track = document.getElementById("image-track");

// Allows mouse movement to increase/decrease value for image track
const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// Prevents image track from resetting after every move
const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

// Setting the next location of image track
const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);