<script lang="ts">
    let { children } = $props();
</script>

<li class="p-2">
    {@render children?.()}
</li>