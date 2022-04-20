<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebsiteController extends AbstractController
{
    #[Route('/home', name: 'home')]
    public function home()
    {
        return $this->render('templates/home.html.twig', []);
    }

    #[Route('/menu/{group}', name: 'website_menu', options: ["expose" => true], methods: ['GET'])]
    public function menu(): Response
    {
        return $this->render('website/menu.html.twig', [
        ]);
    }

    #[Route('/news', name: 'website_news', options: ["expose" => true], methods: ['GET'])]
    public function news(): Response
    {
        $books = [
            [
                "id" => 1,
                "name" => "Kali Linux. Audyt bezpieczeństwa",
                "thumbnail" => "build/images/kaliau.jpeg",
                "url" => "kali"
            ],
            [
                "id" => 2,
                "name" => "Black Hat Python",
                "thumbnail" => "build/images/bhpyth.jpeg",
                "url" => "python"
            ],
            [
                "id" => 3,
                "name" => "Czysty kod",
                "thumbnail" => "build/images/czykov.jpeg",
                "url" => "x"
            ],
            [
                "id" => 4,
                "name" => "Python 3. Projekty",
                "thumbnail" => "build/images/pytmie.jpeg",
                "url" => "y"
            ],
            [
                "id" => 5,
                "name" => "Certyfikowany tester ISTQB",
                "thumbnail" => "build/images/ctispp.jpeg",
                "url" => "cti"
            ],
            [
                "id" => 6,
                "name" => "Język C++. Kompendium wiedzy",
                "thumbnail" => "build/images/jcppkw.jpeg",
                "url" => "cppx"
            ],
        ];

        return $this->render('website/news.html.twig', [
            'title' => 'Aktualności',
            'books' => $books
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
