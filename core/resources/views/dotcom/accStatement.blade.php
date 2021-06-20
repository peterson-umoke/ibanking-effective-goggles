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
                    id="content-start"> Transaction History </h1></div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
                <div class="featuredarticle" data-compid="33-349295" data-wa-template="Featured Article [C]"
                     data-wa-component="Article, strict">
{{--                    <article class="landmark">--}}
{{--                        <header><h2><a href="javascript:void(0);"--}}
{{--                                       target="_self"> Domestic Bank Transfers </a></h2></header>--}}
{{--                        <table class="table">--}}


{{--                            <thead>--}}

{{--                            <tr>--}}
{{--                                <th class="text-center">@lang('Date')</th>--}}
{{--                                <th class="text-center">@lang('Description')</th>--}}
{{--                                <th class="text-center">@lang('Amount')</th>--}}
{{--                                <th class="text-center">@lang('After Balance')</th>--}}

{{--                            </tr>--}}
{{--                            </thead>--}}
{{--                            <tbody>--}}

{{--                            @if(count($ownBankStatements) === 0)--}}
{{--                                <tr>--}}
{{--                                    <td colspan="4"><h2>@lang('No Data Available')</h2></td>--}}
{{--                                </tr>--}}
{{--                            @else--}}


{{--                                @foreach($ownBankStatements as $statement)--}}
{{--                                    <tr>--}}
{{--                                        <td>--}}
{{--                                            {{$statement->created_at}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{$statement->details}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{$statement->amount}} {{$gnl->cur_symbol}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{$statement->balance}} {{$gnl->cur_symbol}}--}}
{{--                                        </td>--}}


{{--                                    </tr>--}}
{{--                                @endforeach--}}
{{--                            @endif--}}

{{--                            </tbody>--}}
{{--                        </table>--}}
{{--                    </article>--}}

{{--                    <article class="landmark">--}}
{{--                        <header><h2><a href="javascript:void(0);"--}}
{{--                                       target="_self"> Interbank Transfers </a></h2></header>--}}
{{--                        <table class="table">--}}
{{--                            <thead>--}}

{{--                            <tr>--}}
{{--                                <th class="text-center">@lang('Date')</th>--}}
{{--                                <th class="text-center">@lang('Amount')</th>--}}
{{--                                <th class="text-center">@lang('After balance')</th>--}}
{{--                                <th class="text-center">@lang('Account info')</th>--}}
{{--                                <th class="text-center">@lang('Processing time')</th>--}}
{{--                                <th class="text-center">@lang('Status')</th>--}}
{{--                            </tr>--}}
{{--                            </thead>--}}
{{--                            <tbody>--}}

{{--                            @if(count($otherBankStatements) == 0)--}}
{{--                                <tr>--}}
{{--                                    <td colspan="6"><h2>@lang('No Data Available')</h2></td>--}}
{{--                                </tr>--}}
{{--                            @else--}}

{{--                                @foreach($otherBankStatements as $data)--}}
{{--                                    <tr>--}}
{{--                                        <td>--}}
{{--                                            {{$data->created_at}}--}}
{{--                                        </td>--}}

{{--                                        <td>--}}
{{--                                            {{$data->amount}} {{$gnl->cur_symbol}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{$data->balance}} {{$gnl->cur_symbol}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{$data->details}}--}}
{{--                                        </td>--}}

{{--                                        <td>--}}
{{--                                            {{$data->p_time}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            @if($data->status == 0) pending @elseif($data->status == 1)--}}
{{--                                                Confirm @elseif($data->status == 3) Refund @endif--}}
{{--                                        </td>--}}
{{--                                    </tr>--}}
{{--                                @endforeach--}}
{{--                            @endif--}}
{{--                            </tbody>--}}
{{--                        </table>--}}
{{--                    </article>--}}

                    <article class="landmark">
{{--                        <header><h2><a href="javascript:void(0);"--}}
{{--                                       target="_self"> Transaction History </a></h2></header>--}}
                        <table class="table">
                            <thead>

                            <tr>
                                <th class="text-center">@lang('Date')</th>
                                <th class="text-center">@lang('Email')</th>
                                <th class="text-center">@lang('Amount')</th>
                                <th class="text-center">@lang('Balance')</th>
{{--                                <th class="text-center">@lang('Fee')</th>--}}
{{--                                <th class="text-center">@lang('Tranx Id')</th>--}}
{{--                                <th class="text-center">@lang('Details')</th>--}}
                                <th class="text-center">@lang('Account info')</th>
{{--                                <th class="text-center">@lang('Processing time')</th>--}}
{{--                                <th class="text-center">@lang('Status')</th>--}}
                            </tr>
                            </thead>
                            <tbody>

                            @if(count($transaction_history) == 0)
                                <tr>
                                    <td colspan="6"><h2>@lang('No Data Available')</h2></td>
                                </tr>
                            @else

                                @foreach($transaction_history as $data)
                                    <tr>
                                        <td>
                                            {{$data->created_at}}
                                        </td>

                                        <td>
                                            {{$data->user->email}}
                                        </td>

                                        <td>
                                            {{$data->amount}} {{$gnl->cur_symbol}}
                                        </td>
                                        <td>
                                            {{$data->balance}} {{$gnl->cur_symbol}}
                                        </td>
                                        <td>
                                            {{$data->details}}
                                        </td>

{{--                                        <td>--}}
{{--                                            {{$data->p_time}}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            @if($data->status == 0) pending @elseif($data->status == 1)--}}
{{--                                                Confirm @elseif($data->status == 3) Refund @endif--}}
{{--                                        </td>--}}
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                        </table>
                    </article>
                </div>
            </article>
        </section>
    </div>
@endsection
