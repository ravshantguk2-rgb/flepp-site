
import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const APPLICATIONS_FILE = path.join(DATA_DIR, "applications.json");
const REVIEWS_FILE = path.join(DATA_DIR, "reviews.json");
app.use(cors());
app.use(express.json({limit:"2mb"}));
app.use(express.static(path.join(__dirname, "public")));
async function ensureFile(file, value) {
  try { await fs.access(file); }
  catch { await fs.writeFile(file, JSON.stringify(value, null, 2), "utf-8"); }
}
async function ensureFiles() {
  await fs.mkdir(DATA_DIR, {recursive:true});
  await ensureFile(SETTINGS_FILE, {"centerName": "FLEPP имени профессора Фузайлова", "sloganEn": "FLEPP — Learn. Develop. Lead.", "sloganRu": "FLEPP (ФЛЭПП) — Учись. Развивайся. Лидируй.", "heroTitle": "Официальный образовательный центр языков и базовых предметов.", "heroText": "Современный центр с филиалами в нескольких городах, сильной командой преподавателей, понятной системой записи и курсами по языкам, IELTS и школьным предметам.", "directorPhone": "+992927360045", "whatsapp": "+992079033113", "telegram": "https://t.me/FLEPPPCENTER", "instagram": "https://www.instagram.com/flepp_fuzaylov", "workTime": "Понедельник — Суббота, 08:00 — 18:00", "adminPin": "1234"});
  await ensureFile(APPLICATIONS_FILE, []);
  await ensureFile(REVIEWS_FILE, [{"id": "1", "author": "Amina", "provider": "Google", "rating": 5, "text": "Очень сильный центр. Понравились преподаватели и атмосфера.", "approved": true, "createdAt": "01.01.2026, 10:00:00"}, {"id": "2", "author": "Suhrob", "provider": "Yandex", "rating": 5, "text": "Удобно, что есть языки и предметы в одном месте.", "approved": true, "createdAt": "02.01.2026, 11:00:00"}]);
}
async function readJson(file, fallback) {
  try { return JSON.parse(await fs.readFile(file, "utf-8")); }
  catch { return fallback; }
}
async function writeJson(file, value) {
  await fs.writeFile(file, JSON.stringify(value, null, 2), "utf-8");
}
app.get("/api/settings", async (req,res)=>res.json(await readJson(SETTINGS_FILE, {})));
app.put("/api/settings", async (req,res)=>{ const current=await readJson(SETTINGS_FILE, {}); const next={...current,...req.body}; await writeJson(SETTINGS_FILE,next); res.json({ok:true,settings:next}); });
app.get("/api/applications", async (req,res)=>res.json(await readJson(APPLICATIONS_FILE, [])));
app.post("/api/applications", async (req,res)=>{ const {name,phone,course,branch,note}=req.body||{}; if(!name||!phone) return res.status(400).json({ok:false,error:"Name and phone are required"}); const items=await readJson(APPLICATIONS_FILE, []); const application={id:Date.now().toString(), name:String(name).trim(), phone:String(phone).trim(), course:course?String(course).trim():"", branch:branch?String(branch).trim():"", note:note?String(note).trim():"", createdAt:new Date().toLocaleString("ru-RU")}; items.unshift(application); await writeJson(APPLICATIONS_FILE, items); res.json({ok:true,application}); });
app.delete("/api/applications/:id", async (req,res)=>{ const items=await readJson(APPLICATIONS_FILE, []); await writeJson(APPLICATIONS_FILE, items.filter(x=>x.id!==req.params.id)); res.json({ok:true}); });
app.get("/api/reviews", async (req,res)=>{ const onlyApproved=req.query.all!=="1"; const items=await readJson(REVIEWS_FILE, []); res.json(onlyApproved?items.filter(x=>x.approved):items); });
app.post("/api/reviews", async (req,res)=>{ const {author,provider,rating,text}=req.body||{}; if(!author||!provider||!text) return res.status(400).json({ok:false,error:"Author, provider and text are required"}); if(!["Google","Yandex"].includes(provider)) return res.status(400).json({ok:false,error:"Provider must be Google or Yandex"}); const items=await readJson(REVIEWS_FILE, []); const review={id:Date.now().toString(),author:String(author).trim(),provider,rating:Math.max(1,Math.min(5,Number(rating)||5)),text:String(text).trim(),approved:false,createdAt:new Date().toLocaleString("ru-RU")}; items.unshift(review); await writeJson(REVIEWS_FILE, items); res.json({ok:true,review}); });
app.put("/api/reviews/:id/approve", async (req,res)=>{ const items=await readJson(REVIEWS_FILE, []); await writeJson(REVIEWS_FILE, items.map(x=>x.id===req.params.id?{...x,approved:true}:x)); res.json({ok:true}); });
app.delete("/api/reviews/:id", async (req,res)=>{ const items=await readJson(REVIEWS_FILE, []); await writeJson(REVIEWS_FILE, items.filter(x=>x.id!==req.params.id)); res.json({ok:true}); });
app.get("*", (req,res)=>res.sendFile(path.join(__dirname, "public", "index.html")));
await ensureFiles();
app.listen(PORT, ()=>console.log(`FLEPP running on http://localhost:${PORT}`));
