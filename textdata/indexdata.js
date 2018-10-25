const text1 = document.getElementById('skilltree-box-1');
const text2 = document.getElementById('skilltree-box-2');

const en_text1 = "digital artist";
const en_text2 = "web developer";

const fi_text1 = "digitaalitaide";
const fi_text2 = "web-kehitys";

const textPackage1 = [en_text1, fi_text1, text1];
const textPackage2 = [en_text2, fi_text2, text2];

const textPage = [textPackage1, textPackage2, ...textPageHF];
