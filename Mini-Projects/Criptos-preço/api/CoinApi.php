<?php

class CoinApi{
    private function consumer($cripto, $method ='GET'){

        $curl = curl_init();

        curl_setopt_array($curl, [
          CURLOPT_URL => "https://data-api.binance.vision/api/v3/ticker/price?symbol=$cripto",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_SSL_VERIFYPEER => false, 
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => $method,
          CURLOPT_HTTPHEADER => [
            "Accept: */*",
            "User-Agent: Thunder Client (https://www.thunderclient.com)"
          ],
        ]);
        
        $response = curl_exec($curl);
        $err = curl_error($curl);
        
        curl_close($curl);
        
        if ($err) {
           echo "cURL Error #:" . $err;
           die(0);
        } else {
           return json_decode($response, true);
        }
    }
    public function getPrice($cripto){
        $criptoInfo = $this->consumer($cripto);
        return $criptoInfo['price'];
    }
}

