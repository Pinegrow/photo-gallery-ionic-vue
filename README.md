<h1 align="center">Photo Gallery Mobile App With Ionic Vue</h1>
<br>

> This is a fork of https://github.com/ionic-team/tutorial-photo-gallery-vue, and pre-includes the [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) and other goodies for Vue Designer.<br><br>

<br>

To run on iOS or Android - follow this [guide](https://ionicframework.com/docs/developing/previewing)

<br>

This is a sample project created using the [Vue Designer Ionic - Quick start template](https://github.com/pinegrow/pg-ionic-vue).

Demo - https://photo-gallery-ionic-vue.netlify.app/

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/photo-gallery-ionic-vue/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/photo-gallery-ionic-vue my-photo-gallery-ionic-vue-app #project-name
cd my-photo-gallery-ionic-vue-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev
```

### Build

```bash
npm run build # Hybrid mobile App
```

### Analyze

Uncomment the `rollup-plugin-visualizer` usage in your config file and execute the `build` command. This command will generate `stats.html`. Open `stats.html` in your browser to analyze bundle sizes.

```bash
npm run build # open stats.html to analyze bundle sizes
```

### Preview

```bash
npm run now # build & preview
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-vue)

Check out the [deployment documentation](https://vitejs.dev/guide/static-deploy.html#netlify) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Vite](https://vitejs.dev/) - Vite-powered Vue SPA
  - 👉 Follow the amazing Vue [docs](https://vuejs.org/guide/introduction.html)
  - 🚦 [Vue-Router](https://vuejs.org/guide/introduction.html) for client-side routing. Expressive, configurable, convenient enables snappy navigation.

### UI Frameworks

- [Ionic Vue](https://ionicframework.com/docs/vue/overview) - @ionic/vue combines the core Ionic Framework experience with the tooling and APIs that are tailored to Vue Developers.
- [Ionic Components](https://ionicframework.com/docs/components) - Ionic apps are made of high-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs. Once you’re familiar with the basics, refer to the [API Index](https://ionicframework.com/docs/api) for a complete list of each component and sub-component.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) - enables you to live-design your Vue single-file components visually in Vue Designer.
- 📲 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.
- 📲 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite, Webpack and Rollup.
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://pinia.vuejs.org/) stores for global state management. Its light-weight, type-safe, extensible, modular with vue-devtools support.
- [VeeValidate](https://vee-validate.logaretm.com/v4/) takes care of value tracking, validation, errors, submissions and more.

### Devtools

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's conditionally configured in `main.ts` (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `main.ts`, uncomment the top devtools related snippet to activate.
- [Vite Devtools](https://github.com/webfansplz/vite-plugin-vue-devtools) - A Vite plugin for Vue that enhances your DX (developer experience) with an amazing set of in-app features. This is an in-app alternative to browser-based/standalone Vue Devtools.
  - **ACTION REQUIRED**: Currently deactivated. In `vite.config.ts`, uncomment VueDevtools.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [eslint-plugin-vue](https://vuejs.org/guide/scaling-up/tooling.html#linting) - official set of linting rules.
- [Prettier](https://prettier.io) with [@vue/eslint-config-prettier](https://vuejs.org/guide/scaling-up/tooling.html#formatting) - format without conflicting with eslint rules.

### Typescript

Allows JS & strict mode is turned off. Update `tsconfig.app.json` or `tsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Vue Designer Community](https://discord.gg/BYp45Nnu5T)

---

# Build Your First Ionic App: Photo Gallery (Ionic Vue and Capacitor)

Get started with Ionic by building a photo gallery app that runs on iOS, Android, and the web - with just one codebase. This is the complete project referenced in the ["Your First App: Vue" guide](https://ionicframework.com/docs/vue/your-first-app). Follow along to create a complete CRUD (create-read-update-delete) experience.

Powered by [Ionic Vue](https://ionicframework.com/docs/vue/overview) (web app) and [Capacitor](https://capacitorjs.com) (native app runtime).

## How It Works

After the user navigates to Tab 2 (Photos), they can tap/click on the camera button to open up the device's camera. After taking or selecting a photo, it's stored permanently into the device's filesystem. When the user reopens the app at a later time, the photo images are loaded from the filesystem and displayed again in the gallery. The user can tap on a photo to be presented with the option to remove the photo.

## Feature Overview

- App framework: [Vue](https://vuejs.org/)
- UI components: [Ionic Framework](https://ionicframework.com/docs/components)
  - Camera button: [Floating Action Button (FAB)](https://ionicframework.com/docs/api/fab)
  - Photo Gallery display: [Grid](https://ionicframework.com/docs/api/grid)
  - Delete Photo dialog: [Action Sheet](https://ionicframework.com/docs/api/action-sheet)
- Native runtime: [Capacitor](https://capacitorjs.com)
  - Taking photos: [Camera API](https://capacitorjs.com/docs/apis/camera)
  - Writing photo to the filesystem: [Filesystem API](https://capacitorjs.com/docs/apis/filesystem)
  - Storing photo gallery metadata: [Preferences API](https://capacitorjs.com/docs/apis/preferences)

## Project Structure

- Tab2 (Photos) (`src/pages/Tab2.vue`): Photo Gallery UI and basic logic.
- usePhotoGallery Hook (`src/composables/usePhotoGallery.ts`): Logic encapsulating Capacitor APIs, including Camera, Filesystem, and Preferences.

## How to Run

> Note: It's highly recommended to follow along with the [tutorial guide](https://ionicframework.com/docs/vue/your-first-app), which goes into more depth, but this is the fastest way to run the app.

0. Install Ionic if needed: `npm install -g @ionic/cli`.
1. Clone this repository.
2. In a terminal, change directory into the repo: `cd photo-gallery-capacitor-vue`.
3. Install all packages: `npm install`.
4. Run on the web: `ionic serve`.
5. Run on iOS or Android: See [here](https://ionicframework.com/docs/building/running).

<br><br>

---

# Getting Started with ViteJS, Ionic Framework Beta v6 And VueJS

---

- **updated to v6 official release, see this branch**
  https://github.com/aaronksaunders/ionicv6-beta-vue-vite-project-1/tree/v6-official

---

- This template should help get you started developing with Ionic, Vue 3 and Typescript in Vite.
- See more information in this blog post - https://dev.to/aaronksaunders/getting-started-with-vitejs-ionic-framework-beta-v6-and-vuejs-2o8l
- There is also a video here - https://www.youtube.com/watch?v=JnfAH1gXVdU&t=2s

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
