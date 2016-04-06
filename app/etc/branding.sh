# put this in ~/.zshrc or ~/.bash_profile
function branding {
  # clone package
  git clone https://github.com/flakessp/branding.git
  # copy contents of brandings to current dir
  cp -R branding/* .
  # remove branding folder
  rm -rf branding
  npm install
  cd assets
  # zsh only script for deleting all in folder except branding folder
  rm -rf ^branding
  cd ..
  # atom cli/symlink must be installed
  atom .
}