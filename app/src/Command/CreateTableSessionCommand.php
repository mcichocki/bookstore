<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\HttpFoundation\Session\Storage\Handler\PdoSessionHandler;


/**
 * Class CreateTableSessionCommand
 */
class CreateTableSessionCommand extends Command
{
    protected static $defaultName = 'session:create_table';
    protected $sessionHandlerService;

    public function __construct(
        PdoSessionHandler  $pdoSessionHandler
    )
    {
        parent::__construct();
        $this->sessionHandlerService = $pdoSessionHandler;
    }

    /**
     * Handle configure.
     *
     * @return mixed
     */
    protected function configure()
    {
    }

    /**
     * Execute command.
     *
     * @param InputInterface $input
     * @param OutputInterface $output
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        try {
            $this->sessionHandlerService->createTable();
        } catch (\PDOException $exception) {}

        return Command::SUCCESS;
    }
}
