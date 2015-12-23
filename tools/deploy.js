import GitRepo from 'git-repository';
import task from './lib/task';

// TODO: Update deployment URL
const remote = {
  name: 'github',
  url: 'https://github.com/janteuni/100daysofpattern.git',
  branch: 'gh-pages',
};

/**
 * Deploy the contents of the `/dist` folder to GitHub Pages.
 */
export default task(async function deploy() {
  // Initialize a new Git repository inside the `/dist` folder
  // if it doesn't exist yet
  const repo = await GitRepo.open('dist', { init: true });
  await repo.setRemote(remote.name, remote.url);

  // Fetch the remote repository if it exists
  if ((await repo.hasRef(remote.url, remote.branch))) {
    await repo.fetch(remote.name);
    await repo.reset(`${remote.name}/${remote.branch}`, { hard: true });
    await repo.clean({ force: true });
  }

  // Build the project in RELEASE mode which
  // generates optimized and minimized bundles
 // process.argv.push('release');
  //await require('./dist')();

  // Push the contents of the build folder to the remote server via Git
  await repo.add('--all .');
  await repo.commit('Update ' + new Date().toISOString());
  await repo.push(remote.name, 'master:' + remote.branch);
});
