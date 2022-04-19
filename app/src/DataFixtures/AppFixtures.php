<?php

namespace App\DataFixtures;

use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        UserFactory::createOne([
            'email' => 'm.cichocki@bookstore.pl'
        ]);
        UserFactory::createOne([
            'email' => 'citex@bookstore.pl',
            'roles' => ["ROLE_ADMIN"]
        ]);
        UserFactory::createMany(10);
        $manager->flush();
    }
}
