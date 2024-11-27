# 🤯 HEAD

> Panduan ringkas untuk elemen `<head>` HTML

[![Contributors](https://img.shields.io/github/contributors/joshbuchea/head.svg?style=for-the-badge)](https://github.com/joshbuchea/HEAD/graphs/contributors)
[![CC0](https://img.shields.io/badge/license-CC0-green.svg?style=for-the-badge)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Follow @joshbuchea on Mastodon](https://img.shields.io/badge/Follow_@joshbuchea-purple?logo=mastodon&logoColor=white&style=for-the-badge)](https://hachyderm.io/@joshbuchea)

## Kandungan

- [Minimum yang disyorkan](#minimum-yang-disyorkan)
- [Elemen](#elemen)
- [Meta](#meta)
- [Pautan](#pautan)
- [Icon](#icon)
- [Sosial](#sosial)
  - [Facebook Open Graph](#facebook-open-graph)
  - [Kad Twitter](#kad-twitter)
  - [Privasi Twitter](#privasi-twitter)
  - [Schema.org](#schemaorg)
  - [Pinterest](#pinterest)
  - [Artikel Segera Facebook](#artikel-Segera-Facebook)
  - [OEmbed](#oembed)
  - [QQ/Wechat](#qqwechat)
- [Pelayar / Platform](#pelayar--platform)
  - [Apple iOS](#apple-ios)
  - [Google Android](#google-android)
  - [Google Chrome](#google-chrome)
  - [Microsoft Internet Explorer](#microsoft-internet-explorer)
- [Pelayar (Bahasa Cina)](#pelayar-bahasa-cina)
  - [360 Browser](#360-browser)
  - [QQ Mobile Browser](#qq-mobile-browser)
  - [UC Mobile Browser](#uc-mobile-browser)
- [Pautan Apl](#pautan-apl)
- [Sumber Lain](#sumber-lain)
- [Projek Berkaitan](#projek-berkaitan)
- [Format lain](#format-lain)
- [Terjemahan](#-terjemahan)
- [Contributing](#🤝-contributing)
  - [Contributors](#🌟-contributors)
- [Author](#👤-author)
- [Malay Language Translator](#👤-malay-language-translator)
- [Lesen](#📝-lesen)

## Minimum yang disyorkan

Berikut adalah elemen penting untuk mana-mana dokumen web (laman web/apl):

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--
  2 meta tag di atas *mesti* didahulukan di <head>
  untuk memastikan penyampaian dokumen yang betul secara konsisten.
  Mana-mana elemen kepala lain harus datang *selepas* tag ini.
 -->
<title>Page Title</title>
```

`meta charset` - mentakrifkan pengekodan (encoding) laman web, `utf-8` ialah standard

`meta name="viewport"` - tetapan viewport yang berkaitan dengan responsif antara muka mudah alih

`width=device-width` - gunakan lebar fizikal peranti (bagus untuk antara muka mudah alih!)

`initial-scale=1` - zum permulaan, 1 bermaksud tiada zum

**[⬆ kembali ke atas](#Kandungan)**

## Elemen

Elemen `<head>` yang sah termasuk `meta`, `link`, `title`, `style`, `script`, `noscript` dan `base`.

Elemen-elemen ini memberikan maklumat tentang cara sesuatu dokumen harus dilihat, dan disampaikan, oleh teknologi web. cth. pelayar, enjin carian, bot, dsb.

```html
<!--
  Tetapkan pengekodan aksara untuk dokumen ini, supaya
  semua aksara dalam ruang UTF-8 (seperti emoji)
  disampaikan dengan betul.
-->
<meta charset="utf-8">

<!-- Tetapkan tajuk dokumen -->
<title>Page Title</title>

<!-- Tetapkan URL asas untuk semua URL relatif dalam dokumen -->
<base href="https://example.com/page.html">

<!-- Pautan ke fail CSS luaran -->
<link rel="stylesheet" href="styles.css">

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

**[⬆ kembali ke atas](#Kandungan)**

## Meta

```html
<!--
  2 tag meta berikut *mesti* didahulukan di <head>
  untuk memastikan penyampaian dokumen yang betul secara konsisten.
  Mana-mana elemen `head` lain harus datang *selepas* tag ini.
-->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!--
  Membenarkan kawalan ke atas tempat sumber dimuatkan.
  Letakkan seawal mungkin di <head>, sebagai tag
  hanya terpakai kepada sumber yang diisytiharkan selepasnya.
-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- Nama aplikasi web (hanya perlu digunakan jika laman web digunakan sebagai aplikasi) -->
<meta name="application-name" content="Application Name">

<!-- Warna Tema untuk Chrome, Firefox OS dan Opera -->
<meta name="theme-color" content="#4285f4">

<!-- Penerangan ringkas dokumen (had kepada 150 aksara) -->
<!-- Kandungan ini *boleh* digunakan sebagai sebahagian daripada hasil carian enjin. -->
<meta name="description" content="A description of the page">

<!-- Kawal tingkah laku rangkak (crawling) dan pengindeksan (indexing) enjin carian -->
<meta name="robots" content="index,follow"><!-- All Search Engines -->
<meta name="googlebot" content="index,follow"><!-- Google Specific -->

<!-- Memberitahu Google untuk tidak menunjukkan kotak carian pautan tapak -->
<meta name="google" content="nositelinkssearchbox">

<!-- Beritahu Google supaya tidak menyediakan terjemahan untuk dokumen ini -->
<meta name="google" content="notranslate">

<!-- Sahkan pemilikan laman web -->
<meta name="google-site-verification" content="verification_token"><!-- Konsol Carian Google -->
<meta name="yandex-verification" content="verification_token"><!-- Juruweb Yandex -->
<meta name="msvalidate.01" content="verification_token"><!-- Pusat Juruweb Bing -->
<meta name="alexaVerifyID" content="verification_token"><!-- Konsol Alexa -->
<meta name="p:domain_verify" content="code_from_pinterest"><!-- Konsol Pinterest-->
<meta name="norton-safeweb-site-verification" content="norton_code"><!-- Web Selamat Norton -->

<!-- Kenal pasti perisian yang digunakan untuk membina dokumen (iaitu - WordPress, Dreamweaver) -->
<meta name="generator" content="program">

<!-- Penerangan ringkas tentang subjek dokumen anda -->
<meta name="subject" content="your document's subject">

<!-- Memberikan penilaian umur umum berdasarkan kandungan dokumen -->
<meta name="rating" content="General">

<!-- Membenarkan kawalan ke atas cara maklumat perujuk dihantar -->
<meta name="referrer" content="no-referrer">

<!-- Lumpuhkan pengesanan automatik dan pemformatan yang berkemungkinan nombor telefon -->
<meta name="format-detection" content="telephone=no">

<!-- Tarik diri sepenuhnya daripada pengambilan DNS (DNS Prefetching) dengan menetapkan kepada "off" -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- Menentukan dokumen untuk muncul dalam bingkai tertentu -->
<meta http-equiv="Window-Target" content="_value">

<!-- Tag geo -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- Kod Negara (ISO 3166-1): wajib, kod negeri (ISO 3166-2): pilihan; cth. content="MY" / content="MY-KL" -->
<meta name="geo.placename" content="city/town"><!-- cth. content="Bandar Kuala Lumpur" -->

<!-- Pengewangan Web https://webmonetization.org/docs/getting-started -->
<meta name="monetization" content="$paymentpointer.example">
```

- 📖 [Tag meta yang Google faham](https://support.google.com/webmasters/answer/79812?hl=en)
- 📖 [WHATWG Wiki: MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions)
- 📖 [ICBM di Wikipedia](https://en.wikipedia.org/wiki/ICBM_address#Modern_use)
- 📖 [Geotagging di Wikipedia](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

**[⬆ kembali ke atas](#Kandungan)**

## Pautan

```html
<!-- Menunjuk pada lembaran gaya luaran -->
<link rel="stylesheet" href="https://example.com/styles.css">

<!-- Membantu mengelakkan isu kandungan pendua -->
<link rel="canonical" href="https://example.com/article/?page=2">

<!-- Pautan ke versi HTML AMP bagi dokumen semasa -->
<link rel="amphtml" href="https://example.com/path/to/amp-version.html">

<!-- Pautan ke fail JSON yang menentukan kelayakan "pemasangan" untuk aplikasi web -->
<link rel="manifest" href="manifest.json">

<!-- Pautan kepada maklumat tentang pengarang dokumen -->
<link rel="author" href="humans.txt">

<!-- Merujuk kepada pernyataan hak cipta yang digunakan pada konteks pautan -->
<link rel="license" href="copyright.html">

<!-- Memberi rujukan kepada lokasi dalam dokumen anda yang mungkin dalam bahasa lain -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- Menyediakan maklumat tentang pengarang atau orang lain -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- Pautan kepada dokumen yang menerangkan koleksi rekod, dokumen atau bahan lain yang mempunyai kepentingan sejarah -->
<link rel="archives" href="https://example.com/archives/">

<!-- Pautan ke sumber peringkat teratas dalam struktur hierarki -->
<link rel="index" href="https://example.com/article/">

<!-- Menyediakan rujukan kendiri - berguna apabila dokumen mempunyai beberapa rujukan yang mungkin -->
<link rel="self" type="application/atom+xml" href="https://example.com/atom.xml">

<!-- Dokumen pertama, terakhir, sebelumnya dan seterusnya dalam satu siri dokumen, masing-masing -->
<link rel="first" href="https://example.com/article/">
<link rel="last" href="https://example.com/article/?page=42">
<link rel="prev" href="https://example.com/article/?page=1">
<link rel="next" href="https://example.com/article/?page=3">

<!-- Digunakan apabila perkhidmatan pihak ketiga (3rd party) digunakan untuk mengekalkan blog -->
<link rel="EditURI" href="https://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">

<!-- Membentuk ulasan automatik apabila blog WordPress lain dipautkan ke blog atau siaran WordPress anda -->
<link rel="pingback" href="https://example.com/xmlrpc.php">

<!-- Memberitahu URL apabila anda memautkannya pada dokumen anda -->
<link rel="webmention" href="https://example.com/webmention">

<!-- Membolehkan penyiaran ke domain anda sendiri menggunakan klien Micropub -->
<link rel="micropub" href="https://example.com/micropub">

<!-- Buka Carian -->
<link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Search Title">

<!-- Suapan -->
<link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
<link rel="alternate" href="https://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

<!-- prapengambilan (prefetching), pramuat (preloading), prapelayar (prebrowsing) -->
<!-- Info lanjut: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
<link rel="dns-prefetch" href="//example.com/">
<link rel="preconnect" href="https://www.example.com/">
<link rel="prefetch" href="https://www.example.com/">
<link rel="prerender" href="https://example.com/">
<link rel="preload" href="image.png" as="image">
```

- 📖 [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml)

**[⬆ kembali ke atas](#kandungan)**

## Icon

```html
<!-- Untuk IE 10 dan ke bawah -->
<!-- Letakkan favicon.ico dalam direktori akar - tiada tag diperlukan -->

<!-- Ikon dalam resolusi tertinggi yang diperlukan -->
<link rel="icon" sizes="192x192" href="/path/to/icon.png">

<!-- Ikon Apple Touch (guna semula 192px icon.png) -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">

<!-- Ikon Tab Disemat Safari -->
<link rel="mask-icon" href="/path/to/icon.svg" color="blue">
```

- 📖 [Semua Tentang Favicon (Dan Ikon Sentuh)](https://bitsofco.de/all-about-favicons-and-touch-icons/)
- 📖 [Mencipta Ikon Tab Disemat](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html)
- 📖 [Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)
- 📖 [Ikon & Warna Pelayar](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/)

**[⬆ kembali ke atas](#Kandungan)**

## Sosial

### Facebook Open Graph
> Kebanyakan kandungan dikongsi ke Facebook sebagai URL, jadi adalah penting untuk anda menandakan laman web anda dengan tag Graf Terbuka (Open Graph tags) untuk mengawal cara kandungan anda dipaparkan di Facebook. [Lebih lanjut mengenai Facebook Open Graph Markup](https://developers.facebook.com/docs/sharing/webmasters#markup) 

```html
<meta property="fb:app_id" content="123456789">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:image:alt" content="A description of what is in the image (not a caption)">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="">
```

- 📖 [Buka protokol Graf](http://ogp.me/)
- 🛠 Uji halaman anda dengan [Penyahpepijat Perkongsian Facebook](https://developers.facebook.com/tools/debug/)

### Kad Twitter
> Dengan Kad Twitter, anda boleh melampirkan foto, video dan pengalaman media pada Tweet, membantu mendorong trafik ke laman web anda. [Lebih lanjut mengenai Kad Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="https://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="https://example.com/image.jpg">
<meta name="twitter:image:alt" content="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.">
```

- 📖 [Bermula dengan kad — Pembangun Twitter](https://dev.twitter.com/cards/getting-started)
- 🛠 Uji halaman anda dengan [Pengesah Kad Twitter](https://cards-dev.twitter.com/validator)

### Privasi Twitter
Jika anda membenamkan tweet dalam laman web anda, Twitter boleh menggunakan maklumat daripada laman web anda untuk menyesuaikan kandungan dan cadangan kepada pengguna Twitter. [Lebih lanjut mengenai pilihan privasi Twitter](https://dev.twitter.com/web/overview/privacy#what-privacy-options-do-website-publishers-have).
```html
<!-- tidak membenarkan Twitter daripada menggunakan maklumat laman web anda untuk tujuan pemperibadian -->
<meta name="twitter:dnt" content="on">
```

### Schema.org

```html
<html lang="" itemscope itemtype="https://schema.org/Article">
    <head>
      <link rel="author" href="">
      <link rel="publisher" href="">
      <meta itemprop="name" content="Content Title">
      <meta itemprop="description" content="Content description less than 200 characters">
      <meta itemprop="image" content="https://example.com/image.jpg">
```

**Nota:** Tag meta ini memerlukan atribut `itemscope` dan `itemtype` untuk ditambahkan pada tag `<html>`.

- 📖 [Memulakan - schema.org](https://schema.org/docs/gs.html)
- 🛠 Uji halaman anda dengan [Rich Results Test](https://search.google.com/test/rich-results)

### Pinterest

Pinterest membolehkan anda menghalang orang daripada menyimpan sesuatu daripada laman web anda, menurut [to their help center](https://help.pinterest.com/en/business/article/prevent-saves-to-pinterest-from-your-site). `description` adalah pilihan.

```html
<meta name="pinterest" content="nopin" description="Sorry, you can't save from my website!">
```

### Artikel Segera Facebook

```html
<meta charset="utf-8">
<meta property="op:markup_version" content="v1.0">

<!-- URL versi web artikel anda -->
<link rel="canonical" href="https://example.com/article.html">

<!-- Gaya yang akan digunakan untuk artikel ini -->
<meta property="fb:article_style" content="myarticlestyle">
```

- 📖 [Mencipta Artikel - Artikel Segera](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
- 📖 [Contoh Kod - Artikel Segera](https://developers.facebook.com/docs/instant-articles/reference)

### OEmbed

```html
<link rel="alternate" type="application/json+oembed"
  href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json"
  title="oEmbed Profile: JSON">
<link rel="alternate" type="text/xml+oembed"
  href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml"
  title="oEmbed Profile: XML">
```

- 📖 [Format oEmbed](https://oembed.com/)

### QQ/Wechat

Pengguna berkongsi halaman web ke qq wechat akan mempunyai mesej berformat

```html
<meta itemprop="name" content="share title">
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png">
<meta name="description" itemprop="description" content="share content">
```
- 📖 [Dokumen Format Kod](http://open.mobile.qq.com/api/mqq/index#api:setShareInfo)

**[⬆ kembali ke atas](#Kandungan)**

## Pelayar / Platform

### Apple iOS

```html
<!-- Sepanduk Apl Pintar -->
<meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">

<!-- Lumpuhkan pengesanan automatik dan pemformatan yang berkemungkinan nombor telefon -->
<meta name="format-detection" content="telephone=no">

<!-- Ikon Pelancaran (180x180px atau lebih besar) -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">

<!-- Pelancaran Imej Skrin -->
<link rel="apple-touch-startup-image" href="/path/to/launch.png">

<!-- Pelancaran Tajuk Ikon -->
<meta name="apple-mobile-web-app-title" content="App Title">

<!-- Dayakan mod kendiri (skrin penuh). -->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- Penampilan bar status (tiada kesan melainkan mod kendiri didayakan) -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- Pautan dalam apl iOS -->
<meta name="apple-itunes-app" content="app-id=APP-ID, app-argument=http/url-sample.com">
<link rel="alternate" href="ios-app://APP-ID/http/url-sample.com">
```

- 📖 [Mengkonfigurasi Aplikasi Web](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

### Google Android

```html
<meta name="theme-color" content="#E64545">

<!-- Tambahkan pada skrin utama -->
<meta name="mobile-web-app-capable" content="yes">
<!-- Info lanjut: https://developer.chrome.com/multidevice/android/installtohomescreen -->

<!-- Pautan dalam apl Android -->
<meta name="google-play-app" content="app-id=package-name">
<link rel="alternate" href="android-app://package-name/http/url-sample.com">
```

### Google Chrome

```html
<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/APP_ID">

<!-- Lumpuhkan gesaan terjemahan -->
<meta name="google" content="notranslate">
```

### Microsoft Internet Explorer

```html
<!-- Paksa IE 8/9/10 untuk menggunakan enjin pemaparan terbaharunya -->
<meta http-equiv="x-ua-compatible" content="ie=edge">

<!-- Lumpuhkan pengesanan automatik dan pemformatan yang berkemungkinan normbor telefon melalui sambungan penyemak imbas Skype Toolbar -->
<meta name="skype_toolbar" content="skype_toolbar_parser_compatible">

<!-- Windows Tiles -->
<meta name="msapplication-config" content="/browserconfig.xml">
```

Penanda xml minimum yang diperlukan untuk `browserconfig.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
   <msapplication>
     <tile>
        <square70x70logo src="small.png"/>
        <square150x150logo src="medium.png"/>
        <wide310x150logo src="wide.png"/>
        <square310x310logo src="large.png"/>
     </tile>
   </msapplication>
</browserconfig>
```

- 📖 [Rujukan skema konfigurasi penyemak imbas](https://msdn.microsoft.com/en-us/library/dn320426.aspx)

**[⬆ kembali ke atas](#Kandungan)**

## Pelayar (Bahasa Cina)

### 360 Browser

```html
<!-- Pilih susunan rendering engine -->
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```

### QQ Mobile Browser

```html
<!-- Mengunci skrin ke dalam orientasi yang ditentukan -->
<meta name="x5-orientation" content="landscape/portrait">

<!-- Paparkan dokumen ini dalam skrin penuh -->
<meta name="x5-fullscreen" content="true">

<!-- Dokumen akan dipaparkan dalam "mod aplikasi" (skrin penuh, dsb.) -->
<meta name="x5-page-mode" content="app">
```

### UC Mobile Browser

```html
<!-- Mengunci skrin ke dalam orientasi yang ditentukan -->
<meta name="screen-orientation" content="landscape/portrait">

<!-- Paparkan dokumen ini dalam skrin penuh -->
<meta name="full-screen" content="yes">

<!-- UC browser akan memaparkan imej walaupun dalam "mod teks" -->
<meta name="imagemode" content="force">

<!-- Dokumen akan dipaparkan dalam "mod aplikasi" (skrin penuh, isyarat melarang, dsb.) -->
<meta name="browsermode" content="application">

<!-- Melumpuhkan "mod malam" UC browser untuk dokumen ini -->
<meta name="nightmode" content="disable">

<!-- Ringkaskan dokumen untuk mengurangkan pemindahan data -->
<meta name="layoutmode" content="fitscreen">

<!-- Lumpuhkan ciri UC browser untuk "meningkatkan fon apabila terdapat banyak perkataan dalam dokumen ini" -->
<meta name="wap-font-scale" content="no">
```

- 📖 [Dokumen UC Browser](https://www.uc.cn/download/UCBrowser_U3_API.doc)

**[⬆ kembali ke atas](#Kandungan)**

## Pautan Apl

```html
<!-- iOS -->
<meta property="al:ios:url" content="applinks://docs">
<meta property="al:ios:app_store_id" content="12345">
<meta property="al:ios:app_name" content="App Links">

<!-- Android -->
<meta property="al:android:url" content="applinks://docs">
<meta property="al:android:app_name" content="App Links">
<meta property="al:android:package" content="org.applinks">

<!-- Web fall back -->
<meta property="al:web:url" content="https://applinks.org/documentation">
```

- 📖 [Pautan Aplikasi](https://developers.facebook.com/docs/applinks)

**[⬆ kembali ke atas](#Kandungan)**

## Sumber Lain

- 📖 [HTML5 Boilerplate Docs: The HTML](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/html.md)
- 📖 [HTML5 Boilerplate Docs: Extend and customize](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md)

**[⬆ kembali ke atas](#Kandungan)**

## Projek Berkaitan

- [Atom HTML Head Snippets](https://github.com/joshbuchea/atom-html-head-snippets) - Pakej atom untuk coretan `HEAD`
- [Sublime Text HTML Head Snippets](https://github.com/marcobiedermann/sublime-head-snippets) - Pakej Sublime Text untuk coretan `HEAD`
- [head-it](https://github.com/hemanth/head-it) - Antara muka CLI untuk coretan `HEAD`
- [vue-head](https://github.com/ktquez/vue-head) - Memanipulasi maklumat meta teg `HEAD` untuk Vue.js

**[⬆ kembali ke atas](#Kandungan)**

## Format Lain

- 📄 [PDF](https://gitprint.com/joshbuchea/HEAD/blob/master/README.md)

**[⬆ kembali ke atas](#Kandungan)**

## 🌐 Terjemahan

- 🇮🇩 [Bahasa](https://github.com/rijdz/HEAD)
- 🇧🇷 [Brazilian Portuguese](https://github.com/Webschool-io/HEAD)
- 🇨🇳 [Chinese (Simplified)](https://github.com/Amery2010/HEAD)
- 🇩🇪 [German](https://github.com/Shidigital/HEAD)
- 🇮🇹 [Italian](https://github.com/Fakkio/HEAD)
- 🇯🇵 [Japanese](https://coliss.com/articles/build-websites/operation/work/collection-of-html-head-elements.html)
- 🇰🇷 [Korean](https://github.com/Lutece/HEAD)
- ms [Malay](https://github.com/shoen1x/HEAD)
- 🇷🇺 [Russian/Русский](https://github.com/Konfuze/HEAD)
- 🇪🇸 [Spanish](https://github.com/alvaroadlf/HEAD)
- 🇹🇷 [Turkish/Türkçe](https://github.com/mkg0/HEAD)

**[⬆ kembali ke atas](#Kandungan)**

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

**N.M.Muizz**

- GitHub: [@shoen1x](https://github.com/shoen1x)
- Email: [shoenixstudios@gmail.com](mailto:shoenixstudios@gmail.com)

## 📝 Lesen

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

**[⬆ kembali ke atas](#Kandungan)**
