@extends('dotcom.partials.page')
@section('title')
    @lang('Account Statement')
@stop
@section('content')
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap"
         data-wa-region="B" data-wa-component="leftmenu"><a class="block block--secondary block--header v-center"
                                                            href="javascript:void(0);"><span
                class="v-center__content">Transaction and Utilities</span></a>
        <ul class="block list">
            {{--            <li data-wa-menu-3="Latest interim results"><a class=" "--}}
            {{--                                                           href="javascript:void(0);">--}}
            {{--                    Account Statements--}}
            {{--                </a>--}}
            {{--            </li>--}}
            <li><a href="{{route('user.account.statement')}}" target="_self"> Transaction History </a></li>
            <li><a href="{{route('user.transfer.init')}}" target="_self"> Make a Transfer </a></li>
            {{-- <li data-wa-menu-3="Latest interim results"><a class=" "
                                                           href="{{route('user.deposit')}}">
                    E-Deposits
                </a>
            </li>
            <li data-wa-menu-3="Latest interim results"><a class=" "
                                                           href="{{route('user.withdraw')}}">
                    Withdraw
                </a>
            </li> --}}
            {{--            <li data-wa-menu-3="Latest interim results"><a class=" "--}}
            {{--                                                           href="javascript:void(0);">--}}
            {{--                    E-Deposits--}}
            {{--                </a>--}}
            {{--            </li>--}}
            {{--            <li data-wa-menu-3="Latest interim results"><a class=" "--}}
            {{--                                                           href="javascript:void(0);">--}}
            {{--                    Withdraw--}}
            {{--                </a>--}}
            {{--            </li>--}}
            <li data-wa-menu-3="Latest interim results"><a class=" "
                                                           href="{{route('user.dashboard')}}">
                    Back to Dashboard
                </a>
            </li>
        </ul>
    </nav>
    <div class="content grid span-24 span-17--desk span-18--desk-wide grid--last"><!-- /*Start of E area*/ -->
        <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
            <div data-compid="33-5088" data-wa-template="Page Data [E]" data-wa-component="Page Data"><h1
                    id="content-start"> Make Transfer </h1></div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
                <div class="featuredarticle" data-compid="33-349295" data-wa-template="Featured Article [C]"
                     data-wa-component="Article, strict">
                    <form method="post" action="{{route('register')}}">
                        @csrf
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-row">

                                    <div class="form-group col-md-12">
                                        <input type="text" class="myForn" name="reference_code"
                                               placeholder="@lang('Enter amount')">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group padding-top-10 col-md-12">
                                <button class="btn" type="submit">@lang('Transfer')</button>
                            </div>

                        </div>
                    </form>
                </div>
            </article>
        </section>
    </div>
@endsection
