
const TOKEN = ENV_BOT_TOKEN;
const WEBHOOK = '/endpoint';
const SECRET = ENV_BOT_SECRET;
const ADMIN_UID = ENV_ADMIN_UID;
const NOTIFY_INTERVAL = 3600 * 1000;
const ENABLE_INSTANT_CONFIRM = false;
const ADMIN_START_MSG_ZH = '👋 您好，管理员！此机器人正在正常运行。';
const ADMIN_START_MSG_EN = '👋 Hello, Admin! The bot is running normally.';
const ENABLE_NOTIFICATION = true;
const ENABLE_KEYWORD_FILTER = true;
const KEYWORD_STORE_KEY = 'kw-list';
const DEFAULT_BLOCKLIST_URL = 'https://raw.githubusercontent.com/Tsaihyun/hyunbot/refs/heads/main/data/blocklist.txt';
const BLOCKLIST_REFRESH_MS = 15 * 60 * 1000;
const REMOTE_CACHE_KEY = 'blocked-words-cache';
const REMOTE_ETAG_KEY = 'blocked-words-etag';
const REMOTE_LASTFETCH_KEY = 'blocked-words-lastfetch';
const VERIFY_STORE_KEY = (uid) => `verify-${uid}`;
const CHAT_SESSION_KEY = (uid) => `chat-session-${uid}`;
const VERIFY_REQUIRED_ZH = '🛡 为了防止骚扰，请先完成一次验证。\n\n❓ 请问：';
const VERIFY_REQUIRED_EN = '🛡 To prevent spam, please complete a quick verification.\n\n❓ Question: ';
const VERIFY_ANSWER_PROMPT_ZH = '\n\n💬 请直接输入答案（不区分大小写）';
const VERIFY_ANSWER_PROMPT_EN = '\n\n💬 Please type your answer (case insensitive)';
const VERIFIED_SUCCESS_ZH = '✅ 验证通过！现在您可以正常发送消息了。';
const VERIFIED_SUCCESS_EN = '✅ Verified! You can now send messages normally.';
const VERIFY_WRONG_ANSWER_ZH = '❌ 答案错误，请重试！\n\n问题：';
const VERIFY_WRONG_ANSWER_EN = '❌ Wrong answer, please try again!\n\nQuestion: ';
const SESSION_EXPIRED_ZH = '⚠️ 会话已过期或被清除，请使用 /start 重新开始。';
const SESSION_EXPIRED_EN = '⚠️ Session expired or cleared. Please use /start to begin again.';
const ADMIN_REPLY_PROMPT_ZH = '🙅 请点击**转发的用户消息**进行回复，这样我才能知道您是想回复哪位用户。直接发送消息我无法识别目标用户。';
const ADMIN_REPLY_PROMPT_EN = '🙅 Please click **reply to the forwarded user message** so I know which user you want to reply to. I cannot identify the target user if you send a message directly.';
const USER_BLOCKED_PROMPT_ZH = '🚫 您已被管理员屏蔽，无法发送消息。';
const USER_BLOCKED_PROMPT_EN = '🚫 You have been blocked by the administrator and cannot send messages.';
const MESSAGE_FORWARD_FAIL_PROMPT_ZH = '抱歉，您的消息未能成功转发给管理员，请稍后再试或联系管理员。';
const MESSAGE_FORWARD_FAIL_PROMPT_EN = 'Sorry, your message could not be forwarded to the administrator. Please try again later or contact the administrator.';
const MESSAGE_FORWARDED_NOTIF_ZH = "🔔 您好，您的消息已转发给管理员，请耐心等待回复。如长时间未收到答复，可适当再次留言。";
const MESSAGE_FORWARDED_NOTIF_EN = "🔔 Hello, your message has been forwarded to the administrator. Please wait patiently for a reply. If there's no response for a long time, feel free to send another message.";
const MESSAGE_FORWARDED_OK_ZH = "💬 您的消息已成功转发，管理员将尽快回复您。";
const MESSAGE_FORWARDED_OK_EN = "💬 Your message has been successfully forwarded. The admin will reply soon.";
const USER_UNBLOCKED_PROMPT_ZH = '🎉 您已被管理员解除屏蔽，现在可以正常发送消息了。';
const USER_UNBLOCKED_PROMPT_EN = '🎉 You have been unblocked by the administrator. You can now send messages normally.';
const ADMIN_BLOCK_SELF_PROMPT_ZH = '⚠️ 不能屏蔽自己！';
const ADMIN_BLOCK_SELF_PROMPT_EN = '⚠️ You cannot block yourself!';
const ADMIN_CANNOT_IDENTIFY_USER_PROMPT_ZH = '❌ 无法识别要操作的用户。请确保您回复的是用户转发给您的消息。';
const ADMIN_CANNOT_IDENTIFY_USER_PROMPT_EN = '❌ Cannot identify the user to operate on. Please make sure you are replying to a message forwarded to you by the user.';
const ADMIN_CANNOT_FIND_USER_ID_PROMPT_ZH = '⚠️ 无法找到对应的用户ID。可能是旧的转发消息或非转发消息。请检查。';
const ADMIN_CANNOT_FIND_USER_ID_PROMPT_EN = '⚠️ Cannot find the corresponding user ID. This may be an old forwarded message or a non-forwarded message. Please check.';
const USER_KEYWORD_BLOCKED_PROMPT_ZH = '⚠️ 您的消息包含被屏蔽的关键词，未被转发给管理员。';
const USER_KEYWORD_BLOCKED_PROMPT_EN = '⚠️ Your message contains blocked keywords and was not forwarded to the admin.';
const ADMIN_KEYWORD_ADDED_ZH = kw => `✅ 已添加屏蔽关键词：\`${kw}\``;
const ADMIN_KEYWORD_ADDED_EN = kw => `✅ Added blocked keyword: \`${kw}\``;
const ADMIN_KEYWORD_REMOVED_ZH = kw => `✅ 已移除屏蔽关键词：\`${kw}\``;
const ADMIN_KEYWORD_REMOVED_EN = kw => `✅ Removed blocked keyword: \`${kw}\``;
const ADMIN_KEYWORD_LIST_TITLE_ZH = '📃 当前屏蔽关键词列表：';
const ADMIN_KEYWORD_LIST_TITLE_EN = '📃 Current blocked keywords:';
const ADMIN_KEYWORD_EMPTY_ZH = '（空）尚未添加任何关键词。';
const ADMIN_KEYWORD_EMPTY_EN = '(empty) no keywords yet.';
const ADMIN_KEYWORD_USAGE_ZH = '用法：/addkw 关键词 ｜ /rmkw 关键词 ｜ /listkw';
const ADMIN_KEYWORD_USAGE_EN = 'Usage: /addkw <keyword> | /rmkw <keyword> | /listkw';
const ADMIN_BLOCKLIST_RELOADED_ZH = (source, updated, count, url=undefined) => `✅ 词表已刷新（${source}${updated ? ', 已更新' : ''}）。` + (url ? `\n🌐 远程地址：${url}` : '') + `\n📦 当前共 ${count} 条。`;
const ADMIN_BLOCKLIST_RELOADED_EN = (source, updated, count, url=undefined) => `✅ Blocklist refreshed (${source}${updated ? ', updated' : ''}).` + (url ? `\n🌐 Remote URL: ${url}` : '') + `\n📦 Now ${count} items.`;
const ADMIN_BLOCKLIST_REMOTE_TITLE_ZH = (total, shown) => `🌐 远程词表信息：共 ${total} 条，前 ${shown} 条：`;
const ADMIN_BLOCKLIST_REMOTE_TITLE_EN = (total, shown) => `🌐 Remote blocklist: total ${total}, first ${shown}:`;
const ADMIN_BLOCKLIST_ALL_TITLE_ZH = (total, shown) => `🧩 合并列表（本地 + 远程）：共 ${total} 条，前 ${shown} 条：`;
const ADMIN_BLOCKLIST_ALL_TITLE_EN = (total, shown) => `🧩 Merged list (local + remote): total ${total}, first ${shown}:`;
const ADMIN_KV_ERROR_ZH = (ctx, err) => `❌ KV操作失败（${ctx}）：\n\`${String(err?.message || err)}\``;
const ADMIN_KV_ERROR_EN = (ctx, err) => `❌ KV operation failed (${ctx}):\n\`${String(err?.message || err)}\``;
const USER_TEMP_ERROR_ZH = '⚠️ 系统临时故障，请稍后再试。';
const USER_TEMP_ERROR_EN = '⚠️ Temporary system issue, please try again later.';

