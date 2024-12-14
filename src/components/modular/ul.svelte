<script lang="ts">
    let { children } = $props();
</script>

<ul class="w-full h-full my-2 lg:my-4">
    {@render children?.()}
</ul>