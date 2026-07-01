import { useEffect, useState, useRef } from 'react'
import { Sparkles } from 'lucide-react'

/* ── Skill icons as inline SVG paths ─────────────────────────── */
const SKILLS = [
  {
    id: 'wordpress',
    name: 'WordPress',
    color: '#3b82f6',
    bg: '#1a2436',
    description: 'Proficient in WooCommerce, customized themes, landing pages, and setting up stable content management systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.086 14.71L8.33 9.814c.459-.021.873-.066.873-.066.41-.049.362-.651-.049-.629 0 0-1.234.097-2.03.097-.149 0-.325-.004-.51-.01C7.95 7.323 9.854 6.2 12 6.2c1.582 0 3.02.604 4.104 1.593-.026-.002-.052-.005-.079-.005-1.208 0-2.064 1.051-2.064 2.18 0 1.013.584 1.869.584 2.883 0 .649-.293 1.403-.684 2.45l-.898 2.999-3.049-9.063c.459-.021.873-.066.873-.066.41-.049.362-.651-.049-.629 0 0-1.234.097-2.03.097zm7.72 5.015l-2.873-7.867c.459-.021.873-.066.873-.066.41-.049.362-.651-.049-.629 0 0-1.234.097-2.03.097l-.27-.004 2.87 8.468zm2.016 3.275zm0 0z"/>
      </svg>
    ),
  },
  {
    id: 'supabase',
    name: 'Supabase',
    color: '#10b981',
    bg: '#112218',
    description: 'Backend database management, real-time data sync, authentication flows, and serverless API creation with Supabase.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#10b981" className="w-6 h-6">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.33 12.606.73 13.5 1.424 13.5h9.255a.75.75 0 0 1 .75.75l-.245 8.714c.015.986 1.26 1.41 1.874.637l9.262-11.653c.434-.556.034-1.45-.66-1.45h-9.255a.75.75 0 0 1-.75-.75l.245-8.712z"/>
      </svg>
    ),
  },
  {
    id: 'vscode',
    name: 'VS Code',
    color: '#007acc',
    bg: '#0d1a2b',
    description: 'Expert use of VS Code extensions, snippets, debugging tools, and integrated terminal for seamless development workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#007acc" className="w-6 h-6">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL',
    color: '#00758f',
    bg: '#0d1f22',
    description: 'Designing relational schemas, writing complex queries, stored procedures, and optimizing database performance for web apps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#00758f" className="w-6 h-6">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.133-.04-.04-.172-.05-.18-.159zm5.947 2.405c-.048-.1-.102-.201-.17-.285-.048-.073-.11-.154-.17-.214-.172-.172-.346-.346-.517-.517-.065-.065-.11-.133-.172-.201-.029-.031-.063-.063-.1-.09-.031-.02-.077-.04-.121-.04h-.014c-.045 0-.09.02-.134.04-.043.027-.077.059-.107.09-.028.027-.053.053-.076.08-.028.026-.05.053-.075.08-.025.027-.05.054-.076.081-.025.027-.05.054-.075.08-.026.027-.05.054-.076.081-.025.027-.05.054-.076.08-.025.027-.05.054-.075.081-.025.026-.05.053-.076.08-.025.027-.05.054-.076.08-.025.027-.05.054-.075.081-.025.027-.05.054-.076.08-.025.027-.05.054-.075.081-.025.026-.05.053-.076.08-.025.027-.05.053-.076.08-.025.027-.05.054-.075.081-.026.026-.05.053-.076.08h.014a1.25 1.25 0 0 1 .12.146c.02.04.04.08.054.12.027.04.054.08.08.12l.014.013.014-.013a.2.2 0 0 0 .04-.08c.013-.04.027-.08.04-.12.012-.04.026-.08.04-.12.012-.04.026-.08.04-.12l.013-.013c.04.013.08.026.12.04.027.014.054.027.08.04.027.013.054.026.08.04.027.013.054.027.08.04.027.013.054.026.08.04.014.006.027.013.04.02z"/>
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    color: '#8b5cf6',
    bg: '#1a1030',
    description: 'Developing UI design systems, wireframing modern visual interfaces, prototyping user flows, and exporting design assets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#8b5cf6" className="w-6 h-6">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019S9.837 16.491 8.172 16.491z"/>
      </svg>
    ),
  },
  {
    id: 'postman',
    name: 'Postman',
    color: '#ef4444',
    bg: '#2a1212',
    description: 'API testing, collection management, environment variables, and automated testing workflows using Postman.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#ef4444" className="w-6 h-6">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.584-3.8 13.428-10.373C24.744 6.955 20.1.942 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.858.858 0 1 0-1.215-1.215l-4.453 4.453-.308-.308 4.453-4.452a1.786 1.786 0 0 1 2.527 0c.346.346.537.808.537 1.296s-.19.95-.537 1.296l-.009-.37zM6.723 13.8l.645.644-1.289 1.289-.644-.644zm6.868 1.9c.346.346.537.808.537 1.296s-.19.95-.537 1.296a1.786 1.786 0 0 1-2.527 0l-4.453-4.453.308-.308 4.453 4.453a.858.858 0 0 0 1.215-1.215L8.134 13.12l.308-.307 4.453 4.453c.346.346.537.808.537 1.296z"/>
      </svg>
    ),
  },
  {
    id: 'shopify',
    name: 'Shopify',
    color: '#10b981',
    bg: '#0d2218',
    description: 'Expert in custom theme development, Liquid scripting, store setup, product configurations, and app integrations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#10b981" className="w-6 h-6">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192-.097 0-1.904-.036-1.904-.036s-1.261-1.24-1.4-1.378v-.002L15.337 23.98zM12.34 4.052s-.636-.192-1.672-.192c-1.652 0-2.454 1.017-2.454 2.013 0 1.105.866 1.64 1.653 2.088.754.424 1.037.73 1.037 1.178 0 .577-.462.866-1.15.866-.954 0-1.768-.5-1.768-.5l-.308 1.479s.81.558 2.04.558c1.846 0 3.02-.97 3.02-2.38 0-1.19-.866-1.903-1.807-2.34-.597-.289-1.037-.52-1.037-1.017 0-.5.423-.81 1.017-.81.788 0 1.498.308 1.498.308l.33-1.25h.001zm2.684-.135l-1.073 3.207-.19-.057-.54-3.15h-1.77l1.578 7.073h1.44l2.604-7.073h-2.05zm5.596.02h-1.29l-2.4 7.073h1.905l.443-1.29h2.243l.25 1.29h1.79L20.62 3.937zm-1.097 2.07l.52 2.592h-1.442l.922-2.593z"/>
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    color: '#f05032',
    bg: '#2a1208',
    description: 'Version control expertise: branching strategies, pull requests, merge conflict resolution, and collaborative Git workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f05032" className="w-6 h-6">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    color: '#06b6d4',
    bg: '#0d1f26',
    description: 'Creating high-performance reusable components, managing state with hooks, and building dynamic single-page applications.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#06b6d4" className="w-6 h-6">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    color: '#eab308',
    bg: '#201c07',
    description: 'Writing optimized ES6+ scripts, handling API calls, DOM manipulation, and configuring interactive user experiences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#eab308" className="w-6 h-6">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
  },
  {
    id: 'css',
    name: 'CSS3',
    color: '#1d4ed8',
    bg: '#0d1225',
    description: 'Fluid layout design using Tailwind CSS, modern Grid/Flexbox, custom keyframe animations, and fluid responsive styling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#1d4ed8" className="w-6 h-6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
  },
  {
    id: 'html',
    name: 'HTML5',
    color: '#f97316',
    bg: '#201208',
    description: 'Deep understanding of semantic markup, accessibility standards, SEO-friendly structure, and optimized web page schemas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f97316" className="w-6 h-6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    color: '#d946ef',
    bg: '#20072b',
    description: 'Designing marketing banners, pitch slides, social graphics, product thumbnails, and custom store visual assets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#d946ef" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.48 5.04c.24 0 .48.012.708.036 2.448.18 4.356 1.332 5.46 3.12.192.312.36.648.48.996.216.6.36 1.26.36 1.956v.264c0 .312-.048.6-.12.876-.204.756-.636 1.38-1.248 1.8-.408.276-.864.444-1.356.504-.108.012-.228.024-.348.024-.528 0-.96-.132-1.26-.36-.228-.168-.396-.396-.48-.66-.036-.12-.048-.252-.048-.384 0-.12.012-.24.036-.36.048-.252.132-.468.264-.66.132-.18.276-.324.468-.444.048-.024.096-.048.144-.06-.024-.132-.048-.252-.084-.36-.192-.636-.672-1.008-1.32-1.008-.132 0-.264.012-.396.048-.504.132-.876.528-1.056 1.104a2.94 2.94 0 0 0-.108.78v.348c0 .204.024.396.072.588.12.504.384.924.756 1.224.348.276.78.432 1.26.468.072.012.144.012.216.012.468 0 .876-.12 1.212-.336l.108-.072.048.108c.144.324.216.684.216 1.068 0 .144-.012.276-.036.408-.072.468-.264.9-.552 1.26-.552.684-1.38 1.02-2.436 1.02-.072 0-.156 0-.228-.012-1.02-.06-1.884-.456-2.568-1.164-.72-.744-1.08-1.704-1.08-2.832v-.264c0-.552.084-1.068.252-1.548.336-.972.972-1.752 1.836-2.268.756-.456 1.62-.696 2.544-.696zm0 0"/>
      </svg>
    ),
  },
]

