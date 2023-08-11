<template>
  <MainLayout>
    <article>
      <h1>Giovanni Vasconcelos Portfolio: Showcasing Achievements with Elegance</h1>

      <SectionTemplate>
        <h2>📌 Project idea</h2>
        <p>
          Giovanni Vasconcelos Portfolio is an embodiment of my professional journey, meticulously
          crafted to exhibit my resume and projects within an alluring and contemporary digital
          space.
        </p>
      </SectionTemplate>

      <SectionTemplate>
        <h2>💡 Key Features</h2>
        <ul class="list-unstyled">
          <li>
            ✅ Bilingual Experience: Seamlessly switch between English and Portuguese to cater to a
            diverse audience;
          </li>
          <li>
            ✅ Universal Adaptability: Ensuring an optimal user experience across a spectrum of
            devices and screen sizes.
          </li>
        </ul>
      </SectionTemplate>

      <SectionTemplate>
        <h2 class="h4">🔧 Technologies</h2>
        <SkillsGroup>
          <SkillImage
            src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
            alt="Vue.js"
          />
          <SkillImage
            src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
            alt="Bootstrap"
          />
        </SkillsGroup>
      </SectionTemplate>

      <SectionTemplate>
        <h2 class="h4">🏗️ Development Details</h2>
        <p>
          Conceptualized as a Single Page Application (SPA), I harnessed the power of the Axios
          library for streamlined HTTP requests. The I18N library was instrumental in achieving
          seamless internationalization, and the GitHub API seamlessly integrates to spotlight a
          curated selection of projects.
        </p>
      </SectionTemplate>

      <SectionTemplate>
        <h2 class="h4">📚 My Learning Journey</h2>
        <ul class="list-unstyled">
          <li>📌 Mastery of the Bootstrap grid system, underpinning impeccable responsiveness;</li>
          <li>
            📌 Skillful application of internationalization techniques for fluid multilingual
            translation;
          </li>
          <li>
            📌 Expertise in harnessing third-party APIs, amplifying the website's capabilities;
          </li>
          <li>
            📌 Proficiency in Vue.js Composition API, unlocking dynamic and efficient web
            development.
          </li>
        </ul>
      </SectionTemplate>
    </article>
  </MainLayout>
</template>

<script setup>
import { MainLayout } from '../layouts';
import { SkillsGroup, SkillImage, SectionTemplate } from '../components';
</script>
