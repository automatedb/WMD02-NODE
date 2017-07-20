// fonction de création d'objets profils avec génération d'emailsconst addEmail = (f, l, d) => {
const f = "BIBI";
const l = "BOBO";
const d = "domain.tld";

const EmailCombin = [
    `${f}${l}@${d}`,
    `${l}${f}@${d}`,
    `${f}.${l}@${d}`,
    `${l}.${f}@${d}`,
    `${f}-${l}@${d}`,
    `${l}-${f}@${d}`,
    `${f}_${l}@${d}`,
    `${l}_${f}@${d}`,
    `${f}${l.substring(0, 1)}@${d}`,
    `${l.substring(0, 1)}${f}@${d}`,
    `${f}.${l.substring(0, 1)}@${d}`,
    `${l.substring(0, 1)}.${f}@${d}`,
    `${f}-${l.substring(0, 1)}@${d}`,
    `${l.substring(0, 1)}-${f}@${d}`,
    `${f}_${l.substring(0, 1)}@${d}`,
    `${l.substring(0, 1)}_${f}@${d}`,
    `${f.substring(0, 1)}${l}@${d}`,
    `${l}${f.substring(0, 1)}@${d}`,
    `${f.substring(0, 1)}.${l}@${d}`,
    `${l}.${f.substring(0, 1)}@${d}`,
    `${f.substring(0, 1)}-${l}@${d}`,
    `${l}-${f.substring(0, 1)}@${d}`,
    `${f.substring(0, 1)}_${l}@${d}`,
    `${l}_${f.substring(0, 1)}@${d}`,
];

const emailList = EmailCombin.map(email => `${f},${l},${d},${email}`).join('\n');

console.log(emailList);

// EmailCombin.forEach((email) => {
//     let profil = `${f},${l},${d},${email}\n`;
//     emailList = `${emailList}${profil}`;
//     //emailList.map(function(el))
// });


