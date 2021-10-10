<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import axios from 'axios'
	export async function load({ page }) {
		let result = await axios.get(`http://localhost:1337/posts?slug=${page.params.slug}`)
        return {
            props: {
                post: result.data[0]
            }
        }
	}
</script>
<script>
    import moment from 'moment'
    import marked from 'marked'
    import { onMount } from 'svelte';

    export let post
    let image = post.thumbnail.formats.medium || post.thumbnail || null
    let content
    onMount(() => {
        content = marked(post.content)
    })
</script>

<div class="flex flex-col md:flex-row gap-x-4 gap-y-4 p-4 lg:py-8 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md">
    <div class="w-full md:w-80 flex-shrink-0 flex flex-col gap-y-3">
        <h2 class="block md:hidden">
            {post.title}
        </h2>
        {#if image}
            <img src={`http://localhost:1337${image.url}`} alt={post.title} class="rounded-md">
        {/if}
        <div class="flex flex-col gap-y-3">
            <span>
                {#if post.categories.length}
                    {#each post.categories as cat}
                        <a href={`/category/${cat.slug}`} class="mr-2">
                            {cat.title}
                        </a>
                    {/each}
                {/if}
            </span>
            <span>
                Posted 
                <b>{moment(post.updated_at).fromNow()}</b>
            </span>
            <a href={`/author/${post.author.id}`} class="font-bold flex gap-x-2 items-center bg-indigo-500 text-gray-200 hover:text-gray-200 dark:bg-indigo-400 dark:text-gray-900 dark:hover:text-gray-900 rounded-full p-2 shadow-md">
                <img src={`http://localhost:1337${post.author.avatar.formats.thumbnail.url}`} 
                    alt={post.author.username}
                    class="w-16 h-16 rounded-full border-4 border-indigo-700"
                >
                {post.author.username}
                ({post.author.email})
            </a>
        </div>
    </div>
    <div>
        <h1 class="hidden md:block">
            {post.title}
        </h1>
        <p class="text-xl my-6">
            {post.description ? post.description : ''}
        </p>
        <div>
            {@html content}
        </div>
    </div>
</div>