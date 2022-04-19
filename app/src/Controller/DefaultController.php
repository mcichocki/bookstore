<?php

namespace App\Controller;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    #[Route('/', name: 'app_default', options: ["expose" => true], methods: ['GET'])]
    public function index(): Response
    {
//        $email = (new Email())
//            ->from('bookstore.app.pl@gmail.com')
//            ->to('cichocki.programmer@gmail.com')
//            ->subject('Zamówienie zostało złożone')
//            ->text('Dziękujemy za złożenie zamówienia w naszej księgarni.');
//        $this->mailer->send($email);
//
//        $email = (new Email())
//            ->from('bookstore.app.pl@gmail.com')
//            ->to('cichocki.programmer@gmail.com')
//            ->subject('Zamówienie gotowe do wysyłki')
//            ->text('Twoja paczka czeka na odebranie przez kuriera.');
//        $this->mailer->send($email);
//
//        $email = (new Email())
//            ->from('bookstore.app.pl@gmail.com')
//            ->to('cichocki.programmer@gmail.com')
//            ->subject('Zamówienie wyruszyło w drogę')
//            ->text('Twoja paczka jest w drodze do paczkomatu...');
//        $this->mailer->send($email);
//
//        $email = (new Email())
//            ->from('bookstore.app.pl@gmail.com')
//            ->to('cichocki.programmer@gmail.com')
//            ->subject('Zamówienie gotowe do odebrania')
//            ->text('Twoja paczka czeka już na odbiór, lepiej się pospiesz bo jest niecierpliwa ;)');
//        $this->mailer->send($email);
//
//        $email = (new Email())
//            ->from('bookstore.app.pl@gmail.com')
//            ->to('cichocki.programmer@gmail.com')
//            ->subject('Zamówienie odebrane')
//            ->text('Dziękujemy za zakupy w naszej księgarni. Zapraszamy ponownie!');
//        $this->mailer->send($email);

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
