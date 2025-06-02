<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";

const props = defineProps<{
  pageTitle?: string;
  pageDefaultBackLink?: string;
}>();
</script>

<style scoped></style>
