<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebsiteController extends AbstractController
{
    #[Route('/menu/{item}', name: 'website_menu', options: ["expose" => true], methods: ['GET'])]
    public function menu(): Response
    {
        return $this->render('website/news.html.twig', [
            'controller_name' => 'WebsiteController',
        ]);
    }

    #[Route('/news', name: 'website_news', options: ["expose" => true], methods: ['GET'])]
    public function news(): Response
    {
        return $this->render('website/news.html.twig', [
            'title' => 'Aktualności',
        ]);
    }

    #[Route('/favourite', name: 'website_favourite', options: ["expose" => true], methods: ['GET'])]
    public function favourite(): Response
    {
        return $this->render('website/favourite.html.twig', [
            'title' => 'Ulubione',
        ]);
    }
}
