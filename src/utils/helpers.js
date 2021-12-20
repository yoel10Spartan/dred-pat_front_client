export const range = (min, max) => {
    let i = 1;
    const listNumbers = [];
    for(i=min; i<=max; i++){
        if(i>0){
            listNumbers.push(i)
        }
    }
    return listNumbers
}

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const item = {
    element: '',
    get itemComplete(){
        return this.element
    },
    set itemComplete(i){
        this.element = i
    }
}

export const pathDir = {
    path: '',
    get pathDirComplete(){
        return this.path
    },
    set pathDirComplete(i){
        this.path = i
    }
}

export const convertPath = (text) => {
    return '/'.concat(text, '/');
}

export const createPath = (pathname, elementDelete='', specific_element) => {
    return pathname.replaceAll('--', '/')
                .replace(elementDelete, '')
                .concat('/', specific_element.replaceAll(' ', '__'));
}