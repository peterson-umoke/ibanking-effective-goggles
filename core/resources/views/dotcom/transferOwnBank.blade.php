@extends('dotcom.partials.page')

@section('content')
<link rel="stylesheet" type="text/css" href="{{asset('assets/admin/css/toastr.min.css')}}">
<nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap" data-wa-region="B" data-wa-component="leftmenu"><a class="block block--secondary block--header v-center" href="javascript:void(0);"><span class="v-center__content">Transfer</span></a>
    <ul class="block list">
        <li><a href="{{route('user.transfer.to.ownbank')}}" target="_self">
                Domestic bank Transfer </a></li>
        <li><a href="{{route('user.transfer.to.otherBank')}}" target="_self"> Inter-Bank Transfers </a></li>
        <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.dashboard')}}">
                Back to Dashboard
            </a>
        </li>
    </ul>
</nav>

<div class="content grid span-24 span-17--desk span-18--desk-wide grid--last">
    <!-- /*Start of E area*/ -->
    <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
        <div data-compid="33-5088" data-wa-template="Page Data [E]" data-wa-component="Page Data">
            <h1 id="content-start"> Domestic Bank Transfer </h1>
        </div>
    </header><!-- /*End of E area*/ -->
    <section class="grid-group">
        <section id="paymentMethod">
            <div class="container">
                {{-- <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-12 text-center">
                        <div class="heading-title padding-bottom-70">
                            <h2>
                                @lang('Transfer to own bank')
                            </h2>
                            <div class="sectionSeparator"></div>

                        </div>
                    </div>
                </div> --}}

                <div class="row calculate justify-content-center">
                    <div class="col-md-10 col-lg-12">
                        <div class="box">

                            <form method="post" action="{{route('user.transfer.ownbank')}}">
                                @csrf
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-12 text-center">
                                            <div role="alert" class="alert alert-danger margin-bottom-30">
                                                <strong>@lang('Balance Transfer Charge') {{$gnl->bal_trans_fixed_charge}} {{$gnl->cur}} @lang('Fixed and') {{$gnl->bal_trans_per_charge}} @lang('% of your total amount to transfer balance.')</strong>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label>@lang('Account Number')</label>
                                                <input type="text" name="account_number" class="myForn" placeholder="@lang('account number')" autocomplete="off" required>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label>@lang('Amount')</label>
                                                <input type="text" name="amount" class="myForn" placeholder="@lang('amount') {{$gnl->cur}}" autocomplete="off" required>
                                            </div>

                                            <div class="form-group padding-top-10 col-md-12">
                                                <button class="btn" type="submit">@lang('Transfer Balance')</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script type="text/javascript" src="{{asset('assets/admin/js/toastr.min.js')}}"></script>
    </section>
</div>

@endsection

@section('title')
@lang('Transfer')
@endsection
