import { execSync } from 'child_process';
try {
  execSync('git rm -rf --cached public_repo_backup temp_repo', { stdio: 'inherit' });
  console.log('Successfully removed from index');
} catch (e) {
  console.error('Failed to remove from index', e.message);
}
