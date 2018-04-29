import { Pipe, PipeTransform } from '@angular/core';
import {FotoComponent} from "./foto.component";

@Pipe({
    name: 'filtroPorTitulo'
})
export class filtroPorTitulo implements PipeTransform {

    transform(value: FotoComponent[], args?: string): any {
        return value.filter(foto => foto.titulo.toLowerCase().includes(args.toLowerCase()));
    }
}
