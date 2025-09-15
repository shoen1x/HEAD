<script lang="ts">
    type Props = {
        tajuk: string;
        kandungan: string | null;
        children?: import('svelte').Snippet;
    };

    let {
      tajuk,
      kandungan,
      children
    }: Props = $props();
</script>

<div id="kandungan-card" class="relative h-full w-full z-1 overflow-hidden min-h-[36.875rem] text-sm lg:text-base flex justify-start items-start flex-col gap-2.5 lg:gap-4 bg-black/25 backdrop-blur-3xl p-6 lg:p-12 rounded-lg">
  <h1 class="font-bold">
    {tajuk}
  </h1> 
  {#if kandungan}
    <p>
      {kandungan}
    </p>
  {/if}
  {@render children?.()}
</div>