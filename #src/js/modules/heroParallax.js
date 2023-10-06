const heroParallax = () => {
  if(Parallax) {
    const scene = document.getElementById('parallax-scene');
    if(scene) {
      const init = new Parallax(scene)
    }
  }
}

export default heroParallax;