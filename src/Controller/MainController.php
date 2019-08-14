<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="vue_page")
     * @return Response
     */
    public function vuePage() {
        return $this->render('index.html.twig', ['watch' => true]);
    }

    /**
     * @Route("/api", name="api_page")
     * @return Response
     */
    public function main() {

        return new Response('aa');
    }

    /**
     * @Route("/api/login_check_e", name="api_page")
     * @return JsonResponse
     */
    public function login_check(){
        return new JsonResponse();
    }


}