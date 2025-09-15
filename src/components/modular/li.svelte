<script lang="ts">
    let { children, ...props } = $props();
</script>


<li {...props}>
    {@render children()}
</li>