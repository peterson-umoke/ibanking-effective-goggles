@extends('dotcom.partials.page')

@section('content')
    <div class="content grid span-24 grid--last">
        <!-- /*Start of E area*/ -->
        <!-- /*End of E area*/ -->
        <div class="content grid-group">
            <div class="section-top-story grid-row landmark--desk">
                <div class="grid span-5 span-24--palm span-24--lap block-wrapper no-print" data-wa-region="C2">
                    <h1 class="block block--header top-story__header"><a class="v-center__content"
                                                                         href="javascript:void(0);"
                                                                         title="Ajakirjandus ja uudised"
                                                                         data-wa-component="leftmenu">Dashboard</a>
                    </h1>
                    <div class="block top-story__block span-6-desk span-5">
                        <div data-compid="33-24159" data-wa-template="Article Strict [C2]"
                             data-wa-component="Article, strict">
                            <div class="clear--both parapgraph-wrapper article--strict">
                                <x-jet-heading title="Account Name" :value="Auth::user()->name"/>
                                <x-jet-heading title="Account Number"
                                               :value='sprintf("#%s",Auth::user()->account_number)'/>
                                <x-jet-heading title="Account Balance"
                                               :value="sprintf('%s%s',$gnl->cur_symbol, number_format(Auth::user()->balance,2))"/>
                                @isset(auth()->user()->reference_code)
                                    <x-jet-heading title="Reference Code" :value="auth()->user()->reference_code"/>
                                @endisset
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid span-24 grid--last span-19--desk span-19--desk-wide grid--last landmark"
                     data-wa-region="C1">
                    <div data-compid="33-381877" data-wa-template="Top Story .com [C1]"
                         data-wa-component="Top Story (com)"><a class="topstorylink" href="javascript:void(0);"
                                                                target="_self">
                            <div class="top-story Left">
                                <div class="top-story-image-wrapper top-story-image-wrapper--mobile"><img
                                        src="{{asset('static/images/man-with-laptop-1258X383.jpg')}}"
                                        alt="Happy man at laptop"
                                        data-src="{{asset('static/images/man-with-laptop-1258X383.jpg')}}"
                                        data-alt="Happy man at laptop" class="" data-img-load=""></div>
                                <div class="top-story-content-wrapper text-shadow">
                                    <div class="top-story-content-table-view">
                                        <div class="top-story-content-inner-wrapper">
                                            <div class="autoTextLineBreak topstorytitle white"><span
                                                    class="topstorytitle--swap" data-title="My Dashboard"
                                                    data-mobile-title="Stay updated: Learn more about our results, partnerships and publications">My Dashboard</span>
                                            </div>
                                            <div class="autoTextLineBreak topstorysubheadline white">
                                                Manage your account with ease
                                            </div>
                                            {{-- <div class="button product-top-button q-icon q-icon-- blue "> Visit our news--}}
                                            {{-- site--}}
                                            {{-- </div>--}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                </div>
            </div>
            <div class="grid-row" data-wa-region="C">
                {{--                <div class="listing--block related-links grid span-6--desk-wide span-8--desk span-12--lap span-24--palm"--}}
                {{--                     data-compid="33-58698" data-wa-template="Related Links, See all [C]"--}}
                {{--                     data-wa-component="Related Links">--}}
                {{--                    <h3 class="heading heading--sub heading--fixed-height"><a href="javascript:void(0);" target="_self">--}}
                {{--                            Transfer--}}
                {{--                        </a></h3> <!-- Count the number of related links and determine how many to show -->--}}
                {{--                    <div class="block block--department landmark--desk landmark--palm">--}}
                {{--                        <ul class="list">--}}
                {{--                            <li><a href="{{route('user.transfer.to.ownbank')}}" target="_self">--}}
                {{--                                    Domestic bank Transfer </a></li>--}}
                {{--                            <li><a href="{{route('user.transfer.to.otherBank')}}" target="_self"> Inter-Bank--}}
                {{--                                    Transfers </a></li>--}}
                {{--                            --}}{{-- <li>--}}
                {{--                            --}}{{-- <a href="{{route('user.withdraw')}}"--}}
                {{--                            --}}{{-- target="_self" rel="noopener"> Withdraw </a></li>--}}
                {{--                        </ul>--}}
                {{--                    </div>--}}
                {{--                </div>--}}
                <div class="listing--block related-links grid span-6--desk-wide span-8--desk span-12--lap span-24--palm"
                     data-compid="33-21374" data-wa-template="Related Links, See all [C]"
                     data-wa-component="Related Links">
                    <h3 class="heading heading--sub heading--fixed-height"><a href="javascript:void(0);" target="_self">
                            Transaction & Utilities </a></h3>
                    <!-- Count the number of related links and determine how many to show -->
                    <div class="block block--department landmark--desk landmark--palm">
                        <ul class="list">
                            <li><a href="{{route('user.account.statement')}}" target="_self"> Transaction History </a>
                            </li>
                            <li><a href="{{route('user.transfer.init')}}" target="_self"> Transfer </a></li>
                            {{--                             <li><a href="{{route('user.deposit')}}" target="_self"> Deposit </a></li>--}}
                            {{--                            <li><a href="javascript:void(0);" target="_self"> Deposit </a></li>--}}
                            {{--                            <li><a href="javascript:void(0);" target="_self"> Withdraw </a></li>--}}
                            {{--                            <li><a href="{{route('user.withdraw')}}" target="_self"> Withdraw </a></li>--}}
                        </ul>
                    </div>
                </div>
                <div class="listing--block related-links grid span-6--desk-wide span-8--desk span-12--lap span-24--palm"
                     data-compid="33-23974" data-wa-template="Related Links, See all [C]"
                     data-wa-component="Related Links">
                    <h3 class="heading heading--sub heading--fixed-height"><a href="javascript:void(0);" target="_self">
                            My Profile </a></h3>
                    <!-- Count the number of related links and determine how many to show -->
                    <div class="block block--department landmark--desk landmark--palm">
                        <ul class="list">
                            <li><a href="{{route('user.profile')}}" target="_self"> Account Settings </a></li>
                            <li><a href="{{route('user.changePass')}}" target="_self"> Change Password </a></li>
                            <li><a href="{{route('user.logout')}}" target="_self" onclick="event.preventDefault();
                                        document.getElementById('logoutx').submit();"> Logout </a>
                                <form id="logoutx" action="{{ route('user.logout') }}" method="POST">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
