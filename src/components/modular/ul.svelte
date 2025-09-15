<script lang="ts">
    let { children } = $props();
</script>

<ul class="inline-block relative list-none *:pb-3">
    {@render children?.()}
</ul>