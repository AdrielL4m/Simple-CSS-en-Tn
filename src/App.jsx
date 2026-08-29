import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Copy, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  RotateCcw, 
  Smartphone, 
  Monitor, 
  ExternalLink, 
  Tag, 
  Sliders, 
  Layers, 
  CreditCard, 
  Truck,
  Code2
} from 'lucide-react';
import './index.css';

// Initial state for all the CSS variables
const defaultStyles = {
  discountContainer: {
    text: '10% OFF pagando con Transferencia',
    color: '#008060',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: '#f0fdf4',
    padding: '6px 12px',
    borderRadius: '4px',
  },
  comparePrice: {
    color: '#919eab',
    fontSize: '15px',
    fontWeight: '400',
    textDecoration: 'line-through',
  },
  mainPrice: {
    color: '#212b36',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '6px',
  },
  buyContainer: {
    marginTop: '16px',
    padding: '0px',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    border: 'none',
  },
  buyButton: {
    text: 'Agregar al Carrito',
    color: '#ffffff',
    backgroundColor: '#0059d5',
    fontSize: '15px',
    fontWeight: '600',
    padding: '14px 20px',
    borderRadius: '6px',
    width: '100%',
    textTransform: 'uppercase',
  }
};

const presets = [
  {
    id: 'tiendanube',
    name: 'Tiendanube Oficial',
    icon: '🔵',
    styles: defaultStyles
  },
  {
    id: 'flashSale',
    name: 'Oferta Flash / Sale',
    icon: '🔥',
    styles: {
      discountContainer: {
        text: '¡20% OFF ÚLTIMAS UNIDADES!',
        color: '#dc2626',
        fontSize: '13px',
        fontWeight: '700',
        backgroundColor: '#fee2e2',
        padding: '6px 12px',
        borderRadius: '4px',
      },
      comparePrice: {
        color: '#94a3b8',
        fontSize: '16px',
        fontWeight: '400',
        textDecoration: 'line-through',
      },
      mainPrice: {
        color: '#b91c1c',
        fontSize: '32px',
        fontWeight: '800',
        marginBottom: '6px',
      },
      buyContainer: {
        marginTop: '16px',
        padding: '0px',
        backgroundColor: 'transparent',
        borderRadius: '4px',
        border: 'none',
      },
      buyButton: {
        text: 'COMPRAR AHORA',
        color: '#ffffff',
        backgroundColor: '#e11d48',
        fontSize: '16px',
        fontWeight: '700',
        padding: '15px 24px',
        borderRadius: '4px',
        width: '100%',
        textTransform: 'uppercase',
      }
    }
  },
  {
    id: 'minimal',
    name: 'Minimalista Black',
    icon: '⚡',
    styles: {
      discountContainer: {
        text: '15% de descuento por transferencia',
        color: '#18181b',
        fontSize: '13px',
        fontWeight: '600',
        backgroundColor: '#f4f4f5',
        padding: '6px 12px',
        borderRadius: '0px',
      },
      comparePrice: {
        color: '#a1a1aa',
        fontSize: '15px',
        fontWeight: '400',
        textDecoration: 'line-through',
      },
      mainPrice: {
        color: '#09090b',
        fontSize: '26px',
        fontWeight: '600',
        marginBottom: '6px',
      },
      buyContainer: {
        marginTop: '16px',
        padding: '0px',
        backgroundColor: 'transparent',
        borderRadius: '0px',
        border: 'none',
      },
      buyButton: {
        text: 'AÑADIR A LA BOLSA',
        color: '#ffffff',
        backgroundColor: '#09090b',
        fontSize: '14px',
        fontWeight: '600',
        padding: '14px 20px',
        borderRadius: '0px',
        width: '100%',
        textTransform: 'uppercase',
      }
    }
  },
  {
    id: 'emerald',
    name: 'Eco & Lifestyle',
    icon: '🌿',
    styles: {
      discountContainer: {
        text: '10% OFF en 1 pago con débito o transferencia',
        color: '#047857',
        fontSize: '13px',
        fontWeight: '600',
        backgroundColor: '#ecfdf5',
        padding: '6px 12px',
        borderRadius: '6px',
      },
      comparePrice: {
        color: '#64748b',
        fontSize: '15px',
        fontWeight: '400',
        textDecoration: 'line-through',
      },
      mainPrice: {
        color: '#065f46',
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '6px',
      },
      buyContainer: {
        marginTop: '16px',
        padding: '0px',
        backgroundColor: 'transparent',
        borderRadius: '8px',
        border: 'none',
      },
      buyButton: {
        text: 'AGREGAR AL CARRITO',
        color: '#ffffff',
        backgroundColor: '#059669',
        fontSize: '15px',
        fontWeight: '600',
        padding: '14px 20px',
        borderRadius: '8px',
        width: '100%',
        textTransform: 'uppercase',
      }
    }
  }
];

