import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import {
  BookOpen, Circle, PlayCircle, ChevronRight, ChevronRight as NextIcon, Menu, X, CheckCircle
} from 'lucide-react';
import { SYLLABUS } from './data';

// Eager-load first 4 lessons for instant first paint
import { Lesson1Content, Lesson2Content, Lesson3Content, Lesson4Content } from './components/Lessons1to4';

// Lazy-load remaining lesson groups — downloaded only when needed
const lazy = <T extends Record<string, React.ComponentType>>(
  loader: () => Promise<T>,
  keys: (keyof T)[]
): Record<string, React.LazyExoticComponent<React.ComponentType>> =>
  Object.fromEntries(
    keys.map(k => [k, React.lazy(() => loader().then(m => ({ default: m[k] as React.ComponentType })))])
  );

const LAZY_COMPONENTS = {
  ...lazy(() => import('./components/Lessons5to8'), ['Lesson5Content', 'Lesson6Content', 'Lesson7Content', 'Lesson8Content']),
  ...lazy(() => import('./components/Lessons9to13'), ['Lesson9Content', 'Lesson10Content', 'Lesson11Content', 'Lesson12Content', 'Lesson13Content']),
  ...lazy(() => import('./components/Lessons14to17'), ['Lesson14Content', 'Lesson15Content', 'Lesson16Content', 'Lesson17Content']),
  ...lazy(() => import('./components/Lessons18to20'), ['Lesson18Content', 'Lesson19Content', 'Lesson20Content']),
  ...lazy(() => import('./components/Lessons21to27'), ['Lesson21Content', 'Lesson22Content', 'Lesson23Content', 'Lesson24Content', 'Lesson25Content', 'Lesson26Content', 'Lesson27Content']),
  ...lazy(() => import('./components/Lessons28to30'), ['Lesson28Content', 'Lesson29Content', 'Lesson30Content']),
  ...lazy(() => import('./components/Lessons31to34'), ['Lesson31Content', 'Lesson32Content', 'Lesson33Content', 'Lesson34Content']),
  ...lazy(() => import('./components/Lessons35to38'), ['Lesson35Content', 'Lesson36Content', 'Lesson37Content', 'Lesson38Content']),
  ...lazy(() => import('./components/Lessons39to42'), ['Lesson39Content', 'Lesson40Content', 'Lesson41Content', 'Lesson42Content']),
  ...lazy(() => import('./components/Lessons43to47'), ['Lesson43Content', 'Lesson44Content', 'Lesson45Content', 'Lesson46Content', 'Lesson47Content']),
  ...lazy(() => import('./components/Lessons48to51'), ['Lesson48Content', 'Lesson49Content', 'Lesson50Content', 'Lesson51Content']),
  ...lazy(() => import('./components/Lessons52to55'), ['Lesson52Content', 'Lesson53Content', 'Lesson54Content', 'Lesson55Content']),
  ...lazy(() => import('./components/Lessons56to58'), ['Lesson56Content', 'Lesson57Content', 'Lesson58Content']),
};

const LESSON_COMPONENTS: Record<string, React.ComponentType> = {
  l1: Lesson1Content,
  l2: Lesson2Content,
  l3: Lesson3Content,
  l4: Lesson4Content,
  l5: LAZY_COMPONENTS['Lesson5Content'],
  l6: LAZY_COMPONENTS['Lesson6Content'],
  l7: LAZY_COMPONENTS['Lesson7Content'],
  l8: LAZY_COMPONENTS['Lesson8Content'],
  l9: LAZY_COMPONENTS['Lesson9Content'],
  l10: LAZY_COMPONENTS['Lesson10Content'],
  l11: LAZY_COMPONENTS['Lesson11Content'],
  l12: LAZY_COMPONENTS['Lesson12Content'],
  l13: LAZY_COMPONENTS['Lesson13Content'],
  l14: LAZY_COMPONENTS['Lesson14Content'],
  l15: LAZY_COMPONENTS['Lesson15Content'],
  l16: LAZY_COMPONENTS['Lesson16Content'],
  l17: LAZY_COMPONENTS['Lesson17Content'],
  l18: LAZY_COMPONENTS['Lesson18Content'],
  l19: LAZY_COMPONENTS['Lesson19Content'],
  l20: LAZY_COMPONENTS['Lesson20Content'],
  l21: LAZY_COMPONENTS['Lesson21Content'],
  l22: LAZY_COMPONENTS['Lesson22Content'],
  l23: LAZY_COMPONENTS['Lesson23Content'],
  l24: LAZY_COMPONENTS['Lesson24Content'],
  l25: LAZY_COMPONENTS['Lesson25Content'],
  l26: LAZY_COMPONENTS['Lesson26Content'],
  l27: LAZY_COMPONENTS['Lesson27Content'],
  l28: LAZY_COMPONENTS['Lesson28Content'],
  l29: LAZY_COMPONENTS['Lesson29Content'],
  l30: LAZY_COMPONENTS['Lesson30Content'],
  l31: LAZY_COMPONENTS['Lesson31Content'],
  l32: LAZY_COMPONENTS['Lesson32Content'],
  l33: LAZY_COMPONENTS['Lesson33Content'],
  l34: LAZY_COMPONENTS['Lesson34Content'],
  l35: LAZY_COMPONENTS['Lesson35Content'],
  l36: LAZY_COMPONENTS['Lesson36Content'],
  l37: LAZY_COMPONENTS['Lesson37Content'],
  l38: LAZY_COMPONENTS['Lesson38Content'],
  l39: LAZY_COMPONENTS['Lesson39Content'],
  l40: LAZY_COMPONENTS['Lesson40Content'],
  l41: LAZY_COMPONENTS['Lesson41Content'],
  l42: LAZY_COMPONENTS['Lesson42Content'],
  l43: LAZY_COMPONENTS['Lesson43Content'],
  l44: LAZY_COMPONENTS['Lesson44Content'],
  l45: LAZY_COMPONENTS['Lesson45Content'],
  l46: LAZY_COMPONENTS['Lesson46Content'],
  l47: LAZY_COMPONENTS['Lesson47Content'],
  l48: LAZY_COMPONENTS['Lesson48Content'],
  l49: LAZY_COMPONENTS['Lesson49Content'],
  l50: LAZY_COMPONENTS['Lesson50Content'],
  l51: LAZY_COMPONENTS['Lesson51Content'],
  l52: LAZY_COMPONENTS['Lesson52Content'],
  l53: LAZY_COMPONENTS['Lesson53Content'],
  l54: LAZY_COMPONENTS['Lesson54Content'],
  l55: LAZY_COMPONENTS['Lesson55Content'],
  l56: LAZY_COMPONENTS['Lesson56Content'],
  l57: LAZY_COMPONENTS['Lesson57Content'],
  l58: LAZY_COMPONENTS['Lesson58Content'],
};

