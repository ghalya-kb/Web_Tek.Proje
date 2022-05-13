<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/login.css">
    <style>
        .form p{
            padding:60px;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <div class="form">
        <p>

            <?php
                if (($_POST['mail']=='b201210571@sakarya.edu.tr')&&($_POST['sifre']=='b201210571'))
                {
                    echo"Hoşgeldiniz'b201210571'<br> <br>";
                    echo'Ana Sayfaya Devam Etmek İçin ';   
                    echo'<a href="ana-sayfa.htm">Tıklayın</a>' ;          
                }
                else{
                    echo"<strong>Yanlış Bilgi Girmişsiniz!!</strong> <br> <br> <strong>Giriş Sayfasına Yönlendireceksiniz.</strong>";
                    header("Refresh:3; url=login.htm");
                }

            ?> 
        </p>
    </div>
</body>
</html>

