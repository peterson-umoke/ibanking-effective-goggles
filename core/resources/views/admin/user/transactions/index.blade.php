@extends('admin')
@section('user', 'active')
@section('title')
    {{$title}}
@stop

@section('content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-users"></i> {{$title}}</h1>
            </div>
        </div>
        <div class="raw">
            <div class="col-lg-12">
                <div class="mb-4">
                    <a href="{{route('admin.users.transaction-history.create',$user)}}" class="btn btn-primary">Add
                        Transaction History</a>
                    <a class="btn btn-primary ml-2"
                       href="{{route('admin.userDetails',[ $user->id])}}">Go Back</a>
                </div>

                <div class="tile">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            @empty($data)
                                <tr>
                                    <td class="text-center">
                                        <h2>@lang('No data found') </h2>
                                    </td>
                                </tr>
                            @else
                                <tr>
                                    <th>#</th>
                                    <th>@lang('Name')</th>
                                    <th>@lang('Account Number')</th>
                                    <th>@lang('Email')</th>
                                    <th>@lang('Amount')</th>
                                    <th>@lang('Balance')</th>
                                    <th>@lang('Action')</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($data as $value)
                                <tr>
                                    <th>{{$loop->iteration}}</th>
                                    <th>{{$value->user->name}}</th>
                                    <th>{{$value->user->account_number}}</th>
                                    <th>{{$value->user->email}}</th>
                                    <th>{{$gnl->cur_symbol}} {{$value->amount}} {{$gnl->cur}}</th>
                                    <th>{{$gnl->cur_symbol}} {{$value->balance}} {{$gnl->cur}}</th>
                                    <th>
                                        <a href="{{route('admin.users.transaction-history.show',[$user, $value])}}"
                                           class="btn btn-info">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        {{Form::open(['route' => ['admin.users.transaction-history.destroy', [$user, $value]],'class' => 'd-inline-block','method' => 'delete'])}}
                                        <button class="btn btn-danger" type="submit">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                        {{Form::close()}}
                                    </th>
                                </tr>
                            @endforeach
                            @endif
                            </tbody>
                        </table>
                        <div class="d-flex flex-row-reverse">
                            {{$data->links()}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
