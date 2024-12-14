<script lang="ts">
    let { children } = $props();
</script>

<h2 class="mt-2 text-xl font-semibold tracking-tight text-white p-4 rounded-lg max-lg:text-center bg-gray-950">
    {@render children?.()}
</h2>