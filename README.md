# Sistem Manajemen Perpustakaan Sederhana

## Tech

-   Inertia React
-   Laravel 10

## Instalasi

-   Download atau clone repository ini

    ```bash
     git clone git@github.com:fajarhidayatt/my-lib.git
    ```

-   Instal dependencies inertia react

    ```bash
    npm install
    ```

-   Instal juga dependencies untuk laravel

    ```bash
    composer install
    ```

-   Copy `.env.example` dan rename menjadi `.env`
-   Sesuaikan nama database pada file `.env`

    ```bash
    DB_DATABASE=
    ```

-   Generete app key

    ```bash
    php artisan key:generate
    ```

-   Jalankan migrations database, ketik `yes` jika belum memiliki database pada mysql

    ```bash
    php artisan migrate
    ```

-   Jalankan seeder

    ```bash
    php artisan db:seed
    ```

-   Langkah terakhir untuk menjalankannya di localhost, jalankan server untuk inertia react

    ```bash
    npm run dev
    ```

-   Buka terminal baru dan jalankan server laravel

    ```bash
    php artisan serve
    ```

-   Buka localhost:8000, dan login menggunakan email: `admin@gmail.com` password: `admin123`
