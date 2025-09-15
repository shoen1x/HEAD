<script lang="ts">
    import type { Attachment } from 'svelte/attachments';

    let { children, ...props } = $props();
    let open: boolean = false;

    const toggleOverlay: Attachment = (element: Element) => {
        return () => {
            open = !open
        }
    }
</script>

<pre {@attach toggleOverlay} {...props} class="astro-code github-dark whitespace-pre-wrap flex justify-center p-4 rounded-lg w-full h-full min-h-64 max-h-72" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" data-language="html">
    {@render children?.()}
</pre>