// 验证问题库
const VERIFY_QUESTIONS = [
  { question_zh: '1 + 1 = ?', question_en: '1 + 1 = ?', answer: '2' },
  { question_zh: '3 + 5 = ?', question_en: '3 + 5 = ?', answer: '8' },
  { question_zh: '10 - 3 = ?', question_en: '10 - 3 = ?', answer: '7' },
  { question_zh: '2 × 4 = ?', question_en: '2 × 4 = ?', answer: '8' },
  { question_zh: '15 ÷ 3 = ?', question_en: '15 ÷ 3 = ?', answer: '5' },
  { question_zh: '一个星期有几天？', question_en: 'How many days in a week?', answer: '7' },
  { question_zh: '一年有几个月？', question_en: 'How many months in a year?', answer: '12' },
  { question_zh: '太阳从哪个方向升起？（东/西/南/北）', question_en: 'Which direction does the sun rise? (east/west/north/south)', answer: 'east|东' },
  { question_zh: '猫的英文是什么？', question_en: 'What is cat in Chinese? (猫)', answer: 'cat|猫' },
  { question_zh: '1小时有多少分钟？', question_en: 'How many minutes in 1 hour?', answer: '60' }
];

function getRandomQuestion() {
  const q = VERIFY_QUESTIONS[Math.floor(Math.random() * VERIFY_QUESTIONS.length)];
  return { ...q, id: Math.random().toString(36).slice(2, 10) };
}

function checkAnswer(userAnswer, correctAnswer) {
  const userLower = String(userAnswer || '').toLowerCase().trim().replace(/\s+/g, '');
  const correctAnswers = String(correctAnswer).toLowerCase().split('|').map(a => a.trim().replace(/\s+/g, ''));
  return correctAnswers.some(ans => userLower.includes(ans) || ans.includes(userLower));
}

