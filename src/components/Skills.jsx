import { useEffect, useState, useRef } from 'react'
import { Sparkles } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────
   SKILL NODES — x/y in percentage of the canvas (500×520)
───────────────────────────────────────────────────────────────── */
const SKILLS = [
  {
    id: 'javascript',
    name: 'JavaScript',
    x: 18, y: 18,
    color: '#f7df1e',
    bg: '#1a1800',
    ring: '#f7df1e',
    description: 'Writing optimized ES6+ scripts, handling API calls, DOM manipulation, and configuring interactive user experiences.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="2" fill="#f7df1e"/>
        <path fill="#000" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    x: 40, y: 10,
    color: '#61dafb',
    bg: '#0d1f2b',
    ring: '#61dafb',
    description: 'Creating high-performance reusable components, state management with hooks, and building dynamic single-page applications.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#61dafb" className="w-7 h-7">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578 23.83 23.83 0 0 0-1.363 3.578l-.133.468-.133.426zm11.985 0l-.134-.468a23.83 23.83 0 0 0-1.363-3.578 23.53 23.53 0 0 0 1.363-3.578l.133-.468.473.12C21.982 8.746 24 10.255 24 11.996s-2.018 3.25-5.536 4.139l-.471.12zm-6.968 5.44l-.269-.073A23.785 23.785 0 0 0 9.029 18.5c.34-.808.687-1.669 1.028-2.57a23.68 23.68 0 0 0 3.89.526c.226.003.445.01.667.01.224 0 .443-.007.667-.01a23.683 23.683 0 0 0 3.89-.526c.34.901.687 1.762 1.028 2.57a23.786 23.786 0 0 0-1.727 3.122l-.269.073a8.63 8.63 0 0 1-4.51 0zm6.971-5.44l-.133-.468a23.53 23.53 0 0 0-1.363-3.578 23.83 23.83 0 0 0 1.363-3.578l.133.468.473.12C21.982 8.746 24 10.255 24 11.996s-2.018 3.25-5.536 4.139l-.471.12z"/>
      </svg>
    ),
  },
  {
    id: 'shopify',
    name: 'Shopify',
    x: 64, y: 10,
    color: '#96bf48',
    bg: '#0d1f10',
    ring: '#96bf48',
    description: 'Expert in custom theme development, Liquid scripting, store setup, product configurations, and app integrations.',
    icon: (
      <svg viewBox="0 0 109.5 124.5" className="w-7 h-7">
        <path fill="#96bf48" d="M74.7 14.8s-.3 0-.7.2l-.1.1c-.5-1.4-1.3-2.6-2.5-3.6-3.1-2.7-7.7-3.8-13-2.9l-1.1.2C55.5 4.5 52.1 0 46 0c-3.7 0-6.7 1.8-8.9 4.8L32.9 4c-.1 0-4.8-.1-4.9 0-.3 0-.5.1-.7.3l-2.9 9.6C22.2 13.5 0 19.4 0 19.4v105.1h109.5V29.8s-34.6-14.9-34.8-15zm-21.1 5.8c.1-.4.2-.7.4-1.1 1.2 .4 2.5.9 3.7 1.7-2.2.7-4.1 1.2-5.7 1.6l-.2-.1c.5-.7 1.1-1.4 1.8-2.1zm-10.7-16c3.7 0 6.3 2.9 7.3 6.2-1.8.6-3.5 1.3-5.2 2-.4.2-.8.4-1.2.5l-.4.2c-1.2-2.4-3.5-4.7-6.4-6.2 1.6-1.7 3.5-2.7 5.9-2.7zm-5 5c3.1 1.4 5.6 3.9 6.7 6.8-2.2.9-4.4 1.8-6.7 2.7V8.6zm-3.7 7.6l-5.7 1.8 1.3-4.3c1.5.7 3 1.6 4.4 2.5zm56.1 7.3L57.6 11.2c-.2-1.1-.2-2.1-.2-2.1s.2 0 .6.1l31.3 13.5-1 3.7z"/>
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    x: 42, y: 33,
    color: '#f05032',
    bg: '#200a06',
    ring: '#f05032',
    description: 'Version control expertise: branching strategies, pull requests, merge conflict resolution, and collaborative Git workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f05032" className="w-7 h-7">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    x: 63, y: 36,
    color: '#ffffff',
    bg: '#161b22',
    ring: '#ffffff',
    description: 'Managing repositories, code reviews, issues, GitHub Actions CI/CD, and open source contributions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-7 h-7">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    id: 'json',
    name: 'JSON / API',
    x: 80, y: 24,
    color: '#7dd3fc',
    bg: '#0c1926',
    ring: '#7dd3fc',
    description: 'Working with REST APIs, JSON data structures, response parsing, and integrating third-party API services.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <text x="2" y="17" fontSize="14" fontWeight="bold" fill="#7dd3fc" fontFamily="monospace">{'{ }'}</text>
      </svg>
    ),
  },
  {
    id: 'css3',
    name: 'CSS3',
    x: 17, y: 46,
    color: '#264de4',
    bg: '#0c1130',
    ring: '#264de4',
    description: 'Fluid layout design using Tailwind CSS, modern Grid/Flexbox, custom keyframe animations, and responsive styling.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#264de4" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    x: 33, y: 47,
    color: '#00c4cc',
    bg: '#001e1f',
    ring: '#00c4cc',
    description: 'Designing marketing banners, pitch slides, social graphics, product thumbnails, and custom store visual assets.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#00c4cc" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm3.84-12.48c0-.84-.66-1.44-1.5-1.44-.6 0-1.08.3-1.38.78-.54-.66-1.38-1.08-2.34-1.08-1.74 0-3.06 1.32-3.06 3.12 0 1.38.78 2.52 1.92 3.06-.18.42-.42.78-.72 1.02-.42.36-.42.96-.06 1.38.18.24.48.36.78.36.18 0 .36-.06.54-.18.54-.42 1.02-1.02 1.32-1.68.3.06.6.12.9.12 1.8 0 3.12-1.38 3.12-3.18 0-.12 0-.24-.06-.36.36-.36.54-.84.54-1.38zm-5.22 3.66c-.72 0-1.32-.6-1.32-1.56 0-.9.6-1.56 1.32-1.56.72 0 1.32.66 1.32 1.56 0 .96-.6 1.56-1.32 1.56z"/>
      </svg>
    ),
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    x: 80, y: 52,
    color: '#21759b',
    bg: '#0d1a25',
    ring: '#21759b',
    description: 'Proficient in WooCommerce, customized themes, landing pages, and stable content management systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#21759b" className="w-7 h-7">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.152 12c0-1.564.353-3.044.975-4.367L7.6 17.851C5.033 16.63 3.152 14.524 3.152 12zm8.848 8.848c-1.063 0-2.09-.155-3.056-.44l3.245-9.43 3.322 9.1c.02.054.046.103.073.15a8.87 8.87 0 0 1-3.584.62zm1.536-16.34c.67-.036 1.274-.107 1.274-.107.6-.071.53-.953-.071-.917 0 0-1.802.142-2.966.142-1.094 0-2.929-.142-2.929-.142-.6-.036-.672.882-.07.917 0 0 .565.07 1.165.107l1.73 4.736-2.43 7.285-4.044-12.02c.67-.036 1.274-.107 1.274-.107.6-.071.53-.953-.07-.917 0 0-1.802.142-2.966.142a13.1 13.1 0 0 1-.47-.01A8.854 8.854 0 0 1 12 3.152c2.33 0 4.45.893 6.042 2.348-.038-.002-.077-.007-.116-.007-1.093 0-1.87.953-1.87 1.976 0 .918.53 1.694 1.094 2.612.424.741.919 1.694.919 3.07 0 .953-.366 2.06-.847 3.601l-1.11 3.706-4.576-13.85zM19.5 8.038l.003.09c0 1.765-.33 3.745-1.323 6.222l-3.352-9.69c.56.087 1.065.275 1.52.555.993.595 1.87 1.694 2.424 2.753.468.97.73 1.99.728 3.07z"/>
      </svg>
    ),
  },
  {
    id: 'vscode',
    name: 'VS Code',
    x: 55, y: 62,
    color: '#007acc',
    bg: '#0d1a2b',
    ring: '#007acc',
    description: 'Expert use of VS Code extensions, snippets, debugging tools, and integrated terminal for seamless development.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#007acc" className="w-7 h-7">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    x: 74, y: 68,
    color: '#7f54b3',
    bg: '#180e2a',
    ring: '#7f54b3',
    description: 'Full WooCommerce store setup, payment gateways, shipping rules, and custom product page layouts for e-commerce.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#7f54b3" d="M23.72 5.418H.28C.126 5.418 0 5.544 0 5.698v12.604c0 .154.126.28.28.28h23.44c.154 0 .28-.126.28-.28V5.698c0-.154-.126-.28-.28-.28zm-1.116 6.193l-1.72 2.31a.56.56 0 0 1-.842.056l-1.148-1.148-1.148 1.148a.557.557 0 0 1-.842-.056l-1.72-2.31v3.922c0 .31-.251.56-.56.56H4.502a.56.56 0 0 1-.56-.56V7.886c0-.31.251-.56.56-.56h4.334c.31 0 .56.25.56.56v3.332l.756-1.19a.559.559 0 0 1 .952 0l1.19 1.874 1.19-1.874a.559.559 0 0 1 .952 0l.757 1.19V7.886c0-.31.25-.56.56-.56h3.5c.31 0 .56.25.56.56v5.647l.756-1.19a.559.559 0 0 1 .952 0l.756 1.19V7.886c0-.31.251-.56.56-.56h.421c.31 0 .56.25.56.56v6.274c0 .31-.25.56-.56.56h-1.12a.558.558 0 0 1-.46-.239z"/>
      </svg>
    ),
  },
  {
    id: 'postman',
    name: 'Postman',
    x: 46, y: 72,
    color: '#ef5b25',
    bg: '#2a0e05',
    ring: '#ef5b25',
    description: 'API testing, collection management, environment variables, and automated testing workflows using Postman.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#ef5b25" className="w-7 h-7">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.584-3.8 13.428-10.373C24.744 6.955 20.1.942 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.858.858 0 1 0-1.215-1.215l-4.453 4.453-.308-.308 4.453-4.452a1.786 1.786 0 0 1 2.527 0c.346.346.537.808.537 1.296s-.19.95-.537 1.296l-.009-.37zM6.723 13.8l.645.644-1.289 1.289-.644-.644zm6.868 1.9c.346.346.537.808.537 1.296s-.19.95-.537 1.296a1.786 1.786 0 0 1-2.527 0l-4.453-4.453.308-.308 4.453 4.453a.858.858 0 0 0 1.215-1.215L8.134 13.12l.308-.307 4.453 4.453c.346.346.537.808.537 1.296z"/>
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL',
    x: 27, y: 80,
    color: '#00758f',
    bg: '#051618',
    ring: '#00758f',
    description: 'Relational database design, complex query writing, stored procedures, and performance optimization for web apps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#00758f" className="w-7 h-7">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.133-.04-.04-.172-.05-.18-.159zm5.947 2.405c-.048-.1-.102-.201-.17-.285-.048-.073-.11-.154-.17-.214-.172-.172-.346-.346-.517-.517-.065-.065-.11-.133-.172-.201-.029-.031-.063-.063-.1-.09-.031-.02-.077-.04-.121-.04-.224 0-.547.314-.768.45l-1.086.637c-.182.107-.39.16-.593.16H17.3l.011.012c.073.108.15.213.229.317.16.217.335.428.508.635l.077.087c.074.086.14.18.214.269l.012.014c.129.158.25.323.387.476.131.146.252.3.394.437.042.04.093.076.139.116a.75.75 0 0 0 .09.066c.132.079.263.16.392.242.107.066.214.133.323.198.112.068.229.135.345.2.12.066.243.128.367.19.128.064.257.123.388.183.13.059.26.116.392.17.128.054.257.104.388.152.13.05.26.096.39.14.132.043.266.083.398.12.136.036.272.07.41.1.14.03.282.058.423.082.144.024.29.044.435.06.15.016.3.029.452.038.154.009.31.014.465.016.157.002.314.002.47-.001.11-.002.22-.006.33-.012.11-.006.22-.014.33-.024.108-.01.217-.022.325-.037.107-.015.214-.033.32-.053.107-.021.214-.044.32-.069.108-.026.215-.055.322-.086.108-.032.216-.066.323-.102.107-.037.213-.076.319-.117.108-.042.213-.087.317-.133.107-.047.212-.096.316-.147.106-.052.211-.106.315-.162.105-.057.208-.115.31-.176.104-.062.207-.125.308-.19.103-.066.204-.133.304-.203.101-.07.201-.143.3-.217.1-.075.197-.152.295-.23.098-.08.194-.16.29-.243.097-.083.192-.167.287-.253.095-.087.189-.176.283-.265.094-.09.187-.182.28-.274.093-.092.185-.186.277-.281.092-.096.183-.192.273-.29.091-.098.181-.197.27-.298.09-.1.18-.202.268-.304.088-.103.176-.207.263-.312.087-.105.173-.21.259-.317.086-.107.171-.214.256-.323.085-.108.169-.217.252-.327.083-.11.165-.221.247-.333.082-.112.163-.225.243-.339.08-.114.16-.228.238-.343.078-.115.156-.231.233-.348.077-.117.153-.235.229-.354.075-.118.15-.237.224-.357.074-.12.147-.24.22-.361.072-.122.144-.244.215-.367.07-.123.14-.246.21-.37.07-.123.138-.247.206-.372.068-.125.136-.25.203-.376.067-.126.133-.252.199-.379.065-.127.13-.255.194-.383.064-.129.128-.258.191-.388.063-.13.125-.26.187-.391.062-.132.123-.264.184-.396.06-.133.12-.267.18-.401.059-.135.117-.27.175-.406.058-.137.115-.274.172-.412.056-.138.112-.277.167-.416.055-.14.11-.28.164-.42.053-.14.106-.281.159-.423.052-.142.103-.284.154-.427.05-.144.1-.288.149-.432.049-.145.097-.29.145-.436.048-.146.095-.293.141-.44.046-.148.091-.296.136-.445.044-.15.088-.3.131-.45.043-.151.085-.302.127-.453.041-.152.082-.304.122-.457.04-.153.079-.307.118-.46.038-.154.076-.308.113-.462.037-.155.073-.31.109-.465.036-.156.071-.312.105-.468.034-.157.068-.314.101-.471.033-.158.065-.316.097-.474.031-.159.062-.318.092-.477.03-.16.059-.32.088-.48.029-.16.057-.321.085-.481.027-.161.054-.322.08-.483.027-.162.053-.324.078-.486.025-.163.049-.326.073-.489.024-.164.047-.328.07-.492.022-.165.044-.33.065-.495.021-.166.041-.332.061-.498.02-.166.039-.332.058-.498.018-.167.036-.334.054-.5.017-.168.034-.336.05-.504.016-.168.032-.337.047-.505.015-.169.029-.338.043-.507.014-.169.027-.339.04-.508.013-.17.025-.34.037-.51.012-.17.023-.34.034-.51.011-.171.021-.342.031-.513.01-.171.019-.342.028-.513.009-.172.017-.344.025-.516.008-.172.015-.344.022-.516.007-.173.013-.346.019-.519.006-.173.011-.346.016-.519.005-.174.009-.348.013-.522.004-.174.007-.348.01-.522.003-.175.005-.35.007-.525.002-.175.003-.35.004-.525.001-.176.001-.352.001-.528v-.264C23.28 3.4 22.52 2.4 21.52 2.4h-.024c-.816.003-1.575.376-2.12.99-.185-.042-.37-.079-.557-.11L16.405 5.5z"/>
      </svg>
    ),
  },
  {
    id: 'supabase',
    name: 'Supabase',
    x: 58, y: 85,
    color: '#3ecf8e',
    bg: '#0a2218',
    ring: '#3ecf8e',
    description: 'Backend database management, real-time data sync, authentication flows, and serverless API creation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="#3ecf8e" className="w-7 h-7">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.33 12.606.73 13.5 1.424 13.5h9.255a.75.75 0 0 1 .75.75l-.245 8.714c.015.986 1.26 1.41 1.874.637l9.262-11.653c.434-.556.034-1.45-.66-1.45h-9.255a.75.75 0 0 1-.75-.75l.245-8.712z"/>
      </svg>
    ),
  },
  {
    id: 'html5',
    name: 'HTML5',
    x: 16, y: 65,
    color: '#e34c26',
    bg: '#200b05',
    ring: '#e34c26',
    description: 'Deep understanding of semantic markup, accessibility standards, SEO-friendly structure, and optimized web page schemas.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#e34c26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    x: 48, y: 48, // center is at 48,48 -- we'll skip this as center is code
    color: '#a259ff',
    bg: '#1a0f2e',
    ring: '#a259ff',
    description: 'UI design systems, wireframing, prototyping user flows, and exporting design assets for development handoff.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="#1abcfe" d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
        <path fill="#0acf83" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z"/>
        <path fill="#ff7262" d="M12 0v8h4a4 4 0 0 0 0-8h-4z"/>
        <path fill="#f24e1e" d="M4 4a4 4 0 0 0 0 8h4V4H4z"/>
        <path fill="#a259ff" d="M4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/>
      </svg>
    ),
  },
]

