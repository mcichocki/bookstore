FROM php:8.1-fpm

RUN apt-get update && apt-get install -y zlib1g-dev g++ git libpng-dev librabbitmq-dev libssh-dev libicu-dev zip libzip-dev zip \
    && docker-php-ext-install intl opcache pdo bcmath sockets pdo_mysql gd  \
    && pecl install apcu \
    && pecl install amqp \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && docker-php-ext-enable apcu \
    && docker-php-ext-enable amqp \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip

WORKDIR /var/www/project

COPY php/ca-certificates/ /usr/local/share/ca-certificates/
RUN update-ca-certificates

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony

#RUN echo -e "\n\
#xdebug.client_host = 172.17.0.1 \n\
#xdebug.default_enable = 1 \n\
#xdebug.mode=debug \n\
#xdebug.start_with_request=yes \n\
#xdebug.remote_handler = "dbgp" \n\
#xdebug.client_port = 9000 \n\
#xdebug.log = /var/www/xdebug.log \n\
#" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# ENV TZ Europe/Warsaw
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone