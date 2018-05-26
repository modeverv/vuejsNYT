<template>
    <div class="card">
        <div class="card-divider">
            {{ post.title }}
        </div>
        <a :href="post.url" target="_blank"><img :src="post.image_url"></a>
        <div class="card-section">
            <p>{{ post.abstract }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
