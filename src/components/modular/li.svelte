<script lang="ts">
    let { children } = $props();
</script>

<li class="w-full h-full p-2">
    {@render children?.()}
</li>