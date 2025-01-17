import axios from "axios";

const baseURL = 'https://677fc1b90476123f76a7f2aa.mockapi.io';

const api = axios.create({
  baseURL: baseURL,
});

export const obterDados = async (url, setData) => {
    try {
        const resposta = await api.get(url);
        setData(resposta.data);
        return resposta.data;
    } catch (error) {
        alert(`Erro ao consultar dados: ${error.message}. Status: ${error.response?.status || 'desconhecido'}`);
    }
}

export const enviarDados = async (url, dados) => {
    try {
        const resposta = await api.post(url, dados);
        alert('Dados enviados com sucesso');
        console.log('Resposta do servidor:', resposta.data);
        return resposta.data;
    } catch (error) {
        alert(`Erro ao enviar dados: ${error.message}. Status: ${error.response?.status || 'desconhecido'}`);
    }
}

export const atualizarDados = async (url, dados) => {
    try {
        const resposta = await api.put(url, dados);
        alert('Dados atualizados com sucesso');
        console.log('Resposta do servidor:', resposta.data);
        return resposta.data;
    } catch (error) {
        alert(`Erro ao atualizar dados: ${error.message}. Status: ${error.response?.status || 'desconhecido'}`);
    }
}

export const excluirDados = async (id) => {
    try {
        const resposta = await api.delete(`/videos/${id}`);
        alert('Dados excluídos com sucesso');
        return resposta.data;
    } catch (error) {
        alert(`Erro ao excluir dados: ${error.message}. Status: ${error.response?.status || 'desconhecido'}`);
    }
}
