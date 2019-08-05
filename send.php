<?php

	$kime = "deeppaz@hotmail.com";
	$konu = $_POST["contact_sujet"];
	$mesaj = "<h1>".$_POST["contact_message"]."</h1>";
	$baslik = "From: ".$_POST["contact_nom"]."<".$_POST["contact_email"].">\r\n";
	$baslik .= "Reply-to : reply@cembercidenizcilik\r\n";
	$baslik .= "Content-type : text/html\r\n";

	if(mail($kime, $konu, $mesaj, $baslik))
		echo "email gonderildi";
	else {
		echo "gonderilemedi";
	}
?>