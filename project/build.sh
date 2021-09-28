# Only for use within EC2 instance (Builds out of current project directory)
git pull
./clean.sh
yarn build
cp -r dist/* ../../