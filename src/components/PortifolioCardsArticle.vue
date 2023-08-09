<template>
  <article>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item p-3"
        v-for="repo in repos"
        :key="repo.id"
      >
        <div class="d-flex flex-column gap-3">
          <h5 class="card-title text-start fw-bold">{{ repo.name }}</h5>
          <p class="card-text">
            {{ repo.description }}
          </p>
          <ul class="list-unstyled d-flex flex-wrap gap-2">
            <li
              class="badge fs-6 text-secondary border border-secondary rounded-pill"
              v-for="topic of repo.topics"
              :key="topic"
            >
              {{ topic }}
            </li>
          </ul>
          <div class="d-flex justify-content-start flex-wrap gap-2">
            <a
              :href="repo.html_url"
              target="_blank"
              class="btn btn-outline-dark d-inline-flex align-items-center gap-1"
              @mouseover="setHovered(true, repo.id)"
              @mouseout="setHovered(false, repo.id)"
            >
              <img
                src="../assets/github-mark-white.svg"
                class="gh-link d-inline"
                v-if="isHovered[repo.id]"
              />
              <img
                src="../assets/github-mark.svg"
                class="gh-link d-inline"
                v-else
              />
              <span>Repository</span>
            </a>
            <a
              :href="repo.homepage"
              class="btn btn-outline-secondary"
              v-if="repo.homepage != '' && repo.homepage != null"
              >💿 Live demo</a
            >
          </div>
        </div>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Repos GET
const repos = ref([]);

const getRepos = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/vasconcelos-giovanni/repos');
    const filteredRepos = response.data.filter((repo) => !repo.fork);
    repos.value = filteredRepos
      .sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count)
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
};

onMounted(async () => {
  getRepos();
});

// GitHub button icon switching to dark and light
const isHovered = ref({});
const setHovered = (value, id) => {
  isHovered.value[id] = value;
};
</script>

<style scoped>
.gh-link {
  height: 1rem;
}
</style>
