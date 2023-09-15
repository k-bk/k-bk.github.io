const replacements = {
  a: "@",
  s: "$",
  i: "1"
};

function addReplacements(text) {
  let out = "";
  for (let c of text) {
    if (replacements[c]) {
      out += replacements[c];
    } else {
      out += c;
    }
  }
}

const myImage = document.querySelector("img")

window.onmousemove = (e) => {
  const px = e.x / window.innerWidth * 100;
  const py = e.y / window.innerHeight * 100;
  myImage.style.objectPosition = `${px}% ${py}%`;
}