function apiUrl(method, params = null) { let query = ''; if (params) { query = '?' + new URLSearchParams(params).toString(); } return `https://api.telegram.org/bot${TOKEN}/${method}${query}`; }
function makeReqBody(body) { return { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }; }
async function requestTelegram(method, body, params = null) { try { const response = await fetch(apiUrl(method, params), makeReqBody(body)); if (!response.ok) { const errorBody = await response.text().catch(()=> ''); console.error(`Telegram API请求失败 (${method}): ${response.status} ${response.statusText}`, errorBody); return { ok: false, description: `API请求失败: ${response.status} ${response.statusText}`, errorDetails: errorBody }; } return response.json(); } catch (error) { console.error(`执行 ${method} 方法时发生Fetch错误:`, error); return { ok: false, description: `网络或未知错误: ${error.message}` }; } }
const sendMessage = (msg) => requestTelegram('sendMessage', msg);
const copyMessage = (msg) => requestTelegram('copyMessage', msg);
const forwardMessage = (msg) => requestTelegram('forwardMessage', msg);
const answerCallbackQuery = (msg) => requestTelegram('answerCallbackQuery', msg);
const setMyCommands = (commands, scope = null) => { const body = { commands }; if (scope && Object.keys(scope).length > 0) body.scope = scope; return requestTelegram('setMyCommands', body); };
const setWebhook = (url, secret_token, opts = {}) => requestTelegram('setWebhook', { url, secret_token, allowed_updates: opts.allowed_updates || ["message", "callback_query"], drop_pending_updates: !!opts.drop_pending_updates });

addEventListener('fetch', event => { const url = new URL(event.request.url); if (url.pathname === WEBHOOK) { event.respondWith(handleWebhook(event)); } else if (url.pathname === '/registerWebhook') { event.respondWith(registerWebhook(event, url)); } else if (url.pathname === '/unRegisterWebhook') { event.respondWith(unRegisterWebhook()); } else if (url.pathname === '/setMenu') { event.respondWith(handleSetMenu()); } else if (url.pathname === '/debugWebhook') { event.respondWith(debugWebhook()); } else { event.respondWith(new Response('请求路径未找到处理程序', { status: 404 })); } });

async function handleWebhook(event) { if (event.request.headers.get('X-Telegram-Bot-Api-Secret-Token') !== SECRET) { return new Response('未经授权', { status: 403 }); } try { const update = await event.request.json(); event.waitUntil(onUpdate(update)); return new Response('Ok'); } catch (error) { console.error('解析Webhook更新数据时出错:', error); return new Response('错误请求，JSON解析失败', { status: 400 }); } }
async function onUpdate(update) { if ('message' in update) { await onMessage(update.message); } else if ('callback_query' in update) { await onCallbackQuery(update.callback_query); } }



function getLocalizedPrompt(langCode, prompts) { if (langCode && langCode.startsWith('zh')) return prompts.zh; return prompts.en; }
async function notifyAdminKvError(lang, context, error) { const text = getLocalizedPrompt(lang, { zh: ADMIN_KV_ERROR_ZH(context, error), en: ADMIN_KV_ERROR_EN(context, error) }); try { await sendMessage({ chat_id: parseInt(ADMIN_UID), text, parse_mode: 'Markdown' }); } catch (e) { console.error('通知管理员KV错误时再次失败：', e); } }
async function kvPutJson(key, value) { await nfd.put(key, JSON.stringify(value)); }

async function loadKeywordsLocal() { const arr = await nfd.get(KEYWORD_STORE_KEY, { type: "json" }); return Array.isArray(arr) ? arr : []; }
async function saveKeywords(list) { const cleaned = Array.from(new Set(list.map(s => String(s || '').trim()).filter(Boolean))); await kvPutJson(KEYWORD_STORE_KEY, cleaned); return cleaned; }
async function addKeyword(kw) { const list = await loadKeywordsLocal(); list.push(kw); return saveKeywords(list); }
async function removeKeyword(kw) { const list = await loadKeywordsLocal(); const lowered = String(kw).toLowerCase(); const filtered = list.filter(x => String(x).toLowerCase() !== lowered); return saveKeywords(filtered); }
function extractSearchableText(message) { const segs = []; if (typeof message.text === 'string') segs.push(message.text); if (typeof message.caption === 'string') segs.push(message.caption); return segs.join('\n').trim(); }
function hitBlockedKeyword(text, keywords) { if (!text) return null; const low = text.toLowerCase(); for (const kw of keywords) { const k = String(kw || '').trim().toLowerCase(); if (!k) continue; if (low.includes(k)) return kw; } return null; }

function parseBlocklist(text) { const trimmed = (text || '').trim(); if (!trimmed) return []; if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) { try { const data = JSON.parse(trimmed); if (Array.isArray(data)) return data.map(s => String(s).trim()).filter(Boolean); if (data && Array.isArray(data.words)) return data.words.map(s => String(s).trim()).filter(Boolean); } catch {} } return trimmed.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#')); }
async function getRemoteUrl() { return DEFAULT_BLOCKLIST_URL; }
async function getRemoteCachedWords() { try { const txt = await nfd.get(REMOTE_CACHE_KEY, { type: 'text' }); if (!txt) return []; const obj = JSON.parse(txt); if (obj && Array.isArray(obj.words)) return obj.words; } catch {} return []; }
async function saveRemoteCache(words) { const payload = { words, updatedAt: Date.now() }; await nfd.put(REMOTE_CACHE_KEY, JSON.stringify(payload)); await nfd.put(REMOTE_LASTFETCH_KEY, String(payload.updatedAt)); }

