<template>
    <div>
      <MainForm :sections="sections" v-on:changeCategory="setCategory"/>
      <Cards :section="section"/>
  </div>
</template>

<script>
import MainForm from "./form/MainForm.vue";
import Cards from "./parts/Cards.vue";

const SECTIONS =
  "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world"; // From NYTimes

export default {
  components: {
    MainForm,
    Cards
  },
  data() {
    return {
      results: [],
      sections: SECTIONS.split(", "),
      section: "home"
    };
  },
  methods: {
    setCategory(section) {
      this.section = section;
    }
  }
};
</script>
