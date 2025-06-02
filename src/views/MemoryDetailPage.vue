<template>
  <base-layout :pageTitle="memory?.title" page-default-back-link="/memories">
    <h2 v-if="!memory">Memory not found.</h2>
    <h2 v-else>{{ memory.description }}</h2>
  </base-layout>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

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
