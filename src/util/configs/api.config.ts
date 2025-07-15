import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_BASE_URL } from './enviroment.config';

export interface HomeFormData {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  me?: string;
}

class ApiGatewayService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL || '',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Submit home form data to API Gateway
   */
  async submitHomeForm(formData: HomeFormData): Promise<AxiosResponse> {
    try {
      const response = await this.api.post('/contact', formData);
      return response;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
}

export const apiGatewayService = new ApiGatewayService();