const RADIUS = 145   // orbit radius in px
const CENTER = 175   // center of SVG canvas

export default function Skills() {
  const sectionRef = useRef(null)
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [angle, setAngle] = useState(0)
  const [paused, setPaused] = useState(false)
  const angleRef = useRef(0)
  const rafRef = useRef(null)

  /* ── Intersection fade-in ─────────────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const els = section.querySelectorAll('.fade-in')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* ── Slow auto-rotation via rAF ───────────────────────────── */
  useEffect(() => {
    const SPEED = 0.18 // degrees per frame
    const tick = () => {
      if (!paused) {
        angleRef.current = (angleRef.current + SPEED) % 360
        setAngle(angleRef.current)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused])

  const handleIconClick = (skill) => {
    setPaused(true)
    setSelectedSkill(skill)
  }

  const totalSkills = SKILLS.length

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbitGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.85; }
        }
        .orbit-ring {
          border: 1.5px dashed rgba(139, 92, 246, 0.25);
          animation: orbitGlow 4s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-blue-400" />
            Skills Graph
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Orbital Wheel */}
        <div className="fade-in flex flex-col items-center gap-8">
          <div
            className="relative select-none cursor-pointer"
            style={{ width: CENTER * 2, height: CENTER * 2, maxWidth: '100%' }}
            onClick={() => { setPaused(false); setSelectedSkill(null) }}
          >
            {/* Outer dashed orbit ring */}
            <div
              className="orbit-ring absolute rounded-full"
              style={{
                width: RADIUS * 2,
                height: RADIUS * 2,
                left: CENTER - RADIUS,
                top: CENTER - RADIUS,
              }}
            />

            {/* Purple core glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 140,
                height: 140,
                left: CENTER - 70,
                top: CENTER - 70,
                background: 'radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(109,40,217,0.2) 50%, transparent 75%)',
              }}
            />

            {/* Center code icon */}
            <div
              className="absolute flex items-center justify-center rounded-full font-mono font-black text-purple-300 text-lg tracking-tight z-10"
              style={{
                width: 72,
                height: 72,
                left: CENTER - 36,
                top: CENTER - 36,
                background: 'radial-gradient(circle at 40% 35%, #2d1b5e, #130d2e)',
                boxShadow: '0 0 0 2px rgba(139,92,246,0.35), 0 0 30px rgba(139,92,246,0.4)',
              }}
            >
              {'</>'}
            </div>

            {/* Orbiting icon nodes */}
            {SKILLS.map((skill, i) => {
              const deg = (angle + (360 / totalSkills) * i) * (Math.PI / 180)
              const x = CENTER + RADIUS * Math.cos(deg)
              const y = CENTER + RADIUS * Math.sin(deg)
              const isSelected = selectedSkill?.id === skill.id

              return (
                <button
                  key={skill.id}
                  onClick={(e) => { e.stopPropagation(); handleIconClick(skill) }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none group"
                  style={{ left: x, top: y }}
                  title={skill.name}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: skill.bg,
                      boxShadow: isSelected
                        ? `0 0 0 2.5px ${skill.color}, 0 0 18px ${skill.color}88`
                        : `0 0 0 1.5px ${skill.color}44, 0 0 8px ${skill.color}33`,
                    }}
                  >
                    {skill.icon}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Hint text */}
          <p className="text-slate-500 text-xs text-center -mt-4">
            {paused
              ? 'Click the wheel to resume rotation'
              : 'Click any icon to explore skills'}
          </p>

          {/* Detail panel */}
          <div className="w-full max-w-md fade-in">
            {selectedSkill ? (
              <div
                className="bg-[#0d1426] rounded-2xl p-5 sm:p-6 transition-all duration-500 shadow-xl relative overflow-hidden"
                style={{ border: `1px solid ${selectedSkill.color}30` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: selectedSkill.color }} />
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: selectedSkill.bg }}
                  >
                    {selectedSkill.icon}
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg">{selectedSkill.name}</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedSkill.description}</p>
              </div>
            ) : (
              <div className="bg-[#0d1426] border border-white/5 rounded-2xl p-5 sm:p-6 text-center text-slate-500 text-sm shadow-md">
                Tap any skill icon in the orbit to see details
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
