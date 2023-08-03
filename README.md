<h1 align="center">Photo Gallery Mobile App With Ionic Vue</h1>
<br>

> This is a fork of https://github.com/ionic-team/tutorial-photo-gallery-vue, and pre-includes the [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) and other goodies for Vue Designer.<br><br>**Vue Designer** is a desktop visual editor for Mac, Windows and Linux that lets you visually design your Vue applications. Take it for a free trial at [Vue Designer](https://vuedesigner.com)!<br><br>

<br>

Run on iOS or Android - follow this [guide](https://ionicframework.com/docs/developing/previewing)

<br>

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

- Tab2 (Photos) (`src/views/Tab2.vue`): Photo Gallery UI and basic logic.
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
