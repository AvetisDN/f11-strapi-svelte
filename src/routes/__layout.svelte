<script>
import Sidebar from "$lib/Sidebar.svelte";
import { onMount } from "svelte";

import "../app.postcss";

let theme

onMount(() => {

    theme = localStorage.theme || 'light'

})

const toggleTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light'
    localStorage.theme = theme
}

</script>

<div class={theme}>

    <div class="w-full min-h-screen bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 relative flex items-start flex-row-reverse lg:flex-row ">

        <Sidebar/>

        <div class="p-4 lg:p-6 self-stretch flex-grow mr-14 md:mr-0">
            <slot></slot>
        </div>
    </div>

    <div class="fixed bottom-0 right-0 pr-1 lg:top-0 lg:bottom-auto lg:p-4">
        <button
            class="bg-indigo-800 text-gray-200 dark:bg-indigo-300 dark:text-gray-900 font-bold w-12 h-12 rounded-full text-2xl"
            on:click={toggleTheme}
        >
            <i class="fas fa-sun hidden dark:block"></i>
            <i class="fas fa-moon block dark:hidden"></i>
        </button>
    </div>

    <div class="bg-yellow-500"></div>
    <div class="bg-sky-500"></div>
    <div class="bg-green-500"></div>
    <div class="bg-pink-500"></div>
    <div class="bg-indigo-500"></div>
    <div class="bg-teal-500"></div>
    <div class="text-yellow-500"></div>
    <div class="text-sky-500"></div>
    <div class="text-green-500"></div>
    <div class="text-pink-500"></div>
    <div class="text-indigo-500"></div>
    <div class="text-teal-500"></div>

</div>