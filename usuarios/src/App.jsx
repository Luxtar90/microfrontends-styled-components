import { useEffect } from 'react'
import styled from 'styled-components'

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`

const PerfilUsuario = styled.section`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 3rem 3.5rem;
  border-radius: 32px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 420px;
  width: 100%;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.3);
  }
`

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 2.2rem;
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    border-radius: 50%;
    z-index: -1;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Nombre = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #1a202c;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Rol = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
`

const Meta = styled.p`
  margin: 1rem 0 0;
  font-size: 0.95rem;
  color: #4a5568;
  text-align: center;
  line-height: 1.6;
  max-width: 280px;
`

export const BotonEditar = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 16px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`

function App() {
  const usuarioActual = {
    id: 1,
    nombre: 'Luiggi Arteaga',
    iniciales: 'LA',
    rol: 'Frontend · Microfrontends',
  }

  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage(
        {
          type: 'USUARIO_ACTUAL',
          payload: usuarioActual,
        },
        '*',
      )
    }
  }, [])

  return (
    <Page>
      <PerfilUsuario>
        <Avatar>LA</Avatar>
        <Nombre>{usuarioActual.nombre}</Nombre>
        <Rol>{usuarioActual.rol}</Rol>
        <Meta>Responsable del módulo de usuarios dentro de la plataforma.</Meta>
        <BotonEditar>Editar perfil</BotonEditar>
      </PerfilUsuario>
    </Page>
  )
}

export default App
