<?php

namespace App\Entity;

class InvoiceCollection implements \Iterator
{
    public function __construct(public array $invoices)
    {
    }

    public function current()
    {
        echo __METHOD__ . "<br>";
        return current($this->invoices);
    }

    public function next()
    {
        echo __METHOD__ . "<br>";
        next($this->invoices);
    }

    public function key()
    {
        echo __METHOD__ . "<br>";
        return key($this->invoices);
    }

    public function valid()
    {
        echo __METHOD__ . "<br>";
        return current($this->invoices) !== false;
    }

    public function rewind()
    {
        echo __METHOD__ . "<br>";
        reset($this->invoices);
    }
}
