<?php

namespace App\View\Components;

use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class JetHeading extends Component
{
    /**
     * the title of the header
     * @var
     */
    public $title;

    /**
     * @var mixed|string
     */
    public $value;

    /**
     * Create a new component instance.
     *
     * @param $title
     * @param $value
     */
    public function __construct($title, $value = "")
    {
        $this->title = $title;
        $this->value = $value;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.jet-heading');
    }
}
