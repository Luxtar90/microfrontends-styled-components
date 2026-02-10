import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  color: #e5e7eb;
`

const Title = styled.h1`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
`

const Subtitle = styled.p`
  margin: 0 0 1.5rem;
  color: #9ca3af;
  font-size: 0.9rem;
`

const UserBadge = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.6);
  color: #bfdbfe;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const Item = styled.li`
  background: rgba(15, 23, 42, 0.9);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
`

const ItemTitle = styled.span`
  font-weight: 600;
`

const ItemMeta = styled.span`
  font-size: 0.8rem;
  color: #9ca3af;
`

const EmptyState = styled.p`
  margin-top: 1rem;
  color: #6b7280;
  font-size: 0.9rem;
`

function App() {
  const [usuarioActual, setUsuarioActual] = useState(null)
  const [compras, setCompras] = useState([])

  useEffect(() => {
    const handler = (event) => {
      const { type, payload } = event.data || {}

      if (type === 'USUARIO_ACTUAL') {
        setUsuarioActual(payload)
      }

      if (type === 'NUEVA_COMPRA') {
        setCompras((prev) => [...prev, payload])
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <Page>
      <Title>Microfrontend de Compras</Title>
      <Subtitle>
        Escucha eventos de los microfrontends de <strong>Productos</strong> y <strong>Usuarios</strong> a través del
        <strong> Shell</strong>.
      </Subtitle>

      {usuarioActual ? (
        <UserBadge>
          Compras realizadas por: <strong>{usuarioActual.nombre}</strong> ({usuarioActual.rol})
        </UserBadge>
      ) : (
        <EmptyState>Esperando información del usuario activo...</EmptyState>
      )}

      <List>
        {compras.map((compra, index) => (
          <Item key={`${compra.id}-${index}`}>
            <ItemTitle>{compra.nombre}</ItemTitle>
            <ItemMeta>
              Precio: {compra.precio} · Comprado por:{' '}
              {compra.usuario?.nombre ? compra.usuario.nombre : 'Usuario no definido'}
            </ItemMeta>
          </Item>
        ))}
      </List>

      {compras.length === 0 && (
        <EmptyState>No hay compras registradas todavía. Ve al microfrontend de productos y pulsa 
          "Comprar".
        </EmptyState>
      )}
    </Page>
  )
}

export default App
