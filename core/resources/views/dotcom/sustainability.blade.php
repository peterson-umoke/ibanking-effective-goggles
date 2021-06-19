@extends('dotcom.partials.page')

@section('content')
    <link rel="stylesheet" href="{{asset('assets/user/css/select2.min.css')}}">
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap"
         data-wa-region="B" data-wa-component="leftmenu">
        <a class="block block--secondary block--header v-center"
           href="javascript:void(0);">
            <span class="v-center__content">Our Services</span>
        </a>
        <ul class="block list">
            <li>
                We're a globally oriented bank with strong local expertise.
            </li>
        </ul>
    </nav>

    <div class="content grid span-24 span-17--desk span-18--desk-wide grid--last">
        <!-- /*Start of E area*/ -->
        <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
            <div data-compid="33-5088" data-wa-template="Page Data [E]" data-wa-component="Page Data">
                <h1 id="content-start">Our  Services</h1>
            </div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <section class="grid-group">
                <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
                    <div class="clear--both parapgraph-wrapper">
                        <figure class="float--left"><img src="/Images/Wide/33-29255/266x150-private.jpg"
                                                         alt="Private customer"></figure>
                        <p>Becoming a personal customer of Työväen Suomen-Mandatum Pankki is easy. Write or call your local customer service, or
                            visit your national website to see which benefits you can get as a Työväen Suomen-Mandatum Pankki customer. The
                            information is in the local language.</p>
                        <ul style="margin-right: 0px;"></ul>
                    </div>

                    <div class="article--strict" data-compid="33-365659" data-wa-template="Article Strict [C] **"
                         data-wa-component="Article, strict">
                        <div class="clear--both parapgraph-wrapper"><p>As a data controller Työväen Suomen-Mandatum Pankki Bank Abp processes
                                personal data to deliver the products and services that are agreed between the parties
                                and for other purposes, such as to help you with your request or comply with laws and
                                other regulations. For detailed information on Työväen Suomen-Mandatum Pankki Bank Abp’s processing of personal
                                data, please review&nbsp;<a rel="noopener"
                                                            href="javascript:void(0);">Työväen Suomen-Mandatum Pankki’s
                                    privacy policy</a>, which is available on Työväen Suomen-Mandatum Pankki’s website or by contacting Työväen Suomen-Mandatum Pankki
                                Bank Abp. The privacy policy contains information about the rights in connection with
                                the processing of personal data, such as the access to information, rectification, data
                                portability, etc.​</p>
                            <p>The information provided by you will be processed in accordance with Työväen Suomen-Mandatum Pankki’s Privacy
                                Policy. Please do not provide any sensitive or financial information in this form.
                                Should you have a banking related question, kindly contact us through your Netbank or
                                customer service.</p></div>
                    </div>
                </article>
            </section>
        </section>
    </div>
@endsection

@section('title')
    @lang('Our Services')
@endsection