async function fetchRemoteBlocklist({ force = false } = {}) { const url = await getRemoteUrl(); const lastFetchTxt = await nfd.get(REMOTE_LASTFETCH_KEY, { type: 'text' }); const lastFetch = lastFetchTxt ? parseInt(lastFetchTxt, 10) : 0; if (!force && lastFetch && (Date.now() - lastFetch) < BLOCKLIST_REFRESH_MS) { const words = await getRemoteCachedWords(); return { words, updated: false, source: 'cache-fresh', url }; } const etag = await nfd.get(REMOTE_ETAG_KEY, { type: 'text' }); const headers = {}; if (etag) headers['If-None-Match'] = etag; let res; try { res = await fetch(url, { headers }); } catch (e) { const words = await getRemoteCachedWords(); return { words, updated: false, source: 'cache-fallback', url }; } if (res.status === 304) { await nfd.put(REMOTE_LASTFETCH_KEY, String(Date.now())); const words = await getRemoteCachedWords(); return { words, updated: false, source: 'not-modified', url }; } if (!res.ok) { const words = await getRemoteCachedWords(); return { words, updated: false, source: 'cache-on-error', url }; } const text = await res.text(); const words = parseBlocklist(text); await saveRemoteCache(words); const newEtag = res.headers.get('ETag'); if (newEtag) await nfd.put(REMOTE_ETAG_KEY, newEtag); return { words, updated: true, source: 'remote', url }; }
async function getBlockedWordsRemote({ force = false } = {}) { const { words } = await fetchRemoteBlocklist({ force }); return words; }
async function getAllBlockedWords() { const local = await loadKeywordsLocal(); const remote = await getBlockedWordsRemote(); const set = new Set(local.map(x => String(x).toLowerCase())); for (const w of remote) set.add(String(w).toLowerCase()); return Array.from(set); }

// 会话管理：检测用户是否删除对话后重新开始
async function initChatSession(userId) {
  const sessionId = Math.random().toString(36).slice(2, 15);
  await kvPutJson(CHAT_SESSION_KEY(userId), {
    sessionId,
    startedAt: Date.now()
  });
  return sessionId;
}

async function validateChatSession(userId) {
  const session = await nfd.get(CHAT_SESSION_KEY(userId), { type: "json" }).catch(() => null);
  return session;
}

async function clearUserVerification(userId) {
  await nfd.delete(VERIFY_STORE_KEY(userId)).catch(() => {});
}

