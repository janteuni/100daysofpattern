import del from 'del';
import task from './lib/task';
import fs from './lib/fs';
import path from 'path';

export default task(async function clean() {
  await del([path.join(__dirname, '../dist')], { dot: true });
  await fs.mkdir('../dist');
});
