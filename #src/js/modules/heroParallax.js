const heroParallax = () => {
  if(Parallax) {
    const scene = document.getElementById('parallax-scene');
    const init = new Parallax(scene)
  }
}

export default heroParallax;