<header class='header' data-wa-region="A">
    <div class='header__row js-header-top'><a class='logo header__logo' href="{{url('/')}}"><img
                src="{{asset('/assets/dotcom/images/Työväen Suomen-Mandatum Pankki-logo (cvi).svg')}}" alt="Työväen Suomen-Mandatum Pankki logo" class="logo">
        </a>
        <div class="pulse"><img data-src="{{asset('/assets/dotcom/images/pulse-retina.gif')}}" alt=""/></div>
        <div class='header__nav-toggle is-hidden-desk js-nav--toggle'></div>
        <div class='header__utility is-vissible-desk'>
            <nav class='header__utility__lang'>
                <button class='button icon-arrow-right is-hidden-desk lang__toggle'></button>
                <ul>
                    <li>
                        <a class='button button--link active' href="javascript:void(0);">Managua</a>
                    </li>
                    <li><a class='button button--link ' href="javascript:void(0);">Dansk</a></li>
                                            <li><a class='button button--link ' href="javascript:void(0);">Norsk</a></li>
                                            <li><a class='button button--link ' href="javascript:void(0);">Suomi</a></li>
                                            <li><a class='button button--link ' href="javascript:void(0);">Svenska</a></li>
                </ul>
            </nav>
            <nav class='header__utility__nav'>
                <ul>
                    <li class='is-hidden-portable'><a class='button button--hollow' href="{{route("contact")}}"
                                                      target="_self">Võta ühendust</a></li>
                    <li>
                        @guest
                            <a class="button button--hollow" data-alt-lap-small="Netbank and online services"
                               data-alt-palm="Netbank and online services" href="{{route("login")}}"
                               target="_self">Logi sisse</a>
                        @else
                            <a class="button button--hollow" data-alt-lap-small="Netbank and online services"
                               data-alt-palm="Netbank and online services" href="{{route("user.dashboard")}}"
                               target="_self">Minu juhtpaneel</a>
                        @endguest
                    </li>
                    @auth
                        <li>
                            <a class="button button--hollow" data-alt-lap-small="Netbank and online services"
                               data-alt-palm="Netbank and online services" href="{{route("user.logout")}}"
                               onclick="event.preventDefault();
                                        document.getElementById('logout').submit();">Logi välja</a>
                            <form id="logout" action="{{ route('user.logout') }}" method="POST">
                                @csrf
                            </form>
                        </li>
                    @endauth
                </ul>
            </nav>
            <div class="header__utility__search">
                <form action="#" method="get" accesskey="s" accept-charset="utf-8"><input
                        placeholder='Search here' name="q" value="" type="text">
                    <button class='button'><i class='icon-search is-hidden-desk'></i><span
                            class='is-hidden-portable'>Otsing</span></button>
                </form>
            </div>
        </div>
    </div>
    <div class='header__row is-vissible-desk' data-wa-component="menu">
        <div class='header__nav js-header-bottom'>
            <nav role='navigation'>
                <ul class='header__nav__main'>
                    <li class="is-hidden-portable" data-wa-menu-1="Home"><a class="button button--primary"
                                                                                   href="{{url('/')}}">Kodu</a></li>
                    <li class="has-sub-level " data-wa-menu-1="About&#x20;Työväen Suomen-Mandatum Pankki"><a
                            class='button button--primary js-sub--toggle' href="{{route("about")}}">Umbes</a>
                        {{--                        <div class="header__sub__wrapper">--}}
                        {{--                            <ul class="header__nav__sub js-sub">--}}
                        {{--                                <li class="" data-wa-menu-2="Who&#x20;we&#x20;are"><a--}}
                        {{--                                        href="/en/about-Työväen Suomen-Mandatum Pankki/who-we-are/">Kes me oleme</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Työväen Suomen-Mandatum Pankki&#x20;in&#x20;society"><a--}}
                        {{--                                        href="/en/about-Työväen Suomen-Mandatum Pankki/Työväen Suomen-Mandatum Pankki-in-society/">Työväen Suomen-Mandatum Pankki ühiskonnas</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Corporate&#x20;Governance"><a--}}
                        {{--                                        href="/en/about-Työväen Suomen-Mandatum Pankki/corporate-governance/">Ettevõtte juhtimine</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Supplier&#x20;Portal"><a--}}
                        {{--                                        href="/en/about-Työväen Suomen-Mandatum Pankki/supplier-portal/">Tarnijate portaal</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Contact"><a--}}
                        {{--                                        href="/en/about-Työväen Suomen-Mandatum Pankki/contact/">Contact</a></li>--}}
                        {{--                            </ul>--}}
                        {{--                        </div>--}}
                    </li>
                    <li class="has-sub-level " data-wa-menu-1="Investor&#x20;Relations"><a
                            class='button button--primary js-sub--toggle' href="{{route("investor-relations")}}">Investor
                            Relations</a>
                        {{--                        <div class="header__sub__wrapper">--}}
                        {{--                            <ul class="header__nav__sub js-sub">--}}
                        {{--                                <li class="" data-wa-menu-2="Työväen Suomen-Mandatum Pankki&#x20;in&#x20;figures"><a--}}
                        {{--                                        href="/en/investor-relations/Työväen Suomen-Mandatum Pankki-in-figures/">Työväen Suomen-Mandatum Pankki in figures</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Reports&#x20;and&#x20;presentations"><a--}}
                        {{--                                        href="/en/investor-relations/reports-and-presentations/">Aruanded ja--}}
                        {{--                                        ettekanded</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Share"><a--}}
                        {{--                                        href="/en/investor-relations/share/">Jaga</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Debt&#x20;and&#x20;rating"><a--}}
                        {{--                                        href="/en/investor-relations/debt-and-rating/">Võlg ja reiting</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Calendar&#x20;and&#x20;events"><a--}}
                        {{--                                        href="/en/investor-relations/calendar-and-events/">Kalender ja üritused</a>--}}
                        {{--                                </li>--}}
                        {{--                                <li class="" data-wa-menu-2="IR&#x20;news"><a--}}
                        {{--                                        href="/en/investor-relations/ir-news/">IR uudised</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Contact&#x20;IR"><a--}}
                        {{--                                        href="/en/investor-relations/contact-ir/">Võtke ühendust IR-ga</a></li>--}}
                        {{--                            </ul>--}}
                        {{--                        </div>--}}
                    </li>
                    {{--                    <li class="has-sub-level " data-wa-menu-1="Press&#x20;and&#x20;news"><a--}}
                    {{--                            class='button button--primary js-sub--toggle' href="/en/press-and-news/">Vajutage ja--}}
                    {{--                            uudised</a>--}}
                    {{--                        <div class="header__sub__wrapper">--}}
                    {{--                            <ul class="header__nav__sub js-sub">--}}
                    {{--                                <li class="" data-wa-menu-2="News&#x20;and&#x20;press&#x20;releases"><a--}}
                    {{--                                        href="/en/press-and-news/news-and-press-releases/">Uudised ja ajakirjandus--}}
                    {{--                                        vabastab</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Press&#x20;contacts"><a--}}
                    {{--                                        href="/en/press-and-news/press-contacts/">Vajutage kontakte</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Press&#x20;photos"><a--}}
                    {{--                                        href="/en/press-and-news/press-photos/">Pressifotod</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Follow&#x20;Työväen Suomen-Mandatum Pankki"><a--}}
                    {{--                                        href="/en/press-and-news/Follow-Työväen Suomen-Mandatum Pankki/">Jälgi Työväen Suomen-Mandatum Pankki</a></li>--}}
                    {{--                            </ul>--}}
                    {{--                        </div>--}}
                    {{--                    </li>--}}
                    {{--                    <li class="has-sub-level " data-wa-menu-1="Careers"><a--}}
                    {{--                            class='button button--primary js-sub--toggle' href="/en/careers/">Karjäär</a>--}}
                    {{--                        <div class="header__sub__wrapper">--}}
                    {{--                            <ul class="header__nav__sub js-sub">--}}
                    {{--                                <li class="" data-wa-menu-2="Vacant&#x20;positions"><a--}}
                    {{--                                        href="/en/careers/vacant-positions/">Vabad kohad</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Join&#x20;us"><a href="/en/careers/join-us/">Liitu--}}
                    {{--                                        meile</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Locations"><a--}}
                    {{--                                        href="/en/careers/locations/">Asukohad</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Life&#x20;at&#x20;Työväen Suomen-Mandatum Pankki"><a--}}
                    {{--                                        href="/en/careers/life-at-Työväen Suomen-Mandatum Pankki/">Elu aadressil Työväen Suomen-Mandatum Pankki</a></li>--}}
                    {{--                                <li class="" data-wa-menu-2="Students&#x20;and&#x20;Graduates"><a--}}
                    {{--                                        href="/en/careers/students-and-graduates/">Üliõpilased ja lõpetajad</a></li>--}}
                    {{--                            </ul>--}}
                    {{--                        </div>--}}
                    {{--                    </li>--}}
{{--                    <li class="has-sub-level " data-wa-menu-1="Sustainability"><a--}}
{{--                            class='button button--primary js-sub--toggle'--}}
{{--                            href="{{route("sustainability")}}">Sustainability</a>--}}
                        {{--                        <div class="header__sub__wrapper">--}}
                        {{--                            <ul class="header__nav__sub js-sub">--}}
                        {{--                                <li class="" data-wa-menu-2="News"><a--}}
                        {{--                                        href="/en/sustainability/sustainability-news/">Uudised</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Sustainability&#x20;at&#x20;Työväen Suomen-Mandatum Pankki"><a--}}
                        {{--                                        href="/en/sustainability/sustainability-in-Työväen Suomen-Mandatum Pankki/">Jätkusuutlikkus--}}
                        {{--                                        Työväen Suomen-Mandatum Pankki</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Sustainable&#x20;business"><a--}}
                        {{--                                        href="/en/sustainability/sustainable-business/">Säästev äri</a>--}}
                        {{--                                </li>--}}
                        {{--                                <li class="" data-wa-menu-2="Commitments&#x20;and&#x20;policies"><a--}}
                        {{--                                        href="/en/sustainability/commitments-and-policies/">Kohustused ja--}}
                        {{--                                        poliitika</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Reporting"><a href="/en/sustainability/reporting/">Aruandlus</a>--}}
                        {{--                                </li>--}}
                        {{--                            </ul>--}}
                        {{--                        </div>--}}
{{--                    </li>--}}
                    <li class="has-sub-level " data-wa-menu-1="Our&#x20;services"><a
                            class='button button--primary js-sub--toggle' href="{{route("services")}}">Meie teenused</a>
                        {{--                        <div class="header__sub__wrapper">--}}
                        {{--                            <ul class="header__nav__sub js-sub">--}}
                        {{--                                <li class="" data-wa-menu-2="Services"><a href="/en/our-services/servicesoverview/">Teenused</a>--}}
                        {{--                                </li>--}}
                        {{--                                <li class="" data-wa-menu-2="Asset&#x20;Management"><a--}}
                        {{--                                        href="/en/our-services/asset-management/">Varahaldus</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Bank&#x20;to&#x20;bank&#x20;business"><a--}}
                        {{--                                        href="/en/our-services/banktobankbusiness/">Pank pangast äri </a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Cash&#x20;Management"><a--}}
                        {{--                                        href="/en/our-services/cashmanagement/">Sularaha haldamine</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Työväen Suomen-Mandatum Pankki&#x20;Finance"><a--}}
                        {{--                                        href="/en/our-services/Työväen Suomen-Mandatum Pankkifinance/">Työväen Suomen-Mandatum Pankki Rahandus</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Securities&#x20;services"><a--}}
                        {{--                                        href="/en/our-services/securitiesservices/">Väärtpaberiteenused</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Trade&#x20;Finance"><a--}}
                        {{--                                        href="/en/our-services/tradefinance/">Kaubanduse rahastamine</a></li>--}}
                        {{--                                <li class="" data-wa-menu-2="Policies"><a--}}
                        {{--                                        href="/en/our-services/policiesandsupport/">Poliitikad</a></li>--}}
                        {{--                            </ul>--}}
                        {{--                        </div>--}}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
