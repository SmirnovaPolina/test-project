<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="index")
     * @return Response
     */
    public function main() {
        return $this->render('index.html.twig', ['watch' => true]);
        //return new Response('aa');
    }

}