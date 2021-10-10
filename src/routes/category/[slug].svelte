<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import axios from 'axios'
	export async function load({ page }) {
		let resultCategory = await axios.get(`http://localhost:1337/categories?slug=${page.params.slug}`)
        let category = resultCategory.data[0]

        let resultPosts = await axios.get(`http://localhost:1337/posts?categories=${category.id}`)
        let posts = resultPosts.data

        return {
            props: {
                category,
                posts
            }
        }
	}
</script>
<script>
    import PostShort from '$lib/PostShort.svelte';
    export let category
    export let posts
</script>

<div class="flex flex-col md:flex-row gap-x-4 gap-y-4 p-4 lg:py-8 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md">
    <div class="w-full md:w-80 flex-shrink-0 flex flex-col gap-y-3">
        <h2 class={`block text-${category.color.replace('_', '-')}`}>
            {category.title}
        </h2>
        {#if category.description}
            <p>
                { category.description }
            </p>
        {/if}
    </div>
</div>
<div class="mt-4 grid grid-cols-1 2xl:grid-cols-2 gap-4">
    {#if posts.length > 0}
        {#each posts as post}
            <PostShort {post} />
        {/each}
    {/if}
</div>