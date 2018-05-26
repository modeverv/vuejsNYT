<template>
    <section class="callout secondary">
    <h5 class="text-center">Filter by Category</h5>
    <form>
        <div class="row">
        <div class="large-12 columns">
            <select v-on:change="$emit('changeCategory', section)" v-model="section">
                <option v-for="section in sections" :value="section">{{ section }}</option>
            </select>
        </div>
        </div>
    </form>
    </section>
</template>

<script>
export default {
  props: ["sections"],
  data() {
    return { section: "home" };
  }
};
</script>
