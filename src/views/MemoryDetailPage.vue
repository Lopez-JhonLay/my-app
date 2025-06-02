<template>
  <base-layout :pageTitle="memory?.title" page-default-back-link="/memories">
    <ion-img :src="memory?.image" :alt="memory?.title" />
    <h1 style="font-weight: bold" class="ion-text-center">
      {{ memory?.title }}
    </h1>
    <p class="ion-text-center">{{ memory?.description }}</p>
  </base-layout>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import { IonImg } from "@ionic/vue";

import { useRoute } from "vue-router";

import { useMemoryStore } from "@/store";

import type { Memory } from "@/types";

const memoryStore = useMemoryStore();

const route = useRoute();

const memoryId = ref<string | null>(null);

const memory = ref<Memory | null>(null);

watch(
  () => route.params.id,
  (newId) => {
    memoryId.value = newId as string;
    memory.value = memoryStore.getMemoryById(Number(memoryId.value)) ?? null;
  },
  { immediate: true }
);
</script>

<style scoped></style>
