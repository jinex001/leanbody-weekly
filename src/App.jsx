import { useState } from "react”;

const PHASES = [
{ weeks: “1~2주”, phase: “FOUNDATION”, goal: “패턴 정착 + 체지방 감소 시작”, bf: “14.9% → 13.4% ✓”, color: “#60A5FA” },
{ weeks: “3~4주”, phase: “ACCELERATION”, goal: “중량 증가 + 선명도 향상”, bf: “13.4% → 12%”, color: “#34D399” },
{ weeks: “5~6주”, phase: “DEFINITION”, goal: “어깨/V라인 집중 + 케틀벨 강화”, bf: “12% → 11%”, color: “#FBBF24” },
{ weeks: “7~8주”, phase: “PEAK”, goal: “컷팅 마무리 + 목표 체형 완성”, bf: “11.5% → ~10%”, color: “#F472B6” },
];

const DAILY_IF = [
{ time: “07:00”, icon: “⚡”, text: “기상 - Whey 반스쿱 (단백질만)”, tag: “” },
{ time: “07:15”, icon: “🏋️”, text: “공복 웨이트 45~55분”, tag: “운동” },
{ time: “08:15”, icon: “🥚”, text: “계란흰자 4개 + Whey 25g”, tag: “단백질” },
{ time: “12:00”, icon: “🍽️”, text: “첫 식사 - 탄수 해제 (대구+딩켈파스타 또는 된장찌개)”, tag: “식사1” },
{ time: “15:00”, icon: “🏊”, text: “LISS or 수영 or 케틀벨 40분”, tag: “유산소” },
{ time: “18:00”, icon: “🫐”, text: “마지막 식사 - Quark + 블루베리 + 꿀”, tag: “식사2” },
{ time: “18:00+”, icon: “⛔”, text: “단식 시작 (Modified 16:8)”, tag: “” },
];

function makeRoutine() {
return [
{
day: “MON”, label: “Push A”, emoji: “💪”, focus: “가슴 - 어깨”,
accent: “#60A5FA”,
liss: { type: “빠르게 걷기”, duration: 40, loc: “Tiergarten” },
kettlebell: null,
exercises: [
{ name: “Dips (가중)”, note: “UP BW+10kg 달성!”, sets: [{ kg: “BW+10”, reps: 10 }, { kg: “BW+10”, reps: 10 }, { kg: “BW+10”, reps: 9 }, { kg: “BW+10”, reps: 9 }] },
{ name: “Flat DB Press”, note: “22.5kg 안정화 → 24kg 도전”, sets: [{ kg: 22.5, reps: 10 }, { kg: 22.5, reps: 10 }, { kg: 24, reps: 8 }, { kg: 24, reps: 8 }] },
{ name: “Cable Fly High-Low”, note: “”, sets: [{ kg: 12.5, reps: 12 }, { kg: 12.5, reps: 10 }, { kg: 12.5, reps: 10 }] },
{ name: “Lateral Raise”, note: “boulder shoulders!”, sets: [{ kg: 5, reps: 15 }, { kg: 5, reps: 15 }, { kg: 5, reps: 15 }, { kg: 5, reps: 15 }] },
{ name: “Tricep Pushdown”, note: “”, sets: [{ kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }] },
],
},
{
day: “TUE”, label: “Pull A”, emoji: “🔙”, focus: “등 - 이두”,
accent: “#34D399”,
liss: { type: “수영”, duration: 40, loc: “피트니스 수영장” },
kettlebell: null,
exercises: [
{ name: “Lat Pulldown”, note: “워킹 3세트”, sets: [{ kg: 40, reps: 10 }, { kg: 44, reps: 8 }, { kg: 44, reps: 8 }, { kg: 44, reps: 8 }] },
{ name: “Chest Supported Row”, note: “”, sets: [{ kg: 17.5, reps: 11 }, { kg: 20, reps: 10 }, { kg: 20, reps: 9 }, { kg: 20, reps: 9 }] },
{ name: “Seated Cable Row”, note: “”, sets: [{ kg: 40, reps: 10 }, { kg: 40, reps: 12 }, { kg: 40, reps: 12 }] },
{ name: “Face Pull”, note: “”, sets: [{ kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }] },
{ name: “Cable Curl”, note: “”, sets: [{ kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }, { kg: 16.25, reps: 11 }] },
],
},
{
day: “WED”, label: “Legs A + KB”, emoji: “🦵”, focus: “전면 - 코어 - 케틀벨”,
accent: “#FBBF24”,
liss: { type: “케틀벨 서킷”, duration: 30, loc: “헬스장” },
kettlebell: [
{ name: “KB Swing 24kg”, sets: “5세트 x 20회”, rest: “60초”, note: “체지방 연소 핵심!” },
{ name: “Turkish Get-Up 16kg”, sets: “3세트 x 3회 (각측)”, rest: “90초”, note: “코어 + 어깨 안정성” },
],
exercises: [
{ name: “Squat”, note: “60kg 목표”, sets: [{ kg: 50, reps: 10 }, { kg: 60, reps: 8 }, { kg: 60, reps: 8 }, { kg: 60, reps: 8 }] },
{ name: “Leg Press”, note: “”, sets: [{ kg: 80, reps: 10 }, { kg: 90, reps: 10 }, { kg: 90, reps: 10 }] },
{ name: “Leg Extension”, note: “”, sets: [{ kg: 30, reps: 15 }, { kg: 30, reps: 15 }, { kg: 30, reps: 15 }] },
{ name: “Plank”, note: “”, sets: [{ kg: 0, reps: “45s” }, { kg: 0, reps: “45s” }, { kg: 0, reps: “45s” }] },
{ name: “Ab Wheel”, note: “”, sets: [{ kg: 0, reps: 10 }, { kg: 0, reps: 10 }, { kg: 0, reps: 10 }] },
],
},
{
day: “THU”, label: “Push B”, emoji: “🏋️”, focus: “어깨 - 삼두”,
accent: “#A78BFA”,
liss: { type: “자전거 or 일립티컬”, duration: 40, loc: “헬스장 유산소” },
kettlebell: null,
exercises: [
{ name: “Overhead Press”, note: “boulder shoulders”, sets: [{ kg: 30, reps: 8 }, { kg: 32.5, reps: 8 }, { kg: 35, reps: 6 }, { kg: 35, reps: 6 }] },
{ name: “DB Shoulder Press”, note: “”, sets: [{ kg: 16, reps: 10 }, { kg: 16, reps: 10 }, { kg: 16, reps: 10 }] },
{ name: “Cable Fly Low-High”, note: “”, sets: [{ kg: 12.5, reps: 12 }, { kg: 12.5, reps: 12 }, { kg: 12.5, reps: 12 }] },
{ name: “Lateral Raise”, note: “”, sets: [{ kg: 5, reps: 15 }, { kg: 5, reps: 15 }, { kg: 5, reps: 15 }] },
{ name: “Skull Crusher”, note: “”, sets: [{ kg: 17.5, reps: 10 }, { kg: 17.5, reps: 10 }, { kg: 17.5, reps: 10 }] },
],
},
{
day: “FRI”, label: “Pull B + KB”, emoji: “🔥”, focus: “등 두께 - 이두 - 케틀벨”,
accent: “#F472B6”,
liss: { type: “수영”, duration: 40, loc: “피트니스 수영장” },
kettlebell: [
{ name: “KB Clean & Press 16-20kg”, sets: “4세트 x 5회 (각측)”, rest: “90초”, note: “어깨 + 전신 협응” },
{ name: “KB Swing 24kg”, sets: “3세트 x 15회”, rest: “60초”, note: “마무리 지방 연소” },
],
exercises: [
{ name: “Romanian Deadlift”, note: “50-55kg 도전”, sets: [{ kg: 50, reps: 10 }, { kg: 55, reps: 8 }, { kg: 55, reps: 8 }, { kg: 55, reps: 8 }] },
{ name: “One Arm DB Row”, note: “”, sets: [{ kg: 22.5, reps: 10 }, { kg: 22.5, reps: 10 }, { kg: 22.5, reps: 10 }] },
{ name: “Seated Cable Row”, note: “”, sets: [{ kg: 40, reps: 12 }, { kg: 42.5, reps: 10 }, { kg: 42.5, reps: 10 }] },
{ name: “Cable Curl”, note: “”, sets: [{ kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }, { kg: 16.25, reps: 12 }] },
{ name: “Hammer Curl”, note: “”, sets: [{ kg: 12, reps: 12 }, { kg: 12, reps: 12 }, { kg: 12, reps: 12 }] },
],
},
{
day: “SAT”, label: “Legs B + KB”, emoji: “⚡”, focus: “후면 - 코어 - 케틀벨”,
accent: “#FB923C”,
liss: { type: “가벼운 산책”, duration: 30, loc: “동네 공원” },
kettlebell: [
{ name: “KB Swing 24kg”, sets: “5세트 x 20회”, rest: “60초”, note: “주말 마무리 연소” },
],
exercises: [
{ name: “Bulgarian Split Squat”, note: “20+20kg 안정화”, sets: [{ kg: 20, reps: 10 }, { kg: 20, reps: 10 }, { kg: 20, reps: 10 }] },
{ name: “Leg Curl”, note: “30.25kg 기반”, sets: [{ kg: 25, reps: 12 }, { kg: 27.5, reps: 10 }, { kg: 27.5, reps: 10 }, { kg: 27.5, reps: 10 }] },
{ name: “Leg Press”, note: “”, sets: [{ kg: 80, reps: 12 }, { kg: 90, reps: 10 }, { kg: 90, reps: 10 }] },
{ name: “Calf Raise”, note: “”, sets: [{ kg: 20, reps: 15 }, { kg: 20, reps: 15 }, { kg: 20, reps: 13 }, { kg: 20, reps: 12 }] },
{ name: “Cable Crunch”, note: “”, sets: [{ kg: 28, reps: 12 }, { kg: 28, reps: 12 }, { kg: 28, reps: 12 }] },
],
},
{
day: “SUN”, label: “Rest”, emoji: “😴”, focus: “완전 회복”,
accent: “#6B7280”,
liss: null,
kettlebell: null,
exercises: [],
},
];
}

function SetRow({ set, setIndex }) {
const [checked, setChecked] = useState(false);
const [weight, setWeight] = useState(String(set.kg));
const [reps, setReps] = useState(String(set.reps));

return (
<div style={{
display: “flex”, alignItems: “center”, gap: 8,
padding: “5px 8px”, borderRadius: 8,
background: checked ? “rgba(52,211,153,0.12)” : “transparent”,
transition: “background 0.2s”,
}}>
<span style={{ fontSize: 11, color: “#4B5563”, width: 16, textAlign: “center”, fontWeight: 700 }}>
{setIndex + 1}
</span>
<input
type=“text” value={weight} onChange={e => setWeight(e.target.value)}
style={{ width: 50, background: “#1F2937”, border: “1px solid #374151”, borderRadius: 6, padding: “3px 6px”, fontSize: 12, textAlign: “center”, color: “#E5E7EB” }}
/>
<span style={{ fontSize: 10, color: “#4B5563” }}>kg x</span>
<input
type=“text” value={reps} onChange={e => setReps(e.target.value)}
style={{ width: 38, background: “#1F2937”, border: “1px solid #374151”, borderRadius: 6, padding: “3px 6px”, fontSize: 12, textAlign: “center”, color: “#E5E7EB” }}
/>
<span style={{ fontSize: 10, color: “#4B5563” }}>rep</span>
<div onClick={() => setChecked(!checked)} style={{
marginLeft: “auto”, width: 20, height: 20, borderRadius: “50%”,
border: checked ? “none” : “1px solid #374151”,
background: checked ? “#34D399” : “transparent”,
cursor: “pointer”, display: “flex”, alignItems: “center”, justifyContent: “center”,
transition: “all 0.2s”, flexShrink: 0,
}}>
{checked && <span style={{ color: “#111”, fontSize: 11, fontWeight: 900 }}>✓</span>}
</div>
</div>
);
}

function KBCard({ kb, accent }) {
const [done, setDone] = useState(false);
return (
<div style={{
display: “flex”, alignItems: “center”, justifyContent: “space-between”,
padding: “10px 12px”, borderRadius: 10, marginBottom: 6,
background: done ? “rgba(52,211,153,0.08)” : “#1A2332”,
border: “1px solid “ + (done ? “#34D399” : “#1F2937”),
transition: “all 0.2s”,
}}>
<div>
<div style={{ fontSize: 12, fontWeight: 700, color: accent }}>{kb.name}</div>
<div style={{ fontSize: 11, color: “#9CA3AF”, marginTop: 2 }}>{kb.sets} - 휴식 {kb.rest}</div>
<div style={{ fontSize: 10, color: “#FBBF24”, marginTop: 2 }}>💡 {kb.note}</div>
</div>
<div onClick={() => setDone(!done)} style={{
width: 28, height: 28, borderRadius: “50%”,
border: done ? “none” : “1px solid #374151”,
background: done ? “#34D399” : “transparent”,
cursor: “pointer”, display: “flex”, alignItems: “center”, justifyContent: “center”,
transition: “all 0.2s”, flexShrink: 0, marginLeft: 12,
}}>
{done && <span style={{ color: “#111”, fontSize: 13, fontWeight: 900 }}>✓</span>}
</div>
</div>
);
}

function LissRow({ liss, accent }) {
const [done, setDone] = useState(false);
return (
<div style={{
display: “flex”, alignItems: “center”, justifyContent: “space-between”,
padding: “10px 12px”, borderRadius: 10, margin: “8px 12px”,
background: done ? “rgba(52,211,153,0.08)” : “#111827”,
border: “1px solid “ + (done ? “#34D399” : “#1F2937”),
transition: “all 0.2s”,
}}>
<div>
<div style={{ fontSize: 12, fontWeight: 700, color: done ? “#34D399” : “#E5E7EB” }}>
오후 LISS — {liss.type}
</div>
<div style={{ fontSize: 10, color: “#6B7280”, marginTop: 2 }}>
{liss.duration}분 - 105~122bpm - {liss.loc}
</div>
</div>
<div onClick={() => setDone(!done)} style={{
width: 28, height: 28, borderRadius: “50%”,
border: done ? “none” : “1px solid #374151”,
background: done ? “#34D399” : “transparent”,
cursor: “pointer”, display: “flex”, alignItems: “center”, justifyContent: “center”,
transition: “all 0.2s”, flexShrink: 0,
}}>
{done && <span style={{ color: “#111”, fontSize: 13, fontWeight: 900 }}>✓</span>}
</div>
</div>
);
}

function DayCard({ routine, isToday }) {
const [tab, setTab] = useState(“workout”);
const [open, setOpen] = useState(isToday);
const isRest = routine.exercises.length === 0;
const hasKB = routine.kettlebell && routine.kettlebell.length > 0;

return (
<div style={{
borderRadius: 16,
border: “1px solid “ + (isToday ? routine.accent : “#1F2937”),
background: “#0D1117”, overflow: “hidden”,
boxShadow: isToday ? “0 0 24px “ + routine.accent + “25” : “none”,
marginBottom: 10,
}}>
<div onClick={() => !isRest && setOpen(!open)} style={{
padding: “14px 16px”, cursor: isRest ? “default” : “pointer”,
background: “#0D1117”, display: “flex”, alignItems: “center”, gap: 12,
borderBottom: open ? “1px solid #1F2937” : “none”,
}}>
<div style={{
background: isToday ? routine.accent : “#1F2937”,
color: isToday ? “#000” : “#6B7280”,
borderRadius: 8, padding: “4px 10px”,
fontSize: 11, fontWeight: 900, letterSpacing: “0.1em”,
}}>{routine.day}</div>
<div style={{ flex: 1 }}>
<div style={{ fontSize: 15, fontWeight: 800, color: “#F9FAFB”, letterSpacing: “0.03em” }}>
{routine.emoji} {routine.label}
</div>
<div style={{ fontSize: 11, color: “#6B7280”, marginTop: 1 }}>
{routine.focus}
{hasKB && <span style={{ color: “#FBBF24”, marginLeft: 8 }}>KB포함</span>}
{routine.liss && <span style={{ color: “#34D399”, marginLeft: 6 }}>+ {routine.liss.type} {routine.liss.duration}분</span>}
</div>
</div>
{isToday && (
<div style={{ background: routine.accent, color: “#000”, fontSize: 9, fontWeight: 900, padding: “3px 8px”, borderRadius: 20, letterSpacing: “0.1em” }}>
TODAY
</div>
)}
{!isRest && !isToday && (
<div style={{ color: “#374151”, fontSize: 12 }}>{open ? “▲” : “▼”}</div>
)}
</div>

```
  {open && !isRest && (
    <div>
      <div style={{ display: "flex", background: "#0A0F16", borderBottom: "1px solid #1F2937" }}>
        {[
          { key: "workout", label: "웨이트" },
          { key: "liss", label: "오후 LISS" },
          { key: "schedule", label: "일정" },
        ].map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            flex: 1, padding: "9px 4px", border: "none", background: "transparent",
            borderBottom: tab === t.key ? "2px solid " + routine.accent : "2px solid transparent",
            color: tab === t.key ? routine.accent : "#4B5563",
            fontSize: 11, fontWeight: tab === t.key ? 700 : 400,
            cursor: "pointer", transition: "all 0.15s",
          }}>{t.label}</button>
        ))}
      </div>

      {tab === "workout" && (
        <div style={{ padding: 12 }}>
          <div style={{ fontSize: 10, color: "#4B5563", marginBottom: 10, paddingLeft: 4 }}>
            💡 세트 사이 휴식 60초 - 운동 전 Whey 반스쿱
          </div>
          {routine.exercises.map((ex, ei) => (
            <div key={ei} style={{ marginBottom: 14 }}>
              <div style={{ paddingLeft: 4, marginBottom: 5, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: routine.accent, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  {ex.name}
                </span>
                {ex.note ? (
                  <span style={{ fontSize: 10, color: "#FBBF24" }}>{ex.note}</span>
                ) : null}
              </div>
              {ex.sets.map((set, si) => (
                <SetRow key={si} set={set} setIndex={si} />
              ))}
            </div>
          ))}
          {hasKB && (
            <div style={{ paddingTop: 10, borderTop: "1px solid #1F2937" }}>
              <div style={{ fontSize: 10, color: "#6B7280", marginBottom: 8, letterSpacing: "0.1em" }}>
                케틀벨
              </div>
              {routine.kettlebell.map((kb, i) => (
                <KBCard key={i} kb={kb} accent={routine.accent} />
              ))}
            </div>
          )}
        </div>
      )}

      {tab === "liss" && (
        <div style={{ padding: "8px 0" }}>
          <div style={{ fontSize: 10, color: "#4B5563", margin: "8px 12px" }}>
            💡 심박수 105~122bpm 유지 - 근손실 없이 지방 연소
          </div>
          {routine.liss && <LissRow liss={routine.liss} accent={routine.accent} />}
        </div>
      )}

      {tab === "schedule" && (
        <div style={{ padding: "14px 16px" }}>
          {DAILY_IF.map((item) => (
            <div key={item.time} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 10, color: routine.accent, fontWeight: 700, minWidth: 42 }}>{item.time}</span>
              <span style={{ fontSize: 11 }}>{item.icon}</span>
              <span style={{ fontSize: 11, color: item.tag ? "#E5E7EB" : "#6B7280", flex: 1, lineHeight: 1.5 }}>{item.text}</span>
              {item.tag ? (
                <span style={{ fontSize: 9, color: routine.accent, border: "1px solid " + routine.accent + "30", borderRadius: 4, padding: "1px 5px", whiteSpace: "nowrap" }}>
                  {item.tag}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  )}

  {isRest && (
    <div style={{ padding: 24, textAlign: "center", color: "#374151", fontSize: 13 }}>
      😴 완전 회복의 날<br />
      <span style={{ fontSize: 11, color: "#1F2937", marginTop: 4, display: "block" }}>가벼운 스트레칭 OK</span>
    </div>
  )}
</div>
```

);
}

export default function App() {
const ROUTINE = makeRoutine();
const [view, setView] = useState(“weekly”);
const [currentWeek, setCurrentWeek] = useState(0);

const today = new Date();
const dayMap = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };
const todayIdx = dayMap[today.getDay()];

const programStart = new Date(“2026-03-05”);
const msPerWeek = 7 * 24 * 60 * 60 * 1000;
const programWeekNum = Math.floor((today - programStart) / msPerWeek);
const currentPhase = programWeekNum >= 0 ? Math.min(Math.floor(programWeekNum / 2), 3) : -1;

const getWeekLabel = () => {
const base = new Date(today);
base.setDate(base.getDate() + currentWeek * 7);
const start = new Date(base);
start.setDate(base.getDate() - ((base.getDay() + 6) % 7));
const end = new Date(start);
end.setDate(start.getDate() + 6);
return start.getDate() + “.” + (start.getMonth() + 1) + “ - “ + end.getDate() + “.” + (end.getMonth() + 1);
};

const phaseDetails = [
[“IF 패턴 정착 (12:00 첫 식사)”, “PPL 루틴 + KB 스윙 집중”, “수영 주 2회 시작”, “현재 중량 유지하며 감각 익히기”],
[“모든 운동 중량 5~10% 증가 목표”, “KB Clean & Press 16 to 20kg”, “LISS 40 to 45분으로 상향”, “인바디 재측정 (4주차)”],
[“어깨/V라인 집중 — OHP + Lateral Raise 볼륨 업”, “Turkish Get-Up 16 to 20kg”, “복근 운동 매일 추가”, “식단 칼로리 50kcal 추가 감소”],
[“컷팅 마무리 — 나트륨 줄이기”, “수분 섭취 하루 3L+”, “인바디 최종 측정”, “목표 달성 사진 촬영 📸”],
];

return (
<div style={{ minHeight: “100vh”, background: “#060A0F”, fontFamily: “sans-serif”, paddingBottom: 48 }}>

```
  <div style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #060A0F 100%)", padding: "32px 20px 24px", borderBottom: "1px solid #1F2937" }}>
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ fontSize: 10, color: "#3B82F6", letterSpacing: "0.2em", marginBottom: 6 }}>
        PERSONAL TRAINER - 8-WEEK PROGRAM
      </div>
      <div style={{ fontSize: 30, fontWeight: 900, color: "#F9FAFB", lineHeight: 1.1 }}>
        WOO HYUNG'S{" "}
        <span style={{ color: "#60A5FA" }}>LEAN MUSCLE</span> PLAN
      </div>
      <div style={{ fontSize: 12, color: "#4B5563", marginTop: 8 }}>
        PPL x 6일 - 케틀벨 - 수영/LISS - Modified IF 16:8
      </div>

      <div style={{ display: "flex", marginTop: 20, borderRadius: 12, overflow: "hidden", border: "1px solid #1F2937" }}>
        {[["현재 체지방", "13.4%", "#60A5FA"], ["체중", "67.0kg", "#34D399"], ["목표", "~10%", "#F472B6"], ["기간", "8주", "#FBBF24"]].map((item) => (
          <div key={item[0]} style={{ flex: 1, padding: "12px 8px", textAlign: "center", background: "#0D1117", borderRight: "1px solid #1F2937" }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: item[2] }}>{item[1]}</div>
            <div style={{ fontSize: 9, color: "#4B5563", marginTop: 2 }}>{item[0]}</div>
          </div>
        ))}
      </div>

      {currentPhase >= 0 && (
        <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 10, background: "#0D1117", border: "1px solid " + PHASES[currentPhase].color + "30", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: PHASES[currentPhase].color, flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: PHASES[currentPhase].color }}>
              PHASE {currentPhase + 1}: {PHASES[currentPhase].phase}
            </span>
            <span style={{ fontSize: 10, color: "#6B7280", marginLeft: 8 }}>{PHASES[currentPhase].goal}</span>
          </div>
        </div>
      )}
    </div>
  </div>

  <div style={{ display: "flex", background: "#0D1117", borderBottom: "1px solid #1F2937" }}>
    {[["weekly", "주간 루틴"], ["phases", "8주 로드맵"], ["nutrition", "식단"]].map((item) => (
      <button key={item[0]} onClick={() => setView(item[0])} style={{
        flex: 1, padding: "12px 4px", border: "none", background: "transparent",
        borderBottom: view === item[0] ? "2px solid #60A5FA" : "2px solid transparent",
        color: view === item[0] ? "#60A5FA" : "#4B5563",
        fontSize: 12, fontWeight: view === item[0] ? 700 : 400,
        cursor: "pointer", transition: "all 0.15s",
      }}>{item[1]}</button>
    ))}
  </div>

  <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>

    {view === "weekly" && (
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <button onClick={() => setCurrentWeek(w => w - 1)} style={{ background: "#1F2937", border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 13, color: "#9CA3AF" }}>← 이전</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#F9FAFB" }}>
              {currentWeek === 0 ? "이번 주" : currentWeek > 0 ? "+" + currentWeek + "주" : currentWeek + "주"}
            </div>
            <div style={{ fontSize: 10, color: "#4B5563" }}>{getWeekLabel()}</div>
          </div>
          <button onClick={() => setCurrentWeek(w => w + 1)} style={{ background: "#1F2937", border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 13, color: "#9CA3AF" }}>다음 →</button>
        </div>
        {ROUTINE.map((r, i) => (
          <DayCard key={i} routine={r} isToday={currentWeek === 0 && i === todayIdx} />
        ))}
      </div>
    )}

    {view === "phases" && (
      <div>
        <div style={{ fontSize: 11, color: "#4B5563", marginBottom: 12 }}>
          시작일: 2026.03.05 - 완료: 2026.04.29
        </div>
        {PHASES.map((p, i) => (
          <div key={i} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid " + p.color + "30", background: "#0D1117", marginBottom: 12 }}>
            <div style={{ background: "linear-gradient(135deg, " + p.color + "15, transparent)", padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ background: p.color, color: "#000", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 900 }}>
                  PHASE {i + 1}
                </div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>{p.weeks}</div>
                {currentPhase === i && (
                  <div style={{ marginLeft: "auto", fontSize: 9, color: p.color, border: "1px solid " + p.color, borderRadius: 4, padding: "2px 6px" }}>NOW</div>
                )}
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: p.color, letterSpacing: "0.05em" }}>{p.phase}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>{p.goal}</div>
              <div style={{ fontSize: 11, color: p.color, marginTop: 8 }}>목표: {p.bf}</div>
            </div>
            <div style={{ padding: "12px 16px", borderTop: "1px solid " + p.color + "15" }}>
              {phaseDetails[i].map((detail, di) => (
                <div key={di} style={{ fontSize: 11, color: "#6B7280", marginBottom: 5 }}>✓ {detail}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}

    {view === "nutrition" && (
      <div>
        <div style={{ borderRadius: 14, background: "#0D1117", border: "1px solid #1F2937", overflow: "hidden", marginBottom: 12 }}>
          <div style={{ padding: "14px 16px", background: "#0A0F16", borderBottom: "1px solid #1F2937" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#60A5FA" }}>Modified IF 16:8 일정</div>
            <div style={{ fontSize: 10, color: "#4B5563", marginTop: 2 }}>공복 웨이트 유지 + 탄수는 정오 이후만</div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            {DAILY_IF.map((item) => (
              <div key={item.time} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 10, color: "#60A5FA", fontWeight: 700, minWidth: 44 }}>{item.time}</span>
                <span>{item.icon}</span>
                <span style={{ fontSize: 11, color: item.tag ? "#E5E7EB" : "#4B5563", flex: 1, lineHeight: 1.5 }}>{item.text}</span>
                {item.tag ? (
                  <span style={{ fontSize: 9, color: "#60A5FA", border: "1px solid #1E3A5F", borderRadius: 4, padding: "1px 5px", whiteSpace: "nowrap" }}>{item.tag}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderRadius: 14, background: "#0D1117", border: "1px solid #1F2937", overflow: "hidden", marginBottom: 12 }}>
          <div style={{ padding: "14px 16px", background: "#0A0F16", borderBottom: "1px solid #1F2937" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#34D399" }}>매크로 목표</div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            {[["칼로리", "1,800~2,000 kcal", "#60A5FA"], ["단백질", "135~145g/일", "#34D399"], ["탄수화물", "12시 이후 집중 배치", "#FBBF24"], ["지방", "올리브오일, 견과류 위주", "#A78BFA"]].map((item) => (
              <div key={item[0]} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, padding: "8px 10px", borderRadius: 8, background: "#0A0F16" }}>
                <span style={{ fontSize: 12, color: "#6B7280" }}>{item[0]}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: item[2] }}>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderRadius: 14, background: "#0D1117", border: "1px solid #1F2937", overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", background: "#0A0F16", borderBottom: "1px solid #1F2937" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#F472B6" }}>지킬 것들</div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            {[
              ["🚫", "스프라이트 → 탄산수로 교체", "#EF4444"],
              ["🚫", "Cheez-It → 소분해서 제한", "#EF4444"],
              ["✅", "Quark + 오트밀 + 사과 유지", "#34D399"],
              ["✅", "대구/오징어/새우 적극 활용", "#34D399"],
              ["✅", "된장찌개 — 완벽한 식사", "#34D399"],
              ["💊", "비타민D 2000~4000IU 매일", "#FBBF24"],
              ["💧", "하루 수분 2.5~3L", "#60A5FA"],
            ].map((item) => (
              <div key={item[1]} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                <span style={{ fontSize: 13 }}>{item[0]}</span>
                <span style={{ fontSize: 11, color: item[2], lineHeight: 1.5 }}>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
</div>
```

);
}
