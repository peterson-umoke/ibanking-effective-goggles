@if($errors->any())
    <script>
        $(document).ready(function () {
            @foreach($errors->all() as $error)
                toastr.options = {
                "progressBar": true,
                "positionClass": "toast-bottom-right",
            };

            toastr.error('{{ $error }}', {
                "positionClass": "toast-bottom-right",
            });
            @endforeach
        });

    </script>
@endif

@if(session()->has('success'))
    <script>
        $(document).ready(function () {
            toastr.options = {
                "progressBar": true,
                "positionClass": "toast-bottom-right",
            };

            toastr.success('{{ session('success') }}');
        });

    </script>
@endif
