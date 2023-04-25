<?php
class Database {
  private $HOST_NAME = "localhost";
  private $USER_NAME = "root";
  private $USER_PASSWORD = "";
  private $DB_NAME = "my_data";
  public $conn = false;


  public function __construct() {
    $this->conn = mysqli_connect($this->HOST_NAME, $this->USER_NAME, $this->USER_PASSWORD, $this->DB_NAME);
    // print_r($connection);
  }
  public function Login($sql) {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      $data = mysqli_fetch_assoc($query);
      return $data;
    } else {
      return 'Please Enter Login Query !';
    }
  }
}
?>