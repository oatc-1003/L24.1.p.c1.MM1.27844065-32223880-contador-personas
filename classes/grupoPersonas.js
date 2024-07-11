export default class GrupoPersonas{
    constructor(){
        this.SIGLA_MASCULINO="M"
        this.SIGLA_FEMENINO="F"
        this.contPersonas=0;
        this.contHombres=0;
        this.contMujeres=0;
    }

    procesarPersona(persona){
        this.contPersonas++

        if(persona.sexo.toUpperCase()===this.SIGLA_MASCULINO){
            this.contHombres++
        }
        if(persona.sexo.toUpperCase()===this.SIGLA_FEMENINO){
            this.contMujeres++
        }

    }


}