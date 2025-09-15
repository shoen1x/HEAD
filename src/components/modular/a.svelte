<script lang="ts">
  let { children, ...props } = $props();
</script>

<a
    {...props}
    target="_blank"
    class="font-medium underline">
        {@render children()}
</a>