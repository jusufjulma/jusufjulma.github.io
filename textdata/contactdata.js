const text1 = document.getElementById('my-profiles');
const text2 = document.getElementById('con-text2');
const text3 = document.getElementById('con-text3');

const en_text1 = "- My profiles -";
const en_text2 = "You can also contact me via email:";
const en_text3 = "firstnamelastname@hotmail.com";

const fi_text1 = "- Profiilini -";
const fi_text2 = "Ota yhteyttä sähköpostitse:";
const fi_text3 = "etunimisukunimi@hotmail.com";

const textPackage1 = [en_text1, fi_text1, text1];
const textPackage2 = [en_text2, fi_text2, text2];
const textPackage3 = [en_text3, fi_text3, text3];

const textPage = [textPackage1, textPackage2, textPackage3, ...textPageHF];
