## Welcome to the new Vue Frontend

This app is built primarly on [Vue 3](https://v3.vuejs.org/), [Vite](https://vitejs.dev/) and [tailwindcss](https://tailwindcss.com/)


## Getting Started

### Enviroment Variables

similar to how our development.env stuff works in rails project

for development create a file called `.env.development.local` you can use `.env.development.local.example` as a an example

(click here)[https://vitejs.dev/guide/env-and-mode.html] for more options and understanding on how to add and use env vars

### Docker

1. Clone the repository
2. Run the command `docker-compose up -d` to start up the server!

### Using Native Node installation (recommended for performance and reliability on MAC systems, Docker is weird with this project)

1. install nvm `brew install nvm` (or whatever package manager of your choosing)
2. follow onscreen instructions on adding it to your profile (ie bash/zsh/fish etc)
3. install latest lts version of node `nvm install lts`
4. run `nvm use lts` this should persist this version as the version to be used

**DO NOT UPGRADE NPM, IT WILL SAY THAT YOU CAN WHEN YOU DO NPM COMMANDS**

### To run the application you must do the following steps when using Native Node

1. Run `npm i` to install dependancies
2. run `npm run dev` to run the dev server

**NOTE:** you can run any of the scripts in the package.json file by prepending `npm run` in case you want to manually run any scripts, this goes for testing, linting, building etc


## Debugging

For the moment I would recommend using Chrome to debug your code. Add `debugger;` anywhere in the code thats run in the browser and it should pause and give context to that area.

## Important libraries to mention for building in this application

1. [Pinia](https://github.com/posva/pinia) for state manangement (not using Vuex, will re-evaluate when vuex 5 comes out)
2. [Vee-validate](https://vee-validate.logaretm.com/v4/guide/overview) for a Vue form validation
3. [yup](https://github.com/jquense/yup) for validations to be used alongside vee-validate

