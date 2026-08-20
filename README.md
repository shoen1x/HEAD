# 🤯 HEAD

> Panduan ringkas untuk elemen `<head>` HTML

[![Contributors](https://img.shields.io/github/contributors/joshbuchea/head.svg?style=for-the-badge)](https://github.com/joshbuchea/HEAD/graphs/contributors)
[![CC0](https://img.shields.io/badge/license-CC0-green.svg?style=for-the-badge)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Follow @joshbuchea on Mastodon](https://img.shields.io/badge/Follow_@joshbuchea-purple?logo=mastodon&logoColor=white&style=for-the-badge)](https://hachyderm.io/@joshbuchea)

## Kandungan

- [Minimum yang disyorkan](#minimum-yang-disyorkan)
- [Elemen](#elemen)
- [Susunan Disyorkan](#susunan-disyorkan)
- [Meta](#meta)
- [Pautan](#pautan)
- [Skrip](#skrip)
- [Ikon](#ikon)
- [Sosial](#sosial)
  - [Open Graph](#open-graph)
  - [Schema.org](#schemaorg)
  - [Google JSON-LD Schema](#google-json-ld-schema)
  - [Pinterest](#pinterest)
  - [OEmbed](#oembed)
  - [QQ/Wechat](#qqwechat)
  - [Dublin Core](#dublin-core)
  - [Fediverse](#fediverse)
- [Pelayar / Platform](#pelayar--platform)
  - [Apple iOS](#apple-ios)
  - [Google Android](#google-android)
  - [Google Chrome](#google-chrome)
- [Pelayar (Bahasa Cina)](#pelayar-bahasa-cina)
  - [360 Browser](#360-browser)
  - [QQ Mobile Browser](#qq-mobile-browser)
  - [UC Mobile Browser](#uc-mobile-browser)
- [Pautan Apl](#pautan-apl)
- [Tidak Digunakan](#tidak-digunakan)
- [Sumber Lain](#sumber-lain)
- [Projek Berkaitan](#projek-berkaitan)
- [Format lain](#format-lain)
- [Terjemahan](#-terjemahan)
- [Contributing](#-contributing)
  - [Contributors](#-contributors)
- [Author](#-author)
- [Malay Language Translator](#-malay-language-translator)
- [License](#-license)

## Minimum yang disyorkan

Berikut adalah elemen penting untuk mana-mana dokumen web (laman web/apl):

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!--
  2 meta tag di atas *mesti* didahulukan di <head>
  untuk memastikan penyampaian dokumen yang betul secara konsisten.
  Mana-mana elemen <Head> lain harus datang *selepas* tag ini.
 -->
<title>Page Title</title>
```

`meta charset` - mentakrifkan pengekodan (encoding) laman web, `utf-8` ialah standard

`meta name="viewport"` - tetapan viewport yang berkaitan dengan responsif antara muka mudah alih

`width=device-width` - gunakan lebar fizikal peranti (bagus untuk antara muka mudah alih!)

`initial-scale=1` - zum permulaan, 1 bermaksud tiada zum

## Elemen

Elemen `<head>` yang sah termasuk `meta`, `link`, `title`, `style`, `script`, `noscript` dan `base`.

Elemen-elemen ini memberikan maklumat tentang cara sesuatu dokumen harus dilihat, dan disampaikan, oleh teknologi web. cth. pelayar, enjin carian, bot, dsb.

```html
<!--
  Tetapkan pengekodan aksara untuk dokumen ini, supaya
  semua aksara dalam ruang UTF-8 (seperti emoji)
  disampaikan dengan betul.
-->
<meta charset="utf-8" />

<!-- Tetapkan tajuk dokumen -->
<title>Page Title</title>

<!-- Tetapkan URL asas untuk semua URL relatif dalam dokumen -->
<base href="https://example.com/page.html" />

<!-- Pautan ke fail CSS luaran -->
<link rel="stylesheet" href="styles.css" />

<!-- Digunakan untuk menambah CSS dalam dokumen -->
<style>
  /* ... */
</style>

<!-- Tag JavaScript & Bukan JavaScript -->
<script src="script.js"></script>
<script>
  // function(s) ke sini
</script>
<noscript>
  <!-- Tiada alternatif JS -->
</noscript>
```

## Susunan Disyorkan

Berikut ialah susunan elemen yang disyorkan dalam `<head>` untuk prestasi terbaik dan pemaparan dokumen yang betul:

1. `<meta charset>` — Pengisytiharan pengekodan aksara; **mesti** muncul dalam 1024 bait pertama dokumen
2. `<meta name="viewport">` — Tetapan Viewport; isytiharkan awal untuk memastikan pemaparan responsif yang betul
3. `<title>` — Tajuk dokumen; diletakkan selepas pengekodan/viewport untuk mengelakkan potensi pemaparan semula
4. Tag `<meta>` lain (penerangan, robot, dsb.)
5. Tag meta Graf Terbuka / Sosial
6. Tag `<link rel="canonical">` dan tag `<link>` lain (tidak termasuk helaian gaya dan petunjuk sumber)
7. `<link rel="preconnect">` / `<link rel="dns-prefetch">` — Petunjuk sumber; awal untuk memaksimumkan nilainya
8. `<link rel="stylesheet">` — CSS Luaran; Helaian gaya hendaklah diletakkan sebelum skrip
9. `<link rel="icon">` — Favicon
10. `<script>` — Skrip; gunakan `defer` atau `async` jika boleh untuk mengelakkan penyekatan pemaparan

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Tajuk Halaman</title>

  <meta name="description" content="Page description" />
  <!-- tag meta lain -->

  <!-- Tag meta Graf Terbuka / Sosial -->
  <meta property="og:title" content="Tajuk Halaman" />
  <!-- tag meta sosial lain -->

  <link rel="canonical" href="https://example.com/page.html" />
  <!-- tag pautan lain (tidak termasuk helaian gaya dan petunjuk sumber) -->

  <link rel="preconnect" href="https://example.com" />
  <link rel="dns-prefetch" href="https://example.com" />

  <link rel="stylesheet" href="styles.css" />

  <link rel="icon" href="favicon.ico" />

  <script defer src="script.js"></script>
</head>
```

## Meta

```html
<!--
  2 tag meta berikut *mesti* didahulukan di <head>
  untuk memastikan penyampaian dokumen yang betul secara konsisten.
  Mana-mana elemen `head` lain harus datang *selepas* tag ini.
-->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!--
  Membenarkan kawalan ke atas tempat sumber dimuatkan.
  Letakkan seawal mungkin di <head>, sebagai tag
  hanya terpakai kepada sumber yang diisytiharkan selepasnya.
-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />

<!-- Nama aplikasi web (hanya perlu digunakan jika laman web digunakan sebagai aplikasi) -->
<meta name="application-name" content="Application Name" />

<!-- Warna Tema untuk Chrome, Firefox OS dan Opera -->
<meta name="theme-color" content="#4285f4" />

<!-- Menunjukkan skema warna yang disokong untuk halaman (light, dark, atau kedua-duanya) -->
<meta name="color-scheme" content="light dark" />

<!-- Penerangan ringkas dokumen (had kepada 150 aksara) -->
<!-- Kandungan ini *boleh* digunakan sebagai sebahagian daripada hasil carian enjin. -->
<meta name="description" content="A description of the page" />

<!-- Kawal tingkah laku rangkak (crawling) dan pengindeksan (indexing) enjin carian -->
<meta name="robots" content="index,follow" /><!-- Semua Enjin Carian -->
<meta name="googlebot" content="index,follow" /><!-- Khusus Google -->

<!-- Memberitahu Google untuk tidak menunjukkan kotak carian pautan tapak -->
<meta name="google" content="nositelinkssearchbox" />

<!-- Beritahu Google supaya tidak menyediakan terjemahan untuk dokumen ini -->
<meta name="google" content="notranslate" />

<!-- Sahkan pemilikan laman web -->
<meta
  name="google-site-verification"
  content="verification_token"
/><!-- Konsol Carian Google -->
<meta
  name="yandex-verification"
  content="verification_token"
/><!-- Juruweb Yandex -->
<meta
  name="msvalidate.01"
  content="verification_token"
/><!-- Pusat Juruweb Bing -->
<meta
  name="p:domain_verify"
  content="code_from_pinterest"
/><!-- Konsol Pinterest-->
<meta
  name="norton-safeweb-site-verification"
  content="norton_code"
/><!-- Web Selamat Norton -->

<!-- Kenal pasti perisian yang digunakan untuk membina dokumen (iaitu - WordPress, Dreamweaver) -->
<meta name="generator" content="program" />

<!-- Penerangan ringkas tentang subjek dokumen anda -->
<meta name="subject" content="your document's subject" />

<!-- Memberikan penilaian umur umum berdasarkan kandungan dokumen -->
<meta name="rating" content="General" />

<!-- Membenarkan kawalan ke atas cara maklumat perujuk dihantar -->
<meta name="referrer" content="no-referrer" />

<!-- Lumpuhkan pengesanan automatik dan pemformatan yang berkemungkinan nombor telefon -->
<meta name="format-detection" content="telephone=no" />

<!-- Tag Geo -->
<meta
  name="ICBM"
  content="latitude, longitude"
/><!-- Koordinat geografi (latitud, longitud) dalam darjah perpuluhan; cth. content="48.8566, 2.3522" -->
<meta
  name="geo.position"
  content="latitude;longitude"
/><!-- Koordinat geografi; latitud dan longitud dipisahkan oleh titik koma -->
<meta
  name="geo.region"
  content="country[-state]"
/><!-- Kod negara (ISO 3166-1): wajib, kod negeri (ISO 3166-2): pilihan; cth. content="US" / content="US-NY" -->
<meta
  name="geo.placename"
  content="city/town"
/><!-- cth. content="New York City" -->

<!-- Pengewangan Web https://webmonetization.org/docs/getting-started -->
<meta name="monetization" content="$paymentpointer.example" />
```

**Nota:** Tag geo **tidak** digunakan oleh pelayar secara langsung — ia bertujuan untuk enjin carian, perayap web dan perkhidmatan berasaskan lokasi untuk memahami perkaitan geografi kandungan halaman. `ICBM` (dinamakan sempena konvensyen alamat ICBM tentera) dan `geo.position` kedua-duanya menyatakan koordinat dalam darjah perpuluhan; `ICBM` menggunakan pemisah koma manakala `geo.position` menggunakan titik koma. `geo.region` mengenal pasti negara (dan secara pilihan negeri/rantau) menggunakan kod ISO dan `geo.placename` menyediakan nama tempat yang boleh dibaca oleh manusia.

- 📖 [Meta tags that Google understands](https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=en)
- 📖 [WHATWG Wiki: MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions)
- 📖 [ICBM on Wikipedia](https://en.wikipedia.org/wiki/ICBM_address#Modern_use)
- 📖 [Geotagging on Wikipedia](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

## Pautan

```html
<!-- Menunjuk pada lembaran gaya luaran -->
<link rel="stylesheet" href="https://example.com/styles.css" />

<!-- Membantu mengelakkan isu kandungan pendua -->
<link rel="canonical" href="https://example.com/article/?page=2" />

<!-- Pautan ke fail JSON yang menentukan kelayakan "pemasangan" untuk aplikasi web -->
<link rel="manifest" href="manifest.json" />

<!-- Pautan kepada maklumat tentang pengarang dokumen -->
<link rel="author" href="humans.txt" />

<!-- Merujuk kepada pernyataan hak cipta yang digunakan pada konteks pautan -->
<link rel="license" href="copyright.html" />

<!-- Memberi rujukan kepada lokasi dalam dokumen anda yang mungkin dalam bahasa lain -->
<link rel="alternate" href="https://es.example.com/" hreflang="es" />

<!-- Memberikan maklumat tentang pengarang atau orang lain
Digunakan untuk RelMeAuth, satu bentuk pengesahan identiti yang diedarkan.
Lihat https://microformats.org/wiki/RelMeAuth untuk mengetahui lebih lanjut -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html" />
<link rel="me" href="mailto:name@example.com" />
<link rel="me" href="sms:+15035550125" />

<!-- Menyediakan rujukan kendiri - berguna apabila dokumen mempunyai beberapa rujukan yang mungkin -->
<link
  rel="self"
  type="application/atom+xml"
  href="https://example.com/atom.xml"
/>

<!-- Dokumen sebelumnya dan seterusnya dalam satu siri dokumen, masing-masing -->
<link rel="prev" href="https://example.com/article/?page=1" />
<link rel="next" href="https://example.com/article/?page=3" />

<!-- Memberitahu URL apabila anda memautkannya pada dokumen anda Maklumat lanjut di https://webmention.net -->
<link rel="webmention" href="https://example.com/webmention" />

<!-- Membolehkan penyiaran ke domain anda sendiri menggunakan klien Micropub Maklumat lanjut di https://indieweb.org/Micropub -->
<link rel="micropub" href="https://example.com/micropub" />

<!-- Membolehkan anda menggunakan laman web anda dengan IndieAuth, penyelesaian identiti yang membolehkan anda mengesahkan dengan nama domain anda. Baca lebih lanjut di https://indieauth.net. -->
<link rel="token_endpoint" href="https://example.com/token" />

<!-- Open Search -->
<link
  rel="search"
  href="/open-search.xml"
  type="application/opensearchdescription+xml"
  title="Search Title"
/>

<!-- Suapan (Feeds) -->
<link
  rel="alternate"
  href="https://feeds.feedburner.com/example"
  type="application/rss+xml"
  title="RSS"
/>
<link
  rel="alternate"
  href="https://example.com/feed.atom"
  type="application/atom+xml"
  title="Atom 0.3"
/>

<!-- prapengambilan (prefetching), pramuat (preloading), prapelayar (prebrowsing) -->
<!-- Info lanjut: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
<link rel="dns-prefetch" href="//example.com/" />
<link rel="preconnect" href="https://www.example.com/" />
<link rel="prefetch" href="https://www.example.com/" />

<link rel="preload" href="image.png" as="image" />
```

**Nota:** [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) (`manifest.json`) ialah cara merentas platform yang disyorkan untuk mengisytiharkan sifat aplikasi web yang boleh dipasang — termasuk mod `nama`, `ikon`, `warna_tema` dan `paparan` — dalam satu fail, dan bukannya bergantung pada berbilang teg `<meta>` khusus platform.

- 📖 [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml)
- 📖 [Web App Manifest (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)

## Skrip

```html
<!--
Skrip: letakkan tag <script> di hujung <body> apabila boleh.
Atribut berikut mengawal tingkah laku pemuatan apabila diletakkan di <head>:
-->

<!-- Menyekat penghuraian HTML dan pemaparan kandungan sehingga skrip diambil dan dilaksanakan -->
<script src="script.js"></script>

<!-- Skrip akan diambil selari dengan penghuraian dan dilaksanakan sebaik sahaja ia tersedia (sebelum penghuraian selesai) -->
<script async src="script.js"></script>

<!-- Skrip akan diambil selari dengan penghuraian dan dilaksanakan apabila halaman selesai dihuraikan -->
<script defer src="script.js"></script>

<!-- async diutamakan dalam pelayar moden; defer bertindak sebagai sandaran untuk pelayar lama yang tidak menyokong async -->
<script async defer src="script.js"></script>

<!-- Skrip sebaris -->
<script>
  // fungsi pergi ke sini
</script>

<!-- Integriti Subsumber (SRI): gunakan atribut integriti untuk mengesahkan bahawa sumber yang diambil telah dihantar tanpa manipulasi yang tidak dijangka -->
<script
  src="https://example.com/script.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
></script>
```

- 📖 [async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
- 📖 [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity)

## ikon

```html
<!-- Untuk IE 10 dan ke bawah -->
<!-- Letakkan favicon.ico dalam direktori akar - tiada tag diperlukan -->

<!-- Ikon dalam resolusi tertinggi yang diperlukan -->
<link rel="icon" sizes="192x192" href="/path/to/icon.png" />

<!-- Ikon Apple Touch (guna semula 192px icon.png) -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
```

- 📖 [All About Favicons (And Touch Icons)](https://bitsofco.de/all-about-favicons-and-touch-icons/)
- 📖 [Favicon Cheat Sheet](https://github.com/audreyfeldroy/favicon-cheat-sheet)
- 📖 [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors)

## Sosial

### Graf Terbuka

> [Protokol Graf Terbuka](https://ogp.me/) ialah piawaian de facto untuk mengawal penampilan kandungan anda apabila dikongsi di platform sosial. Pada asalnya dicipta oleh Facebook, ia kini digunakan oleh kebanyakan platform utama — termasuk LinkedIn, X (sebagai sandaran apabila tag Kad Twitter tiada), Discord, Slack, iMessage, Mastodon, Bluesky dan WhatsApp.

```html
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Tajuk Kandungan" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta
  property="og:image:alt"
  content="Penerangan tentang apa yang ada dalam imej (bukan kapsyen)"
/>
<meta property="og:description" content="Penerangan Di Sini" />
<meta property="og:site_name" content="Nama Tapak" />
<meta property="og:locale" content="en_US" />
<meta property="article:author" content="" />
```

- 📖 [Open Graph protocol](https://ogp.me/)
- 🛠 Test your page with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Schema.org

```html
<html lang="" itemscope itemtype="https://schema.org/Article">
  <head>
    <link rel="author" href="" />
    <link rel="publisher" href="" />
    <meta itemprop="name" content="Tajuk Kandungan" />
    <meta
      itemprop="description"
      content="Huraian kandungan kurang daripada 200 aksara"
    />
    <meta itemprop="image" content="https://example.com/image.jpg" />
  </head>
</html>
```

**Nota:** Tag meta ini memerlukan atribut `itemscope` dan `itemtype` ditambah pada tag `<html>`.

- 📖 [Getting Started - schema.org](https://schema.org/docs/gs.html)
- 🛠 Test your page with the [Rich Results Test](https://search.google.com/test/rich-results)

### Skema JSON-LD Google

Berikut digunakan oleh Google untuk membantu menyediakan laman web anda dengan hasil graf pengetahuan apabila seseorang mencari anda di Google (ini ialah anak tetingkap di sebelah kanan hasil carian yang biasanya muncul untuk jenama yang lebih besar):

```html
<script type="application/ld+json">
  {
    "@context": "http://schema.org",

    "@type": "Organisasi",
    "name": "yourbrand.com",
    "url": "https://www.yourbrand.com/",
    "logo": "https://www.yourbrand.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/yourbrand",
      "https://twitter.com/yourbrand",
      "https://uk.pinterest.com/yourbrand/",
      "https://www.instagram.com/yourbrand/",
      "https://www.linkedin.com/company/yourbrand-com"
    ]
  }
</script>
```

### Pinterest

Pinterest membolehkan anda menghalang orang daripada menyimpan sesuatu daripada laman web anda, menurut [pusat bantuan mereka](https://help.pinterest.com/en/business/article/prevent-saves-to-pinterest-from-your-site). `description` adalah pilihan.

```html
<meta
  name="pinterest"
  content="nopin"
  description="Maaf, anda tidak boleh menyimpan daripada laman web saya!"
/>
```

### OEmbed

```html
<link
  rel="alternate"
  type="application/json+oembed"
  href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json"
  title="oEmbed Profile: JSON"
/>
<link
  rel="alternate"
  type="text/xml+oembed"
  href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml"
  title="oEmbed Profile: XML"
/>
```

- 📖 [oEmbed format](https://oembed.com/)

### QQ/Wechat

Pengguna yang berkongsi halaman web ke qq wechat akan mempunyai mesej berformat

```html
<meta itemprop="name" content="share title" />
<meta
  itemprop="image"
  content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png"
/>
<meta name="description" itemprop="description" content="share content" />
```

- 📖 [Dokumen Format Kod](http://open.mobile.qq.com/api/mqq/index#api:setShareInfo)

### Dublin Core

[Dublin Core](https://www.dublincore.org/) ialah perbendaharaan kata metadata yang diseragamkan sebagai [ISO 15836](https://www.iso.org/standard/71339.html) dan diselenggarakan oleh Inisiatif Metadata Dublin Core (DCMI). Ia mentakrifkan lima belas elemen teras untuk menerangkan sumber dan digunakan secara meluas dalam perpustakaan digital, repositori institusi, penerbitan akademik dan portal kerajaan. Untuk menggunakan Dublin Core dalam HTML, isytiharkan ruang nama DC dan kemudian tambahkan elemen yang dikehendaki sebagai tag `<meta>` dengan awalan `DC.`.

```html
<!-- Isytiharkan ruang nama Dublin Core -->
<link rel="schema.DC" href="https://purl.org/dc/elements/1.1/" />

<meta name="DC.title" content="Tajuk Halaman" />
<meta name="DC.creator" content="Nama Pengarang" />
<meta name="DC.subject" content="Kata Kunci; Topik" />
<meta
  name="DC.description"
  content="Penerangan ringkas tentang kandungan halaman"
/>
<meta name="DC.publisher" content="Nama Penerbit" />
<meta name="DC.contributor" content="Nama Penyumbang" />
<meta name="DC.date" content="YYYY-MM-HH" />
<meta name="DC.type" content="Teks" />
<meta name="DC.format" content="text/html" />
<meta name="DC.identifier" content="https://example.com/page.html" />
<meta name="DC.source" content="https://example.com/original-source" />
<meta name="DC.language" content="en" />
<meta name="DC.relation" content="https://example.com/related" />
<meta name="DC.coverage" content="Liputan ruang atau masa" />
<meta name="DC.rights" content="Nama Pemilik Hak Cipta" />
```

- 📖 [Dublin Core Metadata Element Set](https://www.dublincore.org/specifications/dublin-core/dces/)
- 📖 [Using Dublin Core in HTML](https://www.dublincore.org/specifications/dublin-core/dcq-html/)

### Fediverse

Sesetengah perisian Fediverse seperti Mastodon membolehkan anda meletakkan pemegang Fediverse anda dalam tag meta yang akan dipaparkan dalam embed ke laman web anda. Selain tag, anda juga perlu menambah domain anda ke senarai laman web yang dibenarkan dalam "Tetapan -> Profil awam -> Pengesahan -> Atribusi pengarang" (untuk Mastodon).

```html
<meta name="fediverse:creator" content="@handle@example.org" />
```

## Pelayar / Platform

### Apple iOS

```html
<!-- Sepanduk Apl Pintar -->
<meta
  name="apple-itunes-app"
  content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT"
/>

<!-- Lumpuhkan pengesanan automatik dan pemformatan yang berkemungkinan nombor telefon -->
<meta name="format-detection" content="telephone=no" />

<!-- Ikon Pelancaran (180x180px atau lebih besar) -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

<!-- Pelancaran Imej Skrin -->
<link rel="apple-touch-startup-image" href="/path/to/launch.png" />

<!-- Pelancaran Tajuk Ikon -->
<meta name="apple-mobile-web-app-title" content="App Title" />

<!-- Dayakan mod kendiri (skrin penuh). -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- Penampilan bar status (tiada kesan melainkan mod kendiri didayakan) -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<!-- Port pandangan sesuai untuk telefon bertakuk (iPhone X dan yang lebih baharu); tambah viewport-fit=cover pada tag meta port pandangan sedia ada anda -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, viewport-fit=cover"
/>

<!-- Pautan dalam apl iOS -->
<meta
  name="apple-itunes-app"
  content="app-id=APP-ID, app-argument=http/url-sample.com"
/>
<link rel="alternate" href="ios-app://APP-ID/http/url-sample.com" />
```

- 📖 [Mengkonfigurasi Aplikasi Web](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

**Nota:** Sifat seperti tajuk aplikasi (`apple-mobile-web-app-title`), mod paparan/kendiri dan ikon aplikasi (`apple-touch-icon`) dikonfigurasikan dengan lebih andal dan mudah alih menggunakan [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) (`<link rel="manifest">`), yang merupakan pendekatan yang disyorkan untuk Aplikasi Web Progresif (PWA). Tag meta khusus Apple kekal berguna sebagai sandaran untuk versi iOS yang lebih lama.

### Google Android

```html
<meta name="theme-color" content="#E64545" />

<!-- Tambahkan pada skrin utama -->
<meta name="mobile-web-app-capable" content="yes" />
<!-- Info lanjut: https://developer.chrome.com/multidevice/android/installtohomescreen -->

<!-- Pautan dalam apl Android -->
<meta name="google-play-app" content="app-id=package-name" />
<link rel="alternate" href="android-app://package-name/http/url-sample.com" />
```

**Nota:** `theme-color` dan tingkah laku "tambah ke skrin utama" / kendiri ditakrifkan dengan lebih baik menggunakan [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) (`<link rel="manifest">`). Tag meta `theme-color` masih boleh berfungsi sebagai sandaran untuk pelayar yang belum menyokong sifat `theme-color` manifes.

### Google Chrome

```html
<link
  rel="chrome-webstore-item"
  href="https://chrome.google.com/webstore/detail/APP_ID"
/>

<!-- Lumpuhkan gesaan terjemahan -->
<meta name="google" content="notranslate" />
```

## Pelayar (Bahasa Cina)

### 360 Browser

```html
<!-- Pilih susunan rendering engine -->
<meta name="renderer" content="webkit|ie-comp|ie-stand" />
```

### QQ Mobile Browser

```html
<!-- Mengunci skrin ke dalam orientasi yang ditentukan -->
<meta name="x5-orientation" content="landscape/portrait" />

<!-- Paparkan dokumen ini dalam skrin penuh -->
<meta name="x5-fullscreen" content="true" />

<!-- Dokumen akan dipaparkan dalam "mod aplikasi" (skrin penuh, dsb.) -->
<meta name="x5-page-mode" content="app" />
```

### UC Mobile Browser

```html
<!-- Mengunci skrin ke dalam orientasi yang ditentukan -->
<meta name="screen-orientation" content="landscape/portrait" />

<!-- Paparkan dokumen ini dalam skrin penuh -->
<meta name="full-screen" content="yes" />

<!-- UC browser akan memaparkan imej walaupun dalam "mod teks" -->
<meta name="imagemode" content="force" />

<!-- Dokumen akan dipaparkan dalam "mod aplikasi" (skrin penuh, isyarat melarang, dsb.) -->
<meta name="browsermode" content="application" />

<!-- Melumpuhkan "mod malam" UC browser untuk dokumen ini -->
<meta name="nightmode" content="disable" />

<!-- Ringkaskan dokumen untuk mengurangkan pemindahan data -->
<meta name="layoutmode" content="fitscreen" />

<!-- Lumpuhkan ciri UC browser untuk "meningkatkan fon apabila terdapat banyak perkataan dalam dokumen ini" -->
<meta name="wap-font-scale" content="no" />
```

- 📖 [Dokumen UC Browser](https://www.uc.cn/download/UCBrowser_U3_API.doc)

## Pautan Apl

```html
<!-- iOS -->
<meta property="al:ios:url" content="applinks://docs" />
<meta property="al:ios:app_store_id" content="12345" />
<meta property="al:ios:app_name" content="App Links" />

<!-- Android -->
<meta property="al:android:url" content="applinks://docs" />
<meta property="al:android:app_name" content="App Links" />
<meta property="al:android:package" content="org.applinks" />

<!-- Web fall back -->
<meta property="al:web:url" content="https://applinks.org/documentation" />
```

- 📖 [App Links](https://developers.facebook.com/docs/applinks)

## Tidak Digunakan

Untuk tag dan elemen yang pernah menjadi sebahagian daripada panduan ini tetapi tidak lagi disokong (keserasian Internet Explorer, Tab Pin Safari, pengesahan Alexa, dsb.), lihat [DEPRECATED.md](https://github.com/joshbuchea/HEAD/blob/master/DEPRECATED.md).

## Sumber Lain

- 📖 [HTML5 Boilerplate Docs: The HTML](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/html.md)
- 📖 [HTML5 Boilerplate Docs: Extend and customize](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md)

## Projek Berkaitan

- [Atom HTML Head Snippets](https://github.com/joshbuchea/atom-html-head-snippets) - Pakej atom untuk coretan `HEAD`
- [Sublime Text HTML Head Snippets](https://github.com/marcobiedermann/sublime-head-snippets) - Pakej Sublime Text untuk coretan `HEAD`
- [head-it](https://github.com/hemanth/head-it) - Antara muka CLI untuk coretan `HEAD`
- [vue-head](https://github.com/ktquez/vue-head) - Memanipulasi maklumat meta teg `HEAD` untuk Vue.js

## 🌐 Terjemahan

- [Bahasa](https://github.com/rijdz/HEAD)
- [Bengali](https://github.com/AveyBD/HEAD)
- [Brazilian Portuguese](https://github.com/Webschool-io/HEAD)
- [Chinese (Simplified)](https://github.com/Amery2010/HEAD)
- [German](https://github.com/Shidigital/HEAD)
- [Italian](https://github.com/Fakkio/HEAD)
- [Japanese](https://coliss.com/articles/build-websites/operation/work/collection-of-html-head-elements.html)
- [Korean](https://github.com/Lutece/HEAD)
- [Malay](https://github.com/shoen1x/HEAD)
- [Russian/Русский](https://github.com/Konfuze/HEAD)
- [Spanish](https://github.com/alvaroadlf/HEAD)
- [Turkish/Türkçe](https://github.com/mkg0/HEAD)
- [Ukrainian](https://github.com/Shramkoweb/HEAD)

## 🤝 Contributing

**Open an issue or a pull request to suggest changes or additions.**

### Guide

The **HEAD** repository consists of two branches:

#### 1. `master`

This branch consists of the `README.md` file that is reflected on the [htmlhead.dev](https://htmlhead.dev/) website. All changes to the content of the guide should be made in this file.

Please follow these steps for pull requests:

{:.list-style-default}

- Modify only one tag, or one related set of tags at a time
- Use double quotes on attributes
- Don't include a trailing slash in self-closing elements — the HTML5 spec says they're optional
- Consider including a link to documentation that supports your change

#### 2. `gh-pages`

This branch is responsible for the [htmlhead.dev](https://htmlhead.dev/) website. We use [Jekyll](https://jekyllrb.com/) to deploy the `README.md` markdown file to [GitHub Pages](https://pages.github.com/). All website related modifications should be made in this branch.

You may find it helpful to review the [Jekyll Docs](https://jekyllrb.com/docs/home/) and understand how Jekyll works before working in this branch.

## 🌟 Contributors

Check out all the super awesome [contributors](https://github.com/joshbuchea/HEAD/graphs/contributors) 🤩

## 👤 Author

**Josh Buchea**

- GitHub: [@joshbuchea](https://github.com/joshbuchea)
- Mastodon: [@joshbuchea@hachyderm.io](https://hachyderm.io/@joshbuchea)

## 💛 Support

If this project was helpful for you or your organization, please considering supporting my work directly:

- 💛 [Sponsor me on GitHub](https://github.com/sponsors/joshbuchea)
- ⭐️ [Star this project on GitHub](https://github.com/joshbuchea/HEAD)
- 🐙 [Follow me on GitHub](https://github.com/joshbuchea)
- 🐘 [Follow me on Mastodon](https://hachyderm.io/@joshbuchea)

Everything helps, thanks! 🙏

— Josh

## 👤 Malay Language Translator

**NMVX**

- GitHub: [@shoen1x](https://github.com/shoen1x)
- Email: [shoenixstudios@gmail.com](mailto:shoenixstudios@gmail.com)

## 📝 License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
