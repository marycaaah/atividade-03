var signo= prompt('Digite seu signo')
switch (signo) {
    case 'leão':
        console.log('de 23 julho a 22 agosto')
        break;
    case  'aries':
        console.log('de 21 de março a 20 de abril')
        break;
        case 'Touro':
        console.log('de 21 de abril a 20 de maio')
        break;
    case  'gemeos':
        console.log('de 21 de maio a 20 de junho')
        break;
    case  'cancer':
            console.log('de 21 de junho a 22 de julho')
            break;
    case 'virgem':
            console.log('de 23 agosto a 22 setembro')
            break;
         default : 
            console.log('signo não registrado')
            break;
    
}