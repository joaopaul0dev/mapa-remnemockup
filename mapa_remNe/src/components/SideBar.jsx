import React, { useEffect, useState } from 'react';
import './SideBar.css';

const defaultData = {
  ce: [
    {
      id: 'ufc',
      acronym: 'UFC',
      name: 'Universidade Federal do Ceará',
      city: 'Fortaleza/CE',
    },
    {
      id: 'uece',
      acronym: 'UECE',
      name: 'Universidade Estadual do Ceará',
      city: 'Fortaleza/CE',
    },
    {
      id: 'ifce',
      acronym: 'IFCE',
      name: 'Instituto Federal do Ceará',
      city: 'Fortaleza/CE',
    },
  ],
};

function SideBar({ activeState, activeStateName, data = defaultData }) {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const institutions = activeState ? data[activeState] ?? [] : [];
  const hasSelection = Boolean(activeState);

  useEffect(() => {
    setSelectedInstitution(null);
  }, [activeState]);

  const handleInstitutionClick = (institution) => {
    setSelectedInstitution(institution);
  };

  if (!hasSelection) {
    return (
      <aside className="side-bar" aria-live="polite">
        <div className="side-bar__empty-state">
          <h2 className="side-bar__title">Escolha um estado</h2>
          <p className="side-bar__empty-text">
            Clique em qualquer estado do mapa para ver as instituições cadastradas.
          </p>
        </div>
      </aside>
    );
  }

  if (selectedInstitution) {
    return (
      <aside className="side-bar" aria-live="polite">
        <div className="side-bar__header">
          <button
            type="button"
            className="side-bar__back"
            onClick={() => setSelectedInstitution(null)}
          >
            ← Voltar
          </button>
        </div>

        <div className="side-bar__details">
          <h2 className="side-bar__title side-bar__title--detail">
            {selectedInstitution.acronym}
          </h2>
          <p className="side-bar__detail-name">{selectedInstitution.name}</p>
          <p className="side-bar__detail-city">{selectedInstitution.city}</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="side-bar" aria-live="polite">
      <div className="side-bar__header">
        <span className="side-bar__pin" aria-hidden="true" />
        <h2 className="side-bar__title">{activeStateName}</h2>
      </div>

      <p className="side-bar__count">
        {institutions.length} instituição{institutions.length === 1 ? '' : 'ões'} encontrada{institutions.length === 1 ? '' : 's'}
      </p>

      <div className="side-bar__divider" />

      {institutions.length > 0 ? (
        <ul className="side-bar__list">
          {institutions.map((institution) => (
            <li key={institution.id} className="side-bar__item-wrap">
              <button
                type="button"
                className="side-bar__item"
                onClick={() => handleInstitutionClick(institution)}
              >
                <span className="side-bar__item-copy">
                  <strong>
                    {institution.acronym} - {institution.name}
                  </strong>
                  <small>{institution.city}</small>
                </span>
                <span className="side-bar__item-arrow" aria-hidden="true">
                  ›
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="side-bar__empty">Nenhuma instituição cadastrada para este estado.</p>
      )}
    </aside>
  );
}

export { defaultData };
export default SideBar;