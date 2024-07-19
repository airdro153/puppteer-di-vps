# Installing Puppeteer on VPS

## 1. Install Dependencies

First, update your package list and install the required dependencies:

```bash
sudo apt-get update
sudo apt-get install -y xvfb \
                        libnss3 \
                        libatk-bridge2.0-0 \
                        libatk1.0-0 \
                        libgdk-pixbuf2.0-0 \
                        libgtk-3-0 \
                        libgbm-dev
