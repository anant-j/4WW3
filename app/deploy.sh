echo "Starting deployment"
npm install
sudo npm run build
pm2 stop npm
pm2 start npm -- start
echo "Deployed"