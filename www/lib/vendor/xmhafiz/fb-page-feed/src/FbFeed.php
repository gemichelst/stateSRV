<?php
/**
 * Description of FbFeed
 *
 * @author hafiz
 */
namespace Xmhafiz\FbFeed;

use GuzzleHttp\Client;

class FbFeed {

    private $app_id = null;
    private $secret_key = null;
    private $page_name = null;
    private $keyword = null;
    private $limit = -1; // all of it
    private $fields = 'id,message,created_time,from,permalink_url,full_picture';

    function setAppId($app_id) {
        $this->app_id = $app_id;
        return $this;
    }

    function setSecretKey ($secret_key) {
        $this->secret_key = $secret_key;
        return $this;
    }

    function fields($fields) {
        $this->fields = $fields;
        return $this;
    }

    function setPage($page_name) {
        if ($page_name == null) {
            $page_name = 'id,message,created_time';
        }

        $this->page_name = $page_name;
        return $this;
    }

    function findKeyword($keyword) {
        $this->keyword = $keyword;
        return $this;
    }

    function feedLimit($total = 20) {
        $this->limit = $total;
        return $this;
    }

    function fetch() {
        $client = new Client();

        if ($this->page_name == null) {
            return $this->returnFailed('Page Name is needed');
        }

        if ($this->app_id == null) {
            return $this->returnFailed('Facebook App ID is needed. Please refer to https://developers.facebook.com');
        }

        if ($this->secret_key == null) {
            return $this->returnFailed('Facebook Secret Key is needed. Please refer to https://developers.facebook.com');
        }

        // this is how to construct access token using secret key and app id
        $accessToken = $this->app_id . '|' . $this->secret_key;

        // make request as stated in https://developers.facebook.com/docs/graph-api/using-graph-api
        $url = 'https://graph.facebook.com/' . $this->page_name . '/feed';

        // error handler when status code not 200
        try {
            $test = null;
            $query = [ 
                'query' => [
                    'access_token' => $accessToken,
                    'fields' => $this->fields,
                ]
            ];

            if ($this->limit > -1) {
                $query['query']['limit'] = $this->limit;
            }

            // start request
            $response = $client->request('GET', $url, $query);

            $json = $response->getBody();

            if ($response->getStatusCode() == 200) {

                $dataArray = json_decode($json, true);

                // reformat data
                $feeds = $dataArray['data'];

                if ($this->keyword) {
                    $newFeeds = [];
                    foreach ($feeds as $feed) {
                        if (isset($feed['message']) && stripos($feed['message'], $this->keyword) !== false) {
                            $newFeeds[] = $feed;
                        }
                    }

                    $feeds = $newFeeds;
                }

                return $this->returnSuccess($feeds);
            }
            else {
                return $this->returnFailed('Unable to fetch. Client Error', $response->getStatusCode());
            }
        }
        catch (\Exception $e) {
            return $this->returnFailed($e->getMessage());
        }
    }

    private function returnSuccess($feeds = null, $code = 200) {
        return [
            'error' => false,
            'status_code' => $code,
            'data' => $feeds
        ];
    }

    private function returnFailed($message = null, $code = 500) {
        return [
            'error' => true,
            'status_code' => $code,
            'message' => ($message) ? $message : 'Unexpecetd error occurred'
        ];
    }
}
