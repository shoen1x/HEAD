<script lang="ts">
    let { children } = $props();
  </script>

<p class="mt-2 max-w-full text-xl text-gray-600 text-left">
    {@render children?.()}
</p>