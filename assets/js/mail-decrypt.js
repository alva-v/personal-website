const host = "&#x76;&#x69;&#x61;&#x6C&#x6C&#x79;&#x2E&#x66;&#x72;";
const emailParagraph = document.getElementById("email");
const email = emailParagraph.dataset.name + "@" + host;
emailParagraph.innerHTML = `<address><a href="mailto:${email}">${email}</a></address>`;