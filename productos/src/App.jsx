import styled from 'styled-components'

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`

const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
`

const CardProducto = styled.article`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`

const NombreProducto = styled.h2`
  font-size: 1.3rem;
  color: #2d3748;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
`

const Precio = styled.p`
  margin: 0;
  font-weight: 700;
  color: #805ad5;
  font-size: 1.2rem;
`

const Descripcion = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.5;
  flex-grow: 1;
`

export const BotonComprar = styled.button`
  margin-top: 1rem;
  align-self: stretch;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

const products = [
  {
    id: 1,
    nombre: 'iPhone 15 Pro',
    precio: '$24,999',
    descripcion: 'Smartphone premium con cámara profesional y chip A17 Pro.'
  },
  {
    id: 2,
    nombre: 'MacBook Air M3',
    precio: '$35,999',
    descripcion: 'Portátil ultraligero con rendimiento revolucionario y batería de larga duración.'
  },
  {
    id: 3,
    nombre: 'AirPods Pro 2',
    precio: '$7,499',
    descripcion: 'Auriculares inalámbricos con cancelación activa de ruido y sonido espacial.'
  },
  {
    id: 4,
    nombre: 'iPad Air',
    precio: '$12,999',
    descripcion: 'Tableta versátil con pantalla Liquid Retina y chip M1 para máxima productividad.'
  },
  {
    id: 5,
    nombre: 'Apple Watch Ultra 2',
    precio: '$18,999',
    descripcion: 'Smartwatch resistente para deportes extremos con GPS dual frecuencia.'
  },
  {
    id: 6,
    nombre: 'Magic Keyboard',
    precio: '$3,999',
    descripcion: 'Teclado inalámbrico con iluminación y diseño compacto para máxima comodidad.'
  }
]

function App() {
  const handleComprar = (producto) => {
    if (window.parent) {
      window.parent.postMessage(
        {
          type: 'PRODUCTO_COMPRADO',
          payload: producto,
        },
        '*',
      )
    }
  }

  return (
    <Page>
      <Title>Microfrontend de Productos</Title>
      <ProductsGrid>
        {products.map((p) => (
          <CardProducto key={p.id}>
            <NombreProducto>{p.nombre}</NombreProducto>
            <Precio>{p.precio}</Precio>
            <Descripcion>{p.descripcion}</Descripcion>
            <BotonComprar onClick={() => handleComprar(p)}>Comprar</BotonComprar>
          </CardProducto>
        ))}
      </ProductsGrid>
    </Page>
  )
}

export default App
