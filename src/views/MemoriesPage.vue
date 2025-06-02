<template>
  <base-layout page-title="Memories">
    <ion-list>
      <ion-item
        v-for="memory in memoryStore.memories"
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script setup lang="ts">
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

import { useMemoryStore } from "@/store";

const memoryStore = useMemoryStore();
</script>

<style scoped></style>
