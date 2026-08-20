# ⚠️ Elemen `<head>` yang tidak lagi disokong

> Tag dan elemen yang pernah menjadi sebahagian daripada panduan [HEAD](./README.md) tetapi kini tidak lagi digunakan, ketinggalan zaman atau tidak lagi disokong oleh platform/vendor yang disasarkan.

Ini dipelihara di sini untuk rujukan sejarah. **Jangan gunakannya dalam projek baharu.**

## Table of Contents

- [Microsoft Internet Explorer](#microsoft-internet-explorer)
- [Apple Safari](#apple-safari)
- [Apple iOS](#apple-ios)
- [Hubungan Pautan](#hubungan-pautan)
- [Petua Sumber](#petua-sumber)
- [Pengesahan Tapak](#pengesahan-tapak)
- [Media Sosial](#media-sosial)
- [Pelbagai](#pelbagai)

## Microsoft Internet Explorer

Internet Explorer telah [dibersarakan oleh Microsoft pada 15 Jun 2022](https://learn.microsoft.com/en-us/lifecycle/announcements/internet-explorer-11-end-of-support-on-windows-10). Semua tag khusus IE adalah usang.

```html
<!-- Paksa IE 8/9/10 untuk menggunakan enjin pemaparan terkininya -->
<meta http-equiv="x-ua-compatible" content="ie=edge" />

<!-- Lumpuhkan pengesanan automatik dan pemformatan nombor telefon yang mungkin oleh sambungan pelayar Skype Toolbar -->
<meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />

<!-- Windows Tiles -->
<meta name="msapplication-config" content="/browserconfig.xml" />
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

Live tiles telah dialih keluar daripada menu Mula Windows 11 dan tidak lagi dipaparkan oleh Edge.

## Apple Safari

```html
<!-- Ikon Tab Semat Safari -->
<link rel="mask-icon" href="/path/to/icon.svg" color="blue" />
```

Tab Semat Safari telah dialih keluar dalam Safari 17 (2023); hubungan pautan `mask-icon` tidak lagi digunakan.

## Apple iOS

```html
<!-- Dayakan mod kendiri (skrin penuh) -->
<meta name="apple-mobile-web-app-capable" content="yes" />
```

Sejak iOS 17.4, Apple [menghentikan penggunaan `apple-mobile-web-app-capable`](https://developer.apple.com/documentation/safari-release-notes/safari-17_4-release-notes) dan memilih `mobile-web-app-capable` yang diseragamkan:

```html
<meta name="mobile-web-app-capable" content="yes" />
```

## Petua Sumber

```html
<!-- Prapapar halaman penuh di latar belakang -->
<link rel="prerender" href="https://example.com/" />
```

`<link rel="prerender">` telah [ditamatkan dan dialih keluar daripada Chrome](https://developer.chrome.com/blog/prerender-pages) dan digantikan dengan [API Peraturan Spekulasi](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API).

```html
<!-- Pilih keluar sepenuhnya daripada prapengambilan DNS dengan menetapkan kepada "mati" -->
<meta http-equiv="x-dns-prefetch-control" content="mati" />
```

`x-dns-prefetch-control` ialah sambungan era Firefox/IE yang tidak pernah dilaksanakan dalam Chromium dan tidak lagi digunakan secara bermakna oleh pelayar moden. Gunakan `<link rel="dns-prefetch">` untuk petunjuk praambilan yang eksplisit.

## Hubungan Pautan

```html
<!-- Pautan ke versi HTML AMP dokumen semasa -->
<link rel="amphtml" href="https://example.com/path/to/amp-version.html" />
```

Google [mengalih keluar keperluan AMP daripada Cerita Teratas](https://developers.google.com/search/blog/2021/04/more-details-page-experience) pada tahun 2021 dan isyarat Pengalaman Halaman AMP telah dihentikan. Projek AMP itu sendiri sebahagian besarnya tidak aktif.

```html
<!-- Digunakan apabila perkhidmatan pihak ketiga digunakan untuk menyelenggara blog -->
<link
  rel="EditURI"
  href="https://example.com/xmlrpc.php?rsd"
  type="application/rsd+xml"
  title="RSD"
/>

<!-- Membentuk komen automatik apabila blog WordPress lain memautkan ke blog atau siaran WordPress anda -->
<link rel="pingback" href="https://example.com/xmlrpc.php" />
```

[RSD (Really Simple Discoverability)](https://en.wikipedia.org/wiki/Really_Simple_Discovery) telah digunakan oleh editor blog XML-RPC seperti Windows Live Writer (dihentikan pada 2017). Pingback XML-RPC telah [dilumpuhkan secara meluas secara lalai](https://make.wordpress.org/core/2015/09/30/xml-rpc-settings-in-4-4/) kerana penggunaannya dalam serangan amplifikasi DDoS. Gunakan [Webmention](https://www.w3.org/TR/webmention/) sebagai gantinya.

```html
<!-- Pautan ke dokumen yang menerangkan koleksi rekod, dokumen atau bahan lain yang mempunyai kepentingan sejarah -->
<link rel="archives" href="https://example.com/archives/" />

<!-- Pautan ke sumber peringkat tertinggi dalam struktur hierarki -->
<link rel="index" href="https://example.com/article/" />
```

Kedua-dua `archives` dan `index` telah [dialih keluar daripada piawaian HTML](https://html.spec.whatwg.org/multipage/links.html#linkTypes) dan tidak lagi didaftarkan dalam [daftar perhubungan pautan IANA](https://www.iana.org/assignments/link-relations/link-relations.xhtml) untuk HTML.

## Pengesahan Tapak

```html
<meta name="alexaVerifyID" content="verification_token" /><!-- Alexa Console -->
```

[Alexa Internet](https://en.wikipedia.org/wiki/Alexa_Internet) (perkhidmatan analitik trafik web — tidak berkaitan dengan pembantu suara Amazon Alexa) telah [ditutup oleh Amazon pada 1 Mei 2022](https://support.alexa.com/hc/en-us/articles/4410503838999).

## Media Sosial

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta name="twitter:title" content="Tajuk Kandungan" />
<meta
  name="twitter:description"
  content="Huraian kandungan kurang daripada 200 aksara"
/>
<meta name="twitter:image" content="https://example.com/image.jpg" />
<meta
  name="twitter:image:alt"
  content="Huraian teks imej yang menyampaikan sifat penting imej kepada pengguna yang cacat penglihatan. Maksimum 420 aksara."
/>
```

X (dahulunya Twitter) kini kembali kepada tag [Open Graph](./README.md#open-graph) apabila tag `twitter:*` tiada, menjadikan penanda Kad Twitter khusus berlebihan untuk kebanyakan kes penggunaan. [Pengesah Kad Twitter](https://cards-dev.twitter.com/validator) telah dihentikan dan [dokumentasi Pembangun Twitter](https://dev.twitter.com/cards/getting-started) asal tidak lagi boleh diakses. Tag masih dihuraikan jika ada, tetapi tiada sebab untuk mengekalkan set berasingan bersama Open Graph.

```html
<!-- tidak membenarkan Twitter menggunakan maklumat tapak anda untuk tujuan pemperibadian -->
<meta name="twitter:dnt" content="on" />
```

Sokongan Jangan Jejaki Twitter telah digugurkan secara efektif berikutan peralihan platform kepada X. [Dokumentasi pilihan privasi Twitter](https://dev.twitter.com/web/overview/privacy) yang asal tidak lagi boleh diakses, dan isyarat tersebut tidak dihormati dalam praktiknya.

```html
<meta property="fb:app_id" content="123456789" />
```

`fb:app_id` pada asalnya diperlukan untuk Wawasan/Wawasan Domain Facebook tetapi tidak lagi diperlukan untuk perkongsian Graf Terbuka. [Dokumentasi Perkongsian semasa](https://developers.facebook.com/docs/sharing/webmasters/) Meta tidak menyenaraikannya sebagai diperlukan, dan kebanyakan penghurai Graf Terbuka mengabaikannya.

## Pelbagai

```html
<!-- Menentukan dokumen untuk dipaparkan dalam bingkai tertentu -->
<meta http-equiv="Window-Target" content="_value" />
```

`Window-Target` ialah sambungan era IE bukan standard yang tidak pernah diguna pakai oleh standard HTML dan tidak disokong oleh pelayar moden.
