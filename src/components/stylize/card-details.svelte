<script lang="ts">
    interface Props {
        focusText?: string;
        details: any;
        class?: string;
    }

  let { focusText, details, class: className }: Props = $props();
</script>

<li class={className}>
   {#if focusText}<strong>`{focusText}`</strong> - {/if} {details}
</li>