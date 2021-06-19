@extends('dotcom.partials.page')

@section('content')
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap"
         data-wa-region="B" data-wa-component="leftmenu"><a class="block block--secondary block--header v-center"
                                                            href="javascript:void(0);"><span class="v-center__content">Transaction and Utilities</span></a>
        <ul class="block list">
            <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.account.statement')}}">
                    Account Statements
                </a>
            </li>
            <li data-wa-menu-3="Latest interim results"><a class=" " href="javascript:void(0);">
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
                <h1 id="content-start"> Deposit methods </h1>
            </div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">

            <section id="investors">
                <div class="container">
                    {{-- <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-8 text-center">
                            <div class="heading-title">
                                <h2>
                                @lang('Deposit methods')
                                </h2>
                                <div class="sectionSeparator"></div>

                            </div>
                        </div>
                    </div> --}}
                    <div class="row">
                        @foreach($gates as $gate)
                            <div class="col-md-6 col-lg-3">
                                <div class="box">
                                    <div class="image">
                                        <img class="img-fluid" src="{{asset('assets/image/gateway')}}/{{$gate->id}}.jpg"
                                             style="width:100%;"/>
                                    </div>
                                    <div class="info">
                                        <ul class="list-group text-center">
                                            <li class="list-group-item">
                                                <h5>{{__($gate->name)}}
                                                </h5>
                                            </li>
                                            <li class="list-group-item">
                                                @lang('Limit'): <strong>{{$gnl->cur_symbol}} {{$gate->minamo}}</strong>
                                                ~ <strong>{{$gnl->cur_symbol}} {{$gate->maxamo}}</strong>
                                            </li>
                                            <li class="list-group-item">
                                                @lang('Charge'):
                                                <strong>{{$gnl->cur_symbol}} {{$gate->fixed_charge}}</strong> +
                                                <strong>{{$gate->percent_charge}} %</strong>
                                            </li>

                                        </ul>
                                        <div class="card-footer">
                                            <button data-toggle="modal" data-name="{{__($gate->name)}}"
                                                    data-gate="{{$gate->id}}" data-target="#depoModal"
                                                    class="btn submit-btn depoButton viweBtn" style="width:100%;">
                                                @lang('Deposit Now')
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>


            <section id="transaction p-0">
                <div class="container" id="deposit-log">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-8 text-center">
                            <div class="heading-title">
                                <h2>
                                    @lang('Deposit Log')
                                </h2>
                                <div class="sectionSeparator"></div>

                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="tab1">

                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade active show" id="pills-deposit" role="tabpanel"
                                         aria-labelledby="pills-deposit-tab">
                                        <div class="table-responsive">
                                            <table class="table table-hover text-center">
                                                <thead>
                                                <tr>
                                                    <th class="text-center">@lang('Amount')</th>
                                                    <th class="text-center">@lang('Gateway')</th>
                                                    <th class="text-center">@lang('TRX ID')</th>
                                                    <th class="text-center">@lang('TRX Time')</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @if(count($deposit)==0)
                                                    <tr>
                                                        <td colspan="4"><h2>@lang('No Data Available')</h2></td>
                                                    </tr>
                                                @endif
                                                @foreach($deposit as $log)
                                                    <tr>
                                                        <td>{{$log->amount}} {{$gnl->cur}}</td>
                                                        <td>{{$log->gateway->name}}</td>
                                                        <td>{{$log->trx}}</td>
                                                        <td>{{$log->created_at}}</td>
                                                    </tr>
                                                @endforeach
                                                </tbody>

                                            </table>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="d-flex justify-content-end">
                            {{$deposit->links()}}
                        </div>
                    </div>

                </div>

            </section>


            <!-- Modal -->
            <div class="modal fade" id="depoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                 aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ModalLabel"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="{{route('user.deposit.data-insert')}}" method="POST">
                                @csrf
                                <input type="hidden" name="gateway" id="gateWay"/>
                                <div class="form-group">
                                    <h5>@lang('Enter Deposit Amount')</h5>
                                    <div class="input-group-append">
                                        <input type="text" name="amount" class="form-control form-control-lg"/>
                                        <span class="input-group-text">{{$gnl->cur}}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn viweBtn"
                                            style="width:100%;">@lang('Deposit Preview')</button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('Close')</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>

    <script>
        $(document).ready(function () {
            $(document).on('click', '.depoButton', function () {
                $('#ModalLabel').text($(this).data('name'));
                $('#gateWay').val($(this).data('gate'));
            });
        });
    </script>
@endsection


{{-- @extends('user') --}}
@section('deposit', 'active')
@section('title')
    @lang('E-deposit')
@stop

@section('script')


@endsection
