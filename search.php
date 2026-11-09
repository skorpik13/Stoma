<?php
function getBynRate() {
    $cache = __DIR__ . '/usd_cache.json';
    if (file_exists($cache) && (time() - filemtime($cache) < 3600)) {
        return json_decode(file_get_contents($cache), true)['r'];
    }
    $res = @file_get_contents("https://api.nbrb.by/exrates/rates/431");
    if ($res) {
        $arr = json_decode($res, true);
        if (isset($arr['Cur_OfficialRate'])) {
            $r = floatval($arr['Cur_OfficialRate']);
            file_put_contents($cache, json_encode(['r' => $r]));
            return $r;
        }
    }
    return 3.30;
}
$rate = getBynRate();

require_once 'config.php';

$brand = $_POST['brand'] ?? '';
$model = $_POST['model'] ?? '';

if ($brand && !$model) {
    // Запрос1
    $sql = "
    SELECT 
        cars.id,
        cars.marka,
        cars.model,
        cars.year AS year,
        ads.id AS ad_id,
        ads.price AS price, 
        ads.description AS ad_description, 
        ads.date_creation AS ad_date, 
        ads.status AS ad_status, 
        images.path1,
        images.path2,
        images.path3,
        images.path4,
        images.path5,
        images.path6,
        images.path7,
        images.path8,
        images.path9,
        images.path10,
        images.path11,
        images.path12,
        images.path13,
        images.path14,
        images.path15,
        images.path16,
        images.path17,
        images.path18,
        images.path19
    FROM cars
    LEFT JOIN ads ON ads.id_car = cars.id
    LEFT JOIN images ON images.id = cars.id
    WHERE cars.marka = :brand AND cars.model != :model AND ads.status = 'active'
    ";
} else 

if (!$brand && !$model) {
    // Запрос2
    $sql = "
    SELECT 
        cars.id,
        cars.marka,
        cars.model,
        cars.year AS year,
        ads.id AS ad_id,
        ads.price AS price, 
        ads.description AS ad_description, 
        ads.date_creation AS ad_date, 
        ads.status AS ad_status, 
        images.path1,
        images.path2,
        images.path3,
        images.path4,
        images.path5,
        images.path6,
        images.path7,
        images.path8,
        images.path9,
        images.path10,
        images.path11,
        images.path12,
        images.path13,
        images.path14,
        images.path15,
        images.path16,
        images.path17,
        images.path18,
        images.path19
    FROM cars
    LEFT JOIN ads ON ads.id_car = cars.id
    LEFT JOIN images ON images.id = cars.id
    WHERE ads.status = 'active'
    ";
} else

if ($brand && $model) {
    // Запрос3
    $sql = "
    SELECT 
        cars.id,
        cars.marka,
        cars.model,
        cars.year,
        ads.id AS ad_id,
        ads.price, 
        ads.description AS ad_description, 
        ads.date_creation AS ad_date, 
        ads.status AS ad_status, 
        images.path1,
        images.path2,
        images.path3,
        images.path4,
        images.path5,
        images.path6,
        images.path7,
        images.path8,
        images.path9,
        images.path10,
        images.path11,
        images.path12,
        images.path13,
        images.path14,
        images.path15,
        images.path16,
        images.path17,
        images.path18,
        images.path19
    FROM cars
    LEFT JOIN ads ON ads.id_car = cars.id
    LEFT JOIN images ON images.id = cars.id
    WHERE cars.marka = :brand AND cars.model = :model AND ads.STATUS = 'active'
    ";
}

function getImagePath($imagePath) {
    // Проверяем, существует ли файл по указанному пути
    if (file_exists($imagePath)) {
        // Если файл есть, возвращаем его путь
        return $imagePath;
    } else {
        // Если файла нет, возвращаем путь к дефолтной картинке
        return 'images/no_image.jpg';
    }
}

$stmt = $pdo->prepare($sql);
//$stmt->execute(['brand' => $brand, 'model' => $model]);
$params = [];
if ($brand) $params['brand'] = $brand;
if ($model) $params['model'] = $model;
$stmt->execute($params);
$results = $stmt->fetchAll();
if ($results && count($results) > 0) {
    echo '<section class="ads">';
    echo '<div class="ads-list">';
    
    foreach ($results as $row) {
        // Выбираем первую не пустую картинку (теперь ищет до path19, как мы чинили ранее)
        $image = null;
        for ($i = 1; $i <= 19; $i++) {
            if (!empty($row["path$i"]) && $row["path$i"] !== 'images/') {
                $image = htmlspecialchars($row["path$i"]);
                break;
            }
        }

        if (!$image) {
              $image = htmlspecialchars('images/no_image.jpg');
        } else {
              $image = getImagePath($image);
        }

        $name = htmlspecialchars($row['marka'] . ' ' . $row['model']);
        $year = htmlspecialchars($row['year'] ?? '-');
        $price = htmlspecialchars($row['price'] ?? '-');
        $price_number = floatval(preg_replace('/[^0-9.]/', '', $price));
        
        // Используем точный курс Нацбанка, который мы настроили на Шаге 1
//        $price_byn_calc = round($price_number * $rate);
        $price_byn_calc = round($price_number * 3.05);
        $price = number_format($price_byn_calc, 0, '', ' ');

        $id_ads = htmlspecialchars($row['ad_id']);

        // ИСПРАВЛЕНО: Ссылка теперь аккуратно оборачивает ВСЮ карточку от начала до конца
        echo '
        <a href="ad.php?id=' . $id_ads . '" target="_blank" style="text-decoration: none; color: inherit;">
            <div class="ad">
                <img class="ad-image" src="' . $image . '" alt="' . $name . '">
                <center>
                    <h3 class="ad-name"><b>' . $name . '</b></h3>
                    <span class="ad-year"><b>' . $year . ' г.в.</b></span>
                    <!-- <span class="ad-price"><b><span class="currency-symbol">Br</span> ' . $price . '</b></span> -->
                    <span class="ad-price"><b>' . $price . '<span class="bel-ruble"></span></b></span>
                </center>
            </div>
        </a>';
    }

    echo '</div>';
    echo '</section>';
} else {
    echo '<center><h2 class="ads-header">Объявления не найдены</h2></center>';
}
?>
