import axios from "axios"
import http from '../../core/services/http-common';
export const calculatorApiService = {
    async getOperationData() {
        try {
            const response = await http.get('/operacion');
            return response.data;
        } catch (error) {
            console.error("Error al obtener los datos de las operaciones:", error);
            return [];
        }
    },

    async getOperations() {
        const operationData = await this.getOperationData();
        return operationData;
    },

    async ByNumCuota(numCuota) {
        const operacion = await http.get(`/operacion/${numCuota}`);
        return operacion.data;
    },
    async addCoach(obj) {
        const operacion = await http.post('/operacion');
        return operacion.data;
    },
    async deleteCuota(numCuota){
        const operacion = await http.delete(`/operacion/${numCuota}`);
        return operacion.data;
    },
    async asyncEditCuota(numCuota){
        const operacion = await http.put(`/operacion/${numCuota}`);
        return operacion.data;
    }
};