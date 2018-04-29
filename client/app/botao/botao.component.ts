import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'botao',
    templateUrl: './botao.component.html',
    styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean;

    constructor() { }

    executaAcao(){
        this.confirmacao
            ? confirm('Deseja excluir?') ? this.acao.emit(null) : false
            : this.acao.emit(null)
    }

}
