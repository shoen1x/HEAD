<script lang="ts">
    let { children } = $props();
</script>

<h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-950 max-lg:text-center">
    {@render children?.()}
</h2>