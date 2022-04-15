<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default', options: ["expose" => true], methods: ['GET'])]
    public function index(Request $request): Response
    {
        return $this->render('default/index.html.twig');
    }

    #[Route('/php/operators', name: 'php_operators', methods: ['GET'])]
    public function operators(): Response
    {
        dump(1 <=> 2);
        dump('1.5' <=> '1.5');
        dd("d" <=> "a");
        return $this->render('default/index.html.twig');
    }

    #[Route('/register', name: 'user_register', options: ["expose" => true])]
    public function register(): Response
    {
        return $this->render('default/register.html.twig');
    }

    #[Route('/api/users', name: 'api_users', options: ["expose" => true], methods: ['POST'])]
    public function createUser(Request $request): Response
    {
        dd($request->request->get('firstName'));

        return $this->json('Utworzono nowego usera');
    }


    #[Route('/api/books', name: 'api_books', options: ["expose" => true], methods: ['GET'])]
    public function books(): JsonResponse
    {
        $data = [
            [
                "id" => 1,
                "title" => "Władca Pierścieni",
                "author" => "J.R.R. Tolkien"
            ],
            [
                "id" => 2,
                "title" => "Symfonia C++",
                "author" => "Jerzy Grębosz"
            ],
            [
                "id" => 3,
                "title" => "PHP. Obiekty, wzorce, narzędzia.",
                "author" => "Matt Zandstra"
            ],
            [
                "id" => 4,
                "title" => "Python. Wprowadzenie",
                "author" => "Mark Lutz"
            ],
            [
                "id" => 5,
                "title" => "Hack Wars",
                "author" => "John Chirillo"
            ],
            [
                "id" => 6,
                "title" => "Język C++. Szkoła programowania.",
                "author" => "Stephen Prata"
            ],
            [
                "id" => 7,
                "title" => "Język C++. Szkoła programowania 2.",
                "author" => "Stephen Prata"
            ]
        ];

        return new JsonResponse($data);
    }
}
