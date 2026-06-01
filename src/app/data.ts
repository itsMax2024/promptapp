export const CATEGORIES = [
  "Trending",
  "Cinematic",
  "Anime",
  "Fantasy",
  "Architecture",
  "Portraits",
  "Vehicles"
];

export const PROMPTS = [
  {
    id: "1",
    title: "Neon Cyberpunk City",
    promptText: "A sprawling cyberpunk city at night, illuminated by vibrant neon signs in pink and cyan, rain-slicked streets reflecting the lights, highly detailed, 8k resolution, unreal engine 5 render, cinematic lighting.",
    image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwY2l0eSUyMHN0cmVldHxlbnwxfHx8fDE3ODAyOTEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    creator: {
      name: "Alex Vance",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    model: "Midjourney v6",
    aspectRatio: "16:9",
    style: "Cinematic",
    tags: ["cyberpunk", "neon", "cityscape", "night"],
    likes: 1240
  },
  {
    id: "2",
    title: "Fantasy Character Portrait",
    promptText: "Close-up portrait of a fierce elven warrior, intricate silver armor with glowing blue runes, white hair blowing in the wind, soft dramatic lighting, volumetric fog, concept art, masterpiece.",
    image: "https://images.unsplash.com/photo-1773432661163-351c473345e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgwMTU1NDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    creator: {
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    model: "Stable Diffusion XL",
    aspectRatio: "4:5",
    style: "Fantasy Art",
    tags: ["elf", "warrior", "armor", "portrait"],
    likes: 892
  },
  {
    id: "3",
    title: "Minimalist Modern Architecture",
    promptText: "A brutalist concrete home integrated into a lush green cliffside, massive floor-to-ceiling glass windows, warm interior lighting contrasting with cool twilight exterior, architectural photography, hyper-realistic.",
    image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MDI5MTM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    creator: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    model: "Midjourney v6",
    aspectRatio: "16:9",
    style: "Photorealism",
    tags: ["architecture", "brutalism", "modern", "cliff"],
    likes: 2105
  },
  {
    id: "4",
    title: "Cinematic Epic Landscape",
    promptText: "Vast mountain range at golden hour, a lone traveler standing on a precipice looking out, sweeping clouds, sun rays breaking through, epic scale, lord of the rings style, matte painting.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBlcGljfGVufDF8fHx8MTc4MDI5MTM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    creator: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    model: "DALL-E 3",
    aspectRatio: "16:9",
    style: "Matte Painting",
    tags: ["landscape", "mountains", "epic", "golden hour"],
    likes: 534
  },
  {
    id: "5",
    title: "Abstract 3D Geometry",
    promptText: "Abstract composition of floating glass and metallic spheres and cubes, soft pastel gradient lighting, caustic reflections, clean minimal studio background, 3D render, octane render.",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwZ2VvbWV0cmljJTIwc2hhcGVzfGVufDF8fHx8MTc4MDI5MTM3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    creator: {
      name: "Marcus Cole",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    model: "Midjourney v6",
    aspectRatio: "1:1",
    style: "3D Render",
    tags: ["abstract", "3d", "geometry", "glass"],
    likes: 721
  },
  {
    id: "6",
    title: "Moody Interior Design",
    promptText: "A cozy, moody reading nook in a mid-century modern home, dark green walls, leather armchair, warm amber reading lamp, rain against the window, high resolution interior photography.",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29keSUyMGludGVyaW9yJTIwZGVzaWduJTIwcm9vbXxlbnwxfHx8fDE3ODAyOTEzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    creator: {
      name: "Lena Smith",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzgwMjIyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    model: "Stable Diffusion XL",
    aspectRatio: "4:5",
    style: "Photography",
    tags: ["interior", "moody", "mid-century", "cozy"],
    likes: 1102
  }
];

export const COLLECTIONS = [
  {
    id: "c1",
    title: "YouTube Thumbnails",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwZ2VvbWV0cmljJTIwc2hhcGVzfGVufDF8fHx8MTc4MDI5MTM3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    count: 24
  },
  {
    id: "c2",
    title: "Fantasy Characters",
    image: "https://images.unsplash.com/photo-1773432661163-351c473345e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgwMTU1NDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    count: 142
  },
  {
    id: "c3",
    title: "Landscape Ideas",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBlcGljfGVufDF8fHx8MTc4MDI5MTM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    count: 56
  },
  {
    id: "c4",
    title: "Product Photography",
    image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwY2l0eSUyMHN0cmVldHxlbnwxfHx8fDE3ODAyOTEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    count: 89
  },
  {
    id: "c5",
    title: "Interior Concepts",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29keSUyMGludGVyaW9yJTIwZGVzaWduJTIwcm9vbXxlbnwxfHx8fDE3ODAyOTEzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    count: 34
  }
];
