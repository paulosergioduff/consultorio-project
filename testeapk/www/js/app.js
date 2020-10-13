 function cancelarLocacao($tempo){
    	if ($tempo < 24) {
    		return false;
    	}else{
    		return true;
    	}
    }