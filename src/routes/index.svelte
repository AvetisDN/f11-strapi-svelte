<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
    import axios from 'axios'
	export async function load({ page }) {
        let resultPosts = await axios.get(`http://localhost:1337/posts?_sort=updated_at:DESC`)
        let posts = resultPosts.data

        return {
            props: {
                posts
            }
        }
	}
</script>
<script>
    import PostShort from '$lib/PostShort.svelte';
    export let posts

</script>

<div>
    <h1>Total Posts: {posts.length}</h1>
    <div class="mt-4 grid grid-cols-1 2xl:grid-cols-2 gap-4">
        {#if posts.length > 0}
            {#each posts as post}
                <PostShort {post} />
            {/each}
        {/if}
    </div>
</div>
