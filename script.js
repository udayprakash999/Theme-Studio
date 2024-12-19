function getRandomColor() {
  return {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
  };
}

function rgbString({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}

function getTextColor({ red, green, blue }) {
  const brightness = (red * 0.299 + green * 0.587 + blue * 0.114);
  return brightness > 186 ? "black" : "white";
}

function changeBg() {
  const bodyEl = document.querySelector("body");
  const mainHeadingEl = document.getElementById("main-heading");
  const secondaryHeadingEl = document.getElementById("secondary-heading");
  const contentEl = document.getElementById("content");
  const buttonEl = document.getElementById("btn");

  const bgColor = getRandomColor();
  const textColor = getTextColor(bgColor);

  bodyEl.style.backgroundColor = rgbString(bgColor);

  mainHeadingEl.style.color = textColor;
  mainHeadingEl.textContent = `Dynamic Color: ${rgbString(bgColor)}`;

  secondaryHeadingEl.style.color = textColor;
  secondaryHeadingEl.textContent = "Color Changing in Action!";

  contentEl.style.color = textColor;

  buttonEl.style.backgroundColor = textColor;
  buttonEl.style.color = rgbString(bgColor);

  // Update the copied CSS in the output textarea
  updateCSS(rgbString(bgColor), textColor);
}

function applyTheme() {
  const theme = document.getElementById("theme-dropdown").value;
  const bodyEl = document.querySelector("body");

  const themes = {
      theme1: { bg: "rgb(252, 94, 94)", text: "rgb(255, 255, 255)" },
      theme2: { bg: "rgb(94, 174, 252)", text: "rgb(0, 0, 0)" },
      theme3: { bg: "rgb(85, 141, 85)", text: "rgb(255, 255, 255)" },
      theme4: { bg: "rgb(237, 201, 175)", text: "rgb(0, 0, 0)" },
      theme5: { bg: "rgb(47, 36, 89)", text: "rgb(230, 230, 250)" },
      theme6: { bg: "rgb(192, 255, 217)", text: "rgb(0, 100, 0)" },
      theme7: { bg: "rgb(255, 204, 128)", text: "rgb(102, 51, 0)" },
      theme8: { bg: "rgb(44, 62, 80)", text: "rgb(236, 240, 241)" },
      theme9: { bg: "rgb(229, 204, 255)", text: "rgb(64, 0, 128)" },
      theme10: { bg: "rgb(255, 223, 186)", text: "rgb(128, 64, 0)" },
      theme11: { bg: "rgb(34, 139, 34)", text: "rgb(255, 255, 255)" }
  };

  const selectedTheme = themes[theme];
  bodyEl.style.backgroundColor = selectedTheme.bg;
  bodyEl.style.color = selectedTheme.text;

  document.getElementById("main-heading").style.color = selectedTheme.text;
  document.getElementById("secondary-heading").style.color = selectedTheme.text;
  document.getElementById("content").style.color = selectedTheme.text;

  updateCSS(selectedTheme.bg, selectedTheme.text);
}

function applyFontStyle() {
  const fontStyle = document.getElementById("font-style-dropdown").value;
  const bodyEl = document.querySelector("body");

  bodyEl.style.fontFamily = fontStyle;
  document.getElementById("main-heading").style.fontFamily = fontStyle;
  document.getElementById("secondary-heading").style.fontFamily = fontStyle;
  document.getElementById("content").style.fontFamily = fontStyle;

  updateCSS(document.body.style.backgroundColor, document.body.style.color);
}

function updateCSS(bgColor, textColor) {
  const fontStyle = document.getElementById("font-style-dropdown").value;

  const cssCode = `
body {
  background-color: ${bgColor};
  color: ${textColor};
  font-family: ${fontStyle};
}

.container {
  background-color: rgba(230, 70, 70, 0.1);
  color: ${textColor};
  font-family: ${fontStyle};
}
`;

  document.getElementById("css-output").value = cssCode;
}

function copyCSS() {
  const cssOutput = document.getElementById("css-output");
  cssOutput.select();
  document.execCommand("copy");
}


document.getElementById('copy-btn').addEventListener('click', function() {
  var cssText = document.getElementById('css-output').value;

  var tempTextArea = document.createElement('textarea');
  document.body.appendChild(tempTextArea);
  tempTextArea.value = cssText;
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);  

  var popup = document.getElementById('popup');
  popup.style.display = 'block';

  setTimeout(function() {
      popup.style.display = 'none';
  }, 2000);
});
