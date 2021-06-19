@extends('dotcom.partials.page')

@section('content')
    <link rel="stylesheet" href="{{asset('assets/user/css/select2.min.css')}}">
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap"
         data-wa-region="B" data-wa-component="leftmenu">
        <a class="block block--secondary block--header v-center"
           href="javascript:void(0);">
            <span class="v-center__content">Meie teenused</span>
        </a>
        <ul class="block list">
            <li>
            Oleme ülemaailmselt orienteeritud pank, millel on tugev kohalik asjatundlikkus.
            </li>
        </ul>
    </nav>

    <div class="content grid span-24 span-17--desk span-18--desk-wide grid--last">
        <!-- /*Start of E area*/ -->
        <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
            <div data-compid="33-5088" data-wa-template="Page Data [E]" data-wa-component="Page Data">
                <h1 id="content-start">Meie teenused</h1>
            </div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <section class="grid-group">
                <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
                    <div class="clear--both parapgraph-wrapper">
                        <figure class="float--left"><img src="/Images/Wide/33-29255/266x150-private.jpg"
                                                         alt="Private customer"></figure>
                        <p>Isiku kliendiks saamine Työväen Suomen-Mandatum Pankki on lihtne. Kirjutage või helistage kohalikule klienditeenindusele või
                            külastage oma riiklikku veebisaiti, et näha, milliseid eeliseid saate Työväen Suomen-Mandatum Pankki klient. The
                            teave on kohalikus keeles.</p>
                        <ul style="margin-right: 0px;"></ul>
                    </div>

                    <div class="article--strict" data-compid="33-365659" data-wa-template="Article Strict [C] **"
                         data-wa-component="Article, strict">
                        <div class="clear--both parapgraph-wrapper"><p>Vastutava töötlejana Työväen Suomen-Mandatum Pankki BPank Abp töötleb
                                isikuandmeid toodete ja teenuste tarnimiseks, milles pooled on kokku leppinud
                                ja muudel eesmärkidel, näiteks teie taotluse rahuldamiseks või seaduste ja
                                muud määrused. Üksikasjaliku teabe saamiseks Työväen Suomen-Mandatum Pankki Pank Abp’s isikuandmete töötlemine
                                andmed, palun vaadake üle&nbsp;<a rel="noopener"
                                                            href="javascript:void(0);">Työväen Suomen-Mandatum Pankki’s
                                    privacy policy</a>, mis on saadaval veebisaidil Työväen Suomen-Mandatum Pankki’s veebisaidil või pöördudes Työväen Suomen-Mandatum Pankki
                                    Pank Abp. Privaatsuspoliitika sisaldab teavet õigustega seoses
                                isikuandmete töötlemine, näiteks juurdepääs teabele, parandamine, andmetele
                                kaasaskantavus, jne.​</p>
                            <p>Teie esitatud teavet töödeldakse vastavalt Työväen Suomen-Mandatum Pankki privaatsuseeskirjadele
                                Poliitika. Selles vormis ärge esitage tundlikku ega finantsteavet.
                                Kui teil on pangandusega seotud küsimusi, võtke meiega ühendust oma Interneti-panga kaudu või
                                kasutajatugi.</p></div>
                    </div>
                </article>
            </section>
        </section>
    </div>
@endsection

@section('title')
    @lang('Our Services')
@endsection
