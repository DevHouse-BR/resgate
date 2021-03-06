/**
 * $ModDesc
 * 
 * @version	$Id: helper.php $Revision
 * @package	modules
 * @subpackage	$Subpackage.
 * @copyright	Copyright (C) May 2010 LandOfCoder.com <@emai:landofcoder@gmail.com>.All rights reserved.
 */ 
// JavaScript Document
window.addEvent('load', function(){

	var trs = $ES('.paramlist tr');
	 trs.each( function(tr, index){
		var tmp = tr.getElement('td.paramlist_value .lof-group')
		if( tmp && tmp.getProperty('title') ){
			tr.addClass('group-'+tmp.getProperty('title')).addClass('icon-'+tmp.getProperty('title'));
			for( j=index+1; j < trs.length; j++ ){
				if( $defined(trs[j].getElement('td.paramlist_value .lof-end-group')) ) {
					trs[j].remove();
					break;
				}
				trs[j].addClass('group-'+tmp.getProperty('title')).addClass('lof-group-tr');
			}
			var title = tmp.getProperty('title');
			tmp.enable= true;
		}
	 });
	 function update( tmp, hide ){
		 	if( hide ){
				tmp.enable = true;
			}
		 	var title = tmp.value;
			if(  tmp.enable==false  && $defined(tmp.enable) ) {
				$ES('.admintable tr.group-'+title ).setStyle('display','');
				tmp.enable=true;

			} else if(title && title !=-1) {
				$ES('.admintable tr.group-'+title ).setStyle('display','none');
				tmp.enable=false;
			}
			setTimeout( function(){
				$E('.jpane-slider ').setStyle( 'height', $E('.paramlist').offsetHeight );
			}, 300 );
	 }
	$ES('#paramsgroup').addEvent('change',function(){
		tmdp = this;
		tmdp.enable = false;
			update( this  );
		var selected = this;
		$ES('#paramsgroup option').each( function(tmp, index){
				if(tmp.value !=selected.value ) {
					update( tmp, true );
				}
		} );
	});
	 $ES('#paramsgroup option').each( function(tmp, index){
			if(!tmp.selected) {
				update( tmp );
			}

	} );
} );