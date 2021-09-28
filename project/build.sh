# Only for use within EC2 instance (Builds out of current project directory)
chmod u+x build.sh
git pull
chmod u+x build.sh
chmod u+x clean.sh
./clean.sh
yarn
yarn build
cp -r dist/* ../../