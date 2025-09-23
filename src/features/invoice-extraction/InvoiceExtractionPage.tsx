import { FileUpload } from "./components/FileUpload"
import { ResultTabs } from "./components/Tabs"
import { JsonBlock } from "./components/JsonBlock"
import { useInvoiceExtraction } from "./hooks/useInvoiceExtraction"

export default function InvoiceExtractionPage() {
  const {
    selectedFile,
    isProcessing,
    result,
    activeTab,
    setActiveTab,
    onFileChange,
    extract,
  } = useInvoiceExtraction()

  async function onExtractClick() {
    if (!selectedFile) {
      alert("Selecione um arquivo PDF antes de extrair.")
      return
    }
    try {
      await extract()
    } catch (e) {
      alert((e as Error).message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 md:p-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Extração de Dados de Nota Fiscal</h1>
          <p className="text-gray-600 mt-2">Carregue um PDF de nota fiscal e extraia os dados automaticamente usando IA</p>
        </header>

        <section aria-labelledby="upload-section">
          <h2 id="upload-section" className="text-lg font-semibold text-gray-800 mb-3">Upload do PDF</h2>
          <FileUpload
            onChange={onFileChange}
            fileName={selectedFile ? selectedFile.name : null}
          />
          <div className="mt-6">
            <button
              type="button"
              onClick={onExtractClick}
              disabled={isProcessing}
              className="w-full md:w-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
              {isProcessing ? "Processando..." : "EXTRAIR DADOS"}
            </button>
          </div>
        </section>

        {result && (
          <section aria-labelledby="resultados" className="mt-10">
            <h2 id="resultados" className="text-lg font-semibold text-gray-800 mb-4">Dados Extraídos</h2>
            <ResultTabs activeTab={activeTab} onChange={setActiveTab} />
            <div className="mt-4">
              {activeTab === "formatted" && (
                <div className="text-gray-600 text-sm">Visualização formatada será exibida aqui futuramente.</div>
              )}
              {activeTab === "json" && (
                <JsonBlock json={result} />
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}


