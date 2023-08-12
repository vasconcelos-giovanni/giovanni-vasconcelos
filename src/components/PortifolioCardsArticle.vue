<template>
  <article>
    <PagePlaceholder v-if="repos.length === 0" />
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
              class="badge fs-6 text-primary border border-primary rounded-pill"
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
              class="btn btn-outline-dark"
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

const USERNAME = 'vasconcelos-giovanni';
/**
 * Topics hierarchy defined by the programmer in ascending order.
 */
const TOPIC_HIERARCHY = [
  'html',
  'css',
  'js',
  'php',
  'tailwindcss',
  'sass',
  'bootstrap',
  'mysql',
  'vuejs',
  'laravel',
];
const repos = ref([]);

async function fetchRepos() {
  try {
    const response = await axios.get(`https://api.github.com/users/${USERNAME}/repos`);
    const filteredRepos = response.data.filter((repo) => !repo.fork && repo.name != USERNAME);
    return filteredRepos;
  } catch (error) {
    throw `Error fetching repositories: ${error}`;
  }
}

async function scoreRepos(repos) {
  for (const repo of repos) {
    repo.score = 0;

    if (repo.topics && repo.topics.length > 0) {
      for (const topic of repo.topics) {
        if (TOPIC_HIERARCHY.includes(topic)) {
          repo.score += TOPIC_HIERARCHY.indexOf(topic) + 1;
        }
      }
    }
  }

  return repos;
}

async function sortRepos(repos) {
  repos.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    } else {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }
  });

  return repos;
}

async function getRepos() {
  const unscoredRepos = await fetchRepos();
  const unsortedRepos = await scoreRepos(unscoredRepos);
  const repos = await sortRepos(unsortedRepos);

  return repos;
}

onMounted(async () => {
  repos.value = await getRepos();
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
