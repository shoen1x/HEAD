<script lang="ts">
  let { children } = $props();
</script>

<h1 class="mt-2 font-bold max-lg:text-center">
    {@render children?.()}
</h1>