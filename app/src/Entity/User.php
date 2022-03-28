<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Doctrine\UuidGenerator;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    itemOperations: ["delete", "patch"],
    collectionOperations: ["get", "post"],
    denormalizationContext: ['groups' => ['user:write']],
    normalizationContext: ['groups' => ["get", 'user:read']],
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    const ROLE_ADMIN = 'ROLE_ADMIN';
    const ROLE_USER = 'ROLE_USER';

    #[ORM\Id, ORM\Column(type: 'uuid', unique: true)]
    #[ORM\GeneratedValue('CUSTOM')]
    #[ORM\CustomIdGenerator(UuidGenerator::class)]
    #[Groups(['user:read'])]
    private UuidInterface $id;

    #[Assert\NotBlank]
    #[ORM\Column(type: Types::STRING, length: 180, unique: true)]
    #[Groups(['user:read', 'user:write'])]
    private $email;

    #[ORM\Column(type: Types::JSON)]
    private $roles = [];

    #[Assert\NotBlank]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: false)]
    #[Groups(['user:write'])]
    private $password;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    #[Groups(['user:read', 'user:write'])]
    private $firstName;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    #[Groups(['user:read', 'user:write'])]
    private $lastName;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    #[Groups(['user:read', 'user:write'])]
    private $phone;

    #[ORM\Column(type: Types::BOOLEAN)]
    #[Groups(['user:read'])]
    private $active;

    public function __construct()
    {
        $this->roles[] = self::ROLE_USER;
        $this->active = true;
    }

    public function getId(): UuidInterface
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        return $this->roles;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;
        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }
}
