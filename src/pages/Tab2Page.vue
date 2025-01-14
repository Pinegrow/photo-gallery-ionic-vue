<script setup lang="ts">
  import { actionSheetController } from '@ionic/vue'
  import { camera, trash, close } from 'ionicons/icons'
  import type { UserPhoto } from '@/composables/usePhotoGallery'

  const { photos, takePhoto, deletePhoto } = usePhotoGallery()

  const showActionSheet = async (photo: UserPhoto) => {
    const actionSheet = await actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            deletePhoto(photo)
          },
        },
        {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    })
    await actionSheet.present()
  }
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col v-for="photo in photos" :key="photo.filepath" size="6">
            <ion-img
              :src="photo.webviewPath"
              @click="showActionSheet"
            ></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      <template #fixed>
        <ion-fab vertical="bottom" horizontal="center">
          <ion-fab-button @click="takePhoto()">
            <ion-icon :icon="camera"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </template>
    </ion-content>
  </ion-page>
</template>
