import { useState } from 'react'

export function ProjectTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label)

  const currentContent = tabs?.find((tab) => tab.label === activeTab)?.content

  return (
    <section className="project-tabs">
      <nav className="project-tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`project-tab ${tab.label === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="project-tab-content" dangerouslySetInnerHTML={{ __html: currentContent }} />
    </section>
  )
}
