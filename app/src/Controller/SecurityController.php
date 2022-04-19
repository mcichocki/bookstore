<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login', options: ["expose" => true])]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('security/login.html.twig', [
            'error' => $authenticationUtils->getLastAuthenticationError(),
            'last_username' => $authenticationUtils->getLastUsername()
        ]);
    }

    #[Route('/logout', name: 'app_logout', options: ["expose" => true])]
    public function logout()
    {
        throw new \Exception('logout() should never be reached');
    }

    #[Route('/register', name: 'app_register', options: ["expose" => true])]
    public function register()
    {
        throw new \Exception('logout() should never be reached');
    }
}