/* Edges — pairs of ids to draw lines between */
const EDGES = [
  ['javascript', 'react'],
  ['javascript', 'git'],
  ['javascript', 'css3'],
  ['react', 'shopify'],
  ['react', 'git'],
  ['shopify', 'woocommerce'],
  ['shopify', 'github'],
  ['git', 'github'],
  ['git', 'canva'],
  ['github', 'json'],
  ['github', 'wordpress'],
  ['css3', 'html5'],
  ['css3', 'canva'],
  ['canva', 'postman'],
  ['canva', 'figma'],
  ['figma', 'vscode'],
  ['vscode', 'postman'],
  ['vscode', 'supabase'],
  ['wordpress', 'vscode'],
  ['wordpress', 'woocommerce'],
  ['postman', 'mysql'],
  ['mysql', 'supabase'],
  ['html5', 'mysql'],
  ['json', 'woocommerce'],
]

/* canvas size */
const W = 480
const H = 500

/* convert % to px */
const px = (pct, total) => (pct / 100) * total

export default function Skills() {
  const sectionRef = useRef(null)
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

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

  /* Center node */
  const CENTER_X = 48
  const CENTER_Y = 46

  const skillMap = Object.fromEntries(SKILLS.map(s => [s.id, s]))

  const active = hovered || selected

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes edgePulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.35; }
        }
        .skill-edge { animation: edgePulse 3.5s ease-in-out infinite; }
        .skill-edge-active { animation: none; opacity: 0.6; }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-6 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-blue-400" />
            Skills Graph
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="fade-in flex flex-col items-center gap-6">

          {/* Graph canvas */}
          <div
            className="relative"
            style={{ width: W, height: H, maxWidth: '100%', maxHeight: '90vw' }}
          >
            {/* SVG edge lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
            >
              {/* Edges from center node to nearby skills */}
              {SKILLS.slice(0, 6).map(skill => (
                <line
                  key={`center-${skill.id}`}
                  x1={px(CENTER_X, W)}
                  y1={px(CENTER_Y, H)}
                  x2={px(skill.x, W)}
                  y2={px(skill.y, H)}
                  stroke="#8b5cf6"
                  strokeWidth="1"
                  className={active?.id === skill.id ? 'skill-edge-active' : 'skill-edge'}
                />
              ))}
              {/* Skill-to-skill edges */}
              {EDGES.map(([a, b], i) => {
                const sa = skillMap[a]
                const sb = skillMap[b]
                if (!sa || !sb) return null
                const isActive = active?.id === a || active?.id === b
                return (
                  <line
                    key={i}
                    x1={px(sa.x, W)} y1={px(sa.y, H)}
                    x2={px(sb.x, W)} y2={px(sb.y, H)}
                    stroke={isActive ? active.color : '#4b5563'}
                    strokeWidth={isActive ? '1.5' : '1'}
                    className={isActive ? 'skill-edge-active' : 'skill-edge'}
                    strokeOpacity={isActive ? '0.6' : '0.2'}
                  />
                )
              })}
            </svg>

            {/* Center code node */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${CENTER_X}%`, top: `${CENTER_Y}%` }}
            >
              {/* Purple glow */}
              <div
                className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: 120, height: 120,
                  left: '50%', top: '50%',
                  background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(109,40,217,0.15) 60%, transparent 80%)',
                }}
              />
              <div
                className="w-[68px] h-[68px] rounded-full flex items-center justify-center font-mono font-black text-purple-300 text-base z-10 relative"
                style={{
                  background: 'radial-gradient(circle at 40% 35%, #2d1b5e, #100920)',
                  boxShadow: '0 0 0 2px rgba(139,92,246,0.5), 0 0 30px rgba(139,92,246,0.5)',
                }}
              >
                {'</>'}
              </div>
            </div>

            {/* Skill nodes */}
            {SKILLS.map((skill) => {
              const isActive = active?.id === skill.id
              const isSelected = selected?.id === skill.id
              return (
                <button
                  key={skill.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none group"
                  style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                  onMouseEnter={() => setHovered(skill)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(isSelected ? null : skill)}
                  title={skill.name}
                >
                  {/* Label above on hover/select */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap transition-all duration-200 pointer-events-none ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                  >
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg text-white shadow-lg"
                      style={{ background: '#1a1f35', border: `1px solid ${skill.ring}55` }}
                    >
                      {skill.name}
                    </span>
                  </div>

                  {/* Icon bubble */}
                  <div
                    className="transition-all duration-300 rounded-full flex items-center justify-center"
                    style={{
                      width: isActive ? 64 : 52,
                      height: isActive ? 64 : 52,
                      background: skill.bg,
                      boxShadow: isActive
                        ? `0 0 0 2.5px ${skill.ring}, 0 0 20px ${skill.ring}66`
                        : `0 0 0 1.5px ${skill.ring}30, 0 0 6px ${skill.ring}20`,
                    }}
                  >
                    {skill.icon}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="w-full max-w-md px-4">
            {active ? (
              <div
                className="bg-[#0d1426] rounded-2xl p-5 transition-all duration-300 shadow-xl relative overflow-hidden"
                style={{ border: `1px solid ${active.color}30` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: active.color }} />
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: active.bg, boxShadow: `0 0 0 1.5px ${active.ring}55` }}
                  >
                    {active.icon}
                  </div>
                  <h4 className="text-white font-bold text-base">{active.name}</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{active.description}</p>
              </div>
            ) : (
              <div className="bg-[#0d1426] border border-white/5 rounded-2xl p-5 text-center text-slate-500 text-sm shadow-md">
                Hover or tap any skill icon to explore details
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
