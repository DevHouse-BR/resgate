swfobject.embedSWF("<?php echo $currentURL ; ?>assets/piecemakerNoShadow.swf", "flashcontent<?php echo $module->id?>", "<?php echo $params->get('module_width','960');?>", "<?php echo $params->get('module_height','500');?>", "10", "<?php echo $currentURL ; ?>assets/swfobject/expressInstall.swf", flashvars, attributes);