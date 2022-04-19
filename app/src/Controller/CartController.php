<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    #[
        Route('/cart', name: 'app_cart', options: ["expose" => true]),
        IsGranted('ROLE_USER')
    ]
    public function cart(): Response
    {
//        $this->denyAccessUnlessGranted('ROLE_USER');

        return $this->render('cart/index.html.twig');
    }
}
