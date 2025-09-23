import { useState } from "react"
import type { InvoiceData } from "../types"
import { mockExtractInvoice } from "../services/mockExtraction"

export type ActiveTab = "formatted" | "json"

export function useInvoiceExtraction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<InvoiceData | null>(null)
  const [activeTab, setActiveTab] = useState<ActiveTab>("formatted")

  function onFileChange(file: File | null) {
    setSelectedFile(file)
  }

  async function extract() {
    if (!selectedFile) {
      throw new Error("Nenhum arquivo selecionado")
    }
    setIsProcessing(true)
    try {
      const data = await mockExtractInvoice(selectedFile)
      setResult(data)
    } finally {
      setIsProcessing(false)
    }
  }

  return {
    selectedFile,
    isProcessing,
    result,
    activeTab,
    setActiveTab,
    onFileChange,
    extract,
  }
}


