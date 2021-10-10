<script>
    import moment from 'moment'
    export let post
    
</script>

<div class="bg-gray-200 dark:bg-gray-800 rounded shadow-md flex overflow-hidden flex-col sm:flex-row">
    {#each post.categories as cat}
        {#if cat.color}
            <div class={`bar bg-${cat.color.replace('_','-')}`}></div>
        {/if}        
    {/each}
    
    {#if post.thumbnail}
        <div class=" p-4 w-full sm:w-40 flex-shrink-0">
            <a href={`/post/${post.slug}`} class="block">
                <img src={`http://localhost:1337${post.thumbnail.url}`} alt={post.title} class="w-full rounded">
            </a>
        </div>        
    {/if}
    <div class="flex-grow flex flex-col p-4">
        <a href={`/post/${post.slug}`}>
            <h2>{post.title}</h2>
        </a>
        <div class="flex justify-between mt-2 flex-col lg:flex-row">
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
                Posted by
                <a href={`/author/${post.author.id}`} class="font-bold">
                    {post.author.username}
                </a>
                <b>{moment(post.updated_at).fromNow()}</b>
            </span>
        </div>
        <div class="mt-4">
            {post.description ? post.description : ''}
        </div>
    </div>
</div>