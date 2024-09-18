<template>
  <div class="section">
    <h2>{{ sectionTitle }}</h2>
    <div class="profiles">
      <ProfileCard v-for="profile in profiles" :key="profile.name" :name="profile.name" :title="profile.title" :image="profile.image" />
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import ProfileCard from './ProfileCard.vue';

export default {
  components: {
    ProfileCard,
  },
  props: {
    sectionTitle: String,
    profiles: Array,
    description: String,
  },
};
</script>

<style scoped>
.section {
  padding: 20px;
}
.profiles {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
h2 {
  margin-bottom: 10px;
}
p {
  margin-top: 15px;
}
</style>
