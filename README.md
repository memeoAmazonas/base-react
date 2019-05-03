# Bitdharma's Website

## Requeriments

### Install NodeJS using NVM

```bash
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev curl
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

After that, you can close and reopen your terminal to start using nvm or run the following command:

```bash
$ source ~/.profile
```

To verify the NVM installation, run the following command:

```bash
$ nvm --version
```

This will show the following output:

>0.33.8

To find out which versions of NodeJS are available for installation, run the following command:

```bash
$ nvm ls-remote
```

To install and use a especific version of NodeJS, run the following commands:

```bash
$ nvm install 8.11.1
$ nvm use 8.11.1
```

To verify the NodeJS installation, run the following command:

```bash
$ node -v
```

This will show the following output:

>v8.11.1

If you want to see what versions of NodeJS are installed:

```bash
$ nvm ls
```

## Project Setup

To install all Project's dependencies, run the following command:

```bash
$ npm install
```

## Running App

You need to set permissions to the scripts files because we will use them to build and run the app.

```bash
$ chmod +x ./scripts/build.sh
$ chmod +x ./scripts/start.sh
$ chmod +x ./scripts/dev.sh
```

**Note:** You only need to do this the first time.

To build and start the app, run the following commands:

```bash
$ npm run build
$ npm run start
```

### Dev Mode
```bash
$ npm run dev
```

## Production Environment

You need to set permissions to the script file for build process.

```bash
$ chmod +x ./scripts/deploy.sh
```

To build the app for production purposes, run the following command:

```bash
$ npm run deploy
```