const App = () => {
  const [activeLesson, setActiveLesson] = useState('l1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mainScrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { lessonMap, availableLessonIds } = useMemo(() => {
    const map: Record<string, string> = {};
    const ids: string[] = [];
    SYLLABUS.forEach(p => p.chapters.forEach(c => c.lessons.forEach(l => {
      map[l.id] = l.title;
      if (l.isAvailable) ids.push(l.id);
    })));
    return { lessonMap: map, availableLessonIds: ids };
  }, []);

  const lessonTitle = lessonMap[activeLesson] ?? '';

  const handleLessonSelect = (id: string, isAvailable: boolean) => {
    if (!isAvailable) return;
    setActiveLesson(id);
    if (isMobile) setIsSidebarOpen(false);
    if (mainScrollRef.current) mainScrollRef.current.scrollTop = 0;
  };

  const handleNextLesson = () => {
    const idx = availableLessonIds.indexOf(activeLesson);
    if (idx >= 0 && idx < availableLessonIds.length - 1) {
      handleLessonSelect(availableLessonIds[idx + 1], true);
    }
  };

  const isLastLesson = availableLessonIds[availableLessonIds.length - 1] === activeLesson;

  const ActiveLesson = LESSON_COMPONENTS[activeLesson];

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">

      {/* Mobile Overlay */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar LMS */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-0'}`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="p-4 border-b border-gray-200 bg-blue-600 text-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="font-black text-lg m-0">Google Ads Mastery</h1>
            <p className="text-xs text-blue-100 m-0 mt-1">Lộ trình từ Zero đến Junior</p>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Đóng menu"
            tabIndex={isSidebarOpen ? 0 : -1}
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-3 space-y-4">
          {SYLLABUS.map((phase) => (
            <div key={phase.id} className="mb-4">
              <div className="text-xs font-bold text-gray-400 mb-2 px-2 uppercase tracking-wider">
                {phase.title} • {phase.duration}
              </div>

              {phase.chapters.map((chap) => (
                <div key={chap.id} className="mb-2">
                  <div className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-2 rounded-md mb-1">
                    {chap.title}
                  </div>
                  <div className="space-y-1 pl-2 border-l-2 border-gray-100 ml-3">
                    {chap.lessons.map(lesson => (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonSelect(lesson.id, lesson.isAvailable)}
                        disabled={!lesson.isAvailable}
                        tabIndex={isSidebarOpen ? 0 : -1}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-start gap-2 ${
                          activeLesson === lesson.id
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : lesson.isAvailable
                              ? 'text-gray-600 hover:bg-gray-50'
                              : 'text-gray-400 cursor-not-allowed opacity-60'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {lesson.isAvailable ? (
                            activeLesson === lesson.id
                              ? <PlayCircle size={16} className="text-blue-500" />
                              : <Circle size={16} />
                          ) : (
                            <div className="w-4 h-4 flex items-center justify-center">🔒</div>
                          )}
                        </div>
                        <span className="leading-snug">{lesson.title}</span>
                      </button>
                    ))}
                    {chap.lessons.length === 0 && (
                      <div className="text-xs text-gray-400 italic px-3 py-1">Đang cập nhật...</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">

        {/* Header */}
        <header className="h-14 border-b border-gray-200 bg-white flex items-center px-4 shrink-0 shadow-sm z-10">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="mr-3 p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
              aria-label="Mở menu"
            >
              <Menu size={20} />
            </button>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium truncate">
            <span>Lộ trình học</span>
            <ChevronRight size={14} />
            <span className="text-blue-600 truncate">{lessonTitle}</span>
          </div>
        </header>

        {/* Scrollable Lesson Area */}
        <main ref={mainScrollRef} className="flex-1 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto p-4 md:p-8 lg:py-12 pb-24">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
              {lessonTitle}
            </h2>

            <Suspense fallback={
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-sm">Đang tải bài học...</p>
              </div>
            }>
              {ActiveLesson ? (
                <ActiveLesson />
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <BookOpen size={48} className="mb-4 text-gray-300" />
                  <p>Nội dung bài học đang được biên soạn...</p>
                </div>
              )}
            </Suspense>

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex justify-end">
              {isLastLesson ? (
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <CheckCircle size={20} />
                  <span>Bạn đã hoàn thành toàn bộ khóa học!</span>
                </div>
              ) : (
                <button
                  onClick={handleNextLesson}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
                >
                  Hoàn thành & Bài tiếp theo
                  <NextIcon size={16} />
                </button>
              )}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;
