<script lang="ts">
    let { children } = $props();
  </script>

<p class="inline-block w-full whitespace-pre-line">
    {@render children?.()}
</p>