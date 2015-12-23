import mkdirp from 'mkdirp';

const mkdir = (name) => new Promise((resolve, reject) => {
  mkdirp(name, err => err ? reject(err) : resolve());
});

const writeFile = (filename, contents) => new Promise((resolve, reject) => {
  fs.writeFile(filename, contents, 'utf8', err =>
    err ? reject(err) : resolve());
});

export default { writeFile, mkdir };
