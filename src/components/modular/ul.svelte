<script lang="ts">
    let { children } = $props();
</script>

<ul class="my-1 lg:my-2 list-disc list-inside marker:text-[#20405c]">
    {@render children?.()}
</ul>