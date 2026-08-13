<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    tajuk: string;
    children?: Snippet;
    [key:string]: unknown;
  };

  let { tajuk, kandungan, children, ...restProps }: Props = $props();
</script>

<div
  id="kandungan-card"
  {...restProps}
  class="relative w-full overflow-hidden break-inside-avoid text-sm lg:text-base flex justify-start flex-col gap-2.5 lg:gap-4 bg-black/25 backdrop-blur-3xl p-6 lg:p-12 rounded-lg"
>
  <h1 class="font-bold">
    {tajuk}
  </h1>
  {@render children?.()}
</div>