async function onMessage(message) {
  const chatId = message.chat.id;
  const isAdmin = (message.from?.id?.toString() === ADMIN_UID);
  const lang = message.from?.language_code || 'en';
  
  // 处理 /start 命令
  if (message.text === '/start') {
    if (isAdmin) {
      // 管理员使用 /start 显示简单欢迎
      const adminMsg = getLocalizedPrompt(lang, { zh: ADMIN_START_MSG_ZH, en: ADMIN_START_MSG_EN });
      await sendMessage({ chat_id: chatId, text: adminMsg });
    } else {
      // 普通用户创建新会话并直接开始验证
      await initChatSession(chatId);
      await clearUserVerification(chatId);
      // 直接触发验证流程
      await ensureVerified(chatId, lang);
    }
    return;
  }
  
  if (isAdmin) {
    if (/^\/addkw(?:\s+(.+))?$/i.test(message.text || '')) { const m = (message.text || '').match(/^\/addkw(?:\s+(.+))?$/i); const kw = (m && m[1] || '').trim(); const usage = getLocalizedPrompt(lang, { zh: ADMIN_KEYWORD_USAGE_ZH, en: ADMIN_KEYWORD_USAGE_EN }); if (!kw) return sendMessage({ chat_id: ADMIN_UID, text: usage }); try { await addKeyword(kw); const ok = getLocalizedPrompt(lang, { zh: ADMIN_KEYWORD_ADDED_ZH(kw), en: ADMIN_KEYWORD_ADDED_EN(kw) }); await sendMessage({ chat_id: ADMIN_UID, text: ok, parse_mode: 'Markdown' }); } catch (err) { await notifyAdminKvError(lang, 'addKeyword', err); } return; }
    if (/^\/rmkw(?:\s+(.+))?$/i.test(message.text || '')) { const m = (message.text || '').match(/^\/rmkw(?:\s+(.+))?$/i); const kw = (m && m[1] || '').trim(); const usage = getLocalizedPrompt(lang, { zh: ADMIN_KEYWORD_USAGE_ZH, en: ADMIN_KEYWORD_USAGE_EN }); if (!kw) return sendMessage({ chat_id: ADMIN_UID, text: usage }); try { await removeKeyword(kw); const ok = getLocalizedPrompt(lang, { zh: ADMIN_KEYWORD_REMOVED_ZH(kw), en: ADMIN_KEYWORD_REMOVED_EN(kw) }); await sendMessage({ chat_id: ADMIN_UID, text: ok, parse_mode: 'Markdown' }); } catch (err) { await notifyAdminKvError(lang, 'removeKeyword', err); } return; }
    if (/^\/listkw$/i.test(message.text || '')) { try { const list = await loadKeywordsLocal(); const title = getLocalizedPrompt(lang, { zh: ADMIN_KEYWORD_LIST_TITLE_ZH, en: ADMIN_KEYWORD_LIST_TITLE_EN }); const empty = getLocalizedPrompt(lang, { zh: ADMIN_KEYWORD_EMPTY_ZH, en: ADMIN_KEYWORD_EMPTY_EN }); const body = list.length ? list.map((x, i) => `${i + 1}. \`${x}\``).join('\n') : empty; await sendMessage({ chat_id: ADMIN_UID, text: `${title}\n${body}`, parse_mode: 'Markdown' }); } catch (err) { await notifyAdminKvError(lang, 'listKeywordsLocal', err); } return; }
    if ((message.text || '') === '/reloadblock') { try { const { words, updated, source, url } = await fetchRemoteBlocklist({ force: true }); const t = getLocalizedPrompt(lang, { zh: ADMIN_BLOCKLIST_RELOADED_ZH(source, updated, words.length, url), en: ADMIN_BLOCKLIST_RELOADED_EN(source, updated, words.length, url) }); await sendMessage({ chat_id: ADMIN_UID, text: t }); } catch (err) { await notifyAdminKvError(lang, 'reloadblock', err); } return; }
    if ((message.text || '') === '/listkw_remote') { try { const words = await getBlockedWordsRemote(); const sample = words.slice(0, 100); const t = getLocalizedPrompt(lang, { zh: ADMIN_BLOCKLIST_REMOTE_TITLE_ZH(words.length, sample.length), en: ADMIN_BLOCKLIST_REMOTE_TITLE_EN(words.length, sample.length) }) + '\n' + sample.join(', '); await sendMessage({ chat_id: ADMIN_UID, text: t }); } catch (err) { await notifyAdminKvError(lang, 'listkw_remote', err); } return; }
    if ((message.text || '') === '/listkw_all') { try { const local = await loadKeywordsLocal(); const remote = await getBlockedWordsRemote(); const merged = Array.from(new Set([...local.map(String), ...remote.map(String)])); const sample = merged.slice(0, 100); const t = getLocalizedPrompt(lang, { zh: ADMIN_BLOCKLIST_ALL_TITLE_ZH(merged.length, sample.length), en: ADMIN_BLOCKLIST_ALL_TITLE_EN(merged.length, sample.length) }) + '\n' + sample.join(', '); await sendMessage({ chat_id: ADMIN_UID, text: t }); } catch (err) { await notifyAdminKvError(lang, 'listkw_all', err); } return; }
    if ((message.text || '') === '/version') { await sendMessage({ chat_id: ADMIN_UID, text: `ZH:\n${MESSAGE_FORWARDED_NOTIF_ZH}\n\nEN:\n${MESSAGE_FORWARDED_NOTIF_EN}` }); return; }
    if ((message.text || '') === '/notifytest') { const lang2 = message.from?.language_code || 'en'; const notificationText = getLocalizedPrompt(lang2, { zh: MESSAGE_FORWARDED_NOTIF_ZH, en: MESSAGE_FORWARDED_NOTIF_EN }); await sendMessage({ chat_id: ADMIN_UID, text: notificationText }); return; }
    if (/^\/resetnotify(?:\s+(\d+))?$/i.test(message.text || '')) { const m = (message.text || '').match(/^\/resetnotify(?:\s+(\d+))?$/i); const targetId = (m && m[1]) ? m[1] : String(message.reply_to_message?.forward_from?.id || ''); if (!targetId) { await sendMessage({ chat_id: ADMIN_UID, text: '用法: /resetnotify <userId> 或对转发消息回复 /resetnotify' }); return; } try { await nfd.delete(`notify:until:${targetId}`); await nfd.delete(`notify:last:${targetId}`); await nfd.delete(`lastmsg-${targetId}`); } catch (_) {} await sendMessage({ chat_id: ADMIN_UID, text: `已清理节流键：${targetId}` }); return; }
    if (message.reply_to_message) {
      if (/^\/block$/.test(message.text)) return handleBlock(message, lang);
      if (/^\/unblock$/.test(message.text)) return handleUnblock(message, lang);
      if (/^\/checkblock$/.test(message.text)) return checkBlock(message, lang);
      try {
        const guestId = await nfd.get('msg-map-' + message.reply_to_message.message_id, { type: "text" });
        if (guestId) {
          await copyMessage({ chat_id: guestId, from_chat_id: message.chat.id, message_id: message.message_id });
        } else {
          const prompt = getLocalizedPrompt(lang, { zh: ADMIN_CANNOT_FIND_USER_ID_PROMPT_ZH, en: ADMIN_CANNOT_FIND_USER_ID_PROMPT_EN });
          await sendMessage({ chat_id: ADMIN_UID, text: prompt });
        }
      } catch (err) {
        await notifyAdminKvError(lang, 'admin_reply_lookup_msg_map', err);
      }
    } else {
      const prompt = getLocalizedPrompt(lang, { zh: ADMIN_REPLY_PROMPT_ZH, en: ADMIN_REPLY_PROMPT_EN });
      await sendMessage({ chat_id: ADMIN_UID, text: prompt });
    }
    return;
  }
  
  await handleGuestMessage(message, lang);
}

function escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }
function formatUserForAdmin(u) { const id = u?.id; const uname = u?.username; const name = [u?.first_name, u?.last_name].filter(Boolean).join(' ') || 'user'; 


if (uname) return `@${uname}`; if (id) return `<a href="tg://user?id=${id}">${escapeHtml(name)}</a>`; return escapeHtml(name); }

async function ensureVerified(userId, lang) {
  // 检查会话是否有效
  const session = await validateChatSession(userId);
  if (!session) {
    // 会话不存在，说明用户可能删除了对话
    const expiredText = getLocalizedPrompt(lang, { zh: SESSION_EXPIRED_ZH, en: SESSION_EXPIRED_EN });
    await sendMessage({ chat_id: userId, text: expiredText });
    return false;
  }
  
  const state = await nfd.get(VERIFY_STORE_KEY(userId), { type: "json" }).catch(() => null);
  if (state && state.verified === true && state.verifiedAt && (Date.now() - state.verifiedAt) <= 3 * 60 * 60 * 1000) return true;
  
  // 生成验证问题
  const questionData = getRandomQuestion();
  const payload = {
    sessionId: session.sessionId,
    questionId: questionData.id,
    question_zh: questionData.question_zh,
    question_en: questionData.question_en,
    answer: questionData.answer,
    exp: Date.now() + 10 * 60 * 1000,
    verified: false,
    verifiedAt: null,
    waitingAnswer: true
  };
  await kvPutJson(VERIFY_STORE_KEY(userId), payload);
  
  const question = lang && lang.startsWith('zh') ? questionData.question_zh : questionData.question_en;
  const promptText = getLocalizedPrompt(lang, { zh: VERIFY_REQUIRED_ZH, en: VERIFY_REQUIRED_EN });
  const answerPrompt = getLocalizedPrompt(lang, { zh: VERIFY_ANSWER_PROMPT_ZH, en: VERIFY_ANSWER_PROMPT_EN });
  const text = `${promptText}${question}${answerPrompt}`;
  
  await sendMessage({ chat_id: userId, text });
  return false;
}

async function onCallbackQuery(cbq) {
  const fromId = cbq.from?.id;
  const lang = cbq.from?.language_code || 'en';
  await answerCallbackQuery({ callback_query_id: cbq.id });
}

