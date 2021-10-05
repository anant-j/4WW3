echo "Starting deployment"
npm install
sudo npm run build
sudo pm2 stop npm
sudo pm2 start npm -- start
echo "Deployed"