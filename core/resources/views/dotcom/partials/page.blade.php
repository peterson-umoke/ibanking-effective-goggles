@extends("dotcom.partials.master")

@section('master-content')
    <link rel="stylesheet" type="text/css" href="{{asset('assets/user/css/bootstrap.css')}}">
    @include('flash::message')

    @yield("content")
@endsection
