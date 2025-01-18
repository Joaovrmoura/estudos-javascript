<?php

require 'CoinApi.php';


error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $arrData = file_get_contents("php://input");
    $data = json_decode($arrData);

    if ($data) {
        $api = new CoinApi();
        $price = $api->getPrice($data);
        echo json_encode([
            'success' => true,
            'coin' => $data,
            'price' =>  $price
        ]);
        
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Não existe post["coin"]',
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Método de requisição errado!'
    ]);
}
