import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  BookOpen, Circle, PlayCircle, ChevronRight, Menu, X
} from 'lucide-react';
import { SYLLABUS } from './data';
import { Lesson1Content, Lesson2Content, Lesson3Content, Lesson4Content } from './components/Lessons1to4';
import { Lesson5Content, Lesson6Content, Lesson7Content, Lesson8Content } from './components/Lessons5to8';
import { Lesson9Content, Lesson10Content, Lesson11Content, Lesson12Content, Lesson13Content } from './components/Lessons9to13';
import { Lesson14Content, Lesson15Content, Lesson16Content, Lesson17Content } from './components/Lessons14to17';
import { Lesson18Content, Lesson19Content, Lesson20Content } from './components/Lessons18to20';
import { Lesson21Content, Lesson22Content, Lesson23Content, Lesson24Content, Lesson25Content, Lesson26Content, Lesson27Content } from './components/Lessons21to27';
import { Lesson28Content, Lesson29Content, Lesson30Content } from './components/Lessons28to30';
import { Lesson31Content, Lesson32Content, Lesson33Content, Lesson34Content } from './components/Lessons31to34';
import { Lesson35Content, Lesson36Content, Lesson37Content, Lesson38Content } from './components/Lessons35to38';
import { Lesson39Content, Lesson40Content, Lesson41Content, Lesson42Content } from './components/Lessons39to42';
import { Lesson43Content, Lesson44Content, Lesson45Content, Lesson46Content, Lesson47Content } from './components/Lessons43to47';
import { Lesson48Content, Lesson49Content, Lesson50Content, Lesson51Content } from './components/Lessons48to51';
import { Lesson52Content, Lesson53Content, Lesson54Content, Lesson55Content } from './components/Lessons52to55';
import { Lesson56Content, Lesson57Content, Lesson58Content } from './components/Lessons56to58';

const LESSON_COMPONENTS: Record<string, React.ComponentType> = {
  l1: Lesson1Content,
  l2: Lesson2Content,
  l3: Lesson3Content,
  l4: Lesson4Content,
  l5: Lesson5Content,
  l6: Lesson6Content,
  l7: Lesson7Content,
  l8: Lesson8Content,
  l9: Lesson9Content,
  l10: Lesson10Content,
  l11: Lesson11Content,
  l12: Lesson12Content,
  l13: Lesson13Content,
  l14: Lesson14Content,
  l15: Lesson15Content,
  l16: Lesson16Content,
  l17: Lesson17Content,
  l18: Lesson18Content,
  l19: Lesson19Content,
  l20: Lesson20Content,
  l21: Lesson21Content,
  l22: Lesson22Content,
  l23: Lesson23Content,
  l24: Lesson24Content,
  l25: Lesson25Content,
  l26: Lesson26Content,
  l27: Lesson27Content,
  l28: Lesson28Content,
  l29: Lesson29Content,
  l30: Lesson30Content,
  l31: Lesson31Content,
  l32: Lesson32Content,
  l33: Lesson33Content,
  l34: Lesson34Content,
  l35: Lesson35Content,
  l36: Lesson36Content,
  l37: Lesson37Content,
  l38: Lesson38Content,
  l39: Lesson39Content,
  l40: Lesson40Content,
  l41: Lesson41Content,
  l42: Lesson42Content,
  l43: Lesson43Content,
  l44: Lesson44Content,
  l45: Lesson45Content,
  l46: Lesson46Content,
  l47: Lesson47Content,
  l48: Lesson48Content,
  l49: Lesson49Content,
  l50: Lesson50Content,
  l51: Lesson51Content,
  l52: Lesson52Content,
  l53: Lesson53Content,
  l54: Lesson54Content,
  l55: Lesson55Content,
  l56: Lesson56Content,
  l57: Lesson57Content,
  l58: Lesson58Content,
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

  const lessonMap = useMemo(() => {
    const map: Record<string, string> = {};
    SYLLABUS.forEach(p => p.chapters.forEach(c => c.lessons.forEach(l => { map[l.id] = l.title; })));
    return map;
  }, []);

  const lessonTitle = lessonMap[activeLesson] ?? '';

  const handleLessonSelect = (id: string, isAvailable: boolean) => {
    if (!isAvailable) return;
    setActiveLesson(id);
    if (isMobile) setIsSidebarOpen(false);
    if (mainScrollRef.current) mainScrollRef.current.scrollTop = 0;
  };

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

            {ActiveLesson ? (
              <ActiveLesson />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <BookOpen size={48} className="mb-4 text-gray-300" />
                <p>Nội dung bài học đang được biên soạn...</p>
              </div>
            )}

            {/* Footer Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
                Hoàn thành bài học
              </button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;
