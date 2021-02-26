# Webshop Gateways for Hungary

## Deploy the API to the server

1. Install PM2

`npm install -g pm2`

2. Create Service File

`pm2 startup systemd`

After this run the generated command.

Test if the service is running with `systemctl status pm2-USERNAME`

3. Set Reverse Proxy for Apache

````
cd /etc/apache2/sites-enabled/
nano 100-bankkartya.webmania.cc.vhost
````

At the part of port 443, after the directory entries add this

````
ProxyRequests on
ProxyPass /api/ http://localhost:5000/
````

Now `curl http://localhost:5000` should give you a response.

4. Enable Apache Modules

````
a2enmod proxy_http
````

5. Restart Apache
`systemctl restart apache2`