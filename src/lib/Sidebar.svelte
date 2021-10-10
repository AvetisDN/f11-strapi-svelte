<script>
    import {slide} from 'svelte/transition'
    import {goto} from '$app/navigation'

    let open = false
    let submenu = 0
    let activeRoute = '/'

    const showSubmenu = (n) => {
        submenu = submenu === n ? 0 : n
    }
    const setActiveRoute = (uri) => {
        activeRoute = uri
        goto(activeRoute)
    }
    
</script>

<aside class={`sidebar ${open && 'open'}`}>
    <button on:click={() => open = !open} class="burger">
        <i class="fas fa-bars"></i>
    </button>
    <nav>
        <a href="/" class={activeRoute === '/' ? 'active' : ''} on:click|preventDefault={() => setActiveRoute('/')}>
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>

        <a href="/#" class={`parent-menu-item ${submenu === 1 ? 'open' : ''}`} on:click|preventDefault={() => showSubmenu(1)}>
            <i class="fas fa-laptop-code"></i>
            <span>Web Development</span>
            <i class="fas fa-caret-down caret"></i>
        </a>
        {#if submenu === 1}
            <div class='submenu' transition:slide={{duration: 300}}>
                <a href="/category/Frontend" class={activeRoute === '/category/Frontend' ? 'active' : ''} on:click|preventDefault={() => setActiveRoute('/category/Frontend')}>
                    <i class="fas fa-code"></i>
                    <span>Frontend</span>
                </a>
                <a href="/category/Backend" class={activeRoute === '/category/Backend' ? 'active' : ''} on:click|preventDefault={() => setActiveRoute('/category/Backend')}>
                    <i class="fas fa-terminal"></i>
                    <span>Backend</span>
                </a>
            </div>
        {/if}

        <a href="/#" class={`parent-menu-item ${submenu === 2 ? 'open' : ''}`} on:click|preventDefault={() => showSubmenu(2)}>
            <i class="fas fa-tablet-alt"></i>
            <span>Mobile Apps</span>
            <i class="fas fa-caret-down caret"></i>
        </a>
        {#if submenu === 2}
            <div class='submenu' transition:slide={{duration: 300}}>
                <a href="/category/Android" class={activeRoute === '/category/Android' ? 'active' : ''} on:click|preventDefault={() => setActiveRoute('/category/Android')}>
                    <i class="fab fa-android"></i>
                    <span>Android</span>
                </a>
                <a href="/category/iOS" class={activeRoute === '/category/iOS' ? 'active' : ''} on:click|preventDefault={() => setActiveRoute('/category/iOS')}>
                    <i class="fab fa-apple"></i>
                    <span>iOS</span>
                </a>
            </div>
        {/if}
    </nav>
</aside>
