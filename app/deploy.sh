echo "Starting deployment"
npm install
pm2 stop npm
sudo npm run build
pm2 start npm -- start
echo "Deployed"