import { Simulator } from '@/components/marketplace/Simulator'
import '@/styles/ScreenDetails.css'

//Components
import { SliderWithThumbs } from '@/components/screenDetails/SliderWithThumbs'
import { ProjectSummary } from '@/components/screenDetails/ProjectSummary'
import { ProjectTabs } from '@/components/screenDetails/ProjectTabs'
import { useParams } from 'react-router-dom'

export function ScreenDetails() {
  const { id } = useParams()


  const projectInfo = {
    name: 'Parque Débora Arango',
    description: 'Un píxel es mas que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.',
    reference: 'SFS001_MDE',
    location: 'Medellín, Colombia',
    type: 'Pantalla LED Exterior',
    price: '$10.000.000',
    progress: 23,
    total: 42,
    projectId: id, 
  }

  const projectTabs = [
    {
      label: 'Acerca de la inversión',
      content: `
        <h4>Ubicación estratégica:</h4>
        <p>Esta pantalla estará ubicada en el corazón de Envigado...</p>
      `,
    },
    {
      label: '¿Dónde está ubicado?',
      content: `
        <p>Se encuentra en una vía principal de alto tráfico...</p>
      `,
    },
    {
      label: 'Líneas de negocio',
      content: `
        <ul>
          <li>Publicidad exterior</li>
          <li>Eventos digitales</li>
        </ul>
      `,
    },
    {
      label: 'Equipo del proyecto',
      content: `
        <p>Desarrollado por el equipo Shareflow en conjunto con aliados estratégicos.</p>
      `,
    },
    {
      label: 'Beneficios',
      content: `
        <ul>
          <li>Alta visibilidad</li>
          <li>Ubicación privilegiada</li>
          <li>Proyección de retorno atractiva</li>
        </ul>
      `,
    },
  ];
  

  return (
    <main className="project-layout">
      <section>
        <SliderWithThumbs />
        <ProjectSummary {...projectInfo}/>
        <ProjectTabs tabs={projectTabs} />
      </section>

      <aside className="project-sidebar">
        <Simulator />
      </aside>
    </main>
  )
}
