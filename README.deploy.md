# Install
```
$ pnpm install
```
# Build
```
$ pnpm build
```
# Deploy
```
$ sudo rm /var/www/html/numeral-converter/assets/*
$ sudo cp -r ./dist/numeral-converter/* /var/www/html/numeral-converter/
$ sudo apachectl restart
```