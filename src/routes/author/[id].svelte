<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import axios from 'axios'
	export async function load({ page }) {
		let resultAuthor = await axios.get(`http://localhost:1337/users?id=${page.params.id}`)
        let author = resultAuthor.data[0]

        let resultPosts = await axios.get(`http://localhost:1337/posts?author=${page.params.id}`)
        let posts = resultPosts.data

        return {
            props: {
                author,
                posts
            }
        }
	}
</script>
<script>
    import PostShort from '$lib/PostShort.svelte';
    export let author
    export let posts
</script>

<div class="flex flex-col md:flex-row gap-x-4 gap-y-4 p-4 lg:py-8 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md">
    <div class="w-full md:w-80 flex-shrink-0 flex flex-col gap-y-3">
        <h2 class='flex items-center gap-x-4'>
            <img src={`http://localhost:1337${author.avatar.formats.thumbnail.url}`} 
                    alt={author.username}
                    class="w-16 h-16 rounded-full border-4 border-indigo-700"
                >
            {author.username}
        </h2>
    </div>
</div>
<div class="mt-4 grid grid-cols-1 2xl:grid-cols-2 gap-4">
    {#if posts.length > 0}
        {#each posts as post}
            <PostShort {post} />
        {/each}
    {/if}
</div>