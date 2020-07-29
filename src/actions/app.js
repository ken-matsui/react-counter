export default {
  increment: (x_) => {
  	switch(x_) {
    	case 'PLUS': {
    		return { type: 'INCREMENT' }
    	}
    	case 'MINUS': {
    		return { type: 'DECREMENT' }
    	}
      case 'API': {
        return { type: 'API' }
      }
    	default: {
    		return { type: 'UNKNOWN' }
    	}
    }
  }
}