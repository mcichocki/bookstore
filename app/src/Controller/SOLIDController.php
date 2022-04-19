<?php

namespace App\Controller;

use App\Entity\Invoice;
use App\Entity\Person;
use App\Entity\InvoiceCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SOLIDController extends AbstractController
{
    #[Route('/solid/srp', name: 'solid_srp', methods: ['GET'])]
    public function srp()
    {
//        $person = new Person();
//        $person->setFirstName("Mateusz");
//        $person->setLastName("Cichocki");
//        $person->setAge(32);
//        $person->setSex("male");
//        $p = clone $person;
//        $x = ($p instanceof Person);
//        print $x;
//        die;
//
//        foreach(new Invoice(25) as $key => $value)
//        {
//            echo $key . " = " . $value . PHP_EOL;
//        }
        $invoiceCollection = new InvoiceCollection([new Invoice(15), new Invoice(25), new Invoice(50)]);

        foreach($invoiceCollection as $invoice)
        {
            echo $invoice->id . ' - '. $invoice->amount . "<br>";
        }
        die;
    }


}
