//FIT e-mail
let jmeno = prompt("Zadejte prosím vaše jméno (bez diakritiky):");
let surname = prompt("Zadejte prosím vaše přijmení (bez diakritiky):");

//odstranění bílých míst
jmeno = jmeno.trim();
surname = surname.trim();

//vytvoření emailu
const prefixEmail = jmeno.slice(0, 3).toLowerCase() + surname.slice(0, 3).toLowerCase();
const email = prefixEmail + "@fit.cvut.cz";

document.body.innerHTML = "Váš e-mail je " + email;