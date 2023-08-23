const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const UserAgent = require('user-agents');


const userAgent = new UserAgent();
puppeteer.use(StealthPlugin())





function generate_random_ip() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateIPAddress() {
        return `${getRandomNumber(1, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(1, 254)}`;
    }

    let ip = generateIPAddress();
    while (!is_valid_ipv4(ip)) {
        ip = generateIPAddress();
    }

    function is_valid_ipv4(ip) {
        const ipv4Pattern = /^(?!0\.)(?!255\.)(?!0{1,3}\.)(?!0{1,3}$)(([0-9]{1,2}|1\d{1,2}|2[0-4]\d|25[0-5])\.){3}([0-9]{1,2}|1\d{1,2}|2[0-4]\d|25[0-5])$/;
        return ipv4Pattern.test(ip);
    }

    return ip;

}

const browserWithoutProxy = async (extansion) => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            `--load-extension=${extansion}`,
            '--no-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.toString());
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        const headers = req.headers();
        headers['X-Forwarded-For'] = generate_random_ip(); // Ganti dengan alamat IP palsu yang diinginkan
        req.continue({ headers });
    });
    return { page: page, browser: browser }
}

module.exports = browserWithoutProxy