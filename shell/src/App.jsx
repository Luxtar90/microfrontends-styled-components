import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const comprasIframeRef = useRef(null)
  const usuarioActualRef = useRef(null)

  useEffect(() => {
    const handleMessage = (event) => {
      const { type, payload } = event.data || {}

      if (type === 'USUARIO_ACTUAL') {
        usuarioActualRef.current = payload

        if (comprasIframeRef.current?.contentWindow) {
          comprasIframeRef.current.contentWindow.postMessage(
            {
              type: 'USUARIO_ACTUAL',
              payload,
            },
            '*',
          )
        }
      }

      if (type === 'PRODUCTO_COMPRADO') {
        const compra = {
          ...payload,
          usuario: usuarioActualRef.current,
        }

        if (comprasIframeRef.current?.contentWindow) {
          comprasIframeRef.current.contentWindow.postMessage(
            {
              type: 'NUEVA_COMPRA',
              payload: compra,
            },
            '*',
          )
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="shell-layout">
      <header className="shell-header">
        <h1>Aplicación Contenedora (Shell)</h1>
        <p>
          Plataforma con microfrontends independientes para <strong>Productos</strong>, <strong>Usuarios</strong> y
          <strong> Compras</strong>.
        </p>
      </header>

      <main className="shell-content">
        <section className="shell-panel">
          <h2>Microfrontend de Productos</h2>
          <iframe
            title="productos-mf"
            src="http://localhost:5174"
            className="shell-iframe"
          />
        </section>

        <section className="shell-panel">
          <h2>Microfrontend de Usuarios</h2>
          <iframe
            title="usuarios-mf"
            src="http://localhost:5175"
            className="shell-iframe"
          />
        </section>

        <section className="shell-panel">
          <h2>Microfrontend de Compras</h2>
          <iframe
            title="compras-mf"
            src="http://localhost:5176"
            className="shell-iframe"
            ref={comprasIframeRef}
          />
        </section>
      </main>
    </div>
  )
}

export default App
