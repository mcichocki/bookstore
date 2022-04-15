<?php

namespace App\Controller;

use App\Entity\SOLID\Person;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SOLIDController extends AbstractController
{
    #[Route('/solid/srp', name: 'solid_srp', methods: ['GET'])]
    public function srp()
    {
        $person = new Person();
        $person->setFirstName("Mateusz");
        $person->setLastName("Cichocki");
        $person->setAge(32);
        $person->setSex("male");
        $p = clone $person;
        $x = ($p instanceof Person);
        print $x;
        die;
    }
}