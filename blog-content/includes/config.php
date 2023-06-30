<?php
/*
    FileName : config
    Function : Contains default settings for site
*/

//Replace Domainname to actual site name 
if(strpos($_SERVER['SERVER_NAME'], 'www.domainname.in') !== false){
	//---- SEO Path settings-----
  define('S_IWTPATH','https://www.imaginewebtech.com/');//Don't change
  define('S_DOMAINPATH','https://www.domainname.in/');//Replace Domainname to actual site name
  define('S_ROOTPATH',$_SERVER['DOCUMENT_ROOT'].'/');//Don't change
  define('S_IMGPATH',S_DOMAINPATH.'images/');//Don't change
  define('S_JSPATH',S_DOMAINPATH.'js/');//Don't change
  define('S_INCLUDESPATH',S_ROOTPATH.'includes/');//Don't change
}else{
	//---- SEO Path settings-----
  define('S_IWTPATH','https://www.imaginewebtech.info/');//Don't change
  define('S_DOMAINPATH','https://www.imaginewebtech.info/d2/domainname/');//Replace Domainname to test server folder path
  define('S_ROOTPATH',$_SERVER['DOCUMENT_ROOT'].'/');//Don't change
  define('S_IMGPATH',S_DOMAINPATH.'images/');//Don't change
  define('S_JSPATH',S_DOMAINPATH.'js/');//Don't change
  define('S_INCLUDESPATH',S_ROOTPATH.'includes/');//Don't change  
}
?>
 