import React, { useState, useEffect } from 'react';
import { Settings2, ShoppingBag, Copy, CheckCircle2 } from 'lucide-react';
import './index.css';

// Initial state for all the CSS variables we want to edit
const defaultStyles = {
  discountContainer: {
    color: '#10b981',
    fontSize: '14px',
    fontWeight: '600',
    backgroundColor: 'transparent',
    padding: '0px',
    borderRadius: '0px',
  },
  comparePrice: {
    color: '#94a3b8',
    fontSize: '16px',
    fontWeight: '400',
    textDecoration: 'line-through',
  },
  mainPrice: {
    color: '#0f172a',
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '8px',
  },
  buyContainer: {
    marginTop: '20px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  buyButton: {
    color: '#ffffff',
    backgroundColor: '#3b82f6',
    fontSize: '16px',
    fontWeight: '600',
    padding: '16px 24px',
    borderRadius: '8px',
    width: '100%',
    textTransform: 'uppercase',
  }
};

export default function App() {
  const [styles, setStyles] = useState(defaultStyles);
  const [copied, setCopied] = useState(false);

  // Update a specific style property
  const updateStyle = (section, property, value) => {
    setStyles(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [property]: value
      }
    }));
  };

  // Generate CSS string
  const generateCSS = () => {
    return `
/* ======= Tiendanube Custom CSS ======= */

/* Precio Principal */
.js-price-display {
  color: ${styles.mainPrice.color} !important;
  font-size: ${styles.mainPrice.fontSize} !important;
  font-weight: ${styles.mainPrice.fontWeight} !important;
  margin-bottom: ${styles.mainPrice.marginBottom} !important;
}

/* Precio de Lista (Tachado) */
.price-compare, .js-compare-price-display {
  color: ${styles.comparePrice.color} !important;
  font-size: ${styles.comparePrice.fontSize} !important;
  font-weight: ${styles.comparePrice.fontWeight} !important;
  text-decoration: ${styles.comparePrice.textDecoration} !important;
}

/* Precio con Descuento */
.payment-discount-price-product-container {
  color: ${styles.discountContainer.color} !important;
  font-size: ${styles.discountContainer.fontSize} !important;
  font-weight: ${styles.discountContainer.fontWeight} !important;
  background-color: ${styles.discountContainer.backgroundColor} !important;
  padding: ${styles.discountContainer.padding} !important;
  border-radius: ${styles.discountContainer.borderRadius} !important;
}

/* Contenedor del Botón */
.product-buy-container {
  margin-top: ${styles.buyContainer.marginTop} !important;
  padding: ${styles.buyContainer.padding} !important;
  background-color: ${styles.buyContainer.backgroundColor} !important;
  border-radius: ${styles.buyContainer.borderRadius} !important;
  border: ${styles.buyContainer.border} !important;
}

/* Botón de Compra */
.js-addtocart, .js-addtocart-text {
  color: ${styles.buyButton.color} !important;
  background-color: ${styles.buyButton.backgroundColor} !important;
  font-size: ${styles.buyButton.fontSize} !important;
  font-weight: ${styles.buyButton.fontWeight} !important;
  padding: ${styles.buyButton.padding} !important;
  border-radius: ${styles.buyButton.borderRadius} !important;
  width: ${styles.buyButton.width} !important;
  text-transform: ${styles.buyButton.textTransform} !important;
  border: none !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
}
.js-addtocart:hover {
  opacity: 0.9 !important;
}
`.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="app-header">
        <Settings2 size={28} color="#60a5fa" />
        <h1 className="app-title">Ayudante CSS Tiendanube</h1>
      </header>
      
      <main className="main-content">
        <aside className="sidebar">
          
          <div className="editor-section">
            <h2 className="section-title">Precio Principal</h2>
            <ControlInput label="Color" type="color" value={styles.mainPrice.color} onChange={(v) => updateStyle('mainPrice', 'color', v)} />
            <div style={{display: 'flex', gap: '1rem'}}>
              <ControlInput label="Tamaño (px)" value={styles.mainPrice.fontSize} onChange={(v) => updateStyle('mainPrice', 'fontSize', v)} />
              <ControlInput label="Grosor" value={styles.mainPrice.fontWeight} onChange={(v) => updateStyle('mainPrice', 'fontWeight', v)} />
            </div>
          </div>

          <div className="editor-section">
            <h2 className="section-title">Precio Tachado</h2>
            <ControlInput label="Color" type="color" value={styles.comparePrice.color} onChange={(v) => updateStyle('comparePrice', 'color', v)} />
            <div style={{display: 'flex', gap: '1rem'}}>
              <ControlInput label="Tamaño (px)" value={styles.comparePrice.fontSize} onChange={(v) => updateStyle('comparePrice', 'fontSize', v)} />
              <ControlInput label="Grosor" value={styles.comparePrice.fontWeight} onChange={(v) => updateStyle('comparePrice', 'fontWeight', v)} />
            </div>
          </div>

          <div className="editor-section">
            <h2 className="section-title">Descuento (Cash/Transfer)</h2>
            <ControlInput label="Color Texto" type="color" value={styles.discountContainer.color} onChange={(v) => updateStyle('discountContainer', 'color', v)} />
            <ControlInput label="Color Fondo" type="color" value={styles.discountContainer.backgroundColor} onChange={(v) => updateStyle('discountContainer', 'backgroundColor', v)} />
            <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
              <ControlInput label="Tamaño" value={styles.discountContainer.fontSize} onChange={(v) => updateStyle('discountContainer', 'fontSize', v)} />
              <ControlInput label="Padding" value={styles.discountContainer.padding} onChange={(v) => updateStyle('discountContainer', 'padding', v)} />
            </div>
            <ControlInput label="Radio de Borde" value={styles.discountContainer.borderRadius} onChange={(v) => updateStyle('discountContainer', 'borderRadius', v)} />
          </div>

          <div className="editor-section">
            <h2 className="section-title">Contenedor Botón</h2>
            <ControlInput label="Color Fondo" type="color" value={styles.buyContainer.backgroundColor} onChange={(v) => updateStyle('buyContainer', 'backgroundColor', v)} />
            <ControlInput label="Borde" value={styles.buyContainer.border} onChange={(v) => updateStyle('buyContainer', 'border', v)} />
            <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
              <ControlInput label="Padding" value={styles.buyContainer.padding} onChange={(v) => updateStyle('buyContainer', 'padding', v)} />
              <ControlInput label="Borde Radius" value={styles.buyContainer.borderRadius} onChange={(v) => updateStyle('buyContainer', 'borderRadius', v)} />
            </div>
          </div>

          <div className="editor-section">
            <h2 className="section-title">Botón de Compra</h2>
            <div style={{display: 'flex', gap: '1rem'}}>
              <ControlInput label="Color Texto" type="color" value={styles.buyButton.color} onChange={(v) => updateStyle('buyButton', 'color', v)} />
              <ControlInput label="Fondo Botón" type="color" value={styles.buyButton.backgroundColor} onChange={(v) => updateStyle('buyButton', 'backgroundColor', v)} />
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
              <ControlInput label="Tamaño (px)" value={styles.buyButton.fontSize} onChange={(v) => updateStyle('buyButton', 'fontSize', v)} />
              <ControlInput label="Grosor" value={styles.buyButton.fontWeight} onChange={(v) => updateStyle('buyButton', 'fontWeight', v)} />
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
              <ControlInput label="Padding" value={styles.buyButton.padding} onChange={(v) => updateStyle('buyButton', 'padding', v)} />
              <ControlInput label="Borde Radius" value={styles.buyButton.borderRadius} onChange={(v) => updateStyle('buyButton', 'borderRadius', v)} />
            </div>
          </div>

        </aside>
        
        <section className="preview-area">
          <div className="preview-container">
            <div className="mock-product">
              <div className="mock-image"></div>
              <h3 className="mock-title">Remera Oversize Basic</h3>
              
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={styles.comparePrice}>$45.000</span>
                <span style={styles.mainPrice}>$35.000</span>
                <div style={styles.discountContainer}>
                  10% OFF pagando con Transferencia
                </div>
              </div>

              <div style={styles.buyContainer}>
                <button style={styles.buyButton}>
                  <ShoppingBag size={18} style={{marginRight: '8px', verticalAlign: 'text-bottom'}} />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>

          <div className="output-section">
            <div className="code-title">
              Código CSS Generado
              <button className="btn-secondary" onClick={copyToClipboard} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                {copied ? <CheckCircle2 size={16} color="#10b981" /> : <Copy size={16} />}
                {copied ? 'Copiado!' : 'Copiar CSS'}
              </button>
            </div>
            <div className="code-block">
              {generateCSS()}
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

// Simple helper component for inputs
function ControlInput({ label, type = "text", value, onChange }) {
  return (
    <div className="control-group" style={{ flex: 1 }}>
      <label className="control-label">{label}</label>
      {type === 'color' ? (
        <div className="color-input-wrapper">
          <input 
            type="color" 
            value={value !== 'transparent' ? value : '#ffffff'} 
            onChange={(e) => onChange(e.target.value)}
            style={{ opacity: 0, position: 'absolute', width: 0, height: 0 }}
            id={`color-picker-${label.replace(/\s+/g, '-')}`}
          />
          <label 
            htmlFor={`color-picker-${label.replace(/\s+/g, '-')}`}
            className="color-preview" 
            style={{ backgroundColor: value }}
          ></label>
          <input 
            type="text" 
            className="control-input" 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            style={{ flex: 1, textTransform: 'uppercase' }}
          />
        </div>
      ) : (
        <input 
          type="text" 
          className="control-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
