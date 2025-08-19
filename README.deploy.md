# Install
```shell
$ pnpm install
```
# Build
## pop-os
```shell
$ pnpm build
```
## tilde.team
```shell
$ pnpm build --base=/~padeso/numeral-converter --outDir=dist/~padeso
```
# Deploy
## pop-os
```shell
$ sudo rm /var/www/html/numeral-converter/assets/*
$ sudo rcp -r ./dist/numeral-converter/* /var/www/html/numeral-converter
```
## tilde.team
```shell
rcp -r  './dist/~padeso/*' tilde.team:~/public_html/numeral-converter
```