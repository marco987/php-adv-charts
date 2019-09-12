<?php

header('Content-type: application/json');

include "database3.php";

$level = $_GET["level"];

$datiCriptati = [];
$chiaveFatturato = $graphs["fatturato"];
$chiaveFatturato_by_agent = $graphs["fatturato_by_agent"];

if ($level == "clevel") {

  $datiCriptati = $graphs;

} else if ($level == "employee") {

  $datiCriptati["fatturato"] = $chiaveFatturato;
  $datiCriptati["fatturato_by_agent"] = $chiaveFatturato_by_agent;

} else if ($level == "guest") {

  $datiCriptati["fatturato"] = $chiaveFatturato;

}

echo json_encode($datiCriptati);

?>
