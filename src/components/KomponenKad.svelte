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

<div class="relative w-full lg:w-[45%] text-sm lg:text-base flex justify-start items-start flex-col gap-2.5 lg:gap-4 bg-black/25 backdrop-blur-3xl p-4 lg:p-12 rounded-lg">
  <h1 class="font-bold">
    {tajuk}
  </h1>
  {#if kandungan}
    <h2>
      {kandungan}
    </h2>
  {/if}
  {@render children?.()}
</div>