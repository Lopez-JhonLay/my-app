import { defineStore } from "pinia";

import { ref } from "vue";

import type { Memory } from "@/types";

export const useMemoryStore = defineStore("memory", () => {
  const memories = ref<Memory[]>([
    {
      id: 1,
      image:
        "https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg",
      title: "A trip into the mountains",
      description: "A wonderful trip into the mountains",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?cs=srgb&dl=pexels-pixabay-390051.jpg&fm=jpg",
      title: "Surfing the sea side",
      description: "A great day at the beach",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/495799500/photo/good-food-and-laughter-go-hand-in-hand.jpg?s=612x612&w=0&k=20&c=b5NzRzCcGfa42duoo99ITIOfK8Z9aHaiomKKNiXxSAg=",
      title: "Good eating",
      description: "Enjoying delicious food",
    },
  ]);

  const getMemoryById = (id: number): Memory | undefined => {
    return memories.value.find((memory) => memory.id === id);
  };

  return { memories, getMemoryById };
});
