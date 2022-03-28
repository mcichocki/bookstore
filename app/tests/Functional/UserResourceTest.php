<?php

namespace App\Tests\Functional;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\User;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;
use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;

class UserResourceTest extends ApiTestCase
{
//    use RefreshDatabaseTrait;
    use ReloadDatabaseTrait;

    public function testWorkingAssertion()
    {
        $this->assertEquals(42, 42);
    }

    // symfony console security:hash-password
    // $2y$13$7t8DjteR8g8zgSFflD90deSREaoXq5T1i4Ss4seucMcOghA63PM7S (1234)

    public function testCreateUser()
    {
        static::createClient()->request('POST', '/api/users', [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'email' => 'dupa@wp.pl',
                'password' => '$2y$13$7t8DjteR8g8zgSFflD90deSREaoXq5T1i4Ss4seucMcOghA63PM7S',
                'phone' => '123-456-789'
            ],
        ]);
//
//        $this->assertResponseStatusCodeSame(401);
//
        $user = new User();
        $user->setEmail('cheesesssspl2ease@example.com');
        $user->setLastName('dddf');
        $user->setFirstName('Stefan');
        $user->setPassword('$2y$13$7t8DjteR8g8zgSFflD90deSREaoXq5T1i4Ss4seucMcOghA63PM7S');
        $user->setPhone( '123-456-789');

        $em = self::getContainer()->get('doctrine')->getManager();
        $em->persist($user);
        $em->flush();
//
//        $client->request('POST', '/login', [
//            'headers' => ['Content-Type' => 'application/json'],
//            'json' => [
//                'email' => 'cheeseplease@example.com',
//                'password' => 'foo'
//            ],
//        ]);
        $this->assertResponseStatusCodeSame(201);
    }

}