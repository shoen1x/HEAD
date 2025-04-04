<script lang="ts">
    let { children } = $props();
</script>

<div class="relative flex justify-center items-center flex-col w-full h-full gap-4 bg-black/25 backdrop-blur-3xl p-12 rounded-lg">
    <h1>
      Minimum yang disyorkan
    </h1>
    <h2>
      Berikut adalah elemen penting untuk mana-mana dokumen web (laman web/apl):
    </h2>
    <pre class="bg-[#20405c] w-full h-full inline-block whitespace-pre-line *:whitespace-pre-wrap">
        <code>&lt;meta charset="utf-8" /&gt;</code>
        <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;</code>
        <code>
            &lt;!--
                2 meta tag di atas *mesti* didahulukan di &lt;head&gt;
                untuk memastikan penyampaian dokumen yang betul secara konsisten.
                Mana-mana elemen &lt;head&gt; lain harus datang *selepas* tag ini.
            --&gt;
        </code>
    </pre>
    <p class="block relative w-full h-full whitespace-pre-wrap">
      <b>`meta charset`</b> - mentakrifkan pengekodan (encoding) laman web, `utf-8` ialah standard

      <b>`meta name="viewport"`</b> - tetapan viewport yang berkaitan dengan responsif antara muka mudah alih

      <b>`width=device-width`</b> - gunakan lebar fizikal peranti (bagus untuk antara muka mudah alih!)

      <b>`initial-scale=1`</b> - zum permulaan, 1 bermaksud tiada zum
    </p>
  </div>