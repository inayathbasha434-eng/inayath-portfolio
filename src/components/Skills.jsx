import { useEffect, useRef, useState, useCallback } from 'react'
import { Sparkles } from 'lucide-react'

/* ─── Outer ring (15 icons – exact from reference image) ────── */
const OUTER = [
  {
    id: 'react', name: 'React', color: '#61dafb', bg: '#0a1a24',
    icon: (
      <svg viewBox="0 0 24 24" fill="#61dafb" className="w-full h-full p-[22%]">
        <circle cx="12" cy="12" r="2.05"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.3"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.3" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.3" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    id: 'shopify', name: 'Shopify', color: '#96bf48', bg: '#0d1f0d',
    icon: (
      <svg viewBox="0 0 24 24" fill="#96bf48" className="w-full h-full p-[20%]">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192-.097 0-1.904-.036-1.904-.036s-1.261-1.24-1.4-1.378v-.002L15.337 23.98zM12.34 4.052s-.636-.192-1.672-.192c-1.652 0-2.454 1.017-2.454 2.013 0 1.105.866 1.64 1.653 2.088.754.424 1.037.73 1.037 1.178 0 .577-.462.866-1.15.866-.954 0-1.768-.5-1.768-.5l-.308 1.479s.81.558 2.04.558c1.846 0 3.02-.97 3.02-2.38 0-1.19-.866-1.903-1.807-2.34-.597-.289-1.037-.52-1.037-1.017 0-.5.423-.81 1.017-.81.788 0 1.498.308 1.498.308l.33-1.25h.001zm2.684-.135l-1.073 3.207-.19-.057-.54-3.15h-1.77l1.578 7.073h1.44l2.604-7.073h-2.05zm5.596.02h-1.29l-2.4 7.073h1.905l.443-1.29h2.243l.25 1.29h1.79L20.62 3.937zm-1.097 2.07l.52 2.592h-1.442l.922-2.593z"/>
      </svg>
    ),
  },
  {
    id: 'json', name: 'JSON / API', color: '#7dd3fc', bg: '#0c1926',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[18%]">
        <text x="1" y="17" fontSize="13" fontWeight="bold" fill="#7dd3fc" fontFamily="monospace">{'{ }'}</text>
      </svg>
    ),
  },
  {
    id: 'wordpress', name: 'WordPress', color: '#21759b', bg: '#0a1820',
    icon: (
      <svg viewBox="0 0 24 24" fill="#21759b" className="w-full h-full p-[20%]">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.492 12c0-1.19.248-2.321.688-3.348l3.79 10.39A8.542 8.542 0 0 1 3.492 12zm8.508 8.508a8.527 8.527 0 0 1-2.427-.352l2.578-7.49 2.642 7.24c.017.043.037.083.06.121a8.54 8.54 0 0 1-2.853.481zM14.458 7.8c.393-.02.748-.059.748-.059.352-.04.31-.558-.04-.539 0 0-1.058.08-1.74.08-.643 0-1.72-.08-1.72-.08-.352-.02-.393.518-.04.539 0 0 .332.04.684.059l1.015 2.782-1.427 4.28-2.375-7.062c.392-.02.748-.059.748-.059.352-.04.31-.558-.04-.539 0 0-1.058.08-1.74.08-.122 0-.266-.003-.418-.008A8.528 8.528 0 0 1 12 3.492c1.782 0 3.413.586 4.718 1.564a.764.764 0 0 0-.088-.006c-.643 0-1.099.56-1.099 1.16 0 .539.311.995.643 1.534.248.432.538.987.538 1.79 0 .558-.214 1.205-.496 2.108l-.651 2.175-2.107-8.017zm5.058.74a8.508 8.508 0 0 1 .992 4.052c0 1.517-.398 2.942-1.099 4.18l-2.882-7.864c.43.11.788.166.957.166.352 0 .9-.044 1.475-.166z"/>
      </svg>
    ),
  },
  {
    id: 'woocommerce', name: 'WooCommerce', color: '#7f54b3', bg: '#150d24',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[18%]">
        <path fill="#7f54b3" d="M23.72 5.418H.28C.126 5.418 0 5.544 0 5.698v12.604c0 .154.126.28.28.28h23.44c.154 0 .28-.126.28-.28V5.698c0-.154-.126-.28-.28-.28zm-1.116 6.193l-1.72 2.31a.56.56 0 0 1-.842.056l-1.148-1.148-1.148 1.148a.557.557 0 0 1-.842-.056l-1.72-2.31v3.922c0 .31-.251.56-.56.56H4.502a.56.56 0 0 1-.56-.56V7.886c0-.31.251-.56.56-.56h4.334c.31 0 .56.25.56.56v3.332l.756-1.19a.559.559 0 0 1 .952 0l1.19 1.874 1.19-1.874a.559.559 0 0 1 .952 0l.757 1.19V7.886c0-.31.25-.56.56-.56h3.5c.31 0 .56.25.56.56v5.647l.756-1.19a.559.559 0 0 1 .952 0l.756 1.19V7.886c0-.31.251-.56.56-.56h.421c.31 0 .56.25.56.56v6.274c0 .31-.25.56-.56.56h-1.12a.558.558 0 0 1-.46-.239z"/>
      </svg>
    ),
  },
  {
    id: 'supabase', name: 'Supabase', color: '#3ecf8e', bg: '#051c12',
    icon: (
      <svg viewBox="0 0 24 24" fill="#3ecf8e" className="w-full h-full p-[22%]">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.33 12.606.73 13.5 1.424 13.5h9.255a.75.75 0 0 1 .75.75l-.245 8.714c.015.986 1.26 1.41 1.874.637l9.262-11.653c.434-.556.034-1.45-.66-1.45h-9.255a.75.75 0 0 1-.75-.75l.245-8.712z"/>
      </svg>
    ),
  },
  {
    id: 'mysql', name: 'MySQL', color: '#00758f', bg: '#051618',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[20%]">
        <path fill="#00758f" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.133-.04-.04-.172-.05-.18-.159zm5.947 2.405c-.048-.1-.102-.201-.17-.285-.048-.073-.11-.154-.17-.214-.172-.172-.346-.346-.517-.517-.065-.065-.11-.133-.172-.201-.029-.031-.063-.063-.1-.09-.031-.02-.077-.04-.121-.04h-.014c-.045 0-.09.02-.134.04-.043.027-.077.059-.107.09l-.657.657c-.064.064-.133.127-.2.19l-.003.002c-.248.232-.494.468-.73.712l-.39.39-.006.006a.495.495 0 0 1-.033.033l-.002.002-.007.007a1.5 1.5 0 0 0-.11.12l-.012.015-.004.005a.614.614 0 0 0-.045.063l-.004.007-.003.005a.498.498 0 0 0-.028.055l-.002.006-.001.003a.48.48 0 0 0-.017.056l-.001.004-.001.003a.454.454 0 0 0-.008.058v.004l-.001.004a.427.427 0 0 0 0 .058v.004a.405.405 0 0 0 .007.058l.001.004.001.003a.38.38 0 0 0 .016.055l.002.006.002.004a.362.362 0 0 0 .026.053l.003.006.004.005a.345.345 0 0 0 .036.05l.004.004.004.005a.33.33 0 0 0 .045.045l.005.004.005.003a.317.317 0 0 0 .054.036l.006.003.006.002a.307.307 0 0 0 .063.026l.007.002.007.001a.297.297 0 0 0 .069.014h.008a.287.287 0 0 0 .073-.004l.007-.002.007-.001a.282.282 0 0 0 .07-.025l.007-.003.007-.004a.276.276 0 0 0 .065-.042l.006-.005.005-.005a.27.27 0 0 0 .057-.058l.005-.007.004-.006a.263.263 0 0 0 .044-.07l.003-.008.003-.007a.257.257 0 0 0 .028-.077l.001-.008v-.008a.252.252 0 0 0 .008-.08v-.008a.248.248 0 0 0-.008-.079z"/>
        <path fill="#00758f" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3c1.9 0 3.6.6 5.1 1.5L5.5 17.1C4.6 15.6 4 13.9 4 12c0-4.4 3.6-8 8-8zm0 18c-1.9 0-3.7-.6-5.1-1.6L18.5 6.9C19.4 8.4 20 10.1 20 12c0 4.4-3.6 8-8 8z"/>
      </svg>
    ),
  },
  {
    id: 'git', name: 'Git', color: '#f05032', bg: '#1e0a06',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f05032" className="w-full h-full p-[22%]">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    id: 'github', name: 'GitHub', color: '#e0e0e0', bg: '#0d1117',
    icon: (
      <svg viewBox="0 0 24 24" fill="#e0e0e0" className="w-full h-full p-[20%]">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    id: 'figma', name: 'Figma', color: '#a259ff', bg: '#150e28',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[20%]">
        <path fill="#1abcfe" d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
        <path fill="#0acf83" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z"/>
        <path fill="#ff7262" d="M12 0v8h4a4 4 0 0 0 0-8h-4z"/>
        <path fill="#f24e1e" d="M4 4a4 4 0 0 0 0 8h4V4H4z"/>
        <path fill="#a259ff" d="M4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/>
      </svg>
    ),
  },
  {
    id: 'vscode', name: 'VS Code', color: '#007acc', bg: '#0a1626',
    icon: (
      <svg viewBox="0 0 24 24" fill="#007acc" className="w-full h-full p-[20%]">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
  },
  {
    id: 'css3', name: 'CSS3', color: '#264de4', bg: '#0a0e26',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[20%]">
        <path fill="#264de4" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
  },
  {
    id: 'html5', name: 'HTML5', color: '#e34c26', bg: '#200b05',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[20%]">
        <path fill="#e34c26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
  {
    id: 'javascript', name: 'JavaScript', color: '#f7df1e', bg: '#1a1800',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[16%]">
        <rect width="24" height="24" rx="2" fill="#f7df1e"/>
        <path fill="#000" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
  },
  {
    id: 'postman', name: 'Postman', color: '#ef5b25', bg: '#1e0a05',
    icon: (
      <svg viewBox="0 0 24 24" fill="#ef5b25" className="w-full h-full p-[20%]">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.584-3.8 13.428-10.373C24.744 6.955 20.1.942 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.858.858 0 1 0-1.215-1.215l-4.453 4.453-.308-.308 4.453-4.452a1.786 1.786 0 0 1 2.527 0c.346.346.537.808.537 1.296s-.19.95-.537 1.296l-.009-.37z"/>
      </svg>
    ),
  },
]

/* ─── Inner ring (6 icons) ──────────────────────────────────── */
const INNER = [
  {
    id: 'canva', name: 'Canva', color: '#00c4cc', bg: '#001e1f',
    icon: (
      <svg viewBox="0 0 24 24" fill="#00c4cc" className="w-full h-full p-[22%]">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.84 9.12c0-.84-.66-1.44-1.5-1.44-.6 0-1.08.3-1.38.78-.54-.66-1.38-1.08-2.34-1.08-1.74 0-3.06 1.32-3.06 3.12 0 1.38.78 2.52 1.92 3.06-.18.42-.42.78-.72 1.02-.42.36-.42.96-.06 1.38.18.24.48.36.78.36.18 0 .36-.06.54-.18.54-.42 1.02-1.02 1.32-1.68.3.06.6.12.9.12 1.8 0 3.12-1.38 3.12-3.18 0-.12 0-.24-.06-.36.36-.36.54-.84.54-1.38zm-5.22 3.66c-.72 0-1.32-.6-1.32-1.56 0-.9.6-1.56 1.32-1.56.72 0 1.32.66 1.32 1.56 0 .96-.6 1.56-1.32 1.56z"/>
      </svg>
    ),
  },
  {
    id: 'nextjs', name: 'Next.js', color: '#e2e8f0', bg: '#111827',
    icon: (
      <svg viewBox="0 0 24 24" fill="#e2e8f0" className="w-full h-full p-[22%]">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z"/>
      </svg>
    ),
  },
  {
    id: 'tailwind', name: 'Tailwind CSS', color: '#38bdf8', bg: '#071f2e',
    icon: (
      <svg viewBox="0 0 24 24" fill="#38bdf8" className="w-full h-full p-[22%]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    id: 'ai', name: 'AI Tools', color: '#10a37f', bg: '#061a14',
    icon: (
      <svg viewBox="0 0 24 24" fill="#10a37f" className="w-full h-full p-[22%]">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494z"/>
      </svg>
    ),
  },
  {
    id: 'seo', name: 'SEO', color: '#34d399', bg: '#051a10',
    icon: (
      <svg viewBox="0 0 24 24" fill="#34d399" className="w-full h-full p-[22%]">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
  },
  {
    id: 'emailmkt', name: 'Email Marketing', color: '#f59e0b', bg: '#1a1200',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f59e0b" className="w-full h-full p-[22%]">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const outerAngle = useRef(0)
  const innerAngle = useRef(0)
  const rafRef = useRef(null)
  const [tick, setTick] = useState(0)
  const [size, setSize] = useState(420)

  /* Responsive sizing */
  const updateSize = useCallback(() => {
    const w = Math.min(window.innerWidth, 520)
    setSize(Math.max(300, w * 0.88))
  }, [])

  useEffect(() => {
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [updateSize])

  /* IntersectionObserver for fade-in */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const els = section.querySelectorAll('.fade-in')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* Always-running dual rotation — never pauses on hover */
  useEffect(() => {
    const animate = () => {
      outerAngle.current = (outerAngle.current + 0.09) % 360
      innerAngle.current = (innerAngle.current - 0.15) % 360
      setTick(t => t + 1)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const cx = size / 2
  const cy = size / 2
  const OUTER_R = size * 0.375
  const INNER_R = size * 0.19
  const OUTER_NODE = size * 0.118
  const INNER_NODE = size * 0.09

  const renderRing = (skills, radius, nodeSize, angleRef) =>
    skills.map((skill, i) => {
      const stepDeg = 360 / skills.length
      const deg = ((angleRef.current + stepDeg * i) % 360) * (Math.PI / 180)
      const x = cx + radius * Math.cos(deg)
      const y = cy + radius * Math.sin(deg)
      const isHovered = hoveredId === skill.id

      return (
        <button
          key={skill.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none"
          style={{ left: x, top: y }}
          onMouseEnter={() => setHoveredId(skill.id)}
          onMouseLeave={() => setHoveredId(null)}
          onTouchStart={() => setHoveredId(prev => prev === skill.id ? null : skill.id)}
          title={skill.name}
        >
          {/* Name label — hover only */}
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: `translateX(-50%) translateY(${isHovered ? -4 : 2}px)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              marginBottom: 6,
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              zIndex: 50,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: 6,
                color: '#fff',
                background: '#111827',
                border: `1px solid ${skill.color}55`,
                boxShadow: `0 0 10px ${skill.color}45`,
                display: 'inline-block',
              }}
            >
              {skill.name}
            </span>
          </div>

          {/* Icon bubble */}
          <div
            style={{
              width: isHovered ? nodeSize * 1.18 : nodeSize,
              height: isHovered ? nodeSize * 1.18 : nodeSize,
              borderRadius: '50%',
              background: skill.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: isHovered
                ? `0 0 0 2px ${skill.color}, 0 0 18px ${skill.color}70`
                : `0 0 0 1.5px ${skill.color}40`,
            }}
          >
            {skill.icon}
          </div>
        </button>
      )
    })

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glowPulse { 0%,100%{opacity:.4} 50%{opacity:.85} }
        .sk-glow { animation: glowPulse 3s ease-in-out infinite; }
        .sk-ring-o { animation: glowPulse 4.5s ease-in-out infinite; }
        .sk-ring-i { animation: glowPulse 3.5s ease-in-out infinite 0.6s; }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            Skills Graph
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Orbital canvas — fully responsive */}
        <div className="fade-in flex justify-center">
          <div
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Outer dashed orbit ring */}
            <div
              className="sk-ring-o absolute rounded-full"
              style={{
                width: OUTER_R * 2, height: OUTER_R * 2,
                left: cx - OUTER_R, top: cy - OUTER_R,
                border: '1.5px dashed rgba(139,92,246,0.25)',
              }}
            />

            {/* Inner dashed orbit ring */}
            <div
              className="sk-ring-i absolute rounded-full"
              style={{
                width: INNER_R * 2, height: INNER_R * 2,
                left: cx - INNER_R, top: cy - INNER_R,
                border: '1px dashed rgba(96,165,250,0.2)',
              }}
            />

            {/* Purple center glow */}
            <div
              className="sk-glow absolute rounded-full pointer-events-none"
              style={{
                width: size * 0.35, height: size * 0.35,
                left: cx - size * 0.175, top: cy - size * 0.175,
                background: 'radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(88,28,220,0.12) 55%, transparent 75%)',
              }}
            />

            {/* Center code node */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center font-mono font-black text-purple-200 rounded-full select-none"
              style={{
                left: cx, top: cy,
                width: size * 0.16, height: size * 0.16,
                fontSize: size * 0.038,
                background: 'radial-gradient(circle at 40% 35%, #2d1b5e, #0e0820)',
                boxShadow: '0 0 0 2px rgba(139,92,246,0.6), 0 0 28px rgba(139,92,246,0.45)',
              }}
            >
              {'</>'}
            </div>

            {/* Inner ring — counter-clockwise */}
            {renderRing(INNER, INNER_R, INNER_NODE, innerAngle)}

            {/* Outer ring — clockwise */}
            {renderRing(OUTER, OUTER_R, OUTER_NODE, outerAngle)}
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-3">
          Hover any icon to reveal the skill name
        </p>
      </div>
    </section>
  )
}
