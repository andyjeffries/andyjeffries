<template>
  <header class="border-b border-gray-200 dark:border-gray-600 py-4 mb-10">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-2xl text-blue-800 dark:text-blue-200">Andy<span class="text-blue-500">Jeffries</span><span class="text-gray-400 text-lg">.co.uk</span></a>
      <div class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 text-gray-300 dark:text-gray-700 cursor-pointer js-switcher-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 text-gray-300 dark:text-gray-700 cursor-pointer js-switcher-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 text-gray-300 dark:text-gray-700 cursor-pointer js-switcher-system" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      searchInHeader: '',
    }
  },
  methods: {
    search() {
      if (this.searchInHeader == '') {
        this.$router.push('/articles/')
      } else {
        this.$router.push('/articles/?s=' + this.searchInHeader.toLowerCase())
        this.searchInHeader = ''
      }
    },
  },
}
</script>