export default function App() {
  const [styles, setStyles] = useState(defaultStyles);
  const [activePreset, setActivePreset] = useState('tiendanube');
  const [copied, setCopied] = useState(false);
  const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [showGuide, setShowGuide] = useState(true);

  // Update a specific style property
  const updateStyle = (section, property, value) => {
    setStyles(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [property]: value
      }
    }));
    setActivePreset(null);
  };

  const applyPreset = (preset) => {
    setStyles(preset.styles);
    setActivePreset(preset.id);
  };

  const resetStyles = () => {
    setStyles(defaultStyles);
    setActivePreset('tiendanube');
  };

  // Generate CSS string
  const generateCSS = () => {
    return `/* ======= Tiendanube Custom CSS (Nube SDK) ======= */

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

/* Precio con Descuento (Transferencia / Efectivo) */
.payment-discount-price-product-container {
  color: ${styles.discountContainer.color} !important;
  font-size: ${styles.discountContainer.fontSize} !important;
  font-weight: ${styles.discountContainer.fontWeight} !important;
  background-color: ${styles.discountContainer.backgroundColor} !important;
  padding: ${styles.discountContainer.padding} !important;
  border-radius: ${styles.discountContainer.borderRadius} !important;
  display: inline-block !important;
}

/* Contenedor del Botón de Compra */
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
  transition: all 0.2s ease !important;
}
.js-addtocart:hover {
  opacity: 0.92 !important;
  filter: brightness(0.96) !important;
}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Tiendanube Admin Header */}
      <header className="nimbus-header">
        <div className="nimbus-brand-group">
          <div className="nimbus-logo-badge">
            <Layers size={22} />
          </div>
          <div className="nimbus-brand-info">
            <div className="nimbus-brand-title">
              Ayudante de CSS en Tiendanube
              <span className="nimbus-sdk-tag">Nube SDK</span>
            </div>
            <span className="nimbus-brand-subtitle">
              Generador visual de estilos para plantillas oficiales de Tiendanube
            </span>
          </div>
        </div>

        <div className="nimbus-header-actions">
          <button 
            type="button" 
            className="nimbus-btn nimbus-btn-secondary"
            onClick={resetStyles}
            title="Restablecer a valores predeterminados"
          >
            <RotateCcw size={15} />
            Restablecer
          </button>
          <a 
            href="https://viranmd.com" 
            target="_blank" 
            rel="noreferrer" 
            className="nimbus-btn nimbus-btn-ghost"
            style={{ fontSize: '0.8125rem' }}
          >
            Desarrollado por Viran
            <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <div className="nimbus-app-container">
        {/* Banner Informativo Tiendanube */}
        <div className="nimbus-alert">
          <Info size={20} className="nimbus-alert-icon" />
          <div className="nimbus-alert-content">
            <div className="nimbus-alert-title">
              Requisito de Plan Tiendanube
            </div>
            La edición de CSS avanzado está habilitada a partir del <strong>Plan Impulso</strong> (o planes superiores). 
            Podés aplicar este código generado directamente desde tu panel en <strong>Mi Tiendanube &gt; Personalizar &gt; Edición avanzada de CSS</strong>.
          </div>
        </div>

        {/* Barra de Presets Rápidos */}
        <div className="nimbus-presets-bar">
          <div className="nimbus-presets-title">
            <Sparkles size={16} color="var(--nimbus-primary)" />
            Plantillas de estilo rápidas:
          </div>
          <div className="nimbus-presets-list">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className={`nimbus-preset-chip ${activePreset === preset.id ? 'active' : ''}`}
                onClick={() => applyPreset(preset)}
              >
                <span>{preset.icon}</span>
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="nimbus-dashboard-grid">
          {/* Columna Izquierda: Configuración / Editor */}
          <aside className="nimbus-editor-stack">

            {/* 1. Precio Principal */}
            <div className="nimbus-card">
              <div className="nimbus-card-header">
                <div className="nimbus-card-title">
                  <Tag size={18} color="var(--nimbus-primary)" />
                  Precio Principal
                </div>
                <span className="nimbus-card-badge">.js-price-display</span>
              </div>
              <div className="nimbus-card-body">
                <NimbusColorPicker
                  label="Color del Precio"
                  value={styles.mainPrice.color}
                  onChange={(v) => updateStyle('mainPrice', 'color', v)}
                />
                <div className="nimbus-form-row">
                  <NimbusControlInput
                    label="Tamaño (px)"
                    value={styles.mainPrice.fontSize}
                    onChange={(v) => updateStyle('mainPrice', 'fontSize', v)}
                    showStepper
                  />
                  <NimbusSelect
                    label="Grosor (Font Weight)"
                    value={styles.mainPrice.fontWeight}
                    options={[
                      { value: '400', label: '400 - Normal' },
                      { value: '500', label: '500 - Medio' },
                      { value: '600', label: '600 - Semi Bold' },
                      { value: '700', label: '700 - Bold' },
                      { value: '800', label: '800 - Extra Bold' }
                    ]}
                    onChange={(v) => updateStyle('mainPrice', 'fontWeight', v)}
                  />
                </div>
                <NimbusControlInput
                  label="Margen Inferior"
                  value={styles.mainPrice.marginBottom}
                  onChange={(v) => updateStyle('mainPrice', 'marginBottom', v)}
                  showStepper
                />
              </div>
            </div>

            {/* 2. Precio de Lista (Tachado) */}
            <div className="nimbus-card">
              <div className="nimbus-card-header">
                <div className="nimbus-card-title">
                  <Tag size={18} color="var(--nimbus-text-low)" />
                  Precio de Lista (Tachado)
                </div>
                <span className="nimbus-card-badge">.price-compare</span>
              </div>
              <div className="nimbus-card-body">
                <NimbusColorPicker
                  label="Color"
                  value={styles.comparePrice.color}
                  onChange={(v) => updateStyle('comparePrice', 'color', v)}
                />
                <div className="nimbus-form-row">
                  <NimbusControlInput
                    label="Tamaño (px)"
                    value={styles.comparePrice.fontSize}
                    onChange={(v) => updateStyle('comparePrice', 'fontSize', v)}
                    showStepper
                  />
                  <NimbusSelect
                    label="Grosor"
                    value={styles.comparePrice.fontWeight}
                    options={[
                      { value: '300', label: '300 - Fino' },
                      { value: '400', label: '400 - Normal' },
                      { value: '500', label: '500 - Medio' },
                      { value: '600', label: '600 - Semi Bold' }
                    ]}
                    onChange={(v) => updateStyle('comparePrice', 'fontWeight', v)}
                  />
                </div>
              </div>
            </div>

            {/* 3. Descuento Transferencia / Efectivo */}
            <div className="nimbus-card">
              <div className="nimbus-card-header">
                <div className="nimbus-card-title">
                  <Sparkles size={18} color="var(--nimbus-success)" />
                  Etiqueta de Descuento
                </div>
                <span className="nimbus-card-badge">.payment-discount-price...</span>
              </div>
              <div className="nimbus-card-body">
                <NimbusControlInput
                  label="Texto Promocional"
                  value={styles.discountContainer.text}
                  onChange={(v) => updateStyle('discountContainer', 'text', v)}
                />
                <div className="nimbus-form-row">
                  <NimbusColorPicker
                    label="Color del Texto"
                    value={styles.discountContainer.color}
                    onChange={(v) => updateStyle('discountContainer', 'color', v)}
                  />
                  <NimbusColorPicker
                    label="Color de Fondo"
                    value={styles.discountContainer.backgroundColor}
                    onChange={(v) => updateStyle('discountContainer', 'backgroundColor', v)}
                  />
                </div>
                <div className="nimbus-form-row">
                  <NimbusControlInput
                    label="Tamaño de Fuente"
                    value={styles.discountContainer.fontSize}
                    onChange={(v) => updateStyle('discountContainer', 'fontSize', v)}
                    showStepper
                  />
                  <NimbusControlInput
                    label="Relleno (Padding)"
                    value={styles.discountContainer.padding}
                    onChange={(v) => updateStyle('discountContainer', 'padding', v)}
                  />
                </div>
                <NimbusControlInput
                  label="Radio de Bordes"
                  value={styles.discountContainer.borderRadius}
                  onChange={(v) => updateStyle('discountContainer', 'borderRadius', v)}
                  showStepper
                />
              </div>
            </div>

            {/* 4. Contenedor de Compra */}
            <div className="nimbus-card">
              <div className="nimbus-card-header">
                <div className="nimbus-card-title">
                  <Sliders size={18} color="var(--nimbus-text-medium)" />
                  Contenedor del Botón
                </div>
                <span className="nimbus-card-badge">.product-buy-container</span>
              </div>
              <div className="nimbus-card-body">
                <div className="nimbus-form-row">
                  <NimbusColorPicker
                    label="Fondo del Contenedor"
                    value={styles.buyContainer.backgroundColor}
                    onChange={(v) => updateStyle('buyContainer', 'backgroundColor', v)}
                  />
                  <NimbusControlInput
                    label="Borde (ej. 1px solid #e2e8f0)"
                    value={styles.buyContainer.border}
                    onChange={(v) => updateStyle('buyContainer', 'border', v)}
                  />
                </div>
                <div className="nimbus-form-row">
                  <NimbusControlInput
                    label="Margen Superior (Margin Top)"
                    value={styles.buyContainer.marginTop}
                    onChange={(v) => updateStyle('buyContainer', 'marginTop', v)}
                    showStepper
                  />
                  <NimbusControlInput
                    label="Relleno (Padding)"
                    value={styles.buyContainer.padding}
                    onChange={(v) => updateStyle('buyContainer', 'padding', v)}
                  />
                </div>
                <NimbusControlInput
                  label="Radio de Bordes"
                  value={styles.buyContainer.borderRadius}
                  onChange={(v) => updateStyle('buyContainer', 'borderRadius', v)}
                  showStepper
                />
              </div>
            </div>

            {/* 5. Botón de Compra */}
            <div className="nimbus-card">
              <div className="nimbus-card-header">
                <div className="nimbus-card-title">
                  <ShoppingBag size={18} color="var(--nimbus-primary)" />
                  Botón "Agregar al Carrito"
                </div>
                <span className="nimbus-card-badge">.js-addtocart</span>
              </div>
              <div className="nimbus-card-body">
                <NimbusControlInput
                  label="Texto del Botón"
                  value={styles.buyButton.text}
                  onChange={(v) => updateStyle('buyButton', 'text', v)}
                />
                <div className="nimbus-form-row">
                  <NimbusColorPicker
                    label="Color del Texto"
                    value={styles.buyButton.color}
                    onChange={(v) => updateStyle('buyButton', 'color', v)}
                  />
                  <NimbusColorPicker
                    label="Color de Fondo"
                    value={styles.buyButton.backgroundColor}
                    onChange={(v) => updateStyle('buyButton', 'backgroundColor', v)}
                  />
                </div>
                <div className="nimbus-form-row">
                  <NimbusControlInput
                    label="Tamaño (px)"
                    value={styles.buyButton.fontSize}
                    onChange={(v) => updateStyle('buyButton', 'fontSize', v)}
                    showStepper
                  />
                  <NimbusSelect
                    label="Grosor"
                    value={styles.buyButton.fontWeight}
                    options={[
                      { value: '400', label: '400 - Normal' },
                      { value: '500', label: '500 - Medio' },
                      { value: '600', label: '600 - Semi Bold' },
                      { value: '700', label: '700 - Bold' },
                      { value: '800', label: '800 - Extra Bold' }
                    ]}
                    onChange={(v) => updateStyle('buyButton', 'fontWeight', v)}
                  />
                </div>
                <div className="nimbus-form-row">
                  <NimbusControlInput
                    label="Relleno (Padding)"
                    value={styles.buyButton.padding}
                    onChange={(v) => updateStyle('buyButton', 'padding', v)}
                  />
                  <NimbusControlInput
                    label="Radio de Bordes"
                    value={styles.buyButton.borderRadius}
                    onChange={(v) => updateStyle('buyButton', 'borderRadius', v)}
                    showStepper
                  />
                </div>
                <NimbusSelect
                  label="Transformación del Texto"
                  value={styles.buyButton.textTransform}
                  options={[
                    { value: 'uppercase', label: 'MAYÚSCULAS' },
                    { value: 'none', label: 'Normal (como se escribió)' },
                    { value: 'capitalize', label: 'Capitalizar Primera Letra' }
                  ]}
                  onChange={(v) => updateStyle('buyButton', 'textTransform', v)}
                />
              </div>
            </div>

          </aside>

          {/* Columna Derecha: Vista Previa & Código Generado */}
          <section className="nimbus-preview-column">
            
            {/* Vista Previa en Tienda */}
            <div className="nimbus-card">
              <div className="nimbus-viewport-toolbar">
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--nimbus-text-high)' }}>
                  Vista Previa en Tienda Online
                </span>
                <div className="nimbus-viewport-switch">
                  <button
                    type="button"
                    className={`nimbus-viewport-btn ${viewportMode === 'desktop' ? 'active' : ''}`}
                    onClick={() => setViewportMode('desktop')}
                    title="Vista Escritorio"
                  >
                    <Monitor size={14} />
                    Escritorio
                  </button>
                  <button
                    type="button"
                    className={`nimbus-viewport-btn ${viewportMode === 'mobile' ? 'active' : ''}`}
                    onClick={() => setViewportMode('mobile')}
                    title="Vista Móvil"
                  >
                    <Smartphone size={14} />
                    Móvil
                  </button>
                </div>
              </div>

              <div className="nimbus-storefront-wrapper">
                <div className={`nimbus-store-card ${viewportMode === 'mobile' ? 'mobile-mode' : ''}`}>
                  <div className="nimbus-store-card-image-wrapper">
                    <img 
                      src="/nano-banana.png" 
                      alt="Zapatillas deportivas Alto Rendimiento" 
                      className="nimbus-store-card-image" 
                    />
                  </div>

                  <div className="nimbus-store-card-content">
                    <span className="nimbus-product-category">Calzado &gt; Running</span>
                    <h3 className="nimbus-product-title">Zapatillas deportivas Alto Rendimiento</h3>

                    {/* Precios dinámicos */}
                    <div className="nimbus-prices-container">
                      <span style={{ ...styles.comparePrice, display: 'inline-block' }}>
                        $45.000
                      </span>
                      <span style={{ ...styles.mainPrice, display: 'inline-block' }}>
                        $35.000
                      </span>
                      <div style={{ ...styles.discountContainer, text: undefined, alignSelf: 'flex-start' }}>
                        {styles.discountContainer.text}
                      </div>
                    </div>

                    {/* Contenedor del Botón de Compra */}
                    <div style={styles.buyContainer}>
                      <button 
                        type="button"
                        style={{ 
                          ...styles.buyButton, 
                          text: undefined,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <ShoppingBag size={18} style={{ marginRight: '8px' }} />
                        {styles.buyButton.text}
                      </button>
                    </div>

                    {/* Beneficios de confianza Tiendanube */}
                    <div className="nimbus-store-badges">
                      <div className="nimbus-store-badge-item">
                        <CreditCard size={14} color="var(--nimbus-primary)" />
                        <span><strong>3 y 6 cuotas sin interés</strong> con todas las tarjetas</span>
                      </div>
                      <div className="nimbus-store-badge-item">
                        <Truck size={14} color="var(--nimbus-success)" />
                        <span><strong>Envío gratis</strong> a todo el país en compras superiores a $30.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Código CSS Generado */}
            <div className="nimbus-code-container">
              <div className="nimbus-code-header">
                <div className="nimbus-code-title">
                  <Code2 size={16} />
                  Código CSS Generado
                </div>
                <button 
                  type="button" 
                  className="nimbus-btn nimbus-btn-primary"
                  onClick={copyToClipboard}
                  style={{ height: '32px', fontSize: '0.8125rem', padding: '0 0.85rem' }}
                >
                  {copied ? <CheckCircle2 size={15} /> : <Copy size={15} />}
                  {copied ? '¡Copiado!' : 'Copiar CSS'}
                </button>
              </div>
              <pre className="nimbus-code-pre">
                <code>{generateCSS()}</code>
              </pre>
            </div>

            {/* Guía de instalación en Tiendanube */}
            <div className="nimbus-guide-box">
              <div 
                className="nimbus-guide-title"
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={() => setShowGuide(!showGuide)}
              >
                <Info size={16} color="var(--nimbus-primary)" />
                <span>¿Cómo aplicar este código en tu Tiendanube?</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--nimbus-primary)' }}>
                  {showGuide ? 'Ocultar guía' : 'Ver guía'}
                </span>
              </div>
              
              {showGuide && (
                <ol className="nimbus-guide-steps">
                  <li>Iniciá sesión en el <strong>Administrador de tu Tiendanube</strong>.</li>
                  <li>Dirigite a la sección <strong>Mi Tiendanube &gt; Personalizar &gt; Edición avanzada de CSS</strong>.</li>
                  <li>Pegá el código copiado al final del editor y hacé clic en <strong>Guardar cambios</strong>.</li>
                </ol>
              )}
            </div>

          </section>
        </div>
      </div>

      {/* Footer Nube SDK */}
      <footer className="nimbus-footer">
        <div>
          Adaptado a las pautas de diseño oficial de <strong>Tiendanube Nimbus</strong> y <strong>Nube SDK</strong>.
        </div>
        <div>
          Desarrollado con ♥ por <a href="https://viranmd.com" target="_blank" rel="noreferrer">Viran</a>
        </div>
      </footer>
    </>
  );
}

// Componente para inputs de control con soporte de incremento numérico
function NimbusControlInput({ label, id, value, onChange, showStepper = false }) {
  const inputId = id || label.replace(/\s+/g, '-');

  const handleStep = (direction) => {
    const match = String(value).match(/^([0-9.-]+)([a-zA-Z%]*)$/);
    if (match) {
      let num = parseFloat(match[1]);
      let unit = match[2] || 'px';
      const step = 1;
      num = direction === 'up' ? num + step : num - step;
      if (num < 0) num = 0;
      onChange(num + unit);
    }
  };

  return (
    <div className="nimbus-form-field">
      <label className="nimbus-label" htmlFor={inputId}>
        {label}
      </label>
      {showStepper ? (
        <div className="nimbus-stepper-wrapper">
          <input
            id={inputId}
            type="text"
            className="nimbus-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="nimbus-stepper-buttons">
            <button
              type="button"
              className="nimbus-stepper-btn"
              onClick={() => handleStep('down')}
              title="Disminuir"
            >
              -
            </button>
            <button
              type="button"
              className="nimbus-stepper-btn"
              onClick={() => handleStep('up')}
              title="Aumentar"
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <input
          id={inputId}
          type="text"
          className="nimbus-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

// Selector de color con muestra visual e input hexadecimal
function NimbusColorPicker({ label, value, onChange }) {
  const inputId = `color-${label.replace(/\s+/g, '-')}`;
  const isTransparent = value === 'transparent';
  const displayColor = isTransparent ? '#ffffff' : value;

  return (
    <div className="nimbus-form-field">
      <label className="nimbus-label" htmlFor={inputId}>
        {label}
      </label>
      <div className="nimbus-color-wrapper">
        <label 
          htmlFor={inputId}
          className="nimbus-color-swatch-label"
          style={{ backgroundColor: displayColor }}
          title="Abrir selector de color"
        >
          {isTransparent && <span style={{ fontSize: '10px', color: '#666' }}>∅</span>}
        </label>
        <input
          id={inputId}
          type="color"
          value={displayColor.length === 7 ? displayColor : '#ffffff'}
          onChange={(e) => onChange(e.target.value)}
          className="nimbus-hidden-color-input"
        />
        <input
          type="text"
          className="nimbus-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ textTransform: 'uppercase', fontFamily: 'monospace', fontSize: '0.8125rem' }}
        />
      </div>
    </div>
  );
}

// Selector desplegable estándar Nimbus
function NimbusSelect({ label, value, options, onChange }) {
  const selectId = `select-${label.replace(/\s+/g, '-')}`;

  return (
    <div className="nimbus-form-field">
      <label className="nimbus-label" htmlFor={selectId}>
        {label}
      </label>
      <select
        id={selectId}
        className="nimbus-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
