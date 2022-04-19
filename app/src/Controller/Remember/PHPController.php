<?php

namespace App\Controller\Remember;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PHPController extends AbstractController
{
    #[Route('/php/operators', name: 'php_operators', methods: ['GET'])]
    public function operators(): Response
    {
        dump(1 <=> 2);
        dump('1.5' <=> '1.5');
        dd("d" <=> "a");
        return $this->render('default/index.html.twig');
    }
}