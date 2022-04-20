<?php

namespace App\Menu;

//use App\Entity\Blog;
use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;

final class Builder implements ContainerAwareInterface
{
    use ContainerAwareTrait;

    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    public function mainMenu(): ItemInterface
    {
        $menu = $this->factory->createItem('root');

        $menu->addChild('Home', ['route' => 'home']);

        // access services from the container!
//        $em = $this->container->get('doctrine')->getManager();
        // findMostRecent and Blog are just imaginary examples
//        $blog = $em->getRepository(Blog::class)->findMostRecent();

        $menu->addChild('Latest Blog Post', [
            'route' => 'website_news',
//            'routeParameters' => ['id' => 1]
        ]);

        // create another menu item
        $menu->addChild('About Me', ['route' => 'website_favourite']);
        // you can also add sub levels to your menus as follows
        $menu['About Me']->addChild('Edit profile', ['route' => 'app_login']);

        // ... add more children

        return $menu;
    }
}
