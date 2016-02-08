import page from './page'
import pool from './pool'

function Content(name){
    switch(name) {
        case 'page':
            return page
        case 'pool':
            return pool
    }
    return page;
}

export default Content;

