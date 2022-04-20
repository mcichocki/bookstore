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

    #[Route('/user-register', name: 'user_register', options: ["expose" => true])]
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
                "type" => "Książka",
                "group" => "cpp",
                "tags" => ["cpp", "book", "programming"],
                "title" => "Język C++. Kompendium wiedzy. Wydanie IV",
                "icon" => "fa-solid fa-book",
                "author" => "Bjarne Stroustrup",
                "publisher" => "Helion",
                "releaseDate" => "2014-07-10",
                "print" => "oprawa twarda",
                "pages" => "1296",
                "price" => "125.50",
                "stars" => 6,
                "opinions" => "",
                "image" => "build/images/jcppkw.jpeg",
                "description" => "",
                "details" => "",
                "contents" => "",
                "amount" => 10,
                "extra" => [
                    "promotions" => true,
                    "promotions_image" => "build/images/dopisek-raty-0.png",
                    "installment" => true,
                    "countOpinions" => 21,
                    "promotionPrice" => "75.50",
                    "shipping" => "Wysyłamy w 24h",
                    "availability" => "Powiadom o dostępności audiobooka"
                ]
            ],
            [
                "id" => 2,
                "type" => "Ebook",
                "group" => "cpp",
                "tags" => ["cpp", "book", "programming"],
                "title" => "Język C++. Kompendium wiedzy. Wydanie IV",
                "icon" => "fa-solid fa-tablet-screen-button",
                "author" => "Bjarne Stroustrup",
                "publisher" => "Helion",
                "releaseDate" => "2014-07-10",
                "print" => "oprawa twarda",
                "pages" => "1296",
                "price" => "125.50",
                "stars" => 6,
                "opinions" => "",
                "image" => "build/images/bhpyth.jpeg",
                "description" => "",
                "details" => "",
                "contents" => "",
                "amount" => 10,
                "extra" => [
                    "promotions" => true,
                    "promotions_image" => "build/images/dopisek-raty-0.png",
                    "installment" => true,
                    "countOpinions" => 21,
                    "promotionPrice" => "75.50",
                    "shipping" => "Wysyłamy w 24h",
                    "availability" => "Powiadom o dostępności audiobooka"
                ]
            ],
            [
                "id" => 3,
                "type" => "Audio",
                "group" => "cpp",
                "tags" => ["cpp", "book", "programming"],
                "title" => "Język C++. Kompendium wiedzy. Wydanie IV",
                "icon" => "fa-solid fa-compact-disc",
                "author" => "Bjarne Stroustrup",
                "publisher" => "Helion",
                "releaseDate" => "2014-07-10",
                "print" => "oprawa twarda",
                "pages" => "1296",
                "price" => "125.50",
                "stars" => 6,
                "opinions" => "",
                "image" => "build/images/czykov.jpeg",
                "description" => "",
                "details" => "",
                "contents" => "",
                "amount" => 10,
                "extra" => [
                    "promotions" => true,
                    "promotions_image" => "build/images/dopisek-raty-0.png",
                    "installment" => true,
                    "countOpinions" => 21,
                    "promotionPrice" => "75.50",
                    "shipping" => "Wysyłamy w 24h",
                    "availability" => "Powiadom o dostępności książki"
                ]
            ]
        ];

        return new JsonResponse($data);
    }
}
