const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

const imagesDir = path.resolve(__dirname, '../assets/images');

let imageHTML = '<TABLE BGCOLOR=#E0E0E0>';

const dirents = fs.readdirSync(imagesDir, { withFileTypes: true });
for (const dirent of dirents) {
  if (dirent.isDirectory()) {
    imageHTML += getPictures(dirent.name);
  }
}
imageHTML += '</TABLE>';

const newContent = indexContent.replace('###REPLACE_BY_IMAGES###', imageHTML);

fs.writeFileSync(path.resolve(__dirname, '../index.html'), newContent);


function getPictures (dirName) {
  const dir = path.join(imagesDir, dirName);
  console.log(dir);
  let res = `\n\t<TR BGCOLOR=#FFFFFF><TD>&nbsp</TD</TR>\n\t<TR><TD><H4>${dirName}</H4></TD></TR>`;
  const pictures = fs.readdirSync(dir, { withFileTypes: true });
  for (const picture of pictures) {
    if (picture.name === '.DS_Store') continue;
    if (picture.isDirectory()) throw new Error('Found a sub directory');
    const ref = `assets/images/${dirName}/${picture.name}`
    res += `\n\t\t<TR><TD ALIGN=CENTER><IMG SRC="${ref}" HEIGHT=64><BR><A HREF="${ref}">${picture.name}</A></TD>`
  }
  return res;
}