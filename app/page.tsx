// 'use client';
// import { ChevronRightIcon } from "lucide-react";
// import { useTheme } from 'next-themes';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Switch } from '@/components/ui/switch';
// import { Card } from '@/components/ui/card';
// import { ArrowUp, ArrowDown } from 'lucide-react';
// import { useStore, getUniqueValues, getFilteredChapters, getTrendIndicator } from '@/lib/store';
// import { Rocket, Flask, Calculator } from '@phosphor-icons/react';

// export default function Home() {
//   const { selectedSubject, setSelectedSubject, showWeakChapters, setShowWeakChapters } = useStore();
//   const { classes, units } = getUniqueValues(selectedSubject);
//   const filteredChapters = getFilteredChapters(useStore.getState());

//   return (
//     <div className="flex min-h-screen bg-background">
//       {/* Sidebar */}
//       <div className="w-64 border-r border-border bg-card">
//         <div className="p-4">
//           {/* <h1 className="text-xl font-semibold mb-1">JEE Main</h1> */}
//           <div className="flex items-center justify-center gap-4 w-full">
//             <div className="relative w-6 h-6 [background:url(/exam-logo.png)_50%_50%_/_cover]" />
//             <h1 className="font-['Inter',Helvetica] font-bold text-[#101319] text-xl leading-6">
//               JEE Main
//             </h1>
//           </div>
//           <p className="text-sm text-muted-foreground">2025 - 2009 | 173 Papers | 15825 Qs</p>
//         </div>
//         <div className="space-y-1">
//           <Button
//             variant={selectedSubject === 'Physics' ? 'secondary' : 'ghost'}
//             className="w-full justify-start pl-4 gap-3"
            
//             onClick={() => setSelectedSubject( 'Physics')}
            
//           >
           
//             <img src="/subject-icons.svg" alt="" />
//             Physics PYQs
//             <div className="inline-flex items-center">
//                 <ChevronRightIcon className="w-5 h-5" />
//               </div>
//           </Button>
//           <Button
//             variant={selectedSubject === 'Chemistry' ? 'secondary' : 'ghost'}
//             className="w-full justify-start pl-4 gap-3"
//             onClick={() => setSelectedSubject('Chemistry')}
//           >
//              <img src="/subject-icons-1.svg" alt="" />
//             Chemistry PYQs
//             <div className="inline-flex items-center">
//                 <ChevronRightIcon className="w-5 h-5" />
//               </div>
//           </Button>
//           <Button
//             variant={selectedSubject === 'Mathematics' ? 'secondary' : 'ghost'}
//             className="w-full justify-start pl-4 gap-3"
//             onClick={() => setSelectedSubject('Mathematics')}
//           >
//             <img src="/subject-icons-2.svg" alt="" />
//             Mathematics PYQs
            
//               <div className="inline-flex items-center">
//                 <ChevronRightIcon className="w-5 h-5" />
//               </div>
//           </Button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold">
             
            
              

//              {selectedSubject} PYQs
              
//               <span className="block text-sm font-normal text-muted-foreground">
//                 Chapter-wise Collection of {selectedSubject} PYQs
//               </span>
//             </h2>
//           </div>

//           <div className="flex flex-wrap gap-4 mb-6">
//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Class" />
//               </SelectTrigger>
//               <SelectContent>
//                 {classes.map((cls) => (
//                   <SelectItem key={cls} value={cls}>{cls}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Units" />
//               </SelectTrigger>
//               <SelectContent>
//                 {units.map((unit) => (
//                   <SelectItem key={unit} value={unit}>{unit}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Button variant="outline">Not Started</Button>
            
//             <div className="flex items-center gap-2">
//               <Switch
//                 checked={showWeakChapters}
//                 onCheckedChange={setShowWeakChapters}
//               />
//               <span className="text-sm">Weak Chapters</span>
//             </div>
//           </div>

//           <div className="text-sm text-muted-foreground mb-4">
//             Showing all chapters ({filteredChapters.length})
//             <Button variant="ghost" className="text-primary float-right text-sm">↑ Sort</Button>
//           </div>

