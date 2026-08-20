<script lang="ts">
    let { children, ...props } = $props();
</script>

<ol {...props} class="list-decimal inline-block list-inside *:pb-3">
    {@render children()}
</ol>