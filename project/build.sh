# Only for use within EC2 instance (Builds out of current project directory)
./clean.sh
yarn
yarn build
cp -r dist/* ../../