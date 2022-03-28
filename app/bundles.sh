# Doctrine
composer require symfony/orm-pack
composer require --dev symfony/maker-bundle
composer require zenstruck/foundry --dev
composer require symfony/validator

# Routing to JS
composer require friendsofsymfony/jsrouting-bundle
# php bin/console assets:install --symlink public
# php bin/console fos:js-routing:dump --format=json --target=public/js/fos_js_routes.json

# Apache 
composer require symfony/apache-pack

# Var Dumper
composer require --dev symfony/var-dumper

# Attributes / Route 
composer require doctrine/annotations

# Security 
composer require symfony/security-bundle

# Messenger 
composer require symfony/messenger
composer require symfony/doctrine-messenger
composer require symfony/amqp-messenger

# Mailer
composer require symfony/mailer

# Easy Admin
composer require easycorp/easyadmin-bundle

# Forms
composer require symfony/form

# Api Platform 
symfony composer req api

# Testing
composer require --dev symfony/test-pack

# Webpack
composer require symfony/webpack-encore-bundle

# yarn install
# yarn add bootstrap --dev
# yarn add jquery @popperjs/core --dev
# yarn add react react-dom prop-types
# yarn add axios
# yarn add sass-loader@^12.0.0 sass --dev
# yarn add reactstrap
# yarn add @babel/preset-react@^7.0.0 --dev
# yarn add @fortawesome/fontawesome-free
