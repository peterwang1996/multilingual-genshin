import { useState } from 'react'

export default function ArtifactPiece({ miscData, piece, activeLang }) {
  const [loreIsOpen, setLoreOpenState] = useState(false)

  return (
    <li key="{ piece['name']['en'] }">
      <img src={ `/images/artifacts/${ piece['imgid']}.png` } />
      
      <div class="piece-baseinfo">
        <h2 class="piece-name">
          { piece['name'][activeLang] }
        </h2>
        <h3 class="piece-type">
          { miscData['piecetypes'][piece['type']][activeLang] }
        </h3>
        <p class="piece-description">
          { piece['description'][activeLang] }
        </p>

        <button 
          onClick={ () => setLoreOpenState(!loreIsOpen) }
          class="lore-button"
        >
          <span>Lore</span>
          <svg width="32px" height="32px">        
            <image href="https://icongr.am/fontawesome/chevron-circle-down.svg?size=32&color=131114" />    
          </svg>
        </button>
      </div>

      { loreIsOpen ? (
        <div class="piece-lore">
          <p>{ piece['lore'][activeLang].replace("\n", "") }</p>
          { /* All lore text has a trailing new line at the beginning for some reason. We need to get rid of that. */}
        </div>
      ) : null }
    </li>
  )
}