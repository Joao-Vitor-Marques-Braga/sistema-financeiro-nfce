import { useState } from "react"
import type { InvoiceData } from "../types"
import { ApiService } from "../services/apiService"

export type ActiveTab = "formatted" | "json"

export function useInvoiceExtraction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<InvoiceData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<ActiveTab>("formatted")

  function onFileChange(file: File | null) {
    setSelectedFile(file)
    setError(null) // Clear error when new file is selected
    setResult(null) // Clear previous result
  }

  function clearError() {
    setError(null)
  }

  async function extract() {
    if (!selectedFile) {
      throw new Error("Nenhum arquivo selecionado")
    }
    setIsProcessing(true)
    setError(null)
    try {
      const data = await ApiService.extractInvoiceData(selectedFile)
      setResult(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
      setError(errorMessage)
      throw err
    } finally {
      setIsProcessing(false)
    }
  }

  return {
    selectedFile,
    isProcessing,
    result,
    error,
    activeTab,
    setActiveTab,
    onFileChange,
    extract,
    clearError,
  }
}


