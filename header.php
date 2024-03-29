<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frequencylex</title>
    <?php wp_head();?>
</head>
<body>
    <?php get_template_part('parts/modal/modal');?>
    <?php get_template_part('parts/whatssapButton');?> 
    <header class="header grid">
        <div class="header__nav__logos-container">
            <div class="nav__mascota-container">
                <img class="mascota" src="<?php echo(IMG . 'personaje-header.svg');?>" alt="mascota">
            </div>
            <div class="nav-frequentum-container">
                <a href="<?php echo site_url('/inicio'); ?>">
                    <img class="nav-logo" src="<?php echo(IMG. 'logo-freq.webp')?>" alt="nav-logo">
                </a>
            </div>
                <div class="nav-movil-button-container">
                    <img class="nav-movil-icon" src="<?php echo(ICON. 'movil-icon.svg')?>" alt="nav-logo">
                </div>
            </div>

            <nav class="header__nav">
                <ul class="nav__menu grid col-4 peq-col-1">
                    <div class="menu-cerrar-button-container">
                        <img class="nav-movil-cerrar-icon" src="<?php echo(ICON. 'tache.svg')?>" alt="nav-logo">
                    </div>
                    <li class="menu-link inicio-link">
                        <a href="<?php echo site_url('/inicio')?>" class="formulario-link" href="#">
                            <img src="<?php echo(IMG. 'logo-svg.svg')?>" alt="">
                        </a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/nosotros'); ?>">Nosotros</a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/servicios'); ?>">Servicios</a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/contacto'); ?>">Contacto</a>
                    </li>
                    <li class="menu-link">
                        <a class="abrir-modal-link privado formulario-link" href="#">Agenda una llamada</a>
                    </li>
                </ul>
            </nav>
        </header>