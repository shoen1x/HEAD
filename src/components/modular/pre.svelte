<script lang="ts">
    let { children } = $props();
</script>

<pre class="bg-[#20405c] w-full h-full whitespace-pre-wrap overflow-x-scroll">
    {@render children?.()}
</pre>