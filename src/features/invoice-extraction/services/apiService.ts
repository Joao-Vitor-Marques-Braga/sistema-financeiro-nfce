import type { InvoiceData } from "../types"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

export interface ApiResponse<T> {
  data?: T
  error?: string
}

export class ApiService {
  private static async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Erro desconhecido' }))
      throw new Error(errorData.error || `Erro ${response.status}: ${response.statusText}`)
    }
    return response.json()
  }

  static async extractInvoiceData(file: File): Promise<InvoiceData> {
    const formData = new FormData()
    formData.append('pdf_file', file)

    try {
      const response = await fetch(`${API_BASE_URL}/extrator/upload/`, {
        method: 'POST',
        body: formData,
      })

      const data = await this.handleResponse<InvoiceData>(response)
      return data
    } catch (error) {
      console.error('Erro ao extrair dados da nota fiscal:', error)
      throw error
    }
  }
}
