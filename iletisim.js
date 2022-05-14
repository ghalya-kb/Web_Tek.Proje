var uyariMesaj="";
var Hata = false;

function validateForm()
{
    var ad = document.getElementById("fname").value;
    if (ad == "")
    {
        uyariMesaj += "   Adınızı Giriniz !";
        document.forms.BaneUlasin.fName.focus() ;
        Hata = true;
    }

    var soyad = document.getElementById("lastname").value;
    if( soyad== "")
    {
        uyariMesaj += "\n   Soyadınızı Giriniz !";
        document.forms.BaneUlasin.LastName.focus() ;
        Hata = true;
    }


    var mail = document.getElementById("email").value;
    if (!(mail.includes('@') && mail.includes('.') && mail.length > 5))
    {
        uyariMesaj += "\n   Email Adresinizi Doğru Formatta Giriniz !";
        document.forms.BaneUlasin.Email.focus() ;
        Hata = true;
    }
    
    var numara = document.getElementById("tel").value;
    if (!Number(numara) || numara == "" || numara.length != 10)
    {
        uyariMesaj += "\n   Telefon Numaranızı Konrtol Ediniz !";
        document.forms.BaneUlasin.Tel.focus() ;
        Hata = true;
    }

    var cinsiyet_ ;
    if(document.getElementById("er").checked == true)
    {
        cinsiyet_ = document.getElementById("er").value;
    }

    else if(document.getElementById("kd").checked == true)
    {
        cinsiyet_ = document.getElementById("kd").value;
    }

    else
    {
        uyariMesaj += "\n   Cisiyet Seçiniz !";
        document.getElementById("er").focus() ;
        Hata = true;
    }
    
    if (ad == "")
    {
        uyariMesaj += "   \nAdınızı Giriniz !";
        document.forms.BaneUlasin.fName.focus() ;
        Hata = true;
    }

    var adress = document.getElementById("adres").value;
    if (adress == "")
    {
        uyariMesaj += "   \nAdres Bilgilerinizi Giriniz !";
        document.forms.BaneUlasin.Adres.focus() ;
        Hata = true;
    }

    var gonderilenMesaj = document.getElementById("mesaj").value;
    if (gonderilenMesaj == "")
    {
        uyariMesaj += "   \nMesajınızı Yazınız !";
        document.forms.BaneUlasin.Mesaj.focus() ;
        Hata = true;
    }

    var nationality = document.getElementsByName("Uyruk").value;

    if(Hata)
    {
        alert(uyariMesaj);
        uyariMesaj = "";
        Hata = false;
        return false;
    }

    else
    {
        return true;
    }
}