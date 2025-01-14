<script setup lang="ts">
  import { images, square, triangle } from 'ionicons/icons'
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <template #bottom>
        <ion-tab-bar>
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="images" />
            <ion-label>Photos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </template>
    </ion-tabs>
  </ion-page>
</template>
