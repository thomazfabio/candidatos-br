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
    candidatos: [],
    candidatosIsLoading: false,
    candidatosError: null,
    estadoSelected: null,
    cidadeSelected: null,
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
            `http://209.145.49.105:3000/cidades/${this.estado.estadoSigla}`
          )
          .then((response) => {
            this.cidades = response.data;
            console.log(this.cidades);
          });
      }
    },
    async buscarCandidatos(estado, cidade) {
      this.candidatosIsLoading = true;
      console.log(estado + ' ' + cidade);
      await axios
        .get(
          `http://209.145.49.105:3000/candidatos/${estado}/${cidade}`
        )
        .then((response) => {
          console.log(response.data);
          this.cidadeSelected = cidade;
          this.estadoSelected = estado;
          this.candidatos = response.data;
          this.candidatosIsLoading = false;
        }).catch((error) => {
          this.candidatosError = error;
          this.candidatosIsLoading = false;
        });
    },
  }
});
