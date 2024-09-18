<template>
  <div class="profile-card">
    <img :src="image" alt="Profile Picture" class="profile-image" />
    <h3>{{ name }}</h3>
    <p>{{ title }}</p>
    <button class="profile-button">Lihat profile</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    image: String,
  },
};
</script>

<style scoped>
.profile-card {
  width: 200px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
}
.profile-image {
  width: 100%;
  border-radius: 8px;
}
.profile-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.profile-button:hover {
  background-color: #0056b3;
}
</style>
