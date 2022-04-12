<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DesignPatternsController extends AbstractController
{
    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Wzorce Projektowe
     * https://koddlo.pl/kategoria/wzorce-projektowe/
     *
     * Podział:
     *
     * 1. Wzorce kreacyjne
     *   1.1. Abstract Factory (Fabryka Abstrakcyjna)
     *   1.2. Builder (Budowniczy)
     *   1.3. Factory Method (Metoda Wytwórcza)
     *   1.4. Prototype (Prototyp)
     *   1.5. Simple Factory (Prosta Fabryka)
     *   1.6. Singleton
     *
     * 2. Wzorce strukturalne
     *   2.1. Adapter
     *   2.2. Bridge (Most)
     *   2.3. Composite (Kompozyt)
     *   2.4. Decorator (Dekorator)
     *   2.5. Facade (Fasada)
     *   2.6. Proxy (Pełnomocnik)
     *
     * 3. Wzorce behawioralne
     *   3.1. Chain Of Resposibility (Łańcuch Zobowiązań)
     *   3.2. Command (Polecenie)
     *   3.3. Iterator
     *   3.4. Null Object (Pusty Obiekt)
     *   3.5. Observer (Obserwator)
     *   3.6. Strategy (Strategia)
     *   3.7. Template Method (Metoda Szablonowa)
     * * * * * * * * * * * * * * * * * * * * * * * * * * */


    #https://koddlo.pl/singleton/
    #[Route('/design-patterns/kreacyjne/singleton', methods: ['GET'], name: 'dp_singleton')]
    public function singleton()
    {
        
    }
}