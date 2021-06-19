@extends('dotcom.partials.page')

@section('content')
    <link rel="stylesheet" href="{{asset('assets/user/css/select2.min.css')}}">
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap" data-wa-region="B" data-wa-component="leftmenu"><a class="block block--secondary block--header v-center" href="javascript:void(0);"><span class="v-center__content">Transaction and Utilities</span></a>
        <ul class="block list">
            <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.account.statement')}}">
                    Account Statements
                </a>
            </li>
            <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.deposit')}}">
                    E-Deposits
                </a>
            </li>
            <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.withdraw')}}">
                    Withdraw
                </a>
            </li>
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
                <h1 id="content-start"> Deposit Preview </h1>
            </div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <div class="box">
                <section id="investors">
                    <div class="container">

                        <div class="row">
                            <div class="">
                                <form class="contact-form" method="POST" action="{{ route('user.deposit.confirm') }}">
                                    @csrf
                                    <input type="hidden" name="gateway" value="{{$data->gateway_id}}"/>
                                    <div class="box">
                                        <div class="row">
                                            <div class="col">
                                                <div class="image">
                                                    <img class="img-fluid"
                                                         src="{{asset('assets/image/gateway')}}/{{$data->gateway_id}}.jpg"
                                                         style="width:100%;"/>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="info">
                                                </div>
                                                <ul class="list-group text-center">
                                                    <li class="list-group-item">Amount:
                                                        <strong>{{$data->amount}} {{$gnl->cur}}</strong></li>
                                                    <li class="list-group-item">Charge:
                                                        <strong>{{$data->charge}} {{$gnl->cur}}</strong></li>
                                                    <li class="list-group-item">Payable:
                                                        <strong>{{$data->charge + $data->amount}} {{$gnl->cur}}</strong>
                                                    </li>
                                                    <li class="list-group-item">In USD:
                                                        <strong>${{$data->usd_amo}}</strong>
                                                    </li>

                                                </ul>
                                                <div class="panel-footer">
                                                    <button type="submit" class="btn viweBtn" style="width:100%;">
                                                        Pay Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>

    <style>
        .row {
            margin-bottom: 0;
        }

        .select-wrapper {
            display: block;
            width: 100%;
        }

        .main-content form textarea {
            max-height: 10em;
        }
    </style>
@endsection


@section('deposit', 'active')
@section('title')
    @lang('Deposit Preview')
@stop
@section('breadcrumb-title')
    @lang('Deposit Preview')
@stop