//           <div className="space-y-3">
//             {filteredChapters.map((chapter) => {
//               const trend = getTrendIndicator(chapter);
//               return (
//                 <Card key={chapter.chapter} className="p-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className="text-xl">📚</div>
//                       <div>
//                         <h3 className="font-medium">{chapter.chapter}</h3>
//                         <div className="text-sm text-muted-foreground">
//                           2025: {chapter.yearWiseQuestionCount['2025']}Qs {trend.direction === 'up' ? '↑' : '↓'} | 2024: {chapter.yearWiseQuestionCount['2024']}Qs | {chapter.questionSolved}/205 Qs
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 

// Updated Home component with improved chapter display layout and dynamic icons
// 'use client';
// import { ChevronRightIcon } from "lucide-react";
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Switch } from '@/components/ui/switch';
// import { Card, CardContent } from '@/components/ui/card';
// import { useStore, getUniqueValues, getFilteredChapters, getTrendIndicator } from '@/lib/store';

// const getSubjectIcon = (subject) => {
//   switch (subject) {
//     case 'Physics': return '/subject-icons.svg';
//     case 'Chemistry': return '/subject-icons-1.svg';
//     case 'Mathematics': return '/subject-icons-2.svg';
//     default: return '/default-subject-icon.svg';
//   }
// };

// const getTotalQuestions = (yearWiseQuestionCount) => {
//   return Object.values(yearWiseQuestionCount).reduce((sum, count) => sum + count, 0);
// };

// export default function Home() {
//   const { selectedSubject, setSelectedSubject, showWeakChapters, setShowWeakChapters } = useStore();
//   const { classes, units } = getUniqueValues(selectedSubject);
//   const filteredChapters = getFilteredChapters(useStore.getState());

//   return (
//     <div className="flex min-h-screen bg-background">
//       {/* Sidebar */}
//       <div className="w-[290px] border-r border-border bg-card ml-20">
//         <div className="p-4">
//           <div className="flex items-center justify-center gap-2 w-full">
//             <div className="relative w-6 h-6 [background:url(/exam-logo.png)_50%_50%_/_cover]" />
//             <h1 className="font-['Inter',Helvetica] font-bold text-[#101319] text-xl leading-6 text-center pr-12">JEE Main</h1>
//           </div>
//           <p className="text-sm text-muted-foreground">2025 - 2009 | 173 Papers | 15825 Qs</p>
//         </div>
//         <div className="space-y-3 pt-5">
//           <Button variant={selectedSubject === 'Physics' ? 'secondary' : 'ghost'} className="w-[250px] justify-start pl-4 gap-3" onClick={() => setSelectedSubject('Physics')}>
//             <img src="/subject-icons.svg" alt="Physics Icon" className="w-5 h-5" />
//             Physics PYQs
//             <ChevronRightIcon className="w-5 h-5 ml-auto" />
//           </Button>
//           <Button variant={selectedSubject === 'Chemistry' ? 'secondary' : 'ghost'} className="w-[250px] justify-start pl-4 gap-3" onClick={() => setSelectedSubject('Chemistry')}>
//             <img src="/subject-icons-1.svg" alt="Chemistry Icon" className="w-5 h-5" />
//             Chemistry PYQs
//             <ChevronRightIcon className="w-5 h-5 ml-auto" />
//           </Button>
//           <Button variant={selectedSubject === 'Mathematics' ? 'secondary' : 'ghost'} className="w-[250px] justify-start pl-4 gap-3" onClick={() => setSelectedSubject('Mathematics')}>
//             <img src="/subject-icons-2.svg" alt="Mathematics Icon" className="w-5 h-5" />
//             Mathematics PYQs
//             <ChevronRightIcon className="w-5 h-5 ml-auto" />
//           </Button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex items-center justify-between mb-6 flex-col gap-4 flex-1 grow">
//             {selectedSubject && (
//               <div className="flex flex-col items-start gap-1">
//                 <h2 className="text-xl font-semibold flex items-center gap-3 text-center">
//                   <img src={getSubjectIcon(selectedSubject)} alt={`${selectedSubject} icon`} className="w-6 h-6" />
//                   {selectedSubject} PYQs
//                 </h2>
//                 <p className="font-['Inter',Helvetica] font-normal text-[#505d79] text-sm tracking-[0] leading-[18.2px] whitespace-nowrap text-center ml-[-3rem]">
//                   Chapter-wise Collection of {selectedSubject} PYQs
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="flex flex-wrap gap-4 mb-6">
//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Class" />
//               </SelectTrigger>
//               <SelectContent>
//                 {classes.map((cls) => (
//                   <SelectItem key={cls} value={cls}>{cls}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Units" />
//               </SelectTrigger>
//               <SelectContent>
//                 {units.map((unit) => (
//                   <SelectItem key={unit} value={unit}>{unit}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Button variant="outline">Not Started</Button>

