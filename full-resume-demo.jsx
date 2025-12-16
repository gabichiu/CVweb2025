import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function FullResumeSite() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen text-slate-900">
      {/* Header */}
      <header className="bg-white border-b-2 border-blue-500 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">邱詩家</h1>
              <p className="text-blue-600 font-semibold mt-1">Product Manager | Project Manager | Enterprise Web Architect</p>
              <p className="text-sm text-slate-600 mt-2">
                網站專案管理師 / 產品企劃 | 朝 PM 與資料產品領域前進
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right text-sm">
              <a href="tel:0970228652" className="flex items-center justify-end gap-2 text-slate-700 hover:text-blue-600">
                <Phone size={16} /> 0970-228-652
              </a>
              <a href="mailto:antpower.56fk@gmail.com" className="flex items-center justify-end gap-2 text-slate-700 hover:text-blue-600">
                <Mail size={16} /> antpower.56fk@gmail.com
              </a>
              <a href="https://gabichiu.git..." className="flex items-center justify-end gap-2 text-slate-700 hover:text-blue-600">
                <Globe size={16} /> gabichiu.git...
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* Professional Summary */}
        <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary | 專業摘要</h2>
          <p className="text-slate-700 leading-relaxed text-base">
            具 <span className="font-semibold">4 年以上 B2B 企業網站產品企劃與專案管理經驗</span>，擅長需求訪談、資訊架構設計、跨部門協作與開發規格制定。能在高複雜度、多利害關係人的環境中梳理需求，並以結構化方式將分散的資訊整合為清晰的產品邏輯。具 Pre-sales、流程改善與內容策略經驗，熟悉 SEO 友善架構與可維護 CMS 設計。期待能在資料產品與 B2B 平台領域發揮強項，協助企業提升決策效率。
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Skills | 專業技能</h2>
          
          {/* Product / PM Skills */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-300">
              Product / PM Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Requirement Analysis（需求分析）',
                'Information Architecture & Content Strategy',
                'Product Specification / Wireframing',
                'Cross-functional Collaboration（跨部門協作）',
                'Stakeholder Management（利害關係人管理）',
                'Process Design & Improvement',
                'Backlog / Scope / Timeline Management',
                'Pre-sales & Solution Planning',
                'CMS / SEO / Web Architecture Familiarity'
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">▸</span>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech & Tools */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-green-300">
              Tech & Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'WordPress（架構理解、模組化、後台配置）',
                'HTML / CSS（了解前端切版與可行性）',
                'Figma（Wireframe、IA）',
                'Project tools（Notion / Jira / Asana / Trello）',
                'GA / SEO 基礎架構概念'
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">▸</span>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-purple-300">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Structured Communication',
                'Problem Solving',
                '跨部門溝通/協調',
                '英文（可協作、可閱讀技術資料）'
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">▸</span>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Work Experience | 工作經驗</h2>
          
          {/* Main Job - Fully Expanded */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">專案管理師 / 產品企劃</h3>
                  <p className="text-blue-600 font-semibold mt-1">震豪網路媒體股份有限公司</p>
                  <p className="text-sm text-slate-600 mt-1">2021.02 – 2024.12 (3 年 11 個月)</p>
                </div>
              </div>

              {/* Core Responsibilities */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center pb-2 border-b-2 border-blue-300">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">→</span>
                  核心職責
                </h4>
                <ul className="ml-7 space-y-3">
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><span className="font-semibold">跨部門窗口統籌</span>：擔任 3 個大型企業網站改版的 PM，與研發、設計、行銷等部門協作，整合分散的需求與意見</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><span className="font-semibold">需求訪談與分析</span>：進行深度客戶訪談，梳理複雜的產品邏輯與技術需求，製作企劃書與功能需求文件</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><span className="font-semibold">資訊架構設計</span>：規劃網站整體結構、頁面階層、內容分類邏輯，確保 SEO 友善且用戶易於導航</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><span className="font-semibold">開發規格制定</span>：與 UI/UX、前端、後端團隊協作，定義 20+ 份產品規格文件與 CMS 架構</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><span className="font-semibold">專案進度管理</span>：管理時間軸、範圍、風險，協調內外部溝通，確保專案按進度交付</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><span className="font-semibold">流程優化與可維護性設計</span>：建立 5 套可維護的 CMS 後台流程，使客戶能自行更新內容</span>
                  </li>
                </ul>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center pb-2 border-b-2 border-green-300">
                  <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">✓</span>
                  主要成果
                </h4>
                <ul className="ml-7 space-y-3">
                  <li className="text-slate-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>完成 <span className="font-semibold">8 份複雜企業網站的 IA 重構</span>，提升內容邏輯一致性與 SEO 友善度，協助客戶梳理產品分類與內容策略</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>建立 <span className="font-semibold">5 套可維護的 CMS 架構與後台流程</span>，使客戶無需 PM 協助即可自行維護內容，降低長期維運依賴</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>制定 <span className="font-semibold">20+ 份產品規格文件</span>，與 UI/UX、前端、後端密切協作，減少開發過程中的需求變更與返工</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>成功統整 <span className="font-semibold">多部門意見與跨國團隊需求</span>，在高複雜度環境中推動 3 個專案順利上線，提升客戶內部溝通效率</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Representative Projects - FULL STAR */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Representative Projects | 代表專案</h2>
          
          <div className="space-y-4">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
              <button
                onClick={() => setExpandedProject(expandedProject === 1 ? null : 1)}
                className="w-full p-8 hover:bg-slate-50 transition-colors flex justify-between items-start"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-900">鈺創科技 Etron</h3>
                  <p className="text-blue-600 font-semibold mt-1">上市櫃 IC Design 官網改版</p>
                  <p className="text-sm text-slate-600 mt-2">
                    <span className="font-semibold">角色：</span>跨部門窗口統籌、需求分析、資訊架構規劃、開發協作
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-slate-400 ml-4 flex-shrink-0 transition-transform ${
                    expandedProject === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedProject === 1 && (
                <div className="border-t border-slate-200 px-8 py-6 bg-slate-50 space-y-6">
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">S - Situation (情境)</h4>
                    <p className="text-slate-700">
                      客戶為上市櫃 IC 設計公司，內部跨部門（研發、產品、行銷、投資人關係等）對網站方向與內容呈現標準各自為政，產品分類複雜、技術文件散落，且不同 TA（投資人、海外客戶、業務／FAE）對內容需求差異極大。
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">T - Task (任務)</h4>
                    <p className="text-slate-700 mb-3">
                      需在有限時程內統整多部門意見、重新架構內容階層，打造能同時支持以下需求的企業網站資訊架構：
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        投資人簡報與財務資訊呈現
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        國際客戶快速理解產品線與技術規格
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        業務／FAE 詢問單更有效被分配與跟進
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">A - Action (行動)</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">跨部門需求訪談與整合：</span>擔任主要窗口，與多位處長及專案成員進行深度訪談，將分散的意見轉化為結構化的產品分類邏輯與內容需求</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">資訊架構重建與 SEO 優化：</span>重新定義產品線分類、技術文件呈現方式、頁面階層，確保 SEO 友善且符合不同 TA 的瀏覽習慣</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">開發協作與 CMS 架構設計：</span>與 UI/UX、前端、後端密切協作，制定完整的規格文件、CMS 架構與後台流程，確保內容可維護且具延展性</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">R - Result (成果)</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">統整分散意見，建立一致性架構：</span>成功將原先各部門各自為政的需求整合為統一的產品分類與內容策略，提升客戶內部溝通效率</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">提升營運效率：</span>新架構讓後續內容維運變得更直覺，業務端能更快速找到產品資料並回應客戶詢問，減少內部協作成本</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">優化用戶體驗：</span>網站整體可讀性提升，內容呈現更符合國際買主與投資人的使用習慣，強化企業專業形象</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
              <button
                onClick={() => setExpandedProject(expandedProject === 2 ? null : 2)}
                className="w-full p-8 hover:bg-slate-50 transition-colors flex justify-between items-start"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-900">中租馬來西亞</h3>
                  <p className="text-blue-600 font-semibold mt-1">跨國金融服務官網建置</p>
                  <p className="text-sm text-slate-600 mt-2">
                    <span className="font-semibold">角色：</span>規格制定、SEO 架構、跨國開發協作
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-slate-400 ml-4 flex-shrink-0 transition-transform ${
                    expandedProject === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedProject === 2 && (
                <div className="border-t border-slate-200 px-8 py-6 bg-slate-50 space-y-6">
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">S - Situation (情境)</h4>
                    <p className="text-slate-700">
                      案子牽涉台灣團隊、馬來西亞當地團隊與客戶端設計部門三方協作。雙方語系資料格式不一致、審核流程複雜，且需兼顧法遵規範、內容安全、SEO 架構等多項要求，溝通與流程管理成為核心難點。
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">T - Task (任務)</h4>
                    <p className="text-slate-700">
                      制定可被雙方團隊理解與遵循的完整規格與內容架構，並協助導入可維護的多語後台流程，確保即使無 PM 協助，客戶也能持續更新與維護內容。
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">A - Action (行動)</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">跨國規格文件制定：</span>提供完整的 IA、內容規格、資料格式標準化文件，使台灣、馬來西亞設計與開發團隊都能依同一標準作業，減少誤解與返工</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">後台流程設計與文件化：</span>建立後台上稿流程、多語資料格式、內容模組化方式的詳細文件與 SOP，使營運人員可無依賴地維護內容</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">跨國需求變更管理：</span>管理雙方團隊的意見差異，協調審核流程，確保法遵規範與內容安全，推動專案順利推進</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">R - Result (成果)</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">成功推出多語、高品質官網：</span>網站具備一致的設計標準、多語內容架構與後台管理系統，兼顧法遵需求與用戶體驗</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">降低長期維護成本：</span>客戶營運人員可在無 PM 協助下自行維護內容與進行多語更新，大幅降低後續維運成本與內部依賴度</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">建立可複用的跨國流程：</span>建立的規格與流程可複用於後續國際專案，為公司長期國際業務開展奠定基礎</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
              <button
                onClick={() => setExpandedProject(expandedProject === 3 ? null : 3)}
                className="w-full p-8 hover:bg-slate-50 transition-colors flex justify-between items-start"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-900">大井泵浦</h3>
                  <p className="text-blue-600 font-semibold mt-1">製造業 B2B 官網重構</p>
                  <p className="text-sm text-slate-600 mt-2">
                    <span className="font-semibold">角色：</span>規格制定、需求管理、SEO 架構規劃、跨部門協作
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-slate-400 ml-4 flex-shrink-0 transition-transform ${
                    expandedProject === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedProject === 3 && (
                <div className="border-t border-slate-200 px-8 py-6 bg-slate-50 space-y-6">
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">S - Situation (情境)</h4>
                    <p className="text-slate-700">
                      原網站資訊架構不利於 SEO，產品資料難以分類；後台維護流程繁雜，使客戶無法順利自行更新資料，導致網站長期內容老舊、影響詢價效率。業務端與技術端對網站改版的期待差異大，需要整合的利害關係複雜。
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">T - Task (任務)</h4>
                    <p className="text-slate-700">
                      重構整體內容邏輯與網站架構，改善前端 UX 與後台維護體驗，並建立更清晰的產品分類與詢價流程，使網站成為銷售助力而非阻力。
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">A - Action (行動)</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">產品邏輯重新梳理：</span>深入訪談業務、技術與客戶，重新定義產品與服務分類邏輯，建立可延展的、SEO 友善的內容架構</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">前端 UX 規劃與設計：</span>與設計團隊協作規劃產品規格頁面 UI/UX，提升使用者在瀏覽產品資訊與比較時的效率</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">詢價流程重設計：</span>建立簡化的詢價機制與表單邏輯，改善業務端接單流程，使客戶更容易提出詢價需求</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">SEO 技術協作：</span>與 SEO 技術團隊協作定義網站結構、資料格式、結構化資料與標記方式，提升搜尋引擎可見度</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <span><span className="font-semibold">後台維護流程優化：</span>簡化後台上架流程、建立清晰的資料架構與操作 SOP，使客戶更容易自行維護產品資訊</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">R - Result (成果)</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">內容易於維護與更新：</span>新架構與後台流程使產品資料更易於維護與更新，內容呈現邏輯更清晰，客戶可自行保持內容最新</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">提升瀏覽體驗：</span>前端瀏覽體驗更順暢，使用者更容易快速找到所需的產品資訊與規格，提升轉化效率</span>
                      </li>
                      <li className="text-slate-700 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span><span className="font-semibold">降低客戶依賴：</span>客戶後續自行維運能力提升，網站不再依賴外部大量支援，降低長期維護成本與溝通成本</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>



        {/* Earlier Experience */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Earlier Experience | 早期經驗</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '專案管理師',
                company: '普拉瑞斯創意整合',
                period: '2016 – 2018',
                desc: '網站企劃、前端協作、客戶溝通、專案管理'
              },
              {
                title: '網頁設計工程師',
                company: '李奧貝納',
                period: '2019',
                desc: '網站企劃、UI 設計、執行網頁改版內容'
              },
              {
                title: '網路行銷業務',
                company: '龍心數位',
                period: '2020',
                desc: '陌生開發、專案進度協調、前端支援'
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-300">
                <h3 className="font-bold text-slate-900">{exp.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{exp.company}</p>
                <p className="text-slate-500 text-xs mt-1">{exp.period}</p>
                <p className="text-slate-700 mt-3 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Languages & Additional Info */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Education & Additional Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-3">Education</h3>
              <p className="text-slate-700 font-semibold">嶺東科技大學</p>
              <p className="text-slate-600 text-sm">資訊管理系</p>
              <p className="text-slate-600 text-xs">2011.09 – 2016.06</p>
            </div>

            {/* Languages */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-3">Languages</h3>
              <p className="text-slate-700 font-semibold">English</p>
              <p className="text-slate-600 text-sm">Daily Conversation & Technical Documentation</p>
              <p className="text-slate-600 text-xs">IELTS 4.5</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-slate-600">
          <p>📄 Optimized for Danone, SaaS, B2B & Data Product Roles</p>
          <p className="mt-2 text-xs text-slate-500">PM Resume Demo | 邱詩家 | 0970-228-652 | antpower.56fk@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
