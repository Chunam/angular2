import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
    
    info(message: string) {    
        console.info(message);
    }

    warn(message: string) {    
        console.warn(message);
    }

    error(message: string) {    
        console.error(message);
    }
}
