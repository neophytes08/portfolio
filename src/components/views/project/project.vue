<template>
  <div class="grid">
    <div v-for="(list,index) in projects" :key="index" class="p-4">
      <div class="border-gray-200 rounded-lg overflow-hidden">
        <!-- <img class="bg-white dark:bg-gray-900 lg:h-48 md:h-36 w-full object-scale-down object-center" :src="list.img" alt="pbld"> -->
        <img class="h-80 w-full object-contain object-center bg-white dark:bg-gray-900" :src="list.img" alt="blog">
        <div class="p-6 h-full dark:bg-gray-900 bg-white opacity-75">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 dark:text-gray-200 mb-1">{{list.subTitle}}</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">{{list.title}}</h1>
          <p class="leading-relaxed mb-3">{{list.description}}</p>
          <div class="flex items-center flex-wrap" v-for="(list, index) in list.github" :key="index">
            <a class="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0" target="_blank" :href="list">
              {{ list }}
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  data  () {
    return {
      sample: false,
      projects : [
				{
          img: require('@/assets/img/projectsThumbnail/empatkali.png'),
          subTitle:'VueJS, NodeJS',
          title: 'Empat Kali',
          description: `This is the official website of Empat Kali which technically built using WordPress. Bust most of its app i.e. admin, merchant, store dashboards were built using VueJS and NodeJS for API. I am also one of the front-end dev working on maintaning the website and wordpress plugins of Empatkali including plugins for Magento, Prestashop and Shopify.`,
          github: ['https://www.empatkali.co.id']

				},
				{
          img: require('@/assets/img/projectsThumbnail/mednefits.png'),
          subTitle:'AngularJS, Laravel',
          title: 'Mednefits App (Old Website)',
          description: `Old Mednefits using Angularjs 1 and Laravel. I am one of the Back-End devs that develop and maintained the old Mednefits System. Due to rapid growth of the system, the company decided to migrate it to newer framework to accomodate more users and system reliability. I am also responsible for creating APIs for mobile application of Mednefits as well as responsible for creating and mainting server performances using Amazon Web Services (AWS)`,
          github: ['https://www.mednefits.com']

				},
        {
          img: require('@/assets/img/projectsThumbnail/dasboardmednefits.png'),
          subTitle:'VueJS, AngularJS, Laravel, NodeJS',
          title: 'Mednefits App Migration',
          description: `App migration in their admin portal and mobile api, the current app of mednefits been using angularJs from the start and company is growing fast and app is getting slower due to outdated version of angular, I'm part of the project whos working to migrate the app from Laravel to Nodejs as a Back-End Dev.`,
          github: ['https://www.mednefits.com', 'https://github.com/neophytes08/mednefits_node_mobile_api']

				},
				{
          img: require('@/assets/img/projectsThumbnail/mednefits.png'),
          subTitle:'Laravel, VueJS',
          title: 'Mednefits Analytics Dashboard',
          description: `Developed the API for users consumption using Laravel. Collaborate to create api analytics to use by the Front-End Devs.`,
          github: ['https://github.com/neophytes08/vue_mednefits_analytics']

				},
			],
    }
  }
}
</script>

<style>

</style>