async function handleGuestMessage(message, lang) {
  const chatId = message.chat.id;
  const blocked = await nfd.get(`isblocked-${chatId}`, { type: "json" }).catch(() => false);
  if (blocked) {
    const prompt = getLocalizedPrompt(lang, { zh: USER_BLOCKED_PROMPT_ZH, en: USER_BLOCKED_PROMPT_EN });
    return sendMessage({ chat_id: chatId, text: prompt });
  }
  
  // 检查会话有效性
  const session = await validateChatSession(chatId);
  if (!session) {
    // 会话不存在，提示用户重新开始
    const expiredText = getLocalizedPrompt(lang, { zh: SESSION_EXPIRED_ZH, en: SESSION_EXPIRED_EN });
    await sendMessage({ chat_id: chatId, text: expiredText });
    return;
  }
  
  // 检查验证状态
  const verifyState = await nfd.get(VERIFY_STORE_KEY(chatId), { type: "json" }).catch(() => null);
  const now = Date.now();
  const maxValidMs = 3 * 60 * 60 * 1000;
  let needVerify = false;
  
  // 验证会话ID是否匹配
  if (verifyState && verifyState.sessionId !== session.sessionId) {
    // 会话ID不匹配，说明用户重新开始了对话
    await clearUserVerification(chatId);
    needVerify = true;
  } else if (!verifyState || verifyState.verified !== true) {
    needVerify = true;
  } else if (!verifyState.verifiedAt || (now - verifyState.verifiedAt) > maxValidMs) {
    needVerify = true;
  }
  
  // 如果正在等待验证答案
  if (verifyState && verifyState.waitingAnswer === true && !verifyState.verified && verifyState.sessionId === session.sessionId) {
    const userAnswer = (message.text || '').trim();
    const correctAnswer = verifyState.answer;
    
    if (checkAnswer(userAnswer, correctAnswer)) {
      // 答案正确
      await kvPutJson(VERIFY_STORE_KEY(chatId), {
        sessionId: session.sessionId,
        verified: true,
        verifiedAt: Date.now(),
        waitingAnswer: false
      });
      const ok = getLocalizedPrompt(lang, { zh: VERIFIED_SUCCESS_ZH, en: VERIFIED_SUCCESS_EN });
      await sendMessage({ chat_id: chatId, text: ok });
      return;
    } else {
      // 答案错误
      const question = lang && lang.startsWith('zh') ? verifyState.question_zh : verifyState.question_en;
      const wrongPrompt = getLocalizedPrompt(lang, { zh: VERIFY_WRONG_ANSWER_ZH, en: VERIFY_WRONG_ANSWER_EN });
      const answerPrompt = getLocalizedPrompt(lang, { zh: VERIFY_ANSWER_PROMPT_ZH, en: VERIFY_ANSWER_PROMPT_EN });
      await sendMessage({ chat_id: chatId, text: `${wrongPrompt}${question}${answerPrompt}` });
      return;
    }
  }
  
  if (needVerify) {
    const ok = await ensureVerified(chatId, lang);
    if (!ok) return;
  }
  
  if (ENABLE_KEYWORD_FILTER) {
    try {
      const text = extractSearchableText(message);
      const allWords = await getAllBlockedWords();
      const hit = hitBlockedKeyword(text, allWords);
      if (hit) {
        const userMsg = getLocalizedPrompt(lang, { zh: USER_KEYWORD_BLOCKED_PROMPT_ZH, en: USER_KEYWORD_BLOCKED_PROMPT_EN });
        await sendMessage({ chat_id: chatId, text: userMsg });
        const actor = formatUserForAdmin(message.from || {});
        const adminAlert = getLocalizedPrompt(lang, { zh: `⚠️ ${actor} 的消息命中被屏蔽关键词：<code>${escapeHtml(hit)}</code>，已拦截。`, en: `⚠️ Message from ${actor} contained blocked keyword: <code>${escapeHtml(hit)}</code> and was intercepted.` });
        await sendMessage({ chat_id: parseInt(ADMIN_UID), text: adminAlert, parse_mode: 'HTML' });
        return;
      }
    } catch (err) {
      const adminDegrade = getLocalizedPrompt(lang, { zh: `❗关键词过滤出现故障，已降级直转。\n<code>${escapeHtml(String(err?.message || err))}</code>`, en: `❗Keyword filter failed; falling back to forward.\n<code>${escapeHtml(String(err?.message || err))}</code>` });
      await sendMessage({ chat_id: parseInt(ADMIN_UID), text: adminDegrade, parse_mode: 'HTML' });
    }
  }
  
  const forwardResult = await forwardMessage({ chat_id: parseInt(ADMIN_UID), from_chat_id: chatId, message_id: message.message_id });
  if (forwardResult.ok) {
    await nfd.put('msg-map-' + forwardResult.result.message_id, chatId.toString()).catch(err => notifyAdminKvError(lang, 'write_msg_map', err));
    if (ENABLE_INSTANT_CONFIRM) {
      const okText = getLocalizedPrompt(lang, { zh: MESSAGE_FORWARDED_OK_ZH, en: MESSAGE_FORWARDED_OK_EN });
      await sendMessage({ chat_id: chatId, text: okText });
    }
    await handleNotify(message, lang);
  } else {
    const prompt = getLocalizedPrompt(lang, { zh: MESSAGE_FORWARD_FAIL_PROMPT_ZH, en: MESSAGE_FORWARD_FAIL_PROMPT_EN });
    await sendMessage({ chat_id: chatId, text: prompt });
  }
}

async function handleNotify(message, lang) { const chatId = message.chat.id; if (!ENABLE_NOTIFICATION) return; const now = Date.now(); const interval = NOTIFY_INTERVAL; const keyUntil = `notify:until:${chatId}`; const legacyJsonKey = `notify:last:${chatId}`; const legacyTextKey = 'lastmsg-' + chatId; let until = 0; try { const obj = await nfd.get(keyUntil, { type: "json" }); if (obj && typeof obj.until === "number" && isFinite(obj.until)) { until = obj.until; } } catch (_) {} if (!until) { try { const j = await nfd.get(legacyJsonKey, { type: "json" }); if (j && typeof j.t === "number" && isFinite(j.t)) { until = j.t + interval; } } catch (_) {} if (!until) { try { const s = await nfd.get(legacyTextKey, { type: "text" }); const t = s ? parseInt(s, 10) : 0; if (t && isFinite(t)) until = t + interval; } catch (_) {} } } if (until && now < until) return; try { await nfd.put(keyUntil, JSON.stringify({ until: now + interval })); } catch (_) {} const notificationText = getLocalizedPrompt(lang, { zh: MESSAGE_FORWARDED_NOTIF_ZH, en: MESSAGE_FORWARDED_NOTIF_EN }); await sendMessage({ chat_id: chatId, text: notificationText }); }

async function handleBlock(message, lang) { try { const guestId = await nfd.get('msg-map-' + message.reply_to_message.message_id, { type: "text" }); if (!guestId) { const prompt = getLocalizedPrompt(lang, { zh: ADMIN_CANNOT_IDENTIFY_USER_PROMPT_ZH, en: ADMIN_CANNOT_IDENTIFY_USER_PROMPT_EN }); return sendMessage({ chat_id: ADMIN_UID, text: prompt }); } if (guestId === ADMIN_UID) { const prompt = getLocalizedPrompt(lang, { zh: ADMIN_BLOCK_SELF_PROMPT_ZH, en: ADMIN_BLOCK_SELF_PROMPT_EN }); return sendMessage({ chat_id: ADMIN_UID, text: prompt }); } await kvPutJson('isblocked-' + guestId, true).catch(err => notifyAdminKvError(lang, 'block_user', err)); await sendMessage({ chat_id: parseInt(ADMIN_UID), text: getLocalizedPrompt(lang, { zh: `✅ 用户 \`${guestId}\` 已被成功屏蔽。`, en: `✅ User \`${guestId}\` has been successfully blocked.` }), parse_mode: 'Markdown' }); await sendMessage({ chat_id: parseInt(guestId), text: `${USER_BLOCKED_PROMPT_ZH}\n${USER_BLOCKED_PROMPT_EN}` }); } catch (err) { await notifyAdminKvError(lang, 'handleBlock', err); } }
async function handleUnblock(message, lang) { try { const guestId = await nfd.get('msg-map-' + message.reply_to_message.message_id, { type: "text" }); if (!guestId) { const prompt = getLocalizedPrompt(lang, { zh: ADMIN_CANNOT_IDENTIFY_USER_PROMPT_ZH, en: ADMIN_CANNOT_IDENTIFY_USER_PROMPT_EN }); return sendMessage({ chat_id: ADMIN_UID, text: prompt }); } await kvPutJson('isblocked-' + guestId, false).catch(err => notifyAdminKvError(lang, 'unblock_user', err)); await sendMessage({ chat_id: parseInt(ADMIN_UID), text: getLocalizedPrompt(lang, { zh: `✅ 用户 \`${guestId}\` 已被成功解除屏蔽。`, en: `✅ User \`${guestId}\` has been successfully unblocked.` }), parse_mode: 'Markdown' }); await sendMessage({ chat_id: parseInt(guestId), text: `${USER_UNBLOCKED_PROMPT_ZH}\n${USER_UNBLOCKED_PROMPT_EN}` }); } catch (err) { await notifyAdminKvError(lang, 'handleUnblock', err); } }
async function checkBlock(message, lang) { try { const guestId = await nfd.get('msg-map-' + message.reply_to_message.message_id, { type: "text" }); if (!guestId) { const prompt = getLocalizedPrompt(lang, { zh: ADMIN_CANNOT_IDENTIFY_USER_PROMPT_ZH, en: ADMIN_CANNOT_IDENTIFY_USER_PROMPT_EN }); return sendMessage({ chat_id: ADMIN_UID, text: prompt }); } let blocked = false; blocked = await nfd.get('isblocked-' + guestId, { type: "json" }).catch(err => { notifyAdminKvError(lang, 'read_block_state_in_checkBlock', err); return false; }); await sendMessage({ chat_id: parseInt(ADMIN_UID), text: getLocalizedPrompt(lang, { zh: `用户信息：\`${guestId}\` ${blocked ? '已被屏蔽 🚫' : '未被屏蔽 ✅'}`, en: `User Info: \`${guestId}\` ${blocked ? 'is blocked 🚫' : 'is not blocked ✅'}` }), parse_mode: 'Markdown' }); } catch (err) { await notifyAdminKvError(lang, 'checkBlock', err); } }

async function registerWebhook(event, url) { const webhookUrl = `${url.protocol}//${url.hostname}${WEBHOOK}`; const res = await setWebhook(webhookUrl, SECRET, { allowed_updates: ["message", "callback_query"], drop_pending_updates: true }); return new Response(JSON.stringify(res, null, 2), { headers: { 'Content-Type': 'application/json' } }); }
async function unRegisterWebhook() { const res = await setWebhook('', undefined, { drop_pending_updates: false }); return new Response(JSON.stringify(res, null, 2), { headers: { 'Content-Type': 'application/json' } }); }
async function setBotCommands() { const adminCommands = [ { command: "block", description: "屏蔽用户 (需回复用户消息)" }, { command: "unblock", description: "解除屏蔽 (需回复用户消息)" }, { command: "checkblock", description: "查询屏蔽状态 (需回复用户消息)" }, { command: "addkw", description: "添加屏蔽关键词" }, { command: "rmkw", description: "移除屏蔽关键词" }, { command: "listkw", description: "查看本地关键词" }, { command: "reloadblock", description: "刷新远程拦截词" }, { command: "listkw_all", description: "查看合并关键词预览" } ]; const userCommands = [ { command: "start", description: "获取关于此机器人的信息" } ]; const userRes = await setMyCommands(userCommands); if (!userRes.ok) console.error('设置用户命令失败:', userRes); const adminScope = { type: "chat", chat_id: parseInt(ADMIN_UID) }; const adminRes = await setMyCommands(adminCommands, adminScope); if (!adminRes.ok) console.error('设置管理员命令失败:', adminRes); return { userCommandsSet: userRes.ok, 

adminCommandsSet: adminRes.ok, adminResponse: adminRes }; }
async function handleSetMenu() { const res = await setBotCommands(); return new Response(JSON.stringify(res, null, 2), { headers: { 'Content-Type': 'application/json' } }); }
async function debugWebhook() { const r = await fetch(`https://api.telegram.org/bot${TOKEN}/getWebhookInfo`); const j = await r.json(); return new Response(JSON.stringify(j, null, 2), { headers: { 'Content-Type': 'application/json' } }); }
