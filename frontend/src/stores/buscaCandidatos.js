// stores/regiaoSelecionada.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useRegiaoSelecionada = defineStore('regiaoSelecionada', {
  state: () => ({
    estado: {
      estadoNome: null,
      estadoSigla: null,
    },
    cidades: [],
  }),
  actions: {
    async setEstado(estado) {
      this.estado.estadoNome = estado.state;
      this.estado.estadoSigla = estado.abbr;
      console.log(this.estado);
      if (this.estado.estadoSigla !== null) {
        await axios
          .get(
          //`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.estado.estadoSigla}/distritos`
          `http://localhost:3000/cidades/${this.estado.estadoSigla}`
          )
          .then((response) => {
            this.cidades = response.data;
            console.log(this.cidades);
          });
      }
    }
  }
});