//             <div className="flex items-center gap-2">
//               <Switch checked={showWeakChapters} onCheckedChange={setShowWeakChapters} />
//               <span className="text-sm">Weak Chapters</span>
//             </div>
//           </div>

//           <div className="text-sm text-muted-foreground mb-4">
//             Showing all chapters ({filteredChapters.length})
//             <Button variant="ghost" className="text-primary float-right text-sm"> ↑ Sort</Button>
//           </div>

//           <div className="flex flex-col w-full items-start gap-4 p-4 bg-white z-0 font-semibold">
//             {filteredChapters.map((chapter, index) => (
//               <Card key={index} className="flex items-center gap-4 p-4 w-full bg-white rounded-xl border border-solid border-[#d1d8e0]">
//                 <img className="w-6 h-6" alt={`${chapter.chapter} icon`} src={`/chapter-icon-${(index % 7) + 1}.svg`} />
//                 <CardContent className="flex flex-col items-start gap-2 p-0 flex-1 grow">
//                   <div className="flex items-center gap-6 w-full">
//                     <h3 className="flex-1 mt-[-1.00px] font-label-base-16 text-[#101319]">
//                       {chapter.chapter}
//                     </h3>
//                     <div className="inline-flex flex-col items-start gap-2 self-stretch">
//                       <div className="w-fit mt-[-1.00px] font-body-xs-12 text-right whitespace-nowrap">
//                         <span className="text-[#505d79]">2025: </span>
//                         <span className="text-[#505d79]">{chapter.yearWiseQuestionCount["2025"]}Qs</span>
//                         {chapter.yearWiseQuestionCount["2025"] > chapter.yearWiseQuestionCount["2024"] && (
//                           <span className="text-[#007f42]"> ↑</span>
//                         )}
//                         {chapter.yearWiseQuestionCount["2025"] < chapter.yearWiseQuestionCount["2024"] && (
//                           <span className="text-[#e02a2f]"> ↓</span>
//                         )}
//                         <span className="text-[#505d79]"> | 2024: </span>
//                         <span className="text-[#505d79]">{chapter.yearWiseQuestionCount["2024"]}Qs</span>
//                       </div>
//                     </div>
//                     <span className="w-fit font-body-xs-12 text-[#d1d8e0] text-right whitespace-nowrap">|</span>
//                     <span className="w-fit font-body-xs-12 text-[#505d79] text-right whitespace-nowrap">
//                       {chapter.questionSolved}/{getTotalQuestions(chapter.yearWiseQuestionCount)} Qs
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
// Updated Home component to match UI from screenshot
'use client';
import { ChevronRightIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { useStore, getUniqueValues, getFilteredChapters } from '@/lib/store';

const getSubjectIcon = (subject) => {
  switch (subject) {
    case 'Physics': return '/subject-icons.svg';
    case 'Chemistry': return '/subject-icons-1.svg';
    case 'Mathematics': return '/subject-icons-2.svg';
    default: return '/default-subject-icon.svg';
  }
};

const getTotalQuestions = (yearWiseQuestionCount) => {
  return Object.values(yearWiseQuestionCount).reduce((sum, count) => sum + count, 0);
};

export default function Home() {
  const { selectedSubject, setSelectedSubject, showWeakChapters, setShowWeakChapters } = useStore();
  const { classes, units } = getUniqueValues(selectedSubject);
  const filteredChapters = getFilteredChapters(useStore.getState());

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="w-[290px] border-r border-border bg-card ml-20">
        <div className="p-4">
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="relative w-6 h-6 [background:url(/exam-logo.png)_50%_50%_/_cover]" />
            <h1 className="font-['Inter',Helvetica] font-bold text-[#101319] text-xl leading-6 text-center pr-12">JEE Main</h1>
          </div>
          <p className="text-sm text-muted-foreground">2025 - 2009 | 173 Papers | 15825 Qs</p>
        </div>
        <div className="space-y-3 pt-5">
          <Button variant={selectedSubject === 'Physics' ? 'secondary' : 'ghost'} className="w-[250px] justify-start pl-4 gap-3" onClick={() => setSelectedSubject('Physics')}>
            <img src="/subject-icons.svg" alt="Physics Icon" className="w-5 h-5" />
            Physics PYQs
            <ChevronRightIcon className="w-5 h-5 ml-auto" />
          </Button>
          <Button variant={selectedSubject === 'Chemistry' ? 'secondary' : 'ghost'} className="w-[250px] justify-start pl-4 gap-3" onClick={() => setSelectedSubject('Chemistry')}>
            <img src="/subject-icons-1.svg" alt="Chemistry Icon" className="w-5 h-5" />
            Chemistry PYQs
            <ChevronRightIcon className="w-5 h-5 ml-auto" />
          </Button>
          <Button variant={selectedSubject === 'Mathematics' ? 'secondary' : 'ghost'} className="w-[250px] justify-start pl-4 gap-3" onClick={() => setSelectedSubject('Mathematics')}>
            <img src="/subject-icons-2.svg" alt="Mathematics Icon" className="w-5 h-5" />
            Mathematics PYQs
            <ChevronRightIcon className="w-5 h-5 ml-auto" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-col gap-4 flex-1 grow">
            {selectedSubject && (
              <div className="flex flex-col items-start gap-1">
                <h2 className="text-xl font-semibold flex items-center gap-3 text-center">
                  <img src={getSubjectIcon(selectedSubject)} alt={`${selectedSubject} icon`} className="w-6 h-6" />
                  {selectedSubject} PYQs
                </h2>
                <p className="font-['Inter',Helvetica] font-normal text-[#505d79] text-sm tracking-[0] leading-[18.2px] whitespace-nowrap text-center ml-[-3rem]">
                  Chapter-wise Collection of {selectedSubject} PYQs
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Units" />
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="h-10 ">Not Started</Button>

            <Button
  variant={showWeakChapters ? 'secondary' : 'outline'}
  onClick={() => setShowWeakChapters(!showWeakChapters)}
  className="text-sm h-10 "
>
  {showWeakChapters ? 'Showing Weak Chapters' : 'Show Weak Chapters'}
</Button>

          </div>

          <div className="text-sm text-muted-foreground mb-4">
            Showing all chapters ({filteredChapters.length})
            <Button variant="ghost" className="text-primary float-right text-sm text-blue-600"> ↓↑ Sort</Button>
          </div>

          <div className="flex flex-col w-full items-start gap-4 p-4 bg-white z-0 font-semibold">
            {filteredChapters.map((chapter, index) => (
              <Card key={index} className="flex items-center gap-4 p-4 w-full bg-white rounded-xl border border-solid border-[#d1d8e0]">
                <img className="w-6 h-6" alt={`${chapter.chapter} icon`} src={`/chapter-icon-${(index % 7) + 1}.svg`} />
                <CardContent className="flex flex-col items-start gap-2 p-0 flex-1 grow">
                  <div className="flex items-center gap-6 w-full">
                    <h3 className="flex-1 mt-[-1.00px] font-label-base-16 text-[#101319]">
                      {chapter.chapter}
                    </h3>
                    <div className="inline-flex flex-col items-start gap-2 self-stretch">
                      <div className="w-fit mt-[-1.00px] font-body-xs-12 text-right whitespace-nowrap">
                        <span className="text-[#505d79]">2025: </span>
                        <span className="text-[#505d79]">{chapter.yearWiseQuestionCount["2025"]}Qs</span>
                        {chapter.yearWiseQuestionCount["2025"] > chapter.yearWiseQuestionCount["2024"] && (
                          <span className="text-[#007f42]"> ↑</span>
                        )}
                        {chapter.yearWiseQuestionCount["2025"] < chapter.yearWiseQuestionCount["2024"] && (
                          <span className="text-[#e02a2f]"> ↓</span>
                        )}
                        <span className="text-[#505d79]"> | 2024: </span>
                        <span className="text-[#505d79]">{chapter.yearWiseQuestionCount["2024"]}Qs</span>
                      </div>
                    </div>
                    <span className="w-fit font-body-xs-12 text-[#d1d8e0] text-right whitespace-nowrap">|</span>
                    <span className="w-fit font-body-xs-12 text-[#505d79] text-right whitespace-nowrap">
                      {chapter.questionSolved}/{getTotalQuestions(chapter.yearWiseQuestionCount)} Qs
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
