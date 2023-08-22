#install puppeteer di vps
-sudo apt-get update
-apt install xvfb
-sudo apt-get install -y libnss3 libatk-bridge2.0-0 libatk1.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev


#cara runing puppeteer di vps
-xvfb-run -a node name_file.js
