import del from 'del';
import task from './lib/task';
import fs from './lib/fs';

export default task(async function clean() {
  await del(['../dist/*'], { dot: true });
  await fs.mkdir('../dist');
